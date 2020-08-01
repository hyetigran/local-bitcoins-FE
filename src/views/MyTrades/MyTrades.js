import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMyOrders } from "../../store/actions/ordersActions";
import MyActiveTrades from "../../components/Trades/MyActiveTrades";
import MyPastTrades from "../../components/Trades/MyPastTrades";

import "./MyTrades.scss";

const MyTrades = (props) => {
  const userId = localStorage.getItem("userId");
  const { myActiveOrders, myPastOrders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders());
  }, []);

  return (
    <div className="my-trades-ctn">
      <MyActiveTrades myOrders={myActiveOrders} userId={userId} />
      <MyPastTrades myOrders={myPastOrders} userId={userId} />
    </div>
  );
};

export default MyTrades;
