import * as actionTypes from "./actionTypes";
import axios from "../../axios-posts";

export const createPostSuccess = (id, postData) => {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    postId: id,
    postData: postData
  };
};

export const createPostFail = error => {
  return {
    type: actionTypes.CREATE_POST_FAIL,
    error: error
  };
};

export const createPostStart = () => {
  return {
    type: actionTypes.CREATE_POST_START
  };
};

export const createPost = (postData, token) => {
  return dispatch => {
    dispatch(createPostStart());
    axios
      .post("/posts.json?auth=" + token, postData)
      .then(response => {
        dispatch(createPostSuccess(response.data.name, postData));
      })
      .catch(error => {
        dispatch(createPostFail(error));
      });
  };
};

export const postInit = () => {
  return {
    type: actionTypes.POST_INIT
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: posts
  };
};

export const fetchPostsFail = error => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL,
    error: error
  };
};

export const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START
  };
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsStart());
    axios
      .get("/posts.json")
      .then(res => {
        const fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchPostsSuccess(fetchedPosts));
      })
      .catch(err => {
        dispatch(fetchPostsFail(err));
      });
  };
};
