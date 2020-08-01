import React from "react";
import { Link } from "react-router-dom";

import "./TradeCard.scss";

const TradeCard = ({ order }) => {
  return (
    <div className="trade-card-ctn">
      <div>
        <p>Date opened</p>
        <p></p>
      </div>
      <div>
        <p>Type</p>
        <p></p>
      </div>
      <div>
        <p>BCH</p>
        <p></p>
      </div>
      <div>
        <p>Amount</p>
        <p></p>
      </div>
      <div>
        <p>Trade partner</p>
        <p></p>
      </div>
      <div>
        <p>State</p>
        <p></p>
      </div>
      <div>
        <Link to="/">View</Link>
      </div>
    </div>
  );
};

export default TradeCard;
