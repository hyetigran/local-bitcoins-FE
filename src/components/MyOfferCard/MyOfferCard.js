import React from "react";
import { Button } from "antd";
import {
  EyeOutlined,
  PlayCircleOutlined,
  EditOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";
import "./MyOfferCard.scss";

const MyOfferCard = ({ offer }) => {
  console.log(offer);
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
            View
          </Button>
          {offer.pause ? (
            <Button
              type="link"
              className="custom"
              icon={<PlayCircleOutlined />}
            >
              Resume
            </Button>
          ) : (
            <Button
              type="link"
              className="custom"
              icon={<PauseCircleOutlined />}
            >
              Pause
            </Button>
          )}
          <Button type="link" className="custom" icon={<EditOutlined />}>
            Edit
          </Button>
        </div>
      </div>
      <div className="offers-control">
        <Button>Resume All</Button>
        <Button>Pause All</Button>
      </div>
    </div>
  );
};

export default MyOfferCard;
