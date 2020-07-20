import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const coinStatsAPI =
  "https://api.coinstats.app/public/v1/coins/bitcoin-cash?currency=";

//Example URL /w query params
//https://api.coinstats.app/public/v1/coins/bitcoin?currency=AMD
export const TRADE_INPUT = "TRADE_INPUT";
export const FETCH_MARKET_PRICE = "FETCH_MARKET_PRICE";
export const CREATE_TRADE_SUCCESS = "CREATE_TRADE_SUCCESS";
export const CREATE_TRADE_FAILURE = "CREATE_TRADE_FAILURE";

export const updateAction = (type, payload) => ({
  type,
  payload,
});

export const inputChangeHandler = (e, bchPrice) => (dispatch) => {
  let payload = { [e.target.name]: e.target.value };
  if (e.target.name === "cryptoAmount") {
    let fiatAmount = (bchPrice * e.target.value).toFixed(2);
    payload = { [e.target.name]: e.target.value, fiatAmount };
  } else if (e.target.name === "fiatAmount") {
    let cryptoAmount = (e.target.value / bchPrice).toFixed(8);
    payload = { [e.target.name]: e.target.value, cryptoAmount };
  }
  dispatch(updateAction(TRADE_INPUT, payload));
};

export const fetchMarketPrice = (currency, margin, marginAbove) => async (
  dispatch
) => {
  try {
    const result = await axios.get(`${coinStatsAPI}${currency}`);
    let price = result.data.coin.price;
    let adjPrice =
      price + (marginAbove ? price * (margin / 100) : -price * (margin / 100));
    dispatch(updateAction(FETCH_MARKET_PRICE, adjPrice));
  } catch (error) {
    console.log(error);
  }
};

export const createTrade = (orderDetails, limitMin, limitMax) => async (
  dispatch
) => {
  let errorMessages = [];
  if (!orderDetails.fiatAmount || !orderDetails.cryptoAmount) {
    console.log("here");
    errorMessages.push("You must enter a trade amount");
  }
  if (!orderDetails.initialMessage.trim()) {
    errorMessages.push("You must enter an initial message");
  }
  if (
    orderDetails.fiatAmount > limitMax ||
    orderDetails.fiatAmount < limitMin
  ) {
    errorMessages.push(`Enter an amount between ${limitMin} and ${limitMax}`);
  }
  console.log(errorMessages);

  if (errorMessages.length > 0) {
    dispatch(updateAction(CREATE_TRADE_FAILURE, errorMessages));
  }

  try {
  } catch (error) {}
};
