import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import "../../views/Marketing/Marketing.scss";
import gatewayImg from "../../assets/marketing/gateway.webp";

const MarketingHero = (props) => {
  return (
    <div className="top-intro-container">
      <div className="intro-left">
        <h1>Bitcoin Cash for everyone.</h1>
        <p>
          A simple, transparent and private platform to buy and sell Bitcoin
          Cash.
        </p>
        <div className="action-control">
          <Link to="/offers/trade">
            <Button sise="large" type="primary">
              Browse listings
            </Button>
          </Link>
          <Link to="/signup">
            <Button sise="large">Create account</Button>
          </Link>
        </div>
      </div>
      <div className="intro-right">
        <img src={gatewayImg} alt="gateway" />
      </div>
    </div>
  );
};

export default MarketingHero;
