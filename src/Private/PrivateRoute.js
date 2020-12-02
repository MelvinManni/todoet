import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(AuthContext);

  return <Route {...rest} render={(props) => (currentUser !== null ? <Component {...props} /> : <Redirect to={`/login`} />)} />;
}

export default PrivateRoute;
