import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./OrderInfo.scss";

const OrderInfo = (props) => {
  console.log("order", props.order);
  const {
    bchAmount,
    cancelled,
    complete,
    fiatAmount,
    priceBCH,
    userMaker,
    userTaker,
  } = props?.order;

  return (
    <div>
      <div className="instruction-ctn">Next Steps</div>
      <div className="action-ctn">
        <div className="amount-info">
          <p>{true ? "Buying" : "Selling"}</p>
          <p>{`${true} BCH`}</p>
          <p>for</p>
          <p>{true ? "Buying" : "Selling"}</p>
          <p>{true ? "Buying" : "Selling"}</p>
        </div>
        <div className="action-buttons">
          <Button>COMPLETE TRADE</Button>
          <Button>CANCEL TRADE</Button>
          <Button disabled>REPORT USER</Button>
        </div>
      </div>
      <div className="details-ctn">
        <div className="counterparty-info">username</div>
        <div className="terms-info">Offer</div>
      </div>
    </div>
  );
};

export default OrderInfo;
