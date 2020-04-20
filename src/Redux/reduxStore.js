import { createStore, combineReducers } from "redux";
import profileReducer from "../Redux/profileReducer"
import messagesReducer from "../Redux/messagesReducer"
import sidebarReducer from "../Redux/sidebarReducer"
import friendsReducer from "./friendsReducer";
import AuthReducer from "./AuthReducer";

let reducers = combineReducers({ 
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    friendsPage : friendsReducer, 
    sidebar : sidebarReducer,
    Auth: AuthReducer,
});

let store = createStore(reducers);


export default store;