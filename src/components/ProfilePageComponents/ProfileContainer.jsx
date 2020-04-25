// import React from "react";
import Profile from "./Profile";
import { addPost } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    isAuth: state.Auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { addPost }),
  withAuthRedirect
)(Profile);
