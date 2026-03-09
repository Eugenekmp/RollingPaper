import styled from "styled-components";

const TotalCountP = styled.p`
  font-size: var(--font-18);
  color: var(--gray-900);
`;
const TotalCount = styled.span`
  font-weight: var(--bold);
`;

function MessageCountText({ card }) {
  return (
    <TotalCountP>
      <TotalCount>{card.messageCount}</TotalCount>명이 작성했어요!
    </TotalCountP>
  );
}

export default MessageCountText;
