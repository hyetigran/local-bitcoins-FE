import React from "react";
import "./MyOfferCard.scss";

const MyOfferCard = ({ offer }) => {
  console.log(offer);
  return (
    <div className="card-container">
      <div className="card-box">
        <div>
          <h3>Type</h3>
          <p>{offer.buyBCH ? "Buying BCH" : "Selling BCH"}</p>
        </div>
        <div>
          <h3>Payment method</h3>
          <p>{offer.paymentMethod}</p>
        </div>
        <div>
          <h3>Headline</h3>
          <p>{offer.headline}</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>{offer.city}</p>
        </div>
        <div>
          <h3>Rate</h3>
          <p>{offer.rate}</p>
        </div>
      </div>
      <div className="actions"></div>
    </div>
  );
};

export default MyOfferCard;
