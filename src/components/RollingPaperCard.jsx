import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  cursor: pointer;
  width: 275px;
  height: 260px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  background-color: ${({ $colorName }) => colorMatching[$colorName] || '#ee3131'};
`;



const colorMatching = {
  beige: '#FFE2AD',
  purple: '#ECD9FF',
  blue: '#B1E4FF',
  green: '#D0F5C3',
};

function RollingPaperCard({ list }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${list.id}`);
  };

  return (
    <StyledCardWrapper onClick={handleCardClick} $colorName={list.backgroundColor} >
      <h2>{list.name}</h2>
      {/* <span>{list.messageCount}</span> */}
      {/* <ul>
        {list.recentMessages.map((message) => (
          <li key={message.id}>
            <img src={message.profileImageURL}></img>
          </li>
        ))}
      </ul> */}
      {/* <ul>
        {list.topReactions.map((reaction) => (
          <li key={reaction.id}>
            {reaction.emoji}
            {reaction.count}
          </li>
        ))}
      </ul> */}
    </StyledCardWrapper>
  );
}

export default RollingPaperCard;
