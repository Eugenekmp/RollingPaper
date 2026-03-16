import styled from "styled-components";
import NotFoundIcon from "../assets/NotFoundIcon.png"
import { useNavigate } from "react-router-dom";

function NotFoundPage(){

  const navigate = useNavigate();

  const handleClickMainButton = () => {
    navigate('/');
  }
  return(
    <StyledBackground>
      <StyledNotFoundPageWrapper>
        <StyledNotFoundIcon src={NotFoundIcon} alt="404 Not Found"/>
        <StyledNotFoundtext>페이지를 찾을 수 없습니다.</StyledNotFoundtext>
        <StyledSubText>
          존재하지 않는 주소를 입력하셨거나,<br />
          요청하신 페이지의 주소가 변경, 삭제되었습니다.
        </StyledSubText>
        <StyledMainButton onClick={handleClickMainButton}>
          메인화면으로 돌아가기
        </StyledMainButton>
      </StyledNotFoundPageWrapper>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background-color: #f3e8fee5;
  min-height: 100vh;
`

const StyledNotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 100vh;
  margin: 0 auto;
  text-align: center;

  @media ${({ theme }) => theme.tablet} {
    width: 720px;
    padding-top: 35px;  
  }

    @media ${({ theme }) => theme.mobile} {
      width: 360px;
    }
`

const StyledNotFoundIcon = styled.img`
  width: 80%;
  margin: 0 auto;
  padding-top: 80px;
  
  @media ${({ theme }) => theme.tablet} {
    width: 50%;
  }

  @media ${({ theme }) => theme.mobile} {
    margin-top: 24px;
    padding: 0;
  }
`

const StyledNotFoundtext = styled.h1`
  color: #4d1684;
  font-size: 28px;
  padding: 30px;
`

const StyledSubText = styled.span`
  color: #777777;
  font-size: 15px;
  text-align: center;
  line-height: 1.6;
  margin: 0 0 40px 0;

  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`

const StyledMainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 280px; 
  height: 56px;
  padding: 14px 24px;
  margin: 30px auto;
  box-sizing: border-box;
  
  background-color: var(--purple-600);
  border-radius: 12px;

  font: var(--font-18-bold);
  color: var(--white);
  letter-spacing: -0.01em; 
  text-decoration: none; 
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--purple-700);
  }

  &:active {
    background-color: var(--purple-800);
  }

  @media ${({ theme }) => theme.tablet} {
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${({ theme }) => theme.mobile} {
    margin-top: 24px;
    padding: 0;
  }
`

export default NotFoundPage;