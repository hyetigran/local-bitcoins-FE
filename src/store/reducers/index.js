import { combineReducers } from "redux";

import auth from "./auth";
import myOffers from "./myOffers";

export default combineReducers({
  auth,
  myOffers,
});
