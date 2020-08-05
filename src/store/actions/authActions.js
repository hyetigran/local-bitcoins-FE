import axios from "axios";
import { updateAction } from "../../helpers/updateActions";
const baseURL = process.env.REACT_APP_BASE_URL;

export const LOGIN = "LOGIN";
export const LOADING_USER = "LOADING_USER";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GET_USER";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const USER_ERROR = "USER_ERROR";

export const doLogin = (user, history) => (dispatch) => {
  dispatch(updateAction(LOADING_USER, true));
  axios
    .post(`${baseURL}/api/auth/login`, user)
    .then((response) => {
      const { token, userId, username } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
      // payload currently is the token being saved as userId at the moment
      dispatch(updateAction(LOGIN));
      history.push("/offers/trade");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      let errorMessage = error.response.data;
      dispatch(updateAction(LOGIN_ERROR, errorMessage));
    })
    .finally(() => dispatch(updateAction(LOADING_USER, false)));
};

export const doRegister = (user, history) => (dispatch) => {
  dispatch(updateAction(LOADING_USER, true));
  axios
    .post(`${baseURL}/api/auth/register`, user)
    .then((response) => {
      console.log(response);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);
      dispatch(updateAction(LOGIN, token));
      history.push("/offers/trade");
    })
    .catch((error) => {
      console.log(error);
      let errorMessage = error.response.data;
      dispatch(updateAction(REGISTER_ERROR, errorMessage));
    })
    .finally(() => dispatch(updateAction(LOADING_USER, false)));
};

export const doLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(updateAction(LOGOUT));
  window.location.reload();
};
