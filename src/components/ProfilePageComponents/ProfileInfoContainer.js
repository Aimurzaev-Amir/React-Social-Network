import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { withRouter } from "react-router-dom";
import {
  setProfile,
  getUserStatus,
  updateUserStatus,
} from "../../Redux/profileReducer";
import { compose } from "redux";

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.setProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      let userId = this.props.match.params.userId;
      if (!userId) {
        userId = this.props.userId;
      }
      this.props.setProfile(userId);
      this.props.getUserStatus(userId);
    }
  }
  render() {
    return (
      <ProfileInfo
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.Auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, { setProfile, getUserStatus, updateUserStatus }),
  withRouter
)(ProfileInfoContainer);
