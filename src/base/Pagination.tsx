import { useState, useEffect } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import { paginationDropDownData } from "../data/general";

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;

const PageSwitcher = styled.div`
  margin-top: 1rem;
`;

const Switcher = styled.button`
  width: 3rem;
  height: 2rem;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid rgb(8, 80, 67);
  transition-duration: 0.8s;
  color: rgb(8, 80, 67);

  :hover {
    cursor: pointer;
    background-color: #4d6a6d;
    color: white;
  }
`;

const Pagination = ({ data, setCurrentRecords }: IPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(15);
  const [nPages, setNPages] = useState(0);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    setCurrentRecords(data?.slice(indexOfFirstRecord, indexOfLastRecord));
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
    setCurrentRecords(data?.slice(indexOfFirstRecord, indexOfLastRecord));
  };

  useEffect(() => {
    setCurrentRecords(data?.slice(indexOfFirstRecord, indexOfLastRecord));
    setNPages(Math.ceil(data?.length / recordsPerPage));
  }, [
    data,
    currentPage,
    indexOfFirstRecord,
    indexOfLastRecord,
    recordsPerPage,
    setCurrentRecords,
  ]);

  return (
    <PaginationWrapper>
      <PageSwitcher>
        <Switcher onClick={() => prevPage()}>{"<"}</Switcher>

        <Switcher onClick={() => nextPage()}>{">"}</Switcher>
      </PageSwitcher>
      <DropDown
        options={paginationDropDownData}
        placeholder={recordsPerPage + " per page"}
        setRecordsPerPage={setRecordsPerPage}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
