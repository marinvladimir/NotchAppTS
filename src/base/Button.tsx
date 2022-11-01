import styled from "styled-components";

const ButtonWrapper = styled.div``;
const ButtonStyle = styled.button`
  border-color: #e8dcf5;
  background-color: #f2f7f2;
  width: 8rem;
  height: 2rem;
  color: #443850;
`;

const Button = ({ text, action, type, disabled }: IBtnProps) => {
  return (
    <ButtonWrapper>
      <ButtonStyle type={type} onClick={action} disabled={disabled}>
        {text}
      </ButtonStyle>
    </ButtonWrapper>
  );
};

export default Button;
