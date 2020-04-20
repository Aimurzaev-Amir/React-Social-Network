// import React from "react";
import Profile from "./Profile";
import { addPost, updateNewPostText } from "../../Redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

const ProfileContainer = connect(mapStateToProps, {addPost, updateNewPostText})(Profile);

export default ProfileContainer;
