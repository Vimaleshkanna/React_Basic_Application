import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

//load user

export const loadUser = (username, password) => async (dispatch) => {
  try {
    const user = { username, password };
    await fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((result) => getCurrentUser(user, result))
      .then((Data) =>
        dispatch({
          type: USER_LOADED,
          payload: Data,
        })
      );
  } catch (err) {
    //console.log(err);
  }
};

//register user
export const register = (formData) => async (dispatch) => {
  try {
    await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(
      dispatch({
        type: REGISTER_SUCCESS,
        payload: formData,
      })
    );
    // dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => alert(error));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
//get current user

const getCurrentUser = (formData, result) => {
  var found = false;
  for (var i = 0; i < result.length; i++) {
    if (result[i].username == formData.username) {
      if (result[i].password == formData.password) {
        found = true;
        break;
      }
    }
  }
  if (found) {
    //alert(formData);
    return formData;
  } else {
    throw new Error("UserName or Password are incorrect");
  }
};

//login user
export const login = (formData) => async (dispatch) => {
  try {
    await fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((result) => getCurrentUser(formData, result))
      .then((Data) =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: Data,
        })
      );
    // dispatch(loadUser());
  } catch (err) {
    alert(err);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//logout user
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
