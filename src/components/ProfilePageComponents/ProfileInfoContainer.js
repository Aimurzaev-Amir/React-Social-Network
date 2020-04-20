import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import Axios from "axios";
import { setUserProfile } from "../../Redux/profileReducer";
import { withRouter } from "react-router-dom";
import Preloader from "../../common/preloader/Preloader";

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      return <Preloader />;
    }
    Axios.get(
      "https://social-network.samuraijs.com/api/1.0/profile/" + userId
    ).then((response) => {
      this.props.setUserProfile(response.data);
    });
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

export default connect(mapStateToProps, { setUserProfile })(setUserIdToURL);
