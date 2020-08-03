import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import { updateAction } from "../../helpers/updateActions";

const baseURL = process.env.REACT_APP_BASE_URL;

export const FETCH_MY_MESSAGES = "FETCH_MY_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";

export const fetchMyMessages = (orderId) => async (dispatch) => {
  try {
    const result = await axiosWithAuth().get(`${baseURL}/api/chat/${orderId}`);
    dispatch(updateAction(FETCH_MY_MESSAGES, result.data));
  } catch (error) {
    console.log(error);
  }
};

export const createMessage = (chatBody) => async (dispatch) => {
  try {
    const result = await axiosWithAuth().post(
      `${baseURL}/api/chat/${chatBody.order_id}`,
      chatBody
    );
    console.log("create message", result);

    dispatch(updateAction(CREATE_MESSAGE, ...result.data));
  } catch (error) {
    console.log(error);
  }
};
