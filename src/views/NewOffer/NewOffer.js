import React, { useState } from "react";
import { Breadcrumb, Form, Select, Radio, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./NewOffer.scss";

import {
  payMethodData,
  currencyTypesData,
  exchangeTypesData,
  selectTimesData
} from "../../helpers/dummyData";

const initialState = {
  buyBCH: null,
  city: "",
  country: "",
  paymentMethod: "",
  currencyType: "USD",
  currencySymbol: "$",
  dynamicPricing: true,
  margin: "",
  marginAbove: true,
  marketExchange: "",
  limitMin: "",
  limitMax: "",
  headline: "",
  tradeTerms: "",
  openHours: null,
  closeHours: null,
  verifiedOnly: "",
  pause: false,
  makerId: "",
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
  verifiedSelect: false
};

const NewOffer = props => {
  // const [form] = Form.useForm();
  const [offerForm, setOfferForm] = useState(initialState);
  console.log(offerForm);
  const { Option } = Select;

  const onSelectHandle = value => {
    //console.log("value", value);
    let buyBCH = false;
    if (value === "buyBCH") {
      buyBCH = true;
    }
    setOfferForm({
      ...offerForm,
      buyBCH: buyBCH,
      firstSelect: !offerForm.firstSelect
    });
  };
  const onCheckHandle = e => {
    let buyBCH = false;
    if (e.target.value === "buyBCH") {
      buyBCH = true;
    }
    setOfferForm({ ...offerForm, buyBCH });
  };
  const onSelectCurrency = value => {
    const currency = currencyTypesData.filter(cur => value === cur.name);
    const { symbol } = currency[0];
    console.log(currency);
    setOfferForm({
      ...offerForm,
      currencyType: value,
      currencySymbol: symbol
    });
  };

  const onInputHandle = e => {
    setOfferForm({ ...offerForm, [e.target.name]: e.target.value });
  };

  const onSelectTime = (value, when) => {
    if (when === "openHours") {
      setOfferForm({ ...offerForm, [when]: value });
    }
    if (when === "closeHours") {
      setOfferForm({ ...offerForm, [when]: value });
    }
  };

  const onSelectPayment = value => {
    setOfferForm({ ...offerForm, paymentMethod: value, paySelect: true });
  };
  const onSelectExchange = value => {
    setOfferForm({ ...offerForm, marketExchange: value });
  };
  const onDynamicHandle = e => {
    let isDynamic = true;
    if (e.target.value === "custom") {
      isDynamic = false;
    }
    setOfferForm({ ...offerForm, dynamicPricing: isDynamic });
  };

  const onSelectLimit = value => {
    if (value === "skip") {
      setOfferForm({
        ...offerForm,
        limitMin: null,
        limitMax: null,
        limitSelect: true
      });
    } else {
      setOfferForm({ ...offerForm, limitSelect: true });
    }
  };

  return (
    <div className="new-offer-container">
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/my-offers">My offers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Create a new offer</Breadcrumb.Item>
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
              "first-action" + (!offerForm.firstSelect ? " active-form" : "")
            }
          >
            <h2>Do you want to buy or sell BCH?</h2>
            {!offerForm.firstSelect ? (
              <Form.Item name="buyBCH">
                <Select
                  placeholder="Select..."
                  onChange={value => onSelectHandle(value)}
                >
                  <Option value="buyBCH">Buy BCH with fiat money</Option>
                  <Option value="sellBCH">Sell BCH for fiat money</Option>
                </Select>
              </Form.Item>
            ) : (
              <Radio.Group
                defaultValue={offerForm.buyBCH ? "buyBCH" : "sellBCH"}
                buttonStyle="solid"
                onChange={e => onCheckHandle(e)}
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
          {offerForm.firstSelect && (
            <div className={!offerForm.geoSelect ? " active-form" : ""}>
              <h2>What location do you want to display?</h2>
              {!offerForm.geoSelect ? (
                <>
                  <div className="geo-input">
                    <Input
                      name="city"
                      type="text"
                      placeholder="Enter your city"
                      value={offerForm.city}
                      onChange={e => onInputHandle(e)}
                    />
                    <Input
                      name="country"
                      type="text"
                      placeholder="Enter your country"
                      value={offerForm.country}
                      onChange={e => onInputHandle(e)}
                    />
                  </div>
                  <Button
                    type="primary"
                    onClick={() =>
                      setOfferForm({ ...offerForm, geoSelect: true })
                    }
                  >
                    Next
                  </Button>
                </>
              ) : (
                <div className="geo-container">
                  <Button type="primary">{`${offerForm.city}, ${offerForm.country}`}</Button>
                  <Button
                    onClick={() =>
                      setOfferForm({ ...offerForm, geoSelect: false })
                    }
                  >
                    Other
                  </Button>
                </div>
              )}
            </div>
          )}
          {offerForm.geoSelect && (
            <div
              className="pay-container active-form"
              style={{ display: offerForm.paySelect && "none" }}
            >
              <h2>Which payment method do you want to accept?</h2>
              <p>
                To accept multiple mayment methods, you'll need to create an
                individual offer for each one.
              </p>
              <h3>Trade with someone in the United States:</h3>
              <div className="pay-button-group">
                {payMethodData
                  .filter(item => item.usa === true)
                  .map(item => (
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
                  .filter(item => item.usa === false)
                  .map(item => (
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
          {offerForm.paySelect && (
            <div className="pay-container-edit">
              <h2>Which payment method do you want to accept?</h2>
              <Radio.Group
                className="custom-button-group"
                defaultValue={offerForm.paymentMethod}
                buttonStyle="solid"
              >
                {payMethodData.map(item => (
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
          {offerForm.paySelect && (
            <div className="currency-select">
              <h2>Which local currency do you want to trade with?</h2>
              {!offerForm.currencySelect ? (
                <>
                  <p>You're probably after this one:</p>
                  <div>{offerForm.currencyType}</div>
                  <p>Choose another local currency:</p>
                  <Select
                    defaultValue={offerForm.currencyType}
                    placeholder="Select..."
                    onChange={value => onSelectCurrency(value)}
                  >
                    {currencyTypesData.map(cur => (
                      <Option key={cur.name} value={cur.name}>
                        {cur.name}
                      </Option>
                    ))}
                  </Select>
                  <Button
                    onClick={() =>
                      setOfferForm({ ...offerForm, currencySelect: true })
                    }
                  >
                    Next
                  </Button>
                </>
              ) : (
                <>
                  <div>{offerForm.currencyType}</div>
                  <Button
                    onClick={() =>
                      setOfferForm({ ...offerForm, currencySelect: false })
                    }
                  >
                    Other
                  </Button>
                </>
              )}
            </div>
          )}
          {offerForm.currencySelect ? (
            <div>
              {!offerForm.dynamicSelect ? (
                <>
                  <h2>How would you like to set your rate?</h2>
                  <Radio.Group
                    defaultValue="dynamic"
                    buttonStyle="solid"
                    onChange={e => onDynamicHandle(e)}
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
                    <Radio.Button value="custom">
                      {" "}
                      <h3>
                        <span>Custom equation</span> (complex)
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
                    onClick={() =>
                      setOfferForm({ ...offerForm, dynamicSelect: true })
                    }
                  >
                    Next
                  </Button>
                </>
              ) : !offerForm.reviewPriceSelect ? (
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
                        onChange={e => onInputHandle(e)}
                        addonAfter="%"
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
                  <Form.Item name="marketExchange">
                    <Select
                      placeholder="Begin typing (e.e 'Kraken')..."
                      onChange={value => onSelectExchange(value)}
                    >
                      {exchangeTypesData.map(market => (
                        <Option key={market.name} value={market.name}>
                          {market.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <div>
                    <p>
                      We recommend choosing a popular exchange with high volume.
                    </p>
                  </div>
                  <div>
                    <Button
                      onClick={() =>
                        setOfferForm({ ...offerForm, dynamicSelect: false })
                      }
                    >
                      BACK
                    </Button>
                    <Button
                      onClick={() =>
                        setOfferForm({ ...offerForm, reviewPriceSelect: true })
                      }
                    >
                      REVIEW PRICE
                    </Button>
                  </div>
                </>
              ) : !offerForm.confirmPriceSelect ? (
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
                    <p>1 BCH = $200</p>
                    <h2>Seller's current rate:</h2>
                    <p>
                      <strong>1 BCH = $195</strong>, including Local Bitcoin's
                      fee.
                    </p>
                  </div>
                  <div>
                    <Button
                      onClick={() =>
                        setOfferForm({ ...offerForm, dynamicSelect: false })
                      }
                    >
                      BACK
                    </Button>
                    <Button
                      onClick={() =>
                        setOfferForm({ ...offerForm, confirmPriceSelect: true })
                      }
                    >
                      CONFIRM
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2>How would you like to set your rate?</h2>
                  <div>
                    {offerForm.margin}%{" "}
                    {offerForm.marginAbove ? "above" : "below"}{" "}
                    {offerForm.marketExchange}
                  </div>
                  <Button
                    onClick={() =>
                      setOfferForm({ ...offerForm, confirmPriceSelect: false })
                    }
                  >
                    Other
                  </Button>
                </div>
              )}
            </div>
          ) : null}
          {offerForm.confirmPriceSelect ? (
            <div className="offer-limits">
              <div>
                <p>Minimum trade size (in {offerForm.currencyType})</p>
                <Input
                  name="limitMin"
                  placeholder="e.g. $50.00"
                  prefix={offerForm.currencySymbol}
                  suffix={offerForm.currencyType}
                  value={offerForm.limitMin}
                  onChange={e => onInputHandle(e)}
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
                  onChange={e => onInputHandle(e)}
                />
              </div>
              <div>
                <Button onClick={() => onSelectLimit("skip")}>Skip</Button>
                {offerForm.limitMin != "" ? (
                  <Button onClick={() => onSelectLimit("skip")}>Next</Button>
                ) : (
                  offerForm.limitMax != "" && (
                    <Button onClick={() => onSelectLimit("skip")}>Next</Button>
                  )
                )}
              </div>
            </div>
          ) : null}
          {offerForm.limitSelect && (
            <div className="headline">
              <h2>Do you want to choose a headline?</h2>
              <Input
                name="headline"
                placeholder="Type a headline to stand out..."
                value={offerForm.headline}
                onChange={e => onInputHandle(e)}
              />
              {!offerForm.headlineSelect && (
                <Button
                  disabled={!offerForm.headline.length >= 1}
                  onClick={() =>
                    setOfferForm({ ...offerForm, headlineSelect: true })
                  }
                >
                  Next
                </Button>
              )}
            </div>
          )}
          {offerForm.headlineSelect && (
            <div className="trade-terms">
              <h2>Do you want to outline the terms of the trade?</h2>
              <Input.TextArea
                name="tradeTerms"
                rows={7}
                value={offerForm.tradeTerms}
                onChange={e => onInputHandle(e)}
                placeholder='e.g. "Meet up at a local cafe any time from 9AM - 3 PM."'
              />
              <p>
                Use the terms of trade field to outline trade terms (e.g.
                meeting places, time restrictions and payment windows). Don't
                include any personal details here.
              </p>
              <div>
                {!offerForm.termsSelect && (
                  <Button
                    onClick={() =>
                      setOfferForm({
                        ...offerForm,
                        termsSelect: true,
                        tradeTerms: ""
                      })
                    }
                  >
                    Skip
                  </Button>
                )}
                {offerForm.tradeTerms.length >= 1 && !offerForm.termsSelect && (
                  <Button
                    onClick={() =>
                      setOfferForm({ ...offerForm, termsSelect: true })
                    }
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          )}
          {offerForm.termsSelect ? (
            !offerForm.hoursSelect ? (
              <div className="hours">
                <h2>Do you want to set your "standard hours"?</h2>
                <p>
                  These are the hours that you are normally available for
                  contact. Your offer will be shown to more users if you respond
                  to messages quickly, however you won't be penalized for any
                  delays outside of your standard hours.
                </p>
                <div className="time-picker">
                  <h2>Select your standard hours:</h2>
                  <div>
                    <Select
                      value={offerForm.openHours}
                      placeholder='Wake (e.g. "9:00 AM")'
                      onChange={value => onSelectTime(value, "openHours")}
                    >
                      {selectTimesData.map(el => (
                        <Option value={el.time}>{el.time}</Option>
                      ))}
                    </Select>
                    <Select
                      value={offerForm.closeHours}
                      placeholder='Sleep (e.g. "5:00 PM")'
                      onChange={value => onSelectTime(value, "closeHours")}
                    >
                      {selectTimesData.map(el => (
                        <Option value={el.time}>{el.time}</Option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div>
                  <Button
                    onClick={() =>
                      setOfferForm({
                        ...offerForm,
                        openHours: null,
                        closeHours: null,
                        hoursSelect: true
                      })
                    }
                  >
                    Skip
                  </Button>
                  {offerForm.openHours != null ||
                  offerForm.closeHours != null ? (
                    <Button
                      disabled={
                        offerForm.openHours == null ||
                        offerForm.closeHours == null
                      }
                      onClick={() =>
                        setOfferForm({ ...offerForm, hoursSelect: true })
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
                <Button>
                  {offerForm.openHours} to {offerForm.closeHours}
                </Button>
                <Button
                  onClick={() =>
                    setOfferForm({ ...offerForm, hoursSelect: false })
                  }
                >
                  Other
                </Button>
              </div>
            )
          ) : null}
          {offerForm.hoursSelect ? (
            <div className="verified-only">
              <h2>Who can open a trade with you?</h2>
              {!offerForm.verifiedSelect && (
                <p>
                  You can restrict users who haven't registered their phone
                  number with from responding to your offer. However, due to
                  legitimate reasons for not linking a phone number (e.g.
                  privacy concerns) we typically suggest choosing "Anybody".
                </p>
              )}
              <Radio.Group
                defaultValue={
                  offerForm.verifiedOnly ? "verified" : "notVerified"
                }
                buttonStyle="solid"
                onChange={e => onCheckHandle(e)}
              >
                <Radio.Button value="verified">
                  Anybody (Suggested)
                </Radio.Button>
                <Radio.Button value="notVerified">
                  Only users with a verified phone number
                </Radio.Button>
              </Radio.Group>
            </div>
          ) : null}
          {offerForm.verifiedSelect ? (
            <div>
              <p>
                You may want to double-check all of the details above. Once
                submitted, you can pause, modify or delete your offer at any
                time.
              </p>
              <Button type="submit">CONFIRM DETAILS</Button>
            </div>
          ) : null}
        </Form>
      </div>
    </div>
  );
};

export default NewOffer;
