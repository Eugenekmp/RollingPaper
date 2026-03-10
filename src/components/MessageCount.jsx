import styled from "styled-components";
import MessageCountText from './MessageCountText';

const ProfileList = styled.ul`
  display: flex;
`;
const ProfileListLi = styled.li`
  width: 28px;
  height: 28px;
  border: 1.4px solid var(--white);
  border-radius: 50%;
  font-size: var(--font-12);
  font-weight: var(--medium);
  color: #484848;
  overflow: hidden;

  &:nth-child(2),
  &:nth-child(3) {
    margin-left: -14px;
  }

  &:last-child {
    margin-left: -14px;
    border: 1px solid #e3e3e3;
    background-color: var(--white);
    text-align: center;
    line-height: 28px;
  }
`;
const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

function MessageCount({ card }) {
  const maxCount = 3;
  const visibleCount = card.recentMessages.slice(0, maxCount);
  const remainingCount = card.messageCount - maxCount;

  return (
    <>
      <ProfileList>
        {visibleCount.map((card) => (
          <ProfileListLi key={card.id}>
            <ProfileImg src={card.profileImageURL} />
          </ProfileListLi>
        ))}
        {remainingCount > 0 && <ProfileListLi>+{remainingCount}</ProfileListLi>}
      </ProfileList>
      <MessageCountText card={card}/>
    </>
  );
}

export default MessageCount;
