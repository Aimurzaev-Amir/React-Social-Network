import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { withRouter } from "react-router-dom";
import Preloader from "../../common/preloader/Preloader";
import {setProfile, setOpenedProfileId} from "../../Redux/profileReducer"

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    // this.props.setOpenedProfileId(this.props.match.params.userId)
    // if(!this.props.openedProfileId){
    //   return <Preloader />; 
    // }
    // this.props.setProfile(this.props.openedProfileId)
    let userId = this.props.match.params.userId;
    if (!userId) {
      return <Preloader />; 
    }
    this.props.setProfile(userId)
  }
  render() {
    return <ProfileInfo profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    openedProfileId: state.profilePage.openedProfileId
  };
};

let setUserIdFromURL = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, { setProfile, setOpenedProfileId })(setUserIdFromURL); 
