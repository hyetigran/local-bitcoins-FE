import * as types from "../actions/ordersActions";

const initialState = {
  registerError: null,
  loginError: null,
  loadingUser: false,
};

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case "blah":
      return {};
    default:
      return state;
  }
}

export default ordersReducer;
