import React from "react";
import PagePublicationStatus from "./PagePublicationStatus";
import PagePublicationPhoto from "./PagePublicationPhoto";
import PagePublicationDescription from "./PagePublicationDescription";

let PagePublication = () => {
  return (
    <div className="publications">
      <PagePublicationStatus />
      <PagePublicationPhoto />
      <PagePublicationDescription />
    </div>
  );
};

export default PagePublication;
