import React from "react";
import stl from "../Publications.module.css"

let WritePublicationInput = (props) => {
  return (
    <div className={stl.writePublicationInput}>
      <input ref={props.NewPostElement} type="text" placeholder="Write what you wish" />
    </div>
  );
};

export default WritePublicationInput;
