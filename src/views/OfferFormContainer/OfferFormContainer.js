import React, { useState, useEffect } from "react";
import { Breadcrumb, Form, Select, Radio, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./OfferFormContainer.scss";
import {
  payMethodData,
  currencyTypesData,
  exchangeTypesData,
  selectTimesData,
} from "../../helpers/dummyData";
import {
  setBuyBCH,
  setCurrency,
  setInput,
  setTime,
  setPaymentMethod,
  setExchange,
  setIsDynamicPrice,
  setDefaultLimits,
  setVerifiedOnly,
  createOffer,
  setTradeTerms,
  setDefaultTime,
  fetchOffer,
  updateOffer,
  deleteOffer,
} from "../../store/actions/myOffersActions";

const initialUIState = {
  firstSelect: false,
  geoSelect: false,
  paySelect: false,
  currencySelect: false,
  dynamicSelect: false,
  reviewPriceSelect: false,
  confirmPriceSelect: false,
  limitSelect: false,
  headlineSelect: false,
  termsSelect: false,
  hoursSelect: false,
  verifiedSelect: false,
};

const OfferFormContainer = (props) => {
  const { offerId } = useParams();
  const offerForm = useSelector((state) => state.myOffers.offerForm);
  const dispatch = useDispatch();

  const [formUI, setFormUI] = useState(initialUIState);

  const { Option } = Select;

  useEffect(() => {
    if (offerId !== undefined) {
      let editUI = {};
      for (let prop in formUI) {
        editUI[prop] = true;
      }
      setFormUI(editUI);
      dispatch(fetchOffer(offerId));
    }
  }, []);

  const onSelectHandle = (value) => {
    let buyBCH = false;
    if (value === "buyBCH") {
      buyBCH = true;
    }
    dispatch(setBuyBCH(buyBCH));
    setFormUI({
      ...formUI,
      firstSelect: !offerForm.firstSelect,
    });
  };
  const onCheckHandle = (e) => {
    let buyBCH = false;
    if (e.target.value === "buyBCH") {
      buyBCH = true;
    }
    dispatch(setBuyBCH(buyBCH));
  };
  const onSelectCurrency = (value) => {
    const currency = currencyTypesData.filter((cur) => value === cur.name);
    const { symbol } = currency[0];
    dispatch(
      setCurrency({
        currencyType: value,
        currencySymbol: symbol,
      })
    );
  };

  const onInputHandle = (e) => {
    dispatch(setInput(e));
  };

  const onSelectTime = (value, when) => {
    if (when === "openHours") {
      dispatch(setTime({ when, value }));
    }
    if (when === "closeHours") {
      dispatch(setTime({ when, value }));
    }
  };

  const onSelectPayment = (value) => {
    dispatch(setPaymentMethod(value));
    setFormUI({ ...formUI, paySelect: true });
  };
  const onSelectExchange = (value) => {
    dispatch(setExchange(value));
  };
  const onDynamicHandle = (e) => {
    let isDynamic = true;
    if (e.target.value === "custom") {
      isDynamic = false;
    }
    dispatch(setIsDynamicPrice(isDynamic));
  };

  const onSelectLimit = (value) => {
    if (value === "skip") {
      dispatch(setDefaultLimits());
    }
    //unsure why below code is included, requires review
    // else {
    //  dispatch(setOfferForm({ ...offerForm });
    // }
    setFormUI({
      ...formUI,
      limitSelect: true,
    });
  };

  const onSelectVerified = (value) => {
    console.log(value);
    let verifiedOnly;
    if (value === "verified") {
      verifiedOnly = true;
    } else {
      verifiedOnly = false;
    }

    dispatch(setVerifiedOnly(verifiedOnly));
    setFormUI({
      ...formUI,
      verifiedSelect: true,
    });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (offerId === undefined) {
      dispatch(createOffer(offerForm, props.history));
    }
  };

  const onEditForm = (e) => {
    e.preventDefault();
    dispatch(updateOffer(offerForm));
    props.history.push("/my-offers");
  };

  const onDeleteForm = (e) => {
    e.preventDefault();
    dispatch(deleteOffer(offerForm.id));
    props.history.push("/my-offers");
  };

  return (
    <div className="new-offer-container">
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/my-offers">My offers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {offerId ? "Edit offer" : "Create a new offer"}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="new-offer-form">
        <Form
          name="order-form"
          onSubmit={() => {
            return;
          }}
        >
          <div
            className={
              "first-action" + (!formUI.firstSelect ? " active-form" : "")
            }
          >
            <h2>Do you want to buy or sell BCH?</h2>
            {!formUI.firstSelect ? (
              <Form.Item name="buyBCH">
                <Select
                  placeholder="Select..."
                  onChange={(value) => onSelectHandle(value)}
                >
                  <Option value="buyBCH">Buy BCH with fiat money</Option>
                  <Option value="sellBCH">Sell BCH for fiat money</Option>
                </Select>
              </Form.Item>
            ) : (
              <Radio.Group
                defaultValue={offerForm.buyBCH ? "buyBCH" : "sellBCH"}
                buttonStyle="solid"
                onChange={(e) => onCheckHandle(e)}
              >
                <Radio.Button value="buyBCH">
                  Buy BCH with fiat money
                </Radio.Button>
                <Radio.Button value="sellBCH">
                  Sell BCH for fiat money
                </Radio.Button>
              </Radio.Group>
            )}
          </div>
          {formUI.firstSelect && (
            <div className={!formUI.geoSelect ? " active-form" : ""}>
              <h2>What location do you want to display?</h2>
              {!formUI.geoSelect ? (
                <>
                  <div className="geo-input">
                    <Input
                      name="city"
                      type="text"
                      placeholder="Enter your city"
                      value={offerForm.city}
                      onChange={(e) => onInputHandle(e)}
                    />
                    <Input
                      name="country"
                      type="text"
                      placeholder="Enter your country"
                      value={offerForm.country}
                      onChange={(e) => onInputHandle(e)}
                    />
                  </div>
                  <Button
                    type="primary"
                    onClick={() => setFormUI({ ...formUI, geoSelect: true })}
                  >
                    Next
                  </Button>
                </>
              ) : (
                <div className="geo-container">
                  <Button type="primary">{`${offerForm.city}, ${offerForm.country}`}</Button>
                  <Button
                    onClick={() => setFormUI({ ...formUI, geoSelect: false })}
                  >
                    Other
                  </Button>
                </div>
              )}
            </div>
          )}
          {formUI.geoSelect && (
            <div
              className="pay-container active-form"
              style={{ display: formUI.paySelect && "none" }}
            >
              <h2>Which payment method do you want to accept?</h2>
              <p>
                To accept multiple mayment methods, you'll need to create an
                individual offer for each one.
              </p>
              <h3>Trade with someone in the United States:</h3>
              <div className="pay-button-group">
                {payMethodData
                  .filter((item) => item.usa === true)
                  .map((item) => (
                    <Button
                      size="large"
                      key={item.name}
                      onClick={() => onSelectPayment(item.name)}
                    >
                      {item.name}
                    </Button>
                  ))}
              </div>
              <h3>Trade with anyone in the world:</h3>
              <div className="pay-button-group">
                {payMethodData
                  .filter((item) => item.usa === false)
                  .map((item) => (
                    <Button
                      size="large"
                      key={item.name}
                      onClick={() => onSelectPayment(item.name)}
                    >
                      {item.name}
                    </Button>
                  ))}
              </div>
            </div>
          )}
          {formUI.paySelect && (
            <div className="pay-container-edit">
              <h2>Which payment method do you want to accept?</h2>
              <Radio.Group
                className="custom-button-group"
                defaultValue={offerForm.paymentMethod}
                buttonStyle="solid"
              >
                {payMethodData.map((item) => (
                  <Radio.Button
                    value={item.name}
                    key={item.name}
                    onClick={() => onSelectPayment(item.name)}
                  >
                    {item.name}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </div>
          )}
          {formUI.paySelect && (
            <div
              className={
                "currency-select" + (formUI.paySelect ? " active-form" : "")
              }
            >
              <h2>Which local currency do you want to trade with?</h2>
              {!formUI.currencySelect ? (
                <>
                  <p>You're probably after this one:</p>
                  <Button type="primary" size="large">
                    {offerForm.currencyType ? offerForm.currencyType : "USD"}
                  </Button>
                  <p>Choose another local currency:</p>
                  <Select
                    defaultValue={offerForm.currencyType}
                    placeholder="Select..."
                    onChange={(value) => onSelectCurrency(value)}
                  >
                    {currencyTypesData.map((cur) => (
                      <Option key={cur.name} value={cur.name}>
                        {cur.name}
                      </Option>
                    ))}
                  </Select>
                  <Button
                    type={offerForm.currencyType ? "primary" : "default"}
                    disabled={!offerForm.currencyType ? true : false}
                    onClick={() =>
                      setFormUI({ ...formUI, currencySelect: true })
                    }
                  >
                    Next
                  </Button>
                </>
              ) : (
                <div className="currency-edit">
                  <Button type="primary" size="large">
                    {offerForm.currencyType}
                  </Button>
                  <Button
                    size="large"
                    onClick={() =>
                      setFormUI({ ...formUI, currencySelect: false })
                    }
                  >
                    Other
                  </Button>
                </div>
              )}
            </div>
          )}
          {formUI.currencySelect ? (
            <div className="rate-container">
              {!formUI.dynamicSelect ? (
                <>
                  <h2>How would you like to set your rate?</h2>
                  <Radio.Group
                    className="rate-select"
                    defaultValue="dynamic"
                    buttonStyle="solid"
                    onChange={(e) => onDynamicHandle(e)}
                  >
                    <Radio.Button value="dynamic">
                      {" "}
                      <h3>
                        <strong>Dynamic market price</strong> (easy)
                      </h3>
                      <p>
                        Choose a percentage margin above or below the current
                        market price on a chosen exchange.
                      </p>
                      <p>e.g. "2% below Kraken BCH/USD"</p>
                    </Radio.Button>
                    <Radio.Button disabled value="custom">
                      {" "}
                      <h3>
                        <strong>Custom equation</strong> (complex)
                      </h3>
                      <p>
                        Design a custom expression for your rate, pulling data
                        from multiple exchanges or none.
                      </p>
                      <p>
                        e.g. the highest bid on any Coinbase or Kraken market,
                        with a custom floor.
                      </p>
                    </Radio.Button>
                  </Radio.Group>
                  <Button
                    type="primary"
                    onClick={() =>
                      setFormUI({ ...formUI, dynamicSelect: true })
                    }
                  >
                    Next
                  </Button>
                </>
              ) : !formUI.reviewPriceSelect ? (
                <>
                  <h2>
                    What margin and exchange do you want to use for your rate?
                  </h2>
                  <h3>Choose a percentage margin:</h3>
                  <div className="set-margin">
                    <div>
                      <Input
                        name="margin"
                        placeholder="e.g. 1.5%"
                        value={offerForm.margin}
                        onChange={(e) => onInputHandle(e)}
                        suffix="%"
                      />
                      <Radio.Group
                        defaultValue={offerForm.buyBCH ? "below" : "above"}
                        buttonStyle="solid"
                      >
                        <Radio.Button value="above">Above</Radio.Button>
                        <Radio.Button value="below">Below</Radio.Button>
                      </Radio.Group>
                    </div>
                    <div>
                      <p>
                        {offerForm.buyBCH ? "Buyers" : "Sellers"} typically
                        choose a margin of roughly 2%{" "}
                        {offerForm.buyBCH ? "below" : "above"} market price.
                      </p>
                    </div>
                  </div>
                  <h3>Choose a market:</h3>
                  <div className="market-select">
                    <Form.Item name="marketExchange">
                      <Select
                        placeholder="Begin typing (e.e 'Kraken')..."
                        onChange={(value) => onSelectExchange(value)}
                      >
                        {exchangeTypesData.map((market) => (
                          <Option key={market.name} value={market.name}>
                            {market.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <div>
                      <p>
                        We recommend choosing a popular exchange with high
                        volume.
                      </p>
                    </div>
                  </div>
                  <div className="rate-button-container">
                    <Button
                      onClick={() =>
                        setFormUI({ ...formUI, dynamicSelect: false })
                      }
                    >
                      BACK
                    </Button>
                    <Button
                      type="primary"
                      onClick={() =>
                        setFormUI({ ...formUI, reviewPriceSelect: true })
                      }
                    >
                      REVIEW PRICE
                    </Button>
                  </div>
                </>
              ) : !formUI.confirmPriceSelect ? (
                <div className="review-price">
                  <h2>
                    Review your{" "}
                    {offerForm.dynamicPricing ? "dynamic" : "custom"} price
                    selection:
                  </h2>
                  <div>
                    <h2>You selected:</h2>
                    <p>
                      {offerForm.margin}%{" "}
                      {offerForm.marginAbove ? "above" : "below"}{" "}
                      {offerForm.marketExchange}
                    </p>
                    <h2>Your current rate (as a buyer):</h2>
                    <p>
                      <strong>1 BCH = $200</strong>
                    </p>
                    <h2>Seller's current rate:</h2>
                    <p>
                      <strong>1 BCH = $195</strong>, including Local Bitcoin's
                      fee.
                    </p>
                  </div>
                  <div className="rate-button-container">
                    <Button
                      onClick={() =>
                        setFormUI({ ...formUI, dynamicSelect: false })
                      }
                    >
                      BACK
                    </Button>
                    <Button
                      type="primary"
                      onClick={() =>
                        setFormUI({ ...formUI, confirmPriceSelect: true })
                      }
                    >
                      CONFIRM
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="rate-selected">
                  <h2>How would you like to set your rate?</h2>
                  <div>
                    <Button type="primary">
                      {offerForm.margin}%{" "}
                      {offerForm.marginAbove ? "above" : "below"}{" "}
                      {offerForm.marketExchange}
                    </Button>
                    <Button
                      onClick={() =>
                        setFormUI({
                          ...formUI,
                          confirmPriceSelect: false,
                        })
                      }
                    >
                      Other
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : null}
          {formUI.confirmPriceSelect ? (
            <div
              className={
                "offer-limits" +
                (formUI.confirmPriceSelect ? " active-form" : "")
              }
            >
              <h2>Do you want to set any limits?</h2>
              <div
                className={
                  "limits" + (formUI.limitSelect ? " limits-selected" : "")
                }
              >
                <div>
                  <p>Minimum trade size (in {offerForm.currencyType})</p>
                  <Input
                    name="limitMin"
                    placeholder="e.g. $50.00"
                    prefix={offerForm.currencySymbol}
                    suffix={offerForm.currencyType}
                    value={offerForm.limitMin}
                    onChange={(e) => onInputHandle(e)}
                  />
                </div>
                <div>
                  <p>Maximum trade size</p>
                  <Input
                    name="limitMax"
                    placeholder="e.g. $100,000.00"
                    prefix={offerForm.currencySymbol}
                    suffix={offerForm.currencyType}
                    value={offerForm.limitMax}
                    onChange={(e) => onInputHandle(e)}
                  />
                </div>
              </div>
              {!formUI.limitSelect && (
                <div className="limit-button-container">
                  <Button onClick={() => onSelectLimit("skip")}>Skip</Button>
                  {offerForm.limitMin !== "" ? (
                    <Button
                      type="primary"
                      onClick={() => onSelectLimit("next")}
                    >
                      Next
                    </Button>
                  ) : (
                    offerForm.limitMax !== "" && (
                      <Button
                        type="primary"
                        onClick={() => onSelectLimit("next")}
                      >
                        Next
                      </Button>
                    )
                  )}
                </div>
              )}
            </div>
          ) : null}
          {formUI.limitSelect && (
            <div
              className={
                "headline" + (formUI.limitSelect ? " active-form" : "")
              }
            >
              <h2>Do you want to choose a headline?</h2>
              <Input
                name="headline"
                placeholder="Type a headline to stand out..."
                value={offerForm.headline}
                onChange={(e) => onInputHandle(e)}
              />
              {!formUI.headlineSelect && (
                <Button
                  type="primary"
                  disabled={!offerForm.headline.length >= 1}
                  onClick={() => setFormUI({ ...formUI, headlineSelect: true })}
                >
                  Next
                </Button>
              )}
            </div>
          )}
          {formUI.headlineSelect && (
            <div className="trade-terms">
              <h2>Do you want to outline the terms of the trade?</h2>
              <Input.TextArea
                name="tradeTerms"
                rows={7}
                value={offerForm.tradeTerms}
                onChange={(e) => onInputHandle(e)}
                placeholder='e.g. "Meet up at a local cafe any time from 9AM - 3 PM."'
              />
              {!formUI.termsSelect && (
                <p>
                  Use the terms of trade field to outline trade terms (e.g.
                  meeting places, time restrictions and payment windows). Don't
                  include any personal details here.
                </p>
              )}
              <div className="terms-button-group">
                {!formUI.termsSelect && (
                  <Button
                    type={
                      !offerForm.tradeTerms.length >= 1 ? "primary" : "default"
                    }
                    onClick={() => {
                      dispatch(setTradeTerms());
                      setFormUI({ ...formUI, termsSelect: true });
                    }}
                  >
                    Skip
                  </Button>
                )}
                {offerForm.tradeTerms.length >= 1 && !formUI.termsSelect && (
                  <Button
                    type="primary"
                    onClick={() => setFormUI({ ...formUI, termsSelect: true })}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          )}
          {formUI.termsSelect ? (
            !formUI.hoursSelect ? (
              <div className="hours">
                <h2>Do you want to set your "standard hours"?</h2>
                <p>
                  These are the hours that you are normally available for
                  contact. Your offer will be shown to more users if you respond
                  to messages quickly, however you won't be penalized for any
                  delays outside of your standard hours.
                </p>
                <div className="time-picker">
                  <p>
                    <strong>Select your standard hours:</strong>
                  </p>
                  <div>
                    <Select
                      value={offerForm.openHours}
                      placeholder='Wake (e.g. "9:00 AM")'
                      onChange={(value) => onSelectTime(value, "openHours")}
                    >
                      {selectTimesData.map((el, index) => (
                        <Option key={index} value={el.time}>
                          {el.time}
                        </Option>
                      ))}
                    </Select>
                    <Select
                      value={offerForm.closeHours}
                      placeholder="Sleep (e.g. '5:00 PM')"
                      onChange={(value) => onSelectTime(value, "closeHours")}
                    >
                      {selectTimesData.map((el, index) => (
                        <Option key={index} value={el.time}>
                          {el.time}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="hours-button-group">
                  <Button
                    type={
                      offerForm.openHours === undefined &&
                      offerForm.closeHours === undefined
                        ? "primary"
                        : "default"
                    }
                    onClick={() => {
                      dispatch(setDefaultTime());
                      setFormUI({ ...formUI, hoursSelect: true });
                    }}
                  >
                    Skip
                  </Button>
                  {offerForm.openHours !== undefined ||
                  offerForm.closeHours !== undefined ? (
                    <Button
                      type="primary"
                      disabled={
                        offerForm.openHours === undefined ||
                        offerForm.closeHours === undefined
                      }
                      onClick={() =>
                        setFormUI({ ...formUI, hoursSelect: true })
                      }
                    >
                      Next
                    </Button>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="hours-selected">
                <h2>Do you want to set your "standard hours"?</h2>
                <Button type="primary">
                  {offerForm.openHours === undefined
                    ? "All hours of the day"
                    : `${offerForm.openHours} to ${offerForm.closeHours}`}
                </Button>
                <Button
                  onClick={() => setFormUI({ ...formUI, hoursSelect: false })}
                >
                  Other
                </Button>
              </div>
            )
          ) : null}
          {formUI.hoursSelect ? (
            <div className="verified-only">
              <h2>Who can open a trade with you?</h2>
              {!formUI.verifiedSelect && (
                <p>
                  You can restrict users who haven't registered their phone
                  number with from responding to your offer. However, due to
                  legitimate reasons for not linking a phone number (e.g.
                  privacy concerns) we typically suggest choosing "Anybody".
                </p>
              )}
              <div className="verified-button-group">
                <Button
                  type={offerForm.verifiedOnly ? "primary" : "default"}
                  onClick={() => onSelectVerified("verified")}
                >
                  Anybody (Suggested)
                </Button>
                <Button
                  type={!offerForm.verifiedOnly ? "primary" : "default"}
                  onClick={() => onSelectVerified("notVerified")}
                >
                  Only users with a verified phone number
                </Button>
              </div>
            </div>
          ) : null}
          {formUI.verifiedSelect ? (
            <div className="confirm-container">
              {offerId === undefined ? (
                <p className="caution-text">
                  You may want to double-check all of the details above. Once
                  submitted, you can pause, modify or delete your offer at any
                  time.
                </p>
              ) : (
                <p>You can pause, modify or delete your offer at any time.</p>
              )}
              {offerId === undefined ? (
                <Button
                  size="large"
                  type="primary"
                  onClick={(e) => onSubmitForm(e)}
                >
                  CONFIRM DETAILS
                </Button>
              ) : (
                <div>
                  <Button
                    size="large"
                    type="primary"
                    onClick={(e) => onEditForm(e)}
                  >
                    UPDATE OFFER
                  </Button>
                  <Button
                    size="large"
                    type="danger"
                    onClick={(e) => onDeleteForm(e)}
                  >
                    DELETE OFFER
                  </Button>
                </div>
              )}
            </div>
          ) : null}
        </Form>
      </div>
    </div>
  );
};

export default OfferFormContainer;
