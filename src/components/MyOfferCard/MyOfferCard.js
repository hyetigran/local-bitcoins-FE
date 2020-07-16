import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import {
  EyeOutlined,
  PlayCircleOutlined,
  EditOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";
import "./MyOfferCard.scss";

const MyOfferCard = ({ offer, handlePauseToggle }) => {
  let rateText = `${offer.margin}% ${offer.above ? "above" : "below"} ${
    offer.marketExchange
  } BCH/${offer.currencyType}`;
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
          <p>{rateText}</p>
        </div>
        <div className="offer-actions">
          <Button type="link" className="custom" icon={<EyeOutlined />}>
            {" "}
            <Link to={`/offer-details/${offer.id}`}>View</Link>
          </Button>
          {offer.pause ? (
            <Button
              type="link"
              className="custom"
              icon={<PlayCircleOutlined />}
              onClick={() => handlePauseToggle(offer)}
            >
              Resume
            </Button>
          ) : (
            <Button
              type="link"
              className="custom"
              icon={<PauseCircleOutlined />}
              onClick={() => handlePauseToggle(offer)}
            >
              Pause
            </Button>
          )}
          <Button type="link" className="custom" icon={<EditOutlined />}>
            {" "}
            <Link to={`/edit-offer/${offer.id}`}>Edit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyOfferCard;
