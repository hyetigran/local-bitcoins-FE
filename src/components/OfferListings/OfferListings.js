import React, { useState } from "react";

import OfferList from "./OfferList/OfferList";
import "./OfferListings.scss";

const initialState = {
  showBoth: true,
  showBuyOnly: false,
  showSellOnly: false,
  buyData: { isBuy: true, tradePosts: [] },
  sellData: { isBuy: false, tradePosts: [] }
};

const OfferListings = props => {
  //on load, fetch buy and sell listings, truncat offers at 15 for each
  // on select Buy or Sell:
  // show heading, show posts (infiinite scroll), hide-button

  //set up websockets to push new posts
  const [data, setData] = useState(initialState);

  return (
    <div className="main-offer-container">
      {data.showBoth ? (
        <>
          <OfferList data={data.buyData} />
          <OfferList data={data.sellData} />
        </>
      ) : data.showBuyOnly ? (
        <OfferList data={data.buyData} />
      ) : (
        <OfferList data={data.sellData} />
      )}
    </div>
  );
};

export default OfferListings;
