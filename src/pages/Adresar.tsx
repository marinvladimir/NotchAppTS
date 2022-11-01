import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../base/Pagination";
import DropDown from "../base/DropDown";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { ReactComponent as FavIcon } from "../assets/star.svg";
import {
  Button,
  Button2,
  DropDownWrapper,
  TableCell,
  TableRow,
  TableView,
} from "../styles/UI";
import Header from "../base/Header";
import { tableHeading } from "../data/general";
import Loader from "../base/Loader";
import { db } from "../data/fbData";

const StyledFavIcon = styled(FavIcon)<IIconProps>`
  width: 1rem;
  height: 1rem;

  path {
    fill: ${({ active }) => (active ? "#4D6A6D" : "white")};
  }
`;

const dropDownData = [
  { value: "name_ascending", label: "Name Ascending" },
  { value: "name_descending", label: "Name Descending" },
  { value: "lastName_ascending", label: "Last Name Asc" },
  { value: "lastName_descending", label: "Last Name Desc" },
  { value: "email_asc", label: "Email Ascending" },
  { value: "email_desc", label: "Email Descending" },
];

const Adresar = ({
  contacts,
  editFavs,
  fetchAll,
}: AdresarProps): JSX.Element => {
  const navigate = useNavigate();
  const [sortChoice, setSortChoice] = React.useState(null);
  const [tableElms, setTableElms] = React.useState(contacts);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    fetchAll(tableElms);
    //eslint-disable-next-line
  }, [loading]);

  const usersCollectionRef = collection(db, "adresar");

  const getUsers = async () => {
    setLoading(true);
    await getDocs(usersCollectionRef).then((res) => {
      setTableElms(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
  };

  useEffect(() => {
    try {
      getUsers();
    } catch (err) {
      console.log(err);
    }
    //eslint-disable-next-line
  }, []);

  const updateFavorite = async (item: any) => {
    const updtDoc = doc(db, "adresar", item.id);
    const change = { favorite: !item.favorite };
    await updateDoc(updtDoc, change)
      .then(() => {
        let objChange = { ...item, favorite: !item.favorite };
        editFavs(objChange);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (sortChoice) {
      let sortedArray = [...sortArray(sortChoice)];
      setTableElms(sortedArray);
    }
    //eslint-disable-next-line
  }, [sortChoice]);

  const sortArray = (decision: string) => {
    let initialArray = contacts;

    switch (decision) {
      case "name_ascending": {
        initialArray.sort((a: { name: string }, b: { name: string }) =>
          a.name.toLowerCase() > b.name.toLowerCase()
            ? 1
            : b.name.toLowerCase() > a.name.toLowerCase()
            ? -1
            : 0
        );
        return initialArray;
      }
      case "name_descending": {
        initialArray.sort((a: { name: string }, b: { name: string }) =>
          a.name.toLowerCase() < b.name.toLowerCase()
            ? 1
            : b.name.toLowerCase() < a.name.toLowerCase()
            ? -1
            : 0
        );
        return initialArray;
      }
      case "lastName_ascending": {
        initialArray.sort((a: { lastName: string }, b: { lastName: string }) =>
          a.lastName.toLowerCase() > b.lastName.toLowerCase()
            ? 1
            : b.lastName.toLowerCase() > a.lastName.toLowerCase()
            ? -1
            : 0
        );
        return initialArray;
      }
      case "lastName_descending": {
        initialArray.sort((a: { lastName: string }, b: { lastName: string }) =>
          a.lastName.toLowerCase() < b.lastName.toLowerCase()
            ? 1
            : b.lastName.toLowerCase() < a.lastName.toLowerCase()
            ? -1
            : 0
        );
        return initialArray;
      }
      case "email_asc": {
        initialArray.sort((a: { email: string }, b: { email: string }) =>
          a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1
        );
        return initialArray;
      }
      case "email_desc": {
        initialArray.sort((a: { email: string }, b: { email: string }) =>
          a.email.toLowerCase() < b.email.toLowerCase() ? 1 : -1
        );
        return initialArray;
      }
      default: {
        initialArray = contacts;
        return initialArray;
      }
    }
  };

  return (
    <div>
      <Header />
      <DropDownWrapper>
        <DropDown
          options={dropDownData}
          placeholder={"Sort"}
          setRecordsPerPage={setSortChoice}
        />
      </DropDownWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TableView>
            {tableHeading?.map((item: any, key: any) => (
              <TableCell key={key} heading={true}>
                <h3>{item}</h3>
              </TableCell>
            ))}
            {tableElms?.map((item: any, key: any) => (
              <TableRow key={key}>
                <Button
                  onClick={() => {
                    navigate("/kontakt/detalji/" + item.id + "");
                  }}
                >
                  <TableCell heading={false}>{item.name}</TableCell>
                  <TableCell heading={false}>{item.lastName}</TableCell>
                  <TableCell heading={false}>{item.date}</TableCell>
                  <TableCell heading={false}>
                    {item.email ? item.email : ""}
                  </TableCell>
                </Button>
                <Button2 onClick={() => updateFavorite(item)}>
                  <TableCell heading={false}>
                    {item.favorite ? (
                      <StyledFavIcon active={1} />
                    ) : (
                      <StyledFavIcon active={0} />
                    )}
                  </TableCell>
                </Button2>
              </TableRow>
            ))}
          </TableView>
          <Pagination data={contacts} setCurrentRecords={setTableElms} />
        </>
      )}
    </div>
  );
};

export default Adresar;
