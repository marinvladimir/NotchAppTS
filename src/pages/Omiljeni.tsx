import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { Button, Button2, TableCell, TableRow, TableView } from "../styles/UI";
import Header from "../base/Header";
import { StyledFavIcon, tableHeading } from "../data/general";
import Loader from "../base/Loader";
import { db } from "../data/fbData";

const Omiljeni = () => {
  const [favorite, setFavorite] = React.useState<IContact[]>([]);
  const [loading, setLoading] = React.useState(false);

  const fetchFavs = async () => {
    setLoading(true);
    const q = query(collection(db, "adresar"), where("favorite", "==", true));
    let favArray: any = [];
    let counter = 0;
    const querySnapshot: any = await getDocs(q);
    querySnapshot.forEach((doc: any, count: number) => {
      favArray.push(doc.data());
      favArray[counter].id = doc.id;
      counter++;
      setLoading(false);
    });
    setFavorite(favArray);
  };

  const updateFavorite = async (item: any) => {
    const updtDoc = doc(db, "adresar", item.id);
    const change = { favorite: false };
    await updateDoc(updtDoc, change)
      .then(() => {
        let unfilterInArray = favorite.filter((fav) => fav.id !== item.id);
        setFavorite(unfilterInArray);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFavs();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <TableView>
        {tableHeading?.map((item: any, key: any) => (
          <TableCell key={key} heading={true}>
            <h3>{item}</h3>
          </TableCell>
        ))}
        {favorite?.map((item: IContact, key: any) => (
          <TableRow key={key}>
            <Button>
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
      {loading && <Loader />}
    </div>
  );
};

export default Omiljeni;
