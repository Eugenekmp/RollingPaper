import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getRecipients } from "../api/index";
import RollingPaperCard from "../components/RollingPaperCard";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const keywordFromUrl = searchParams.get("keyword") || "";
  const [inputValue, setInputValue] = useState(keywordFromUrl);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInputValue(keywordFromUrl);
  }, [keywordFromUrl]);

  // 전체 데이터 로드
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getRecipients({ limit: 12 });
        setAllData(response.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      navigate(`/search?keyword=${encodeURIComponent(inputValue)}`);
    }
  };

  const filteredResults = allData.filter((item) =>
    item.name.toLowerCase().includes(keywordFromUrl.toLowerCase()),
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름을 입력하고 엔터를 누르세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
      <h2>
        "{keywordFromUrl}"에 대한 검색 결과: {filteredResults.length}개
      </h2>
      {isLoading ? (
        <div>로딩 중...</div>
      ) : (
        <ul>
          {filteredResults.map((list) => (
            <li key={list.id}>
              <RollingPaperCard list={list} />
            </li>
          ))}
        </ul>
      )}

      {!isLoading && filteredResults.length === 0 && (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchPage;
