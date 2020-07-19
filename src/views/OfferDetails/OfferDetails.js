import React, { useEffect, useReducer } from "react";
import { Breadcrumb } from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch, useStore } from "react-redux";
import { fetchOffer } from "../../store/actions/myOffersActions";

import "./OfferDetails.scss";

const OfferDetails = (props) => {
  const { offerId } = useParams();

  const offerDetails = useSelector((state) => state.myOffers.offerDetails);
  const user = useSelector((state) => state.auth);
  console.log("user", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(offerId));
  });
  return (
    <div className="details-main">
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/offers">Offers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {offerDetails.buyBCH ? "Sell BCH to " : "Buy BCH from "}
            {user.username}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default OfferDetails;
