import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
//import { ThunderboltOutlined } from "@ant-design/icons";
import "./OfferCard.scss";

const OfferCard = (props) => {
  const {
    id,
    username,
    paymentMethod,
    headline,
    country,
    city,
    limitMin,
    limitMax,
  } = props.offer;

  // let fastBadge = false;
  // if (badges.includes("fast-response")) {
  //   fastBadge = true;
  // }
  let tradeHistory = (Math.random() * 100 + 5).toFixed(0);
  let limitText = "no limit";
  if (limitMin && limitMax) {
    limitText = `${limitMin} to ${limitMax}`;
  } else if (limitMin && !limitMax) {
    limitText = `from ${limitMin}`;
  } else if (!limitMin && limitMax) {
    limitText = `up to ${limitMax}`;
  }
  // need to refactor badges to map over array and
  // paint the right icon/tooltip pair
  // it appears local.bitcoin has atm 3 badges only

  return (
    <div className="offer-card">
      {/* <div className="badges">
        {fastBadge && (
          <Tooltip placement="right" title={badges[0]}>
            <ThunderboltOutlined />
          </Tooltip>
        )}
      </div> */}
      <div className="user box">
        <div className="username">
          <Link to={`/profile/${username}`}>{username}</Link>
        </div>
        <div>{`~ ${tradeHistory} trades`}</div>
      </div>
      <div className="pay box">
        <div>{paymentMethod}</div>
        <div>{headline}</div>
      </div>
      <div className="geo box">
        <div>{country}</div>
        <div>{city}</div>
      </div>
      <div className="limit box">{limitText}</div>
      <div className="action box">
        <Button type="default">
          <Link to={`/offer-details/${id}`}>
            <span>{props.isBuy ? "Buy " : "Sell "} BCH @</span>
            <span>this price</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
