import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { withRouter } from "react-router-dom";
import Preloader from "../../common/preloader/Preloader";
import { setProfile, getUserStatus, updateUserStatus} from "../../Redux/profileReducer";
import { compose } from "redux";

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    if (!this.state.userId) {
      return <Preloader />;
    }
    this.props.setProfile(this.state.userId);
    this.props.getUserStatus(this.state.userId)
  }
  state = {
    userId: this.props.match.params.userId,
  }
  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.userId !== this.props.match.params.userId){
  //     this.setState({
  //       userId: this.props.match.params.userId,
  //     })
  //   }
  // }
  render() {
    return (
      <ProfileInfo
        profile={this.props.profile}
        // editMode={this.state.editMode}
        // localStatus={this.state.localStatus}
        // SaveStatus={this.SaveStatus}
        // ChangeStatus={this.ChangeStatus}
        status={this.props.status}
        // onStatusChange={this.props.onStatusChange}
        updateUserStatus = {this.props.updateUserStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    openedProfileId: state.profilePage.openedProfileId,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, { setProfile, getUserStatus, updateUserStatus }),
  withRouter
)(ProfileInfoContainer);
