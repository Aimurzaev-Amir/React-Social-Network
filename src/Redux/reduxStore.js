import { createStore, combineReducers } from "redux";
import profileReducer from "../Redux/profileReducer"
import messagesReducer from "../Redux/messagesReducer"
import sidebarReducer from "../Redux/sidebarReducer"

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer, 
    sidebar : sidebarReducer,
});

let store = createStore(reducers);


export default store;