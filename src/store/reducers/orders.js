import * as types from "../actions/ordersActions";

const initialState = {
  myOrders: [],
  order: {
    fiatAmount: "",
    cryptoAmount: "",
    initialMessage: "",
    livePriceBCH: "",
  },
  errorMessages: [],
};

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MARKET_PRICE:
      return {
        ...state,
        order: {
          ...state.order,
          livePriceBCH: action.payload,
        },
      };
    case types.TRADE_INPUT:
      console.log("input reducer", action.payload);
      return {
        ...state,
        order: {
          ...state.order,
          ...action.payload,
        },
      };
    case types.CREATE_TRADE_FAILURE:
      return {
        ...state,
        errorMessages: action.payload,
      };
    default:
      return state;
  }
}

export default ordersReducer;
