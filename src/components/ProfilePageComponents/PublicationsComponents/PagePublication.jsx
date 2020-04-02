import React from "react";
import PagePublicationStatus from "./PagePublicationStatus";
import PagePublicationPhoto from "./PagePublicationPhoto";
import PagePublicationDescription from "./PagePublicationDescription";
import stl from "./Publications.module.css"

let PagePublication = () => {
  return (
    <div className={stl.publications}>
      <PagePublicationStatus />
      <PagePublicationPhoto />
      <PagePublicationDescription />
    </div>
  );
};

export default PagePublication;
