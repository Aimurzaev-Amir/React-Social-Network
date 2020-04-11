import React from "react";
import Profile from "./Profile";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../Redux/profileReducer";

let ProfileContainer = (props) => {
  let newPostText = props.store.getState().profilePage.newPostText;
  let posts = props.store.getState().profilePage.posts;
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <Profile
      newPostText={newPostText}
      posts={posts}
      updateNewPostText={updateNewPostText}
      addPost={addPost}
    />
  );
};

export default ProfileContainer;
