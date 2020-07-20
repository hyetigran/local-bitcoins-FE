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

export const inputChangeHandler = (e) => (dispatch) => {
  dispatch(updateAction(TRADE_INPUT, { [e.target.name]: e.target.value }));
};

export const fetchMarketPrice = (currency) => async (dispatch) => {
  const result = await axios.get(`${coinStatsAPI}${currency}`);
  dispatch(updateAction(FETCH_MARKET_PRICE, result.data.coin.price));
};
