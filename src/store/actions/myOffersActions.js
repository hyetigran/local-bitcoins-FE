export const SET_MAKER_ID = "SET_MAKER_ID";
export const SET_BUYBCH = "SET_BUYBCH";
export const SET_CURRENCY = "SET_CURRENCY";
export const SET_INPUT = "SET_INPUT";
export const SET_TIME = "SET_TIME";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_DYNAMIC = "SET_DYNAMIC";
export const SET_EXCHANGE = "SET_EXCHANGE";
export const SET_LIMITS = "SET_LIMITS";
export const SET_VERIFIED = "SET_VERIFIED";
export const SUBMIT_OFFER = "SUBMIT_OFFER";

export const updateAction = (type, payload) => ({
  type,
  payload,
});

export const setMakerId = (id) => (dispatch) => {
  dispatch(updateAction(SET_MAKER_ID, id));
};
