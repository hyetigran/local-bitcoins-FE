import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOfferDetails } from "../../store/actions/myOffersActions";

const OfferDetails = (props) => {
  const offerDetails = useSelector((state) => state.myOffers.offerDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOfferDetails());
  });
  return (
    <div>
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/my-offers">My offers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>blank</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default OfferDetails;
