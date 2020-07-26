import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import openSocket from "socket.io-client";

import OfferList from "./OfferList/OfferList";
import { fetchAllOffers, addOffer } from "../../store/actions/allOffersActions";

import "./OfferListings.scss";

const initialUIState = {
  showBoth: true,
  showBuyOnly: false,
  showSellOnly: false,
};

const OfferListings = (props) => {
  //on load, fetch buy and sell listings, truncat offers at 15 for each
  // on select Buy or Sell:
  // show heading, show posts (infiinite scroll), hide-button

  //set up websockets to push new posts
  const [dataUI, setDataUI] = useState(initialUIState);
  //setData will be called when building out the search component.
  //will need to move state up or refactor to store.

  const { buyOffers, sellOffers } = useSelector((state) => state.allOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    initialFetch();
    const socket = openSocket("http://localhost:8000");
    socket.on("offers", (data) => {
      if (data.action === "create") {
        dispatch(addOffer(data.offer));
      }
    });
  });
  const initialFetch = () => {
    dispatch(fetchAllOffers());
  };

  return (
    <div className="main-offer-container">
      {dataUI.showBoth ? (
        <>
          <OfferList data={buyOffers} />
          <OfferList data={sellOffers} />
        </>
      ) : dataUI.showBuyOnly ? (
        <OfferList data={buyOffers} />
      ) : (
        <OfferList data={sellOffers} />
      )}
    </div>
  );
};

export default OfferListings;
