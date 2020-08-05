import axios from "axios";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import { orderMapper } from "../../helpers/orderMapper";
import { updateAction } from "../../helpers/updateActions";

const baseURL = process.env.REACT_APP_BASE_URL;
const coinStatsAPI =
  "https://api.coinstats.app/public/v1/coins/bitcoin-cash?currency=";

//Example URL /w query params
//https://api.coinstats.app/public/v1/coins/bitcoin?currency=AMD
export const TRADE_INPUT = "TRADE_INPUT";
export const FETCH_MARKET_PRICE = "FETCH_MARKET_PRICE";
export const CREATE_TRADE_SUCCESS = "CREATE_TRADE_SUCCESS";
export const CREATE_TRADE_FAILURE = "CREATE_TRADE_FAILURE";
export const FETCH_MY_ORDERS = "FETCH_MY_ORDERS";
export const FETCH_CURRENT_ORDER = "FETCH_CURRENT_ORDER";
export const CANCEL_ORDER = "CANCEL_ORDER";
export const COMPLETE_ORDER = "COMPLETE_ORDER";

export const getMyOrders = () => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const result = await axiosWithAuth().get(`${baseURL}/api/orders/${userId}`);
    let myActiveOrders = [];
    let myPastOrders = [];
    for (let order of result.data) {
      if (order.complete || order.cancelled) {
        myPastOrders.push(orderMapper(order));
      } else {
        myActiveOrders.push(orderMapper(order));
      }
    }
    dispatch(updateAction(FETCH_MY_ORDERS, { myActiveOrders, myPastOrders }));
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentOrder = (orderId, history) => async (dispatch) => {
  const userId = localStorage.getItem("userId");

  try {
    const result = await axiosWithAuth().get(
      `${baseURL}/api/orders/${userId}/${orderId}`
    );
    const order = orderMapper(result.data[0]);
    dispatch(updateAction(FETCH_CURRENT_ORDER, { currentOrder: order }));
  } catch (error) {
    console.log(error);
    history.push("/");
  }
};

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

export const createTrade = (
  orderDetails,
  limitMin,
  limitMax,
  makerId,
  id,
  buyBCH,
  history
) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  let errorMessages = [];

  if (userId === undefined) {
    //dispatch modal for logging in
  }

  // refactor to helper function
  if (makerId === userId) {
    errorMessages.push("You can't do that to yourself");
  }
  if (!orderDetails.fiatAmount || !orderDetails.cryptoAmount) {
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

  if (errorMessages.length > 0) {
    dispatch(updateAction(CREATE_TRADE_FAILURE, errorMessages));
  }

  try {
    let orderBody = {
      order: {
        maker_id: makerId,
        taker_id: userId,
        offer_id: id,
        price_bch: orderDetails.livePriceBCH,
        bch_amount: orderDetails.cryptoAmount,
        fiat_amount: orderDetails.fiatAmount,
        is_maker_buying: buyBCH,
      },
      initial_message: orderDetails.initialMessage,
    };
    const result = await axiosWithAuth().post(
      `${baseURL}/api/orders/create-order`,
      orderBody
    );
    dispatch(updateAction(CREATE_TRADE_SUCCESS, result.data));
    history.push(`/trade/active/${result.data.id}`);
  } catch (error) {
    console.log(error);
  }
};

export const handleCancel = (order) => async (dispatch) => {
  try {
    order.cancelled = true;
    await axiosWithAuth().put(`${baseURL}/api/orders/${order.id}`, order);
    dispatch(updateAction(CANCEL_ORDER));
  } catch (error) {
    console.log(error);
  }
};

export const handleComplete = (order) => async (dispatch) => {
  try {
    order.complete = true;
    console.log("order", order);
    await axiosWithAuth().put(`${baseURL}/api/orders/${order.id}`, order);
    dispatch(updateAction(COMPLETE_ORDER));
  } catch (error) {
    console.log(error);
  }
};
