import styled from "styled-components";

function MessageCountText({ card, isImage }) {
  return (
    <StyledCountText $isImage={isImage}>
      <StyledCount>{card.messageCount}</StyledCount>명이 작성했어요!
    </StyledCountText>
  );
}

export default MessageCountText;

/* ==================== styled ==================== */

const StyledCountText = styled.p`
  font: var(--font-16-regular);
  color: ${({ $isImage }) => ($isImage ? "var(--white)" : "var(--gray-700)")};
`;

const StyledCount = styled.span`
  font: var(--font-16-bold);
`;
