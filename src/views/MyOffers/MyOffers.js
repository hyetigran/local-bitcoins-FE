import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./MyOffers.scss";

const MyOffers = (props) => {
  const [myOffers, setMyOffers] = useState([]);
  //fetchOffersById
  return (
    <div className="my-offers-container">
      <h1>My offers</h1>
      <p className="sub-text">
        Creating an offer will allow you to set your own rate and terms, and
        enjoy a 0.25% fee. People that respond to offers pay a 0.75% fee.{" "}
        {myOffers.length === 0 && <span>You don't have any offers yet.</span>}
      </p>
      <Link to="/new-offer">
        <Button>CREATE A NEW OFFER</Button>
      </Link>
    </div>
  );
};

export default MyOffers;
