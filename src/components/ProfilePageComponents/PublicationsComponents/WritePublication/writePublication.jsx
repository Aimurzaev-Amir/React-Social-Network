import React from "react";
import WritePublicationPhoto from "./writePublicationPhoto";
import WritePublicationInput from "./WritePublicationInput";
import WritePublicationAdditionals from "./WritePublicationAdditionals";
import Publicbtn from "../Publicbtn";
import stl from "../Publications.module.css"

let WritePublication = () => {
  return(
    <div className={stl.writePublicationBg}>
      <div className={stl.writePublication}>
        <WritePublicationPhoto />
        <WritePublicationInput />
        <WritePublicationAdditionals />
        <Publicbtn />
      </div>
    </div>
  )
}

export default WritePublication;
