import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./MyOffers.scss";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import MyOfferCard from "../../components/MyOfferCard/MyOfferCard";

const MyOffers = (props) => {
  const [myOffers, setMyOffers] = useState([]);
  //fetchOffersById
  useEffect(() => {
    fetchMyOffers();
  });

  const fetchMyOffers = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const result = await axiosWithAuth().get(`/offers/${userId}`);
      console.log(result);
      setMyOffers(result.data);
    } catch (error) {
      //handle error fetching
      console.log(error);
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
            <MyOfferCard offer={offer} />
          ))}
        </div>
      )}
      <Link to="/new-offer">
        <Button>CREATE A NEW OFFER</Button>
      </Link>
    </div>
  );
};

export default MyOffers;
