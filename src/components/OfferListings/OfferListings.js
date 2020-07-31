import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import openSocket from "socket.io-client";

import OfferList from "./OfferList/OfferList";
import {
  fetchAllOffers,
  addOffer,
  updateOffer,
  deleteOffer,
} from "../../store/actions/allOffersActions";

import "./OfferListings.scss";

const baseURL = process.env.REACT_APP_BASE_URL;
const initialUIState = {
  showBoth: true,
  showBuyOnly: false,
  showSellOnly: false,
};

const OfferListings = (props) => {
  //on load, fetch buy and sell listings, truncat offers at 15 for each
  // on select Buy or Sell:
  // show heading, show posts (infiinite scroll), hide-button

  //const [dataUI, setDataUI] = useState(initialUIState);

  const dataUI = initialUIState;
  const { buyOffers, sellOffers } = useSelector((state) => state.allOffers);
  const dispatch = useDispatch();

  const initialFetch = () => {
    dispatch(fetchAllOffers());
  };
  useEffect(() => {
    initialFetch();
    const socket = openSocket(baseURL);
    socket.on("offers", (data) => {
      if (data.action === "create") {
        dispatch(addOffer(...data.offer));
      } else if (data.action === "update") {
        dispatch(updateOffer(...data.offer));
      } else if (data.action === "delete") {
        dispatch(deleteOffer(data.id));
      }
    });
  }, []);

  return (
    <div className="main-offer-container">
      {dataUI.showBoth ? (
        <>
          <OfferList data={buyOffers} isBuy={true} />
          <OfferList data={sellOffers} isBuy={false} />
        </>
      ) : dataUI.showBuyOnly ? (
        <OfferList data={buyOffers} isBuy={true} />
      ) : (
        <OfferList data={sellOffers} isBuy={false} />
      )}
    </div>
  );
};

export default OfferListings;
