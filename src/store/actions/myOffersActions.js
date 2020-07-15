import { axiosWithAuth } from "../../helpers/axiosWithAuth";

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

export const updateAction = (type, payload) => ({
  type,
  payload,
});

export const setMakerId = (id) => (dispatch) => {
  dispatch(updateAction(SET_MAKER_ID, id));
};

export const setBuyBCH = (buyBCH) => (dispatch) => {
  console.log("set bch", buyBCH);
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
    await axiosWithAuth().post(`/offers`, offerForm);
    history.push("/my-offers");
    dispatch(updateAction(CREATE_OFFER));
  } catch (error) {
    console.log(error);
  }
};

export const fetchMyOffers = () => async (dispatch) => {
  console.log("here");
  const userId = localStorage.getItem("userId");
  console.log("userid", userId);
  try {
    const result = await axiosWithAuth().get(`/offers/${userId}`);
    let updatedData = result.data.map((offer) => {
      const { buyBCH, city, country, headline, id, margin, pause } = offer;
      return {
        buyBCH,
        closeHours: offer.close_hours,
        currencyType: offer.currency_type,
        city,
        country,
        createdAt: offer.created_at,
        dynamicPricing: offer.dynamic_pricing,
        headline,
        id,
        limitMax: offer.limit_max,
        limitMin: offer.limit_min,
        makerId: offer.maker_id,
        margin,
        marginAbove: offer.margin_above,
        marketExchange: offer.market_exchange,
        openHours: offer.open_hours,
        pause,
        paymentMethod: offer.payment_method,
        tradeTerms: offer.trade_terms,
        updatedAt: offer.updated_at,
        verifiedOnly: offer.verified_only,
      };
    });
    dispatch(updateAction(FETCH_MY_OFFERS, updatedData));
  } catch (error) {
    //handle error fetching
    console.log(error);
  }
};
