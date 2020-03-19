import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./Marketing.scss";
import gatewayImg from "../../assets/marketing/gateway.webp";

const Marketing = props => {
  //check auth state - if logged in do not display 'create account' button
  return (
    <div className="top-intro">
      <div className="top-intro-container">
        <div className="intro-left">
          <h1>The private Bitcoin Cash exchange</h1>
          <p>Buy and sell Bitcoin Cash (BCH) with anyone -anonymously</p>
          <Link to="/offers/trade">
            <Button sise="large" type="primary">
              Browse listings
            </Button>
          </Link>
          <Link to="/signup">
            <Button sise="large">Create account</Button>
          </Link>
        </div>
        <div className="intro-right">
          <img src={gatewayImg} alt="gateway" />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
