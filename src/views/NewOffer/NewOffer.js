import React, { useState } from "react";
import { Breadcrumb, Form, Select, Radio, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./NewOffer.scss";

import { payMethodData } from "../../helpers/dummyData";

const initialState = {
  buyBCH: null,
  city: "",
  country: "",
  paymentMethod: "",
  currencyType: "",
  dynamicPricing: true,
  margin: "",
  marginAbove: true,
  marketExchange: "",
  limitMin: "",
  limitMax: "",
  headline: "",
  tradeTerms: "",
  openHours: "",
  closeHours: "",
  verifiedOnly: "",
  pause: false,
  makerId: "",
  firstSelect: false,
  geoSelect: false,
  paySelect: false,
  currencySelect: false,
  dynamicSelect: false,
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
    // form.setFieldsValue({ ...form, buyBCH });
  };

  const onInputHandle = e => {
    setOfferForm({ ...offerForm, [e.target.name]: e.target.value });
  };

  const onSelectPayment = value => {
    setOfferForm({ ...offerForm, paymentMethod: value, paySelect: true });
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
        <div>
          <h1>Do you want to buy or sell BCH?</h1>
        </div>
        <Form
          // form={offerForm}
          name="order-form"
          onFinish={() => {
            return;
          }}
        >
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
            >
              <Radio.Button value="buyBCH">
                Buy BCH with fiat money
              </Radio.Button>
              <Radio.Button value="sellBCH">
                Sell BCH for fiat money
              </Radio.Button>
            </Radio.Group>
          )}
          {offerForm.firstSelect && (
            <div>
              <h1>What location do you want to display?</h1>
              {!offerForm.geoSelect ? (
                <>
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
                    placeholder="Enter your city"
                    value={offerForm.country}
                    onChange={e => onInputHandle(e)}
                  />
                  <Button
                    onClick={() =>
                      setOfferForm({ ...offerForm, geoSelect: true })
                    }
                  >
                    Next
                  </Button>
                </>
              ) : (
                <>
                  <p>{`${offerForm.city}, ${offerForm.country}`}</p>
                </>
              )}
              {offerForm.geoSelect && (
                <div style={{ display: offerForm.paySelect && "none" }}>
                  <h2>Which payment method do you want to accept?</h2>
                  <p>
                    To accept multiple mayment methods, you'll need to create an
                    individual offer for each one.
                  </p>
                  <h3>Trade with someone in the United States:</h3>
                  {payMethodData
                    .filter(item => item.usa === true)
                    .map(item => (
                      <Button
                        key={item.name}
                        onClick={() => onSelectPayment(item.name)}
                      >
                        {item.name}
                      </Button>
                    ))}
                  <h3>Trade with anyone in the world:</h3>
                  {payMethodData
                    .filter(item => item.usa === false)
                    .map(item => (
                      <Button
                        key={item.name}
                        onClick={() => onSelectPayment(item.name)}
                      >
                        {item.name}
                      </Button>
                    ))}
                </div>
              )}
              {offerForm.paySelect && (
                <div>
                  <h2>Which payment method do you want to accept?</h2>

                  <Radio.Group
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
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default NewOffer;
