import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMyOrders } from "../../store/actions/ordersActions";
import MyActiveTrades from "../../components/Trades/MyActiveTrades";
import MyPastTrades from "../../components/Trades/MyPastTrades";

const MyTrades = (props) => {
  const { myActiveOrders, myPastOrders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders());
  });

  return (
    <div>
      <MyActiveTrades />
      <MyPastTrades />
    </div>
  );
};

export default MyTrades;
