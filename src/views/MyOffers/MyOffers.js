import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import "./MyOffers.scss";
import MyOfferCard from "../../components/MyOfferCard/MyOfferCard";
import { updateOffer } from "../../store/actions/myOffersActions";

const MyOffers = (props) => {
  const myOffers = useSelector((state) => state.myOffers.myOffers);
  const dispatch = useDispatch();

  const updateOfferHandler = (pausedOffer) => {
    pausedOffer.pause = !pausedOffer.pause;
    dispatch(updateOffer(pausedOffer));
  };

  const updateOffers = (bool) => {
    for (let i = 0; i < myOffers.length; i++) {
      if (myOffers[i].pause === bool) {
        updateOfferHandler(myOffers[i]);
      }
    }
  };

  return (
    <div className="my-offers-main">
      <h1>My offers</h1>
      <p className="sub-text">
        Creating an offer will allow you to set your own rate and terms, and
        enjoy a 0.25% fee. People that respond to offers pay a 0.75% fee.{" "}
      </p>
      {myOffers.length === 0 && <span>You don't have any offers yet.</span>}
      {myOffers && (
        <div className="my-offer-container">
          {myOffers.map((offer) => (
            <MyOfferCard
              key={offer.id}
              offer={offer}
              handlePauseToggle={updateOfferHandler}
            />
          ))}
          {myOffers.length !== 0 && (
            <div className="offers-control">
              <Button
                disabled={!myOffers.some((offer) => offer.pause !== true)}
                onClick={() => updateOffers(false)}
              >
                Resume All
              </Button>
              <Button
                disabled={!myOffers.some((offer) => offer.pause !== false)}
                onClick={() => updateOffers(true)}
              >
                Pause All
              </Button>
            </div>
          )}
        </div>
      )}
      <Link to="/new-offer">
        <Button>CREATE A NEW OFFER</Button>
      </Link>
    </div>
  );
};

export default MyOffers;
