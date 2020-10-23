import {
  COMMENTS_LOADING,
  COMMENTS_SUCCESS,
  COMMENTS_FAIL,
  COMMENTS_STOP,
  COMMENTS_DELETE,
  COMMENTS_UPDATE
} from "../types/comments";

const initialState = {
  loading: false,
  comments: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMMENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case COMMENTS_SUCCESS:
      return {
        loading: false,
          comments: action.payload,
      };
    case COMMENTS_STOP:
      return {
        ...state,
        loading: false,
      };
    case COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case COMMENTS_DELETE: {
      const id = action.payload;
      const commentIndex = state.comments.findIndex((comment) => comment.id === id);
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, commentIndex),
          ...state.comments.slice(commentIndex + 1),
        ],
      };
    }
    case COMMENTS_UPDATE: {
      const updatedComment = action.payload;
      const commentIndex = state.comments.findIndex(
        (comment) => comment.id === updatedComment.id
      );
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, commentIndex),
          updatedComment,
          ...state.comments.slice(commentIndex + 1),
        ],
      };
    }
    default:
      return state;
  }
}