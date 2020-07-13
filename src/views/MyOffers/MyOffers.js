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
  }, []);

  const fetchMyOffers = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const result = await axiosWithAuth().get(`/offers/${userId}`);
      let updatedData = result.data.map((offer) => {
        const { buyBCH, city, country, headline, id, margin, pause } = offer;
        return {
          buyBCH,
          closeHours: offer.close_hours,
          currencyType: offer.currency_type,
          city,
          country,
          createdAt: offer.created_at,
          dynamicPricing: offer.dynamic_pricing,
          headline,
          id,
          limitMax: offer.limit_max,
          limitMin: offer.limit_min,
          makerId: offer.maker_id,
          margin,
          marginAbove: offer.margin_above,
          marketExchange: offer.market_exchange,
          openHours: offer.open_hours,
          pause,
          paymentMethod: offer.payment_method,
          tradeTerms: offer.trade_terms,
          updatedAt: offer.updated_at,
          verifiedOnly: offer.verified_only,
        };
      });
      setMyOffers(updatedData);
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
            <MyOfferCard key={offer.id} offer={offer} />
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
