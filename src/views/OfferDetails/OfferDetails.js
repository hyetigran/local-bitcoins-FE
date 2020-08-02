import React, { useEffect } from "react";
import { Breadcrumb, Input, Button, Divider, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffer } from "../../store/actions/myOffersActions";

import "./OfferDetails.scss";
import {
  inputChangeHandler,
  fetchMarketPrice,
  createTrade,
} from "../../store/actions/ordersActions";

const OfferDetails = (props) => {
  const { offerId } = useParams();
  const { TextArea } = Input;
  const offerDetails = useSelector((state) => state.myOffers.offerDetails);
  const orderDetails = useSelector((state) => state.orders.order);
  const orderErrors = useSelector((state) => state.orders.errorMessages);

  const username = localStorage.getItem("username");
  const {
    limitMax,
    limitMin,
    currencyType,
    currencySymbol,
    margin,
    marginAbove,
    makerId,
    id,
    buyBCH,
  } = offerDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(offerId));
  }, []);

  useEffect(() => {
    if (currencyType) {
      dispatch(fetchMarketPrice(currencyType, margin, marginAbove));
    }
  }, [currencyType]);

  const inputChange = (e, price) => {
    dispatch(inputChangeHandler(e, price));
  };
  const createOrder = () => {
    dispatch(
      createTrade(
        orderDetails,
        limitMin,
        limitMax,
        makerId,
        id,
        buyBCH,
        props.history
      )
    );
  };
  let limitText = `${currencySymbol}${limitMin} to ${currencySymbol}${limitMax}`;
  if (!limitMax && !limitMin) {
    limitText = "No limits";
  } else if (!limitMax) {
    limitText = `Minimum trade of ${currencySymbol}${limitMin}`;
  } else if (!limitMin) {
    limitText = `Up to ${currencySymbol}${limitMax}`;
  }

  let instructionText =
    "Arrange a meeting time and place to exchange face-to-face.";

  if (offerDetails.paymentMethod !== "Cash in person") {
    if (buyBCH) {
      instructionText = `Send fiat using ${offerDetails.paymentMethod}`;
    } else {
      instructionText = `Receive fiat by ${offerDetails.paymentMethod}`;
    }
  }
  return (
    <div className="details-main">
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/offers">Offers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {buyBCH ? "Sell BCH to " : "Buy BCH from "}
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
                name="fiatAmount"
                placeholder="$ 0.00"
                prefix={offerDetails.currencyType}
                value={orderDetails.fiatAmount}
                onChange={(e) => inputChange(e, orderDetails.livePriceBCH)}
              />
              <Input
                name="cryptoAmount"
                placeholder="0.00000000"
                prefix="BCH"
                value={orderDetails.cryptoAmount}
                onChange={(e) => inputChange(e, orderDetails.livePriceBCH)}
              />
            </div>
            <div className="trade-text">
              <label>Send a message</label>
              <TextArea
                name="initialMessage"
                rows={4}
                placeholder="Say Hello"
                value={orderDetails.initialMessage}
                onChange={(e) => inputChange(e)}
              />
            </div>
            {/* {}
              conditional payment breakdown upon input change
            */}
            <Button type="primary" onClick={() => createOrder()}>
              Open Trade
            </Button>
          </form>
          {orderErrors.length > 0 && (
            <div className="error-messages">
              {orderErrors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>
        <div className="trade-details">
          <div className="details-instruction">
            <p>
              You are the <span>{buyBCH ? " seller" : " buyer"}</span>
            </p>
            <p>{instructionText}</p>
          </div>
          <Divider />

          <h1>
            {`1 BCH = ${offerDetails.currencySymbol} 
            ${
              orderDetails.livePriceBCH && orderDetails.livePriceBCH.toFixed(2)
            }`}
          </h1>
          <p className="disclaimer">
            The {!buyBCH ? " seller" : " buyer"} chose this price - only
            continue if you're comfortable with it.
          </p>
          <Divider />
          <div className="details-info">
            <div className="counterparty">
              <h3>About the {!buyBCH ? " seller" : " buyer"}</h3>
              <div>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
                <div>
                  <Link to={`/user-profile/${username}`}>
                    <span>{username}</span>
                  </Link>
                  <ul>
                    <li>No feedback yet</li>
                    <li>Registered June 2019</li>
                    <li>Online now</li>
                    <li>0 trades</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="offer-headline">
              <div>
                <h3>Headline</h3>
                <p>{offerDetails.headline}</p>
              </div>
              {offerDetails.tradeTerms && (
                <div>
                  <h3>Trade Terms</h3>
                  <p>{offerDetails.tradeTerms}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
