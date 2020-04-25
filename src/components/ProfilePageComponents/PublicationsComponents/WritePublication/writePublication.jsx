import React from "react";
import WritePublicationPhoto from "./writePublicationPhoto";
import WritePublicationInput from "./WritePublicationInput";
import WritePublicationAdditionals from "./WritePublicationAdditionals";
import Publicbtn from "./Publicbtn";
import stl from "../Publications.module.css";
import { reduxForm } from "redux-form";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";

let WritePublication = (props) => {
  return (
    <div className={stl.writePublicationBg}>
      <form className={stl.writePublication} onSubmit={props.handleSubmit}>
        <WritePublicationPhoto />
        <WritePublicationInput />
        <WritePublicationAdditionals />
        <Publicbtn />
      </form>
    </div>
  );
};

const PostReduxForm = reduxForm({ form: "Posts" })(WritePublication);

export default PostReduxForm;
