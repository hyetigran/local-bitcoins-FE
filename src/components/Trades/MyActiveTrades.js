import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import TradeCard from "../../components/Trades/TradeCard/TradeCard";

import "./MyActiveTrades.scss";

const MyActiveTrades = ({ myOrders, userId }) => {
  return (
    <div className="active-container">
      <h3>Active Trades</h3>
      {myOrders.length > 0 ? (
        <div>
          {myOrders.map((order) => (
            <TradeCard key={order.id} order={order} userId={userId} />
          ))}
        </div>
      ) : (
        <div className="none-active">
          <p>You don't have any open trades at the moment.</p>
          <div>
            <Link to="/offers/trade">FIND AN OFFER</Link>
            <p>or</p>
            <Link to="/new-offer">CREATE A NEW OFFER</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyActiveTrades;
