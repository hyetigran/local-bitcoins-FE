import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";

import OfferList from "./OfferList/OfferList";
import "./OfferListings.scss";

const initialState = {
  showBoth: true,
  showBuyOnly: false,
  showSellOnly: false,
  buyData: [],
  sellData: [],
};

const OfferListings = (props) => {
  //on load, fetch buy and sell listings, truncat offers at 15 for each
  // on select Buy or Sell:
  // show heading, show posts (infiinite scroll), hide-button

  //set up websockets to push new posts
  const [data, setData] = useState(initialState);
  //setData will be called when building out the search component.
  //will need to move state up or refactor to store.
  useEffect(() => {
    const socket = openSocket("http://localhost:8000");
    socket.on("offers", (data) => {
      if (data.action === "create") {
        addOffer(data.offer);
      }
    });
  });
  const addOffer = (offer) => {
    //check buy/sell in order to add to correct state slice
    const prop = offer.buyBCH ? "buyData" : "sellData";

    this.setData({ ...data, [prop]: [offer, ...data[prop]] });
  };

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
