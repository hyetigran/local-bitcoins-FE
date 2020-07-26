import axios from "axios";
import { updateAction } from "../../helpers/updateActions";
import { dataMapper } from "../../helpers/dataMapper";

const baseURL = process.env.REACT_APP_BASE_URL;

export const FETCH_ALL_OFFERS = "FETCH_ALL_OFFERS";

export const fetchAllOffers = () => async (dispatch) => {
  try {
    const result = await axios.get(`${baseURL}/all-offers`);
    let updatedData = result.data.map((offer) => dataMapper(offer));
    dispatch(updateAction(FETCH_ALL_OFFERS, updatedData));
  } catch (error) {
    console.log(error);
  }
};
