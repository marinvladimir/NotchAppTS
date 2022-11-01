// main imports
import React, { Dispatch, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// redux and firebase
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  addContact,
  removeContact,
  editContact,
  fetchContacts,
  changeAuth,
} from "./store/actionCreators";

// pages
import AuthRoute from "./components/AuthRoute";
import Omiljeni from "./pages/Omiljeni";
import Detalji from "./pages/Detalji";
import Adresar from "./pages/Adresar";
import Login from "./pages/Login";
import Kontakt from "./pages/Kontakt";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Router = (): JSX.Element => {
  const dispatch: Dispatch<any> = useDispatch();
  const contacts: readonly IContact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );

  const saveContact = React.useCallback(
    (contact: IContact) => dispatch(addContact(contact)),
    [dispatch]
  );

  const fetchAll = React.useCallback(
    (contact: IContact) => dispatch(fetchContacts(contact)),
    [dispatch]
  );

  const deleteContact = React.useCallback(
    (contact: IContact) => dispatch(removeContact(contact)),
    [dispatch]
  );

  const changeData = React.useCallback(
    (contact: IContact) => dispatch(editContact(contact)),
    [dispatch]
  );

  const editAuth = React.useCallback(
    (auth: boolean) => dispatch(changeAuth(auth)),
    [dispatch]
  );

  const auth = getAuth();

  useEffect(() => {
    AuthCheck();
    //eslint-disable-next-line
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      editAuth(true);
    } else {
      editAuth(false);
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<AuthRoute />}>
        <Route
          path="/adresar"
          element={
            <Adresar
              editFavs={changeData}
              contacts={contacts}
              fetchAll={fetchAll}
            />
          }
        />
        <Route path="/adresar/omiljeni" element={<Omiljeni />} />
        <Route
          path="/kontakt/detalji/*"
          element={<Detalji contact={contacts} removeContact={deleteContact} />}
        />
        <Route
          path="/kontakt/*"
          element={
            <Kontakt saveContact={saveContact} editContact={changeData} />
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
