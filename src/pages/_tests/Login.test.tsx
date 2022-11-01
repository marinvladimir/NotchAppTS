import Login from "../Login";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import firebase from "firebase/app";
import { BrowserRouter } from "react-router-dom";

// jest.mock("firebase/app", () => {
//   return {
//     auth: jest.fn(),
//   };
// });

// describe('61408137', () => {
//   it('should return user', () => {
//     (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({
//       currentUser: { email: 'example@gmail.com', uid: 1, emailVerified: true },
//     });
//     const actual = Login.getLoggedInUser();
//     expect(actual).toEqual({
//       email: 'example@gmail.com',
//       userId: 1,
//       isEmailVerified: true,
//     });
//   });

describe("login component tests", () => {
  test("renders the login page", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test("has two input elements and button", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const inputs = document.querySelectorAll("input");
    expect(inputs[0].name).toBe("username");
    expect(inputs[1].name).toBe("password");

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  test("should not redirect on click on submit with empty fields", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const button = getByText("Login");
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
