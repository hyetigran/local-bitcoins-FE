import React, { useState } from "react";
import { Select, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./Search.scss";

const { Option } = Select;

//dynamically needs to change based on url params
const title = {
  trade: "Trade Bitcoin Cash (BCH) using any payment method",
  items: "Buy and sell goods using Bitcoin Cash (BCH)",
};

// search option div has contains duplicate code - note to refactor
// needs to be connected to global state so that select could render OfferList component'
const Search = (props) => {
  const [expand, setExpand] = useState(false);
  function onChange(value) {
    // to add actionCreator needs to change slice of state
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div className="search-container">
      <div>
        <h1>{title.trade}</h1>
      </div>
      <div className="search-options-container">
        <div className="search-option">
          <label>I want to ...</label>
          <Select
            size="large"
            showSearch
            style={{ width: 200 }}
            defaultValue="Buy or sell BCH"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="buySell">Buy or Sell BCH</Option>
            <Option value="buy">Buy BCH</Option>
            <Option value="sell">Sell BCH</Option>
          </Select>
        </div>
        <div className="search-option">
          <label>Payment method</label>
          <Select
            size="large"
            showSearch
            style={{ width: 200 }}
            defaultValue="Any payment method"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="any">Any payment method</Option>
            <Option value="cash">Cash (in Person)</Option>
            <Option value="paypal">PayPal</Option>
            <Option value="skrill">Skrill</Option>
            <Option value="venmo">Venmo</Option>
          </Select>
        </div>
        <div className="search-option">
          <label>Location</label>
          <Select
            size="large"
            showSearch
            style={{ width: 200 }}
            defaultValue="Anywhere"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="anywhere">Anywhere</Option>
            <Option value="USA">United States of America</Option>
            <Option value="CA">Canada</Option>
            <Option value="CH">China</Option>
            <Option value="UK">United Kingdom</Option>
          </Select>
        </div>
        <div className="search-option">
          <label>Sort by</label>
          <Select
            size="large"
            showSearch
            style={{ width: 200 }}
            defaultValue="Popularity"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="popularity">Popularity</Option>
            <Option value="price">Price</Option>
          </Select>
        </div>
      </div>
      {expand && (
        <div className="search-options-container advanced">
          <div className="search-option">
            <label>I want to ...</label>
            <Select
              size="large"
              showSearch
              style={{ width: 300 }}
              defaultValue="Any currency"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="any">Any currency</Option>
              <Option value="usd">USD</Option>
              <Option value="gbp">GBP</Option>
              <Option value="eur">EUR</Option>
              <Option value="cad">CAD</Option>
            </Select>
          </div>
          <div className="search-option">
            <label>Text search</label>
            <Input placeholder="Search headlines and usernames..." />
          </div>
        </div>
      )}
      <div className="advanced-search">
        <Button
          type="link"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "Hide advanced search " : "Advanced search "}
          {expand ? <UpOutlined /> : <DownOutlined />}
        </Button>
      </div>
    </div>
  );
};

export default Search;
