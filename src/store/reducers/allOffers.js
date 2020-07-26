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
    default:
      return state;
  }
}

export default allOffersReducer;
