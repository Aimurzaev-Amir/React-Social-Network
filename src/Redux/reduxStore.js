import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "../Redux/profileReducer";
import messagesReducer from "../Redux/messagesReducer";
import sidebarReducer from "../Redux/sidebarReducer";
import friendsReducer from "./friendsReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import AppReducer from "./AppReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  sidebar: sidebarReducer,
  Auth: AuthReducer,
  form: formReducer,
  app: AppReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
