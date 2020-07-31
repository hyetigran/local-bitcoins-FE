import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MyActiveTrades = ({ myOffers }) => {
  return (
    <div className="active-container">
      <h2>Active Trades</h2>
      {myOffers ? (
        <div>Active Trades</div>
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
