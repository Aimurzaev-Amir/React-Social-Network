import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { withRouter } from "react-router-dom";
import Preloader from "../../common/preloader/Preloader";
import {setProfile} from "../../Redux/profileReducer"

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      return <Preloader />; 
    }
    this.props.setProfile(userId)
    // ProfileAPI.getProfile(userId).then((data) => {
    //   this.props.setUserProfile(data);
    // });
  }
  render() {
    return <ProfileInfo profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let setUserIdToURL = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, { setProfile })(setUserIdToURL);
