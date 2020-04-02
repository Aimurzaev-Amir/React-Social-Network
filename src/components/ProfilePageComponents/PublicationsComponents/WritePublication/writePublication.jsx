import React from "react";
import WritePublicationPhoto from "./writePublicationPhoto";
import WritePublicationInput from "./WritePublicationInput";
import WritePublicationAdditionals from "./WritePublicationAdditionals";
import Publicbtn from "../Publicbtn";

let WritePublication = () => {
  return(
    <div className="writePublicationBg">
      <div className="writePublication">
        <WritePublicationPhoto />
        <WritePublicationInput />
        <WritePublicationAdditionals />
        <Publicbtn />
      </div>
    </div>
  )
}

export default WritePublication;
