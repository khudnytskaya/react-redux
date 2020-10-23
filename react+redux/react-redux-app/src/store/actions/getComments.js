import {
    COMMENTS_LOADING,
    COMMENTS_SUCCESS,
    COMMENTS_FAIL,
    COMMENTS_STOP,
  } from "../types/comments";
   import { readComments } from "../../api/comments";
  
  export const getComments = (postId) => (dispatch) => {
    dispatch({ type: COMMENTS_LOADING });
    return readComments(postId)
      .then((comments) => {
        dispatch({ type: COMMENTS_SUCCESS, payload: comments });
      })
      .catch(() => {
        dispatch({ type: COMMENTS_FAIL });
      })
      .finally(() => {
        dispatch({ type: COMMENTS_STOP });
      });
  };
  