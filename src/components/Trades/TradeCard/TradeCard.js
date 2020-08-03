import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "./TradeCard.scss";

const TradeCard = ({ order, userId }) => {
  const {
    id,
    bchAmount,
    fiatAmount,
    createdAt,
    usertaker,
    usermaker,
    isMakerBuying,
    complete,
    cancelled,
    makerId,
    takerId,
  } = order;

  let username = +userId === makerId ? usertaker : usermaker;

  const type = !complete && !cancelled ? "active" : "closed";
  return (
    <div className="trade-card-ctn">
      <div>
        <p>Date opened</p>
        <p>{moment(createdAt).format("D MMM YYYY")}</p>
      </div>
      <div>
        <p>Type</p>
        <p>{userId === makerId && isMakerBuying ? "Buying" : "Selling"}</p>
      </div>
      <div>
        <p>BCH</p>
        <p>{bchAmount}</p>
      </div>
      <div>
        <p>Amount</p>
        <p>{fiatAmount}</p>
      </div>
      <div>
        <p>Trade partner</p>
        <Link to={`/user-profile/${username}`}>{username}</Link>
      </div>
      <div>
        <p>State</p>
        <p>{cancelled ? "Cancelled" : complete ? "Complete" : "Active"}</p>
      </div>
      <div>
        <Link to={`/trade/${type}/${id}`}>View</Link>
      </div>
    </div>
  );
};

export default TradeCard;
