import React from "react";
import WritePublication from "./PublicationsComponents/writePublication";
import WritePublicationInput from "./PublicationsComponents/WritePublicationInput";
import WritePublicationAdditionals from "./PublicationsComponents/WritePublicationAdditionals";
import Publicbtn from "./PublicationsComponents/Publicbtn";

let Publications = () => {
  return (
    <div className="writePublicationBg">
      <div className="writePublication">
        <WritePublication />
        <WritePublicationInput />
        <WritePublicationAdditionals />
        <Publicbtn />
      </div>
    </div>
  );
};

export default Publications;
