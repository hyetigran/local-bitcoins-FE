import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  LockFilled,
  NotificationOutlined,
  TeamOutlined,
  SwapOutlined,
  UserOutlined,
  WalletOutlined,
  BellFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useSelector } from "react-redux";

import "./Navigation.scss";
import fullLogo from "../../assets/fullLogo.png";

const Navigation = (props) => {
  // need state for active trades and active offers
  const activeOffers = useSelector((state) => {
    if (state.myOffers.myOffers === undefined) {
      return 0;
    }
    return state.myOffers.myOffers.reduce((acc, cur) => {
      cur.pause === false ? (acc += 1) : (acc += 0);
      return acc;
    }, 0);
  });

  // need state for notifications
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={fullLogo} alt="logo" />
      </div>

      {!props.isAuth ? (
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
      ) : (
        <div className="nav-auth">
          <Link to="/offers/trade">
            <div className="link-box">
              <SearchOutlined />
              <p className="main-text">Explore</p>
            </div>
          </Link>
          <NavLink to="/my-trades">
            <div className="link-box">
              <SwapOutlined />
              <div className="link-text">
                <p className="main-text">Trades</p>
                <p>0 active</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/my-offers">
            <div className="link-box">
              <NotificationOutlined />
              <div className="link-text">
                <p className="main-text">Offers</p>
                <p>{activeOffers} active</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/wallet">
            <div className="link-box">
              <WalletOutlined />
              <p className="main-text">Wallet</p>
            </div>
          </NavLink>
          <NavLink to="/referral-program">
            <div className="link-box">
              <TeamOutlined />
              <p className="main-text">Referrals</p>
            </div>
          </NavLink>
          <NavLink to="/my-account">
            <div className="link-box">
              <UserOutlined />
              <p className="main-text">Account</p>
            </div>
          </NavLink>
          <div className="notification">
            <BellFilled />
          </div>
          <Link to="/new-offer">
            <Button>+ New Offer</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
