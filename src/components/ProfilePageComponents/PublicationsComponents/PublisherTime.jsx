import React from "react";
import stl from "./Publications.module.css";

let PublishedTime = (props) => {
  return (
    <div className={stl.publishedTime}>
      <p>Published a photo about {props.Time} ago</p>
    </div>
  );
};

export default PublishedTime;
