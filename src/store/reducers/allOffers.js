import * as types from "../actions/allOffersActions";

const initialState = {
  buyOffers: [],
  sellOffers: [],
};

function allOffersReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_OFFERS:
      return {
        ...state,
        ...action.payload,
      };
    case types.ADD_OFFER:
      return {
        ...state,
        [action.payload.prop]: [
          action.payload.offer,
          ...state[action.payload.prop],
        ],
      };
    case types.UPDATE_OFFER:
      const updatedOffers = state[action.payload.prop];
      const updatedOfferIndex = updatedOffers.findIndex(
        (el) => el.id === action.payload.offer.id
      );
      if (updatedOfferIndex > -1) {
        updatedOffers[updatedOfferIndex] = action.payload.offer;
      }
      return {
        ...state,
        [action.payload.prop]: updatedOffers,
      };
    case types.DELETE_OFFER:
      let updatedBuyOffer = state.buyOffers.filter(
        (el) => el.id !== action.payload
      );
      let updatedSellOffer = state.sellOffers.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        buyOffers: updatedBuyOffer,
        sellOffers: updatedSellOffer,
      };
    default:
      return state;
  }
}

export default allOffersReducer;
