import React from "react";
import { Route, NavLink } from "react-router-dom";
import { Tooltip } from "antd";

import Search from "../../components/Search/Search";
import OfferListings from "../../components/OfferListings/OfferListings";
import ItemListings from "../../components/ItemListings/ItemListings";
import "./Offers.scss";

const Offers = (props) => {
  return (
    <div className="offers-container">
      <div className="secondary-nav">
        <div className="title">Explore</div>
        <div className="tab-link">
          <NavLink to="/offers/trade" activeClassName="is-active">
            Trade BCH
          </NavLink>
        </div>
        <div className="tab-link">
          <NavLink to="/offers/goods" activeClassName="is-active">
            <Tooltip
              placement="bottom"
              title="Buy and sell goods using Bitcoin Cash (BCH)"
            >
              Marketplace
            </Tooltip>
          </NavLink>
        </div>
      </div>
      <Search />
      <Route
        path="/offers/trade"
        render={(props) => <OfferListings {...props} />}
      />
      <Route
        path="/offers/goods"
        render={(props) => <ItemListings {...props} />}
      />
    </div>
  );
};

export default Offers;
