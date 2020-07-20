import * as types from "../actions/ordersActions";

const initialState = {
  myOrders: [],
  order: {
    fiatAmount: "",
    cryptoAmount: "",
    initialMessage: "",
    livePriceBCH: "",
  },
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
    default:
      return state;
  }
}

export default ordersReducer;
