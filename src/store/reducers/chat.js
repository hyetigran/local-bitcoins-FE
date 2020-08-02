import * as types from "../actions/chatActions";

const initialState = {
  chatMessages: [],
  loadingMessages: false,
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MY_MESSAGES:
      return { ...state, chatMessages: action.payload };
    case types.CREATE_MESSAGE:
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload],
      };
    default:
      return state;
  }
}

export default chatReducer;
