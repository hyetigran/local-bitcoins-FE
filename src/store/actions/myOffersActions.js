import axios from "axios";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import { updateAction } from "../../helpers/updateActions";
import { dataMapper } from "../../helpers/dataMapper";

export const SET_MAKER_ID = "SET_MAKER_ID";
export const SET_BUYBCH = "SET_BUYBCH";
export const SET_CURRENCY = "SET_CURRENCY";
export const SET_INPUT = "SET_INPUT";
export const SET_TIME = "SET_TIME";
export const SET_DEFAULT_TIME = "SET_DEFAULT_TIME";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_DYNAMIC = "SET_DYNAMIC";
export const SET_EXCHANGE = "SET_EXCHANGE";
export const SET_LIMITS = "SET_LIMITS";
export const SET_VERIFIED = "SET_VERIFIED";
export const SET_TRADE_TERMS = "SET_TRADE_TERMS";

export const CREATE_OFFER = "CREATE_OFFER";
export const UPDATE_OFFER = "UPDATE_OFFER";
export const DELETE_OFFER = "DELETE_OFFER";

export const FETCH_MY_OFFERS = "FETCH_MY_OFFERS";
export const FETCH_OFFER = "FETCH_OFFER";

const baseURL = process.env.REACT_APP_BASE_URL;

export const setMakerId = (id) => (dispatch) => {
  dispatch(updateAction(SET_MAKER_ID, id));
};

export const setBuyBCH = (buyBCH) => (dispatch) => {
  dispatch(updateAction(SET_BUYBCH, buyBCH));
};

export const setCurrency = (currency) => (dispatch) => {
  dispatch(updateAction(SET_CURRENCY, currency));
};

export const setInput = (e) => (dispatch) => {
  dispatch(updateAction(SET_INPUT, e));
};

export const setTime = (time) => (dispatch) => {
  dispatch(updateAction(SET_TIME, time));
};
export const setDefaultTime = () => (dispatch) => {
  dispatch(updateAction(SET_DEFAULT_TIME));
};

export const setPaymentMethod = (value) => (dispatch) => {
  dispatch(updateAction(SET_PAYMENT, value));
};

export const setExchange = (value) => (dispatch) => {
  dispatch(updateAction(SET_EXCHANGE, value));
};

export const setIsDynamicPrice = (value) => (dispatch) => {
  dispatch(updateAction(SET_DYNAMIC, value));
};

export const setDefaultLimits = () => (dispatch) => {
  dispatch(updateAction(SET_LIMITS));
};

export const setVerifiedOnly = (value) => (dispatch) => {
  dispatch(updateAction(SET_VERIFIED, value));
};

export const setTradeTerms = () => (dispatch) => {
  dispatch(updateAction(SET_TRADE_TERMS));
};

export const createOffer = (offerForm, history) => async (dispatch) => {
  try {
    const userId = localStorage.getItem("userId");
    offerForm.makerId = userId;
    await axiosWithAuth().post(`${baseURL}/api/offers`, offerForm);
    history.push("/my-offers");
    dispatch(updateAction(CREATE_OFFER));
  } catch (error) {
    console.log(error);
  }
};

export const fetchOffer = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${baseURL}/api/offers/offer/${id}`);
    let mappedOffer = dataMapper(...result.data);
    dispatch(updateAction(FETCH_OFFER, mappedOffer));
  } catch (error) {
    console.log(error);
  }
};

export const fetchMyOffers = () => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const result = await axiosWithAuth().get(`${baseURL}/api/offers/${userId}`);
    let updatedData = result.data.map((offer) => dataMapper(offer));
    dispatch(updateAction(FETCH_MY_OFFERS, updatedData));
  } catch (error) {
    console.log(error);
  }
};

export const updateOffer = (updatedOffer) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const result = await axiosWithAuth().put(
      `${baseURL}/api/offers/${userId}/${updatedOffer.id}`,
      updatedOffer
    );
    dispatch(updateAction(UPDATE_OFFER, result.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteOffer = (id) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const result = await axiosWithAuth().delete(
      `${baseURL}/api/offers/${userId}/${id}`
    );
    console.log("deleted", result);
    dispatch(updateAction(DELETE_OFFER, id));
  } catch (error) {
    console.log(error);
  }
};
