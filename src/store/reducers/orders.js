import * as types from "../actions/ordersActions";

const initialState = {
  myActiveOrders: [],
  myPastOrders: [],
  order: {
    fiatAmount: "",
    cryptoAmount: "",
    initialMessage: "",
    livePriceBCH: "",
    isMakerBuying: false,
  },
  currentOrder: {},
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
    case types.CREATE_TRADE_SUCCESS:
      return {
        ...state,
        myActiveOrders: [action.payload, ...state.myActiveOrders],
      };
    case types.FETCH_MY_ORDERS:
      const { myActiveOrders, myPastOrders } = action.payload;
      return {
        ...state,
        myActiveOrders,
        myPastOrders,
      };
    case types.FETCH_CURRENT_ORDER:
      return {
        ...state,
        ...action.payload,
      };
    case types.CANCEL_ORDER:
      return {
        ...state,
        currentOrder: { ...state.currentOrder, cancelled: true },
      };
    case types.COMPLETE_ORDER:
      return {
        ...state,
        currentOrder: { ...state.currentOrder, complete: true },
      };
    default:
      return state;
  }
}

export default ordersReducer;
