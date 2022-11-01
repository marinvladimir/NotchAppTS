import { useEffect, useState } from "react";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../base/Loader";
import { db } from "../data/fbData";
import Header from "../base/Header";
import {
  ButtonWrapper,
  DetailBorder,
  DetailBox,
  DetailWrapper,
} from "../styles/UI";
import Button from "../base/Button";

const Detalji = ({ contact, removeContact }: DetaljiProps): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(contact);
  const [success, setSuccess] = useState(false);

  const fetchDataById = async (id: any) => {
    const docRef = doc(db, "adresar", id);
    try {
      setLoading(true);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCurrent(docSnap.data());
        setLoading(false);
      } else {
        console.log("Document does not exist");
        setCurrent([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataById(params["*"]);
    //eslint-disable-next-line
  }, []);

  const removeById = async (item: any) => {
    await deleteDoc(doc(db, "adresar", item))
      .then(() => {
        setTimeout(() => navigate("/adresar"), 2000);
        removeContact(item);
        setCurrent(null);
        setSuccess(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <DetailWrapper>
          <DetailBorder>
            <DetailBox>
              <h3>CONTACT DETAILS:</h3>
              <div>Name: {current && current.name}</div>
              <div>Last Name: {current && current.lastName}</div>
              <div>Date of Birth: {current && current.date}</div>
              <div>Contact: {current && current.contact}</div>
              <div>Favorite: {current?.favorite ? "YES" : "NO"}</div>
              {current?.phone && <div>Phone: {current.phone}</div>}
              {current?.mobilePhone && (
                <div>Mobile Phone: {current.mobilePhone}</div>
              )}
              {current?.email && <div>Email: {current.email}</div>}
              {current?.pager && <div>Pager: {current.pager}</div>}
            </DetailBox>
          </DetailBorder>
          <ButtonWrapper>
            <Button
              disabled={!current}
              text="DELETE "
              action={() => removeById(params["*"])}
            />
            <Button
              disabled={!current}
              text="EDIT "
              action={() => navigate("/kontakt/" + params["*"])}
            />
          </ButtonWrapper>
          {success && (
            <div>
              THE CONTACT WAS SUCCESSFULLY DELETED. Redirecting to adresar in a
              few seconds...
            </div>
          )}
        </DetailWrapper>
      )}
    </div>
  );
};

export default Detalji;
