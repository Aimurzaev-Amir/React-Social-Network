import React from "react";
import stl from "./Publications.module.css";

let PagePublicationUser = (props) => {
  return (
    <div className="publicationUserStatus">
      <h4 className={stl.usersNameComment}>{props.userName}</h4>
      <p className={stl.userFollowingStatus}>following</p>
    </div>
  );
};

export default PagePublicationUser;
