import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const TRADE_INPUT = "TRADE_INPUT";
export const CREATE_TRADE = "CREATE_TRADE";

export const updateAction = (type, payload) => ({
  type,
  payload,
});

export const inputChangeHandler = (e) => (dispatch) => {
  dispatch(updateAction(TRADE_INPUT, { [e.target.name]: e.target.value }));
};
