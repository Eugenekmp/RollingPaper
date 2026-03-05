//클릭 시 롤링 페이퍼 생성 페이지('/post')로 이동하는 버튼 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateButton = () => {
  const navigate = useNavigate();
  //버튼 클릭 시 페이지 이동을 처리하는 핸들러 함수
  const handleCreatePageNavigate = () => {
    navigate('/post');
  };
  
  return (
    <button onClick={() => navigate('/post')}>
      롤링 페이퍼 만들기
    </button>
  );
};

export default CreateButton;