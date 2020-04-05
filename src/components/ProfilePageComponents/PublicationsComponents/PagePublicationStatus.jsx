import React from "react";
import stl from "./Publications.module.css";

let PagePublicationStatus = (props) => {
  return (
    <div className={stl.publicationsStatus}>
        <div className={stl.publicationInfo}>
          <h4>{props.userName}</h4>
          <p>{props.when}</p>
        </div>
        <div className={stl.publicationStatusCircle}></div>
      </div>
  );
};

export default PagePublicationStatus;
