import { COMMENTS_DELETE, COMMENTS_LOADING, COMMENTS_STOP } from "../types/comments";
import { removeComment } from "../../api/removeComment";

export const deleteComment = (id)=> (dispatch) => {
  dispatch({ type: COMMENTS_LOADING });
  removeComment(id)
    .then((response) => {
      dispatch({ type: COMMENTS_DELETE, payload: response.id });
    })
    .finally(() => {
      dispatch({ type: COMMENTS_STOP });
    });
};
