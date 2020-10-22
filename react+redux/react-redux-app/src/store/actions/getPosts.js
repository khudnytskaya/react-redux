import {
    POSTS_LOADING,
    POSTS_SUCCESS,
    POSTS_FAIL,
    POSTS_STOP,
  } from "../types/posts";
   import { readPosts } from "../../api/posts";
  
  export const getPosts = (userId) => (dispatch) => {
    dispatch({ type: POSTS_LOADING });
    return readPosts(userId)
      .then((posts) => {
        dispatch({ type: POSTS_SUCCESS, payload: posts });
      })
      .catch(() => {
        dispatch({ type: POSTS_FAIL });
      })
      .finally(() => {
        dispatch({ type: POSTS_STOP });
      });
  };
  