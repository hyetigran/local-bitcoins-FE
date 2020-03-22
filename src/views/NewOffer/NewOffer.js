import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const NewOffer = props => {
  return (
    <div className="new-offer-container">
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/my-offers">My offers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Create a new offer</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default NewOffer;
