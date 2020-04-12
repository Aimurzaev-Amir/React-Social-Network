import React from "react";
import Profile from "./Profile";
import {  addPostActionCreator, updateNewPostTextActionCreator, } from "../../Redux/profileReducer";
import StoreContext from "../../StoreContext";

let ProfileContainer = () => {
  return (
    <StoreContext.Consumer>
      { (store) => {
        let newPostText = store.getState().profilePage.newPostText;
        let posts = store.getState().profilePage.posts;
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let updateNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
      return (
        <Profile newPostText={newPostText} posts={posts} updateNewPostText={updateNewPostText} addPost={addPost} /> 
      )}}
    </StoreContext.Consumer>
    
  );
};

export default ProfileContainer;
