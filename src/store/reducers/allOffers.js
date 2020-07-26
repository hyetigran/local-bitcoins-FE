import * as types from "../actions/allOffersActions";

const initialState = {
  buyData: [],
  sellData: [],
};

function allOffersReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_OFFERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default allOffersReducer;
