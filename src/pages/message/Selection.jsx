import { useState } from "react";
import StyledLabel from "./StyledLabel";
import styled from "styled-components";
import SelectionUp from "../../assets/SelectionUp.svg";
import SelectionDown from "../../assets/SelectionDown.svg";

function Selection({ children, type, value, onChange }) {
  const [clicked, setClicked] = useState(false);

  let options = [];

  if (type === "relation") {
    options = [
      { label: "지인", value: "지인" },
      { label: "친구", value: "친구" },
      { label: "동료", value: "동료" },
      { label: "가족", value: "가족" },
    ];
  } else if (type === "font") {
    options = [
      { label: "Noto Sans KR", value: "Noto Sans", fontFamily: "Noto Sans KR" },
      { label: "Pretendard", value: "Pretendard", fontFamily: "Pretendard" },
      { label: "나눔명조", value: "나눔명조", fontFamily: "Nanum Myeongjo" },
      {
        label: "나눔손글씨 손편지체",
        value: "나눔손글씨 손편지체",
        fontFamily: "Nanum Pen Script",
      },
    ];
  }

  const selectedFont = options.find((opt) => opt.value === value)?.fontFamily;

  return (
    <div>
      <StyledLabel>{children}</StyledLabel>
      <StyledSelectWrapper onBlur={() => setClicked(false)} tabIndex={0}>
        <StyledSelectBox
          $clicked={clicked}
          onClick={() => setClicked((prev) => !prev)}
          $fontFamily={selectedFont}
        >
          <span>{value}</span>
          <ArrowIcon src={clicked ? SelectionUp : SelectionDown} />
        </StyledSelectBox>

        {clicked && (
          <StyledOptionList>
            {options.map((option) => (
              <StyledOptionItem
                key={option.value}
                $selected={option.value === value}
                $fontValue={type === "font" ? option.fontFamily : undefined}
                onMouseDown={() => {
                  onChange(option.value);
                  setClicked(false);
                }}
              >
                {option.label}
              </StyledOptionItem>
            ))}
          </StyledOptionList>
        )}
      </StyledSelectWrapper>
    </div>
  );
}
const StyledSelectWrapper = styled.div`
  position: relative;
  width: 320px;
  outline: none;
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

const StyledSelectBox = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: ${({ $clicked }) =>
    $clicked ? "2px solid var(--gray-500)" : "1px solid var(--gray-300)"};
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 26px;
  font: var(--font-16-regular);
  font-family: ${({ $fontFamily }) => $fontFamily || "inherit"};
  color: var(--gray-900);
  cursor: pointer;
`;

const ArrowIcon = styled.img`
  pointer-events: none;
`;

const StyledOptionList = styled.ul`
  position: absolute;
  top: 54px;
  width: 100%;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
  color: var(--gray-900);
`;
const StyledOptionItem = styled.li`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray-900);
  cursor: pointer;
  font-family: ${({ $fontValue }) => $fontValue || "inherit"};
  &:hover {
    background-color: var(--gray-100);
  }
`;

export default Selection;
