import ProfileImg from "./ProfileImg";
import ProfileImgOptions from "./ProfileImgOptions";
import styled from "styled-components";

function ProfileImgContainer({ label, value, changeImg }) {
  return (
    <StyledWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledOptions>
        <ProfileImg value={value} />
        <ProfileImgOptions changeImg={changeImg} />
      </StyledOptions>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;

const StyledLabel = styled.label`
  color: #181818;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 175% */
  letter-spacing: -1%;
  display: block;
  margin-bottom: 12px;
`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ProfileImgContainer;
