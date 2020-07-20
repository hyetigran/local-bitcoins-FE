import React, { useEffect } from "react";
import { Breadcrumb, Input, Button, Divider } from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffer } from "../../store/actions/myOffersActions";

import "./OfferDetails.scss";
import {
  inputChangeHandler,
  fetchMarketPrice,
} from "../../store/actions/ordersActions";

const OfferDetails = (props) => {
  const { offerId } = useParams();
  const { TextArea } = Input;
  const offerDetails = useSelector((state) => state.myOffers.offerDetails);
  const orderDetails = useSelector((state) => state.orders.order);
  console.log("od", orderDetails);
  const username = localStorage.getItem("username");
  const { limitMax, limitMin, currencyType, currencySymbol } = offerDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(offerId));
  }, []);

  useEffect(() => {
    if (currencyType) {
      dispatch(fetchMarketPrice(currencyType));
    }
  }, [currencyType]);

  const inputChange = (e) => {
    dispatch(inputChangeHandler(e));
  };
  let limitText = `${currencySymbol}${limitMin} to ${currencySymbol}${limitMax}`;
  if (!limitMax && !limitMin) {
    limitText = "No limits";
  } else if (!limitMax) {
    limitText = `Minimum trade of ${currencySymbol}${limitMin}`;
  } else if (!limitMin) {
    limitText = `Up to ${currencySymbol}${limitMax}`;
  }
  return (
    <div className="details-main">
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/offers">Offers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {offerDetails.buyBCH ? "Sell BCH to " : "Buy BCH from "}
            <Link to={`/user-profile/${username}`}>{username}</Link>
            {` with ${offerDetails.paymentMethod}`}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="trade-container">
        <div className="trade-controls">
          <form>
            <h3>Open Trade</h3>
            <div className="trade-label">
              <p>Trade amount</p>
              <p>{limitText}</p>
            </div>
            <div className="trade-input">
              <Input
                name="fiat"
                placeholder="$ 0.00"
                prefix={offerDetails.currencyType}
                onChange={(e) => {}}
              />
              <Input
                name="crypto"
                placeholder="0.00000000"
                prefix="BCH"
                onChange={(e) => {}}
              />
            </div>
            <div className="trade-text">
              <label>Send a message</label>
              <TextArea
                rows={4}
                placeholder="Say Hello"
                value={orderDetails.initialMessage}
                onChange={(e) => inputChange(e)}
              />
            </div>
            {/* {}
              conditional payment breakdown upon input change
            */}
            <Button type="primary" onClick={() => {}}>
              Open Trade
            </Button>
          </form>
        </div>
        <div className="trade-details">
          <p>
            {`1 BCH = ${offerDetails.currencySymbol} 
            ${
              orderDetails.livePriceBCH && orderDetails.livePriceBCH.toFixed(2)
            }`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
