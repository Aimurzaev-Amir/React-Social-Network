import { AuthAPI } from "../API/api";

const setUserAuthType = "SET_USER_AUTH";
const inputErrorType = "INPUT-ERROR";
const captchaType = "CAPTCHA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  error: "",
  captcha: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserAuthType:
      return {
        ...state,
        userId: action.userID,
        login: action.login,
        email: action.email,
        isAuth: action.isAuth,
      };
    case inputErrorType:
      return {
        ...state,
        error: action.error,
      };
    case captchaType:
      return {
        ...state,
        captcha: action.captcha,
      };
    default:
      return state;
  }
};

export const setUserAuth = (userID, login, email, isAuth) => {
  return {
    type: setUserAuthType,
    userID,
    login,
    email,
    isAuth,
  };
};
export const inputError = (error) => {
  return {
    type: inputErrorType,
    error,
  };
};
export const setCaptcha = (captcha) => {
  return {
    type: captchaType,
    captcha,
  };
};
//Thunks
export const Auth = () => {
  return (dispatch) => {
    AuthAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        dispatch(
          setUserAuth(data.data.id, data.data.login, data.data.email, true)
        );
      }
    });
  };
};
export const setAuth = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    AuthAPI.postAuth(email, password, rememberMe, captcha).then(
      (data) => {
        if (data.resultCode === 0) {
          dispatch(inputError(""));
          dispatch(setCaptcha(""));
          dispatch(Auth());
        }
        if (data.resultCode === 1) {
          dispatch(inputError(data.messages));
        }
        if (data.resultCode === 10) {
          AuthAPI.getCaptcha().then((data) => {
            dispatch(setCaptcha(data.url));
          });
        }
      }
    );
  };
};
export const deleteAuth = () => {
  return (dispatch) => {
    AuthAPI.deleteAuth().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false));
      }
    });
  };
};
export default AuthReducer;
