import { createStore, combineReducers } from "redux";
import profileReducer from "../Redux/profileReducer"
import messagesReducer from "../Redux/messagesReducer"
import sidebarReducer from "../Redux/sidebarReducer"
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({ 
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    friendsPage : friendsReducer, 
    sidebar : sidebarReducer,
});

let store = createStore(reducers);


export default store;