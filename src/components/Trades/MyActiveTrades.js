import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import TradeCard from "../../components/Trades/TradeCard/TradeCard";

const MyActiveTrades = ({ myOrders }) => {
  console.log(myOrders);
  return (
    <div className="active-container">
      <h2>Active Trades</h2>
      {myOrders ? (
        <div>
          {myOrders.map((order) => (
            <TradeCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div>
          <p>You don't have any open trades at the moment.</p>
          <div>
            <Link to="/offers/trade">FIND AN OFFER</Link>
            or
            <Link to="/new-offer">CREATE A NEW OFFER</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyActiveTrades;
