import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
import "./OfferCard.scss";

const OfferCard = props => {
  const {
    id,
    badges,
    tradeHistory,
    username,
    payMethod,
    headline,
    country,
    city,
    limit
  } = props.offer;

  let fastBadge = false;
  if (badges.includes("fast-response")) {
    fastBadge = true;
  }
  let limitText = "no limit";
  if (limit.min && limit.max) {
    limitText = `${limit.min} to ${limit.max}`;
  } else if (limit.min && !limit.max) {
    limitText = `from ${limit.min}`;
  } else if (!limit.min && limit.max) {
    limitText = `up to ${limit.max}`;
  } else {
    //it appears at least one limit field is required when creating post
    limitText = "";
  }

  return (
    <div className="offer-card">
      <div className="badges">{fastBadge && <ThunderboltOutlined />}</div>
      <div className="user box">
        <div className="username">{username}</div>
        <div>{tradeHistory}</div>
      </div>
      <div className="pay box">
        <div>{payMethod}</div>
        <div>{headline}</div>
      </div>
      <div className="geo box">
        <div>{country}</div>
        <div>{city}</div>
      </div>
      <div className="limit box">{limitText}</div>
      <div className="action box">
        <Link>
          <Button type="default">Buy BCH</Button>
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
