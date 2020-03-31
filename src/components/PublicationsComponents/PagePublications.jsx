import React from "react";
import PagePublicationStatus from "./PagePublicationStatus";
import PagePublicationPhoto from "./PagePublicationPhoto";
import PagePublicationDescription from "./PagePublicationDescription";

let PagePublications = () => {
  return (
    <div className="publications">
      <PagePublicationStatus />
      <PagePublicationPhoto />
      <PagePublicationDescription />
    </div>
  );
};

export default PagePublications;
