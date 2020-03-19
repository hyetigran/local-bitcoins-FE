import axios from "axios";

const baseURL = "http://localhost:8000";

export const LOGIN = "LOGIN";
export const LOADING_USER = "LOADING_USER";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GET_USER";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const USER_ERROR = "USER_ERROR";

export const updateAction = (type, payload) => ({
  type,
  payload
});

export const doLogin = (user, history) => dispatch => {
  dispatch(updateAction(LOADING_USER, true));
  axios
    .post(`${baseURL}/api/login`, user)
    .then(response => {
      const { key } = response.data;
      localStorage.setItem("token", key);
      // payload currently is the token being saved as userId at the moment
      dispatch(updateAction(LOGIN, key));
      history.push("/offers/trade");
    })
    .catch(error => {
      let errorMessage = error.response.data;
      dispatch(updateAction(LOGIN_ERROR, errorMessage));
    })
    .finally(() => dispatch(updateAction(LOADING_USER, false)));
};

export const doRegister = (user, history) => dispatch => {
  dispatch(updateAction(LOADING_USER, true));
  axios
    .post(`${baseURL}/api/registration`, user)
    .then(response => {
      const { key } = response.data;
      localStorage.setItem("token", key);
      dispatch(updateAction(LOGIN, key));
      history.push("/offers/trade");
    })
    .catch(error => {
      let errorMessage = error.response.data;
      dispatch(updateAction(REGISTER_ERROR, errorMessage));
    })
    .finally(() => dispatch(updateAction(LOADING_USER, false)));
};

export const doLogout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(updateAction(LOGOUT));
  window.location.reload();
};
