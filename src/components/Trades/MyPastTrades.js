import React from "react";
import { Divider } from "antd";
import TradeCard from "../../components/Trades/TradeCard/TradeCard";
import "./MyPastTrades.scss";

const MyPastTrades = ({ myOrders, userId }) => {
  return (
    <div className="past-trades-ctn">
      <Divider />
      <h3>Past Trades</h3>
      {myOrders.length > 1 ? (
        myOrders.map((order) => (
          <TradeCard key={order.id} userId={userId} order={order} />
        ))
      ) : (
        <div>
          <p>You don't have any completed or cancelled trades at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default MyPastTrades;
