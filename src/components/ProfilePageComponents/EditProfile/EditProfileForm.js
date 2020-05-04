import React from "react";
import { Field, reduxForm } from "redux-form";
import Component from "../../../common/FormControls/FormControls";
import { compose } from "redux";
import stl from "./EditProfile.module.css";

const EditProfileForm = (props) => {
  return (
    <div className={stl.editForm}>
      <form onSubmit={props.handleSubmit}>
        <div className={stl.field}>
          <p>Name:</p>
          <Field
            type="input"
            placeholder="Your name"
            name="fullName"
            component={Component}
          />
        </div>
        <div className={stl.field}>
          <p>About me:</p>
          <Field
            type="input"
            placeholder="Your name"
            name="aboutMe"
            component={Component}
          />
        </div>
        <div className={stl.field}>
          <p>Speciality:</p>
          <Field
            type="input"
            placeholder="Your name"
            name="lookingForAJobDescription"
            component={Component}
          />
        </div>
        <div className={stl.field}>
          <p>Looking for a job:</p>
          <Field type="checkbox" name="rememberMe" component="input" />
        </div>
        <div className={stl.field}>
          <p>Contacts:</p>
          <div className={stl.contacts}>
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <div key={key}>
                  {key}:
                  {
                    <Field
                      type="input"
                      placeholder={key}
                      name={"contacts." + key}
                      component={Component}
                    />
                  }
                </div>
              );
            })}
          </div>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default compose(reduxForm({ form: "editProfile" }))(EditProfileForm);
