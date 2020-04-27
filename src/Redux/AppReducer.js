import { Auth } from "./AuthReducer";
const initializedSuccessType = "INITIALIZED-SUCCESS";

let initialState = {
  initialized: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case initializedSuccessType:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const initializedSuccess = () => {
  return {
    type: initializedSuccessType,
  };
};

//thunk
export const initializedApp = () => {
  return (dispatch) => {
    let promise = dispatch(Auth());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default AppReducer;
