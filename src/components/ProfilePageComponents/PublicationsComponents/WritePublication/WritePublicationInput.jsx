import React from "react";
import stl from "../Publications.module.css"

let WritePublicationInput = () => {
  return (
    <div className={stl.writePublicationInput}>
      <input type="text" placeholder="Write what you wish" />
    </div>
  );
};

export default WritePublicationInput;
