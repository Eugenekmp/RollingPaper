import styled from "styled-components";

function CreateMessageButton({ className }) {
  return <button className={className}>생성하기</button>;
}

const Button = styled(CreateMessageButton)`
  width: 720px;
  height: 56px;
  color: white;
  background-color: #9935ff;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #7615d6;
  }
`;

export default Button;
