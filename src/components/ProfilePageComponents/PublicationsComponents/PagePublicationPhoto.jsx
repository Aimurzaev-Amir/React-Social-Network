import React from "react";
import stl from "./Publications.module.css";

let PagePublicationPhoto = (props) => {
  return (
    <div className={stl.publicationPhoto}>
          <img src={props.PublicationPhoto} alt="be able user publication" />
        </div>
  );
};

export default PagePublicationPhoto;
