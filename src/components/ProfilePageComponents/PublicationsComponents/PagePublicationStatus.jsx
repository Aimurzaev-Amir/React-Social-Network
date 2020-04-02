import React from "react";
import stl from "./Publications.module.css"

let PagePublicationStatus = () => {
    return(
        <div className={stl.publicationsStatus}>
        <div className={stl.publicationInfo}>
          <h4>Amir</h4>
          <p>Sometime ago</p>
        </div>
        <div className={stl.publicationStatusCircle}></div>
      </div>
    )
}

export default PagePublicationStatus;