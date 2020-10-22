import {
    USERS_FAIL,
    USERS_LOADING,
    USERS_STOP,
    USERS_SUCCESS,
  } from "../types/users";
  import { readUsers } from "../../api/users";
  
  export const getUsers = () => (dispatch) => {
    dispatch({ type: USERS_LOADING });
    return readUsers()
      .then((users) => {
        dispatch({ type: USERS_SUCCESS, payload: users });
      })
      .catch(() => {
        dispatch({ type: USERS_FAIL });
      })
      .finally(() => {
        dispatch({ type: USERS_STOP });
      });
  };