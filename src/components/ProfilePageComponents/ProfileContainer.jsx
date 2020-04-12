// import React from "react";
import Profile from "./Profile";
import { addPostActionCreator,updateNewPostTextActionCreator } from "../../Redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostActionCreator());
    },
    updateNewPostText(text) {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
