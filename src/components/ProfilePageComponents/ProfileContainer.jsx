// import React from "react";
import Profile from "./Profile";
import { addPost, updateNewPostText } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
    isAuth: state.Auth.isAuth,
  };
};

export default compose( connect(mapStateToProps, {addPost, updateNewPostText}), withAuthRedirect )(Profile);;
