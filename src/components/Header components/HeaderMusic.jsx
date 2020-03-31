import React from "react";
import Prev from "../../img/prevMusic.svg";
import Play from "../../img/pauseMusic.svg";
import Next from "../../img/nextMusic.svg";

let HeaderMusic = () => {
    return (
        <div className="headerMusic">
            <img src={Prev} alt="Previus song on be able"/>
            <img src={Play} alt="Play song on be able"/>
            <img src={Next} alt="Next song on be able"/>
            <h4>Billie Eilish - bad guy</h4>
        </div>
    );
}

export default HeaderMusic;