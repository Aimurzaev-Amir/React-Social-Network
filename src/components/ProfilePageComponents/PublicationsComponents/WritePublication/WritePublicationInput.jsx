import React from "react";
import stl from "../Publications.module.css";
import { Field } from "redux-form";

let WritePublicationInput = (props) => {
  return (
    <div className={stl.writePublicationInput}>
      <Field
        placeholder="Write what you wish"
        name="newPostText"
        component="input"
      />
    </div>
  );
};

export default WritePublicationInput;
