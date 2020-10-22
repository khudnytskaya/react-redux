import {
    POSTS_LOADING,
    POSTS_SUCCESS,
    POSTS_FAIL,
    POSTS_STOP,
  } from "../types/posts";
  
  const initialState = {
    loading: false,
    posts: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case POSTS_LOADING:
        return {
          ...state,
          loading: true,
        };
      case POSTS_SUCCESS:
        return {
          loading: false,
          posts: action.payload,
        };
      case POSTS_STOP:
        return {
          ...state,
          loading: false,
        };
      case POSTS_FAIL:
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  }
  