import Detalji from "../Detalji";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import firebase from "firebase/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const initialState = { comments: ["New Comment", "Other New Comment"] };
const mockStore = configureStore();

describe("detalji component tests", () => {
  test("renders the detalji page", () => {
    // render(
    //   <Provider store={mockStore(initialState)}>
    //     <BrowserRouter>
    //       <Detalji
    //         contact={{
    //           id: "0",
    //           name: "",
    //           lastName: "",
    //           date: "",
    //           email: "",
    //           favorite: false,
    //           contact: "",
    //         }}
    //         removeContact={() => {}}
    //       />
    //     </BrowserRouter>
    //   </Provider>
    // );
  });
});
