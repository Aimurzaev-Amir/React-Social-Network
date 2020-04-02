import React from "react";
import PublicationPhoto from "./PublicationsImg/PublishedPhoto.jpg";
import stl from "./Publications.module.css"

let PagePublicationPhoto = () => {
    return(
        <div className={stl.publicationPhoto}>
        <img src={PublicationPhoto} alt="be able user publication" />
      </div>
    )
}

export default PagePublicationPhoto;