import { COMMENTS_UPDATE, COMMENTS_LOADING, COMMENTS_STOP } from "../types/comments";
import { updateCommentInfo } from "../../api/updateCommentInfo";

export const updateComment = (comment) => (dispatch) => {
  dispatch({ type: COMMENTS_LOADING });
  updateCommentInfo(comment)
    .then((response) => {
      dispatch({ type: COMMENTS_UPDATE, payload: response.comment });
    })
    .finally(() => {
      dispatch({ type: COMMENTS_STOP });
    });
};
