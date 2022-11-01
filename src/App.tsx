import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { config } from "./config/config";
import { initializeApp } from "firebase/app";

const App = (): JSX.Element => {
  initializeApp(config.firebaseConfig);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
