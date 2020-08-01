import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import { updateAction } from "../../helpers/updateActions";

const baseURL = process.env.REACT_APP_BASE_URL;

export const FETCH_MY_MESSAGES = "FETCH_MY_MESSAGES";

export const fetchMyMessages = (id) => async (dispatch) => {
  try {
    const result = await axiosWithAuth().get(
      `${baseURL}/api/offers/offer/${id}`
    );

    dispatch(updateAction(FETCH_MY_MESSAGES, result.data));
  } catch (error) {
    console.log(error);
  }
};
