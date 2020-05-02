import React from "react";
import preloaderGif from "../../assets/preloader.gif"

let Preloader = () => { 
    return (
        <div className="preloader">
            <img src={preloaderGif} alt="beAble Preloader"/>
        </div>
    )
}

export default Preloader;