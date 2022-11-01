import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DropDownMenu = styled.div`
  transform: translateY(0.25rem);
  overflow: auto;
  border: 0.1px solid #ccc;
  border-radius: 0.5rem;
  background: ghostwhite;
  max-height: 7rem;
  max-width: 12rem;
  display: none;
`;

const DropDownItem = styled.div`
  padding: 0.2rem;
  cursor: pointer;
  transition-duration: 0.4s;
  color: rgb(121 189 177) !important;

  :hover {
    cursor: pointer;
    background-color: #4d6a6d;
    color: white;
  }
`;

const DropDownWrapper = styled.div`
  :hover {
    div {
      display: block;
      animation-name: open;
      animation-duration: 1s;

      @keyframes open {
        from {
          max-height: 0rem;
          opacity: 0;
        }
        to {
          max-height: 7rem;
          opacity: 1;
        }
      }
    }
  }
`;

const Button = styled.button`
  transition-duration: 0.8s;
  height: 3rem;
  color: rgb(8, 80, 67);
  width: 6rem;
  font-size: 1rem;
  border: 2px solid white;

  :hover {
    cursor: pointer;
    background-color: #4d6a6d;
    color: white;
  }
`;

type Options = {
  value: any;
  label: string;
};

const DropDown = ({
  placeholder,
  options,
  setRecordsPerPage,
}: IDropDownProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {}, [show]);
  return (
    <DropDownWrapper>
      <Button
        data-testid="button"
        id="dropdownBtn"
        onClick={() => {
          setShow(!show);
        }}
      >
        {placeholder}
      </Button>
      {show && (
        <DropDownMenu data-testid="dropdown" id="dropdownMenu">
          {options?.map((option) => (
            <DropDownItem
              data-testid="dropItem"
              onClick={() => {
                setRecordsPerPage(option.value);
                setShow(false);
              }}
              key={option.value}
            >
              {option.label}
            </DropDownItem>
          ))}
        </DropDownMenu>
      )}
    </DropDownWrapper>
  );
};

export default DropDown;
