// import React from "react";
import SidebarContent from "../SidebarContent";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    FriendsSideBar: state.sidebar.FriendsSideBar,
    GroupsSidebar: state.sidebar.GroupsSidebar,
    userId: state.Auth.userId,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {

  };
};

const SidebarContentContainer = connect( mapStateToProps, mapDispatchToProps )(SidebarContent);

export default SidebarContentContainer;
