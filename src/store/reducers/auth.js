import * as types from "../actions/authActions";

const initialState = {
  registerError: null,
  loginError: null,
  loadingUser: false,
  userId: "",
  username: "",
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        userId: action.payload.userId,
        username: action.payload.username,
        loginError: null,
        registerError: null,
      };
    case types.LOADING_USER:
      return { ...state, loadingUser: action.payload };
    case types.LOGOUT:
      return {};
    case types.LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case types.REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    default:
      return state;
  }
}

export default authReducer;
