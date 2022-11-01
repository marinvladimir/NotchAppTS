import Omiljeni from "../Omiljeni";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import firebase from "firebase/app";
import { BrowserRouter } from "react-router-dom";

describe("omiljeni component tests", () => {
  test("renders the omiljeni page", () => {
    render(
      <BrowserRouter>
        <Omiljeni />
      </BrowserRouter>
    );
  });
});
