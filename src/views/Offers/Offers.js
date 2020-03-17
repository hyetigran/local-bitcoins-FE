import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../components/Search/Search";
import OfferListings from "../../components/OfferListings/OfferListings";
import "./Offers.scss";

const Offers = props => {
  return (
    <div className="offers-container">
      <div className="secondary-nav">
        <div>Explore</div>
        <div>
          <NavLink>Trade BCH</NavLink>
        </div>
        <div>
          <NavLink>Marketplace</NavLink>
        </div>
      </div>
      <Search />
      <OfferListings />
    </div>
  );
};

export default Offers;
