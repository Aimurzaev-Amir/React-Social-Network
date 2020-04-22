import { AuthAPI } from "../API/api";

const setUserAuthType = "SET_USER_AUTH";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserAuthType:
      return {
        ...state,
        userId: action.userID,
        login: action.login,
        email: action.email,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setUserAuth = (userID, login, email) => {
  return {
    type: setUserAuthType,
    userID,
    login,
    email,
  };
};

//Thunks
export const Auth = () => {
  return (dispatch) => {
    AuthAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserAuth(data.data.id, data.data.login, data.data.email));
      }
    });
  };
};

export default AuthReducer;
