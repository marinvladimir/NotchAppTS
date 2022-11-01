import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const AuthRoute: React.FunctionComponent = () => {
  const authed: boolean = useSelector(
    (state: ContactState) => state.authed,
    shallowEqual
  );

  return authed ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoute;
