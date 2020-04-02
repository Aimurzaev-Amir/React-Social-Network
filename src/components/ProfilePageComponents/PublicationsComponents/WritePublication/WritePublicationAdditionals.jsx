import React from "react";
import Compose from "../PublicationsImg/writePublication/compose1.svg";
import AddPhoto from "../PublicationsImg/writePublication/gallery2.svg";
import AddVideo from "../PublicationsImg/writePublication/video-camera3.svg";
import AddMapPoint from "../PublicationsImg/writePublication/map4.svg";

let WritePublicationAdditionals = () => {
    return(
        <div className="writePublicationAdditionals">
            <img src={Compose} alt="be able compose publication"/>
            <img src={AddPhoto} alt="be able add images to publication"/>
            <img src={AddVideo} alt="be able add video to publication"/>
            <img src={AddMapPoint} alt="be able add map point publication"/>
        </div>
    )
}

export default WritePublicationAdditionals;