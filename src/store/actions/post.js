import * as actionTypes from "./actionTypes";
import axios from "../../axios-posts";

export const createPostSuccess = (id, postData) => {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    postId: id,
    postData: postData
  };
};
