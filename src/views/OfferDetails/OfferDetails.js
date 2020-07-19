import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffer } from "../../store/actions/myOffersActions";

import "./OfferDetails.scss";

const OfferDetails = (props) => {
  const { offerId } = useParams();

  const offerDetails = useSelector((state) => state.myOffers.offerDetails);
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
          <Breadcrumb.Item>blank</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default OfferDetails;
