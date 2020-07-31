import * as types from "../actions/ordersActions";

const initialState = {
  myActiveOrders: [],
  myPastOrders: [],
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
    case types.FETCH_MY_ORDERS:
      const { myActiveOrders, myPastOrders } = action.payload;
      return {
        ...state,
        myActiveOrders,
        myPastOrders,
      };
    default:
      return state;
  }
}

export default ordersReducer;
