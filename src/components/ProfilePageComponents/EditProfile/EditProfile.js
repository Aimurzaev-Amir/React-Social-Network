import React from "react";
import stl from "./EditProfile.module.css";
import EditProfileForm from "./EditProfileForm";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setProfile,
  commitProfileChanges,
} from "../../../Redux/profileReducer";
import { withAuthRedirect } from "../../../hoc/withRedirect";
import Preloader from "../../../common/preloader/Preloader";

const EditProfile = (props) => {
  if (!props.profile) {
    props.setProfile(props.userId);
    return <Preloader />;
  }

  const onSubmit = (formData) => {
    props.commitProfileChanges(formData);
    // console.log(formData)
  };
  return (
    <div className={stl.settingsGrid}>
      <div className={stl.settings}>
        <h1>Settings</h1>
        <EditProfileForm
          profile={props.profile}
          initialValues={props.profile}
          onSubmit={onSubmit}
        />
        <p>{props.savedMessage}</p>
      </div>
      <div>
        <div className={stl.settingsBlock}>Main</div>
        <div className={stl.settingsBlock}>Contacts</div>
        <div className={stl.settingsBlock}>Career</div>
        <div className={stl.settingsBlock}>Education</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.Auth.userId,
    savedMessage: state.profilePage.savedMessage,
  };
};
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { setProfile, commitProfileChanges })
)(EditProfile);
