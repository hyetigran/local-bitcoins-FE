import React from "react";
import { Button } from "antd";

import OfferCard from "./OfferCard/OfferCard";
import "./OfferListings.scss";

const OfferListings = props => {
  return (
    <div className="listings-container">
      <div className="list-heading">
        <h1>Buy BCH from these sellers</h1>
      </div>
      <div className="offer-list">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
      <div className="list-more">
        <Button type="primary">Browse all sellers</Button>
      </div>
    </div>
  );
};

export default OfferListings;

// Render two different text
//Buy BCH from these sellers
//Sell BCH to these buyers

// button: 1. re-renders the view
// 2. sets 'I want to...' Buy or Sell
//3. create endless scroll
//4. hide Buy or Sell component
