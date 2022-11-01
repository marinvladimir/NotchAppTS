import styled from "styled-components";

// utils

export const Spacer = styled.div`
  height: 1rem;
`;

// form's styled components

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const FieldsWrapper = styled.div`
  border: 1px solid #888888;
  padding: 4rem 2rem;
  background-color: #ebebeb;
  border-radius: 4rem 4rem;
`;

export const FormBorder = styled.div`
  border: 1px solid #8e5572;
  padding: 1rem 1rem;
  background-color: #888888;
  border-radius: 2rem 2rem;
`;

export const ErrorBox = styled.div`
  color: #e83151;
`;

export const SuccessBox = styled.div`
  color: #22b13a;
`;

// table's styled components

export const TableView = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  color: #c9c5ba;
`;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = styled.button`
  width: 80%;
  display: flex;
  padding: 0;
  border: none;
  cursor: pointer;
  background: #a0a083;

  :hover {
    background: #78a1bb;
  }
`;

export const Button2 = styled.button`
  width: 20%;
  display: flex;
  padding: 0;
  border: none;
  cursor: pointer;
  background: #a0a083;

  :hover {
    background: #78a1bb;
  }

  div {
    padding: 0.4rem 0.7rem;
  }
`;

export const TableCell = styled.div<IOpenProps>`
  box-sizing: border-box;
  flex-grow: 1;
  width: 20%;
  height: 40px;
  white-space: nowrap;
  padding: 0.8em 1.2em;
  overflow: hidden;
  border: solid 1px #085043;
  background: ${({ heading }) => (heading ? "#4D6A6D" : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee7d0;
  font-size: 12px;

  @media (max-width: 512px) {
    font-size: 10px;
  }
`;

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
`;

// header styles

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderBar = styled.div`
  position: relative;
  width: 90%;
  height: 50px;
  border: 10px solid transparent;
  border-top: 10px solid #4d6a6d;
  border-left: 10px solid #4d6a6d;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25) inset;

  @media (max-width: 512px) {
    font-size: 10px;
  }

  ::after {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30%;
    height: 49px;
    border: 10px solid transparent;
    border-bottom: 10px solid #4d6a6d;
    border-right: 10px solid #4d6a6d;
    transition: 0.3s linear all;
  }
`;

export const SliderMenu = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;

  li {
    display: inline-flex;
    padding: 14px;
    margin-left: 2px;
    font-family: "Quicksand", sans-serif;
    color: #4d6a6d;
    cursor: pointer;
    transition: 0.3s linear all;
    user-select: none;
  }
  li:hover {
    color: #c9c5ba;
    box-shadow: 0 50px 5px rgba(0, 0, 0, 0.15) inset;
  }
`;

// pages: Detalji

export const DetailWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #4d6a6d;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const DetailBox = styled.div`
  background-color: #f2f7f2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  margin: 0.4rem 3rem;
`;

export const DetailBorder = styled.div`
  background: #4d6a6d;
`;
