import * as types from "../actions/myOffersActions";

const initialState = {
  offerForm: {
    buyBCH: null,
    city: "",
    country: "",
    paymentMethod: "",
    currencyType: "",
    currencySymbol: "$",
    dynamicPricing: true,
    margin: "",
    marginAbove: true,
    marketExchange: "",
    limitMin: "",
    limitMax: "",
    headline: "",
    tradeTerms: "",
    makerId: "",
    openHours: null,
    closeHours: null,
    verifiedOnly: true,
    pause: false,
  },
  myOffers: [],
  offerDetails: {},
};

function myOffersReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_MAKER_ID:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          makerId: action.payload,
        },
      };
    case types.SET_BUYBCH:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          buyBCH: action.payload,
        },
      };
    case types.SET_CURRENCY:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          currencyType: action.payload.currencyType,
          currencySymbol: action.payload.currencySymbol,
        },
      };
    case types.SET_INPUT:
      console.log(action.payload);
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    case types.SET_TIME:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          [action.payload.when]: action.payload.value,
        },
      };
    case types.SET_DEFAULT_TIME:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          closeHours: undefined,
          openHours: undefined,
        },
      };
    case types.SET_PAYMENT:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          paymentMethod: action.payload,
        },
      };
    case types.SET_EXCHANGE:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          marketExchange: action.payload,
        },
      };
    case types.SET_DYNAMIC:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          dynamicPricing: action.payload,
        },
      };
    case types.SET_LIMITS:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          limitMax: null,
          limitMin: null,
        },
      };
    case types.SET_VERIFIED:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          verifiedOnly: action.payload,
        },
      };
    case types.SET_TRADE_TERMS:
      return {
        ...state,
        offerForm: {
          ...state.offerForm,
          tradeTerms: "",
        },
      };
    case types.CREATE_OFFER:
      return {
        ...state,
        offerForm: initialState,
      };
    case types.FETCH_MY_OFFERS:
      return {
        ...state,
        myOffers: action.payload,
      };
    case types.FETCH_OFFER:
      return {
        ...state,
        offerForm: action.payload,
        offerDetails: action.payload,
      };
    case types.UPDATE_OFFER:
      return {
        ...state,
        myOffers: state.myOffers.map((offer) =>
          offer.id === action.payload.id ? action.payload : offer
        ),
      };
    case types.DELETE_OFFER:
      return {
        ...state,
        myOffers: state.myOffers.filter(
          (offer) => offer.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

export default myOffersReducer;
