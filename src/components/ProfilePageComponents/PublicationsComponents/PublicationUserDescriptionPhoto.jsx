import React from "react";
import stl from "./Publications.module.css";

let PublicationUserDescriptionPhoto = (props) => {
  return (
    <div className={stl.publicationUserDescription}>
      <img
        src={props.UserComment1}
        alt="be able user publication description"
      />
    </div>
  );
};

export default PublicationUserDescriptionPhoto;
