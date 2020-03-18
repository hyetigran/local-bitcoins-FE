import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
import "./OfferCard.scss";

const OfferCard = props => {
  return (
    <div className="offer-card">
      <div className="badges">
        <ThunderboltOutlined />
      </div>
      <div className="user box">
        <div className="username">username</div>
        <div>history</div>
      </div>
      <div className="pay box">
        <div>payment method</div>
        <div>title</div>
      </div>
      <div className="geo box">
        <div>country</div>
        <div>city</div>
      </div>
      <div className="limit box">limits</div>
      <div className="action box">
        <Link>
          <Button type="default">Buy BCH</Button>
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
