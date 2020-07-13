import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../../auth/Auth";

const PrivateRoute = ({ render: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
