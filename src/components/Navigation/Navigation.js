import React from "react";
import { NavLink } from "react-router-dom";
import { LockFilled } from "@ant-design/icons";
import { Button } from "antd";

import "./Navigation.scss";
import fullLogo from "../../assets/fullLogo.png";

const Navigation = props => {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={fullLogo} alt="logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/login">
          <LockFilled />
          Log in
        </NavLink>
        <NavLink to="/signup">
          <Button size="large" type="primary">
            Create account
          </Button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
