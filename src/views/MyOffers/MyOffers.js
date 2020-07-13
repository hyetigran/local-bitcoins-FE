import React from "react";
import { Link } from "react-router-dom";
import "./MyOffers.scss";

const MyOffers = (props) => {
  return (
    <div className="my-offers-container">
      <h1>My offers</h1>
      <p>
        Creating an offer will allow you to set your own rate and terms, and
        enjoy a 0.25% fee. People that respond to offers pay a 0.75% fee.{" "}
        <span>You don't have any offers yet.</span>
      </p>
      <Link to="/new-offer">CREATE A NEW OFFER</Link>
    </div>
  );
};

export default MyOffers;
