import styled from "styled-components";
import { ReactComponent as FavIcon } from "../assets/star.svg";

export const tableHeading = ["Name", "Last Name", "Date", "Email", "Favorite"];

export const paginationDropDownData = [
  { value: 5, label: "5 per page" },
  { value: 10, label: "10 per page" },
  { value: 15, label: "15 per page" },
  { value: 30, label: "30 per page" },
  { value: 45, label: "45 per page" },
  { value: 60, label: "60 per page" },
];

export const StyledFavIcon = styled(FavIcon)<IIconProps>`
  width: 1rem;
  height: 1rem;

  path {
    fill: ${({ active }) => (active ? "#4D6A6D" : "white")};
  }
`;
