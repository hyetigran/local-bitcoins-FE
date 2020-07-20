import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const coinStatsAPI =
  "https://api.coinstats.app/public/v1/coins/bitcoin-cash?currency=";

//Example URL /w query params
//https://api.coinstats.app/public/v1/coins/bitcoin?currency=AMD
export const TRADE_INPUT = "TRADE_INPUT";
export const FETCH_MARKET_PRICE = "FETCH_MARKET_PRICE";
export const CREATE_TRADE = "CREATE_TRADE";

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
  const result = await axios.get(`${coinStatsAPI}${currency}`);
  let price = result.data.coin.price;
  let adjPrice =
    price + (marginAbove ? price * (margin / 100) : -price * (margin / 100));
  dispatch(updateAction(FETCH_MARKET_PRICE, adjPrice));
};
