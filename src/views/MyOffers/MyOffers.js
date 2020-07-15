import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Button } from "antd";
import "./MyOffers.scss";
import MyOfferCard from "../../components/MyOfferCard/MyOfferCard";
import { fetchMyOffers } from "../../store/actions/myOffersActions";

const MyOffers = (props) => {
  const myOffers = useSelector((state) => state.myOffers.myOffers);

  useEffect(() => {
    props.fetchMyOffers();
  }, []);

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
            <MyOfferCard key={offer.id} offer={offer} />
          ))}
          <div className="offers-control">
            <Button>Resume All</Button>
            <Button>Pause All</Button>
          </div>
        </div>
      )}
      <Link to="/new-offer">
        <Button>CREATE A NEW OFFER</Button>
      </Link>
    </div>
  );
};

export default connect(null, { fetchMyOffers })(MyOffers);
