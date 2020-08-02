import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import { updateAction } from "../../helpers/updateActions";

const baseURL = process.env.REACT_APP_BASE_URL;

export const FETCH_MY_MESSAGES = "FETCH_MY_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";

export const fetchMyMessages = (chatId) => async (dispatch) => {
  try {
    const result = await axiosWithAuth().get(`${baseURL}/api/chat/${chatId}`);

    dispatch(updateAction(FETCH_MY_MESSAGES, result.data));
  } catch (error) {
    console.log(error);
  }
};

export const createMessage = (chatBody) => async (dispatch) => {
  try {
    const result = await axiosWithAuth().post(
      `${baseURL}/api/chat/${chatBody.chatId}`,
      chatBody
    );

    dispatch(updateAction(CREATE_MESSAGE, result.data));
  } catch (error) {
    console.log(error);
  }
};
