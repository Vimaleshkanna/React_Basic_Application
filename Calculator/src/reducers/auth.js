import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  LOGOUT,
} from "../actions/types";

const initialState = {
  isRegister: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isRegister: true,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        isRegister: false,
      };
    case LOGOUT:
      return {
        ...state,
        isRegister: false,
        user: null,
      };
    default:
      return state;
  }
}
