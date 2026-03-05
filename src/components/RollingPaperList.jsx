import axios from "axios";
import { useEffect, useState } from "react";
import RollingPaperCard from "./RollingPaperCard";

function RollingPaperList() {
  const [lists, setLists] = useState([]);

  //롤링페이퍼 목록 불러오기
  const loadLists = async () => {
    try {
      const response = await axios.get(
        "https://rolling-api.vercel.app/23-5/recipients/",
      );
      setLists(response.data.results);
    } catch (error) {
      console.error("데이터 로딩 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    loadLists();
  }, []);

  return (
    <div>
      <h1>인기 롤링 페이퍼</h1>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <RollingPaperCard list={list} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RollingPaperList;
