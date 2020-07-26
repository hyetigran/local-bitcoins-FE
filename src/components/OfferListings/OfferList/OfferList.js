import React from "react";
import { Button } from "antd";

import OfferCard from "../OfferCard/OfferCard";
import "./OfferList.scss";

const OfferList = (props) => {
  return (
    <div className="listings-container">
      <div className="list-heading">
        <h1>
          {props.isBuy
            ? "Buy BCH from these sellers"
            : "Sell BCH to these buyers"}
        </h1>
      </div>
      <div className="offer-list">
        {props.data.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
      <div className="list-more">
        <Button type="primary">
          Browse all {props.isBuy ? "sellers" : "buyers"}
        </Button>
      </div>
    </div>
  );
};

export default OfferList;
