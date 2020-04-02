import React from "react";
import Prev from "./HeaderImg/prevMusic.svg";
import Play from "./HeaderImg/pauseMusic.svg";
import Next from "./HeaderImg/nextMusic.svg";

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