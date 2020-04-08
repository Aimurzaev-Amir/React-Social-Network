import React from "react";
import stl from "../Publications.module.css";

let WritePublicationInput = (props) => {
  return (
    <div className={stl.writePublicationInput}>
      <input
        onChange={props.onPostChange}
        value={props.newPostText}
        placeholder="Write what you wish"
      />
    </div>
  );
};

export default WritePublicationInput;
