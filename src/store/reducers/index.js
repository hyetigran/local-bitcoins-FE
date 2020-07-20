import { combineReducers } from "redux";

import auth from "./auth";
import orders from "./orders";
import myOffers from "./myOffers";

export default combineReducers({
  auth,
  myOffers,
  orders,
});
