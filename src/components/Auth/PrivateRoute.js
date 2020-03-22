import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ render: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
