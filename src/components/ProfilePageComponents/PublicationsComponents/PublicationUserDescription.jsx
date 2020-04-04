import React from "react";
import UserComment1 from "./PublicationsImg/UserComment1.png";
import stl from "./Publications.module.css";

let PublicationUserDescription = () => {
  return (
    <div className={stl.publicationUserDescription}>
      <img src={UserComment1} alt="" />
    </div>
  );
};

export default PublicationUserDescription;
