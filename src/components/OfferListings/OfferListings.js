import React from "react";
import "./OfferListings.scss";

const OfferListings = props => {
  return (
    <div className="listings-container">
      <div>{}</div>
      <div>list container</div>
      <div>button here to see all offers</div>
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
