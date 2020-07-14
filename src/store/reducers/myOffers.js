import * as types from "../actions/myOffersActions";

const initialState = {
  formUI: {
    firstSelect: false,
    geoSelect: false,
    paySelect: false,
    currencySelect: false,
    dynamicSelect: false,
    reviewPriceSelect: false,
    confirmPriceSelect: false,
    limitSelect: false,
    headlineSelect: false,
    termsSelect: false,
    hoursSelect: false,
    verifiedSelect: false,
  },
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
    default:
      return state;
  }
}

export default myOffersReducer;
