import React from "react";
import Prev from "./HeaderImg/prevMusic.svg";
import Play from "./HeaderImg/pauseMusic.svg";
import Next from "./HeaderImg/nextMusic.svg";
import stl from "./Header.module.css";

let HeaderMusic = () => {
    return (
        <div className={stl.headerMusic}>
            <img src={Prev} alt="Previus song on be able"/>
            <img src={Play} alt="Play song on be able"/>
            <img src={Next} alt="Next song on be able"/>
            <h4>Billie Eilish - bad guy</h4>
        </div>
    );
}

export default HeaderMusic;