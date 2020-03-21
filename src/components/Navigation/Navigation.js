import React from "react";
import { NavLink } from "react-router-dom";
import { LockFilled, NotificationOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./Navigation.scss";
import fullLogo from "../../assets/fullLogo.png";

const Navigation = props => {
  console.log(props.isAuth);
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={fullLogo} alt="logo" />
      </div>
      <div className="nav-links">
        {!props.isAuth ? (
          <>
            <NavLink to="/login">
              <LockFilled />
              Log in
            </NavLink>
            <NavLink to="/signup">
              <Button size="large" type="primary">
                Create account
              </Button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/offers/trade">
              <div>
                <NotificationOutlined />
                Explore
              </div>
            </NavLink>
            <NavLink to="/my-trades">Trades</NavLink>
            <NavLink to="/my-offers">Offers</NavLink>
            <NavLink to="/wallet">Wallet</NavLink>
            <NavLink to="/referral-program">Referrals</NavLink>
            <NavLink to="/offers/trade">Account</NavLink>
            <NavLink to="/new-offer">
              <Button>+ New Offer</Button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
