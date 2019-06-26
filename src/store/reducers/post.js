import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  posts: [],
  loading: false,
  posted: false
};

const postInit = (state, action) => {
  return updateObject(state, { posted: false });
};

const createPostStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const createPostSuccess = (state, action) => {
  const newPost = updateObject(action.postData, { id: action.postId });
  return updateObject(state, {
    loading: false,
    posted: true,
    posts: state.posts.concat(newPost)
  });
};

const createPostFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchPostsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    loading: false
  });
};

const fetchPostsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_INIT:
      return postInit(state, action);
    case actionTypes.CREATE_POST_START:
      return createPostStart(state, action);
    case actionTypes.CREATE_POST_SUCCESS:
      return createPostSuccess(state, action);
    case actionTypes.CREATE_POST_FAIL:
      return createPostFail(state, action);
    case actionTypes.FETCH_POSTS_START:
      return fetchPostsStart(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action);
    case actionTypes.FETCH_POSTS_FAIL:
      return fetchPostsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
