import React from "react";
import Logo from "./HeaderImg/logo.svg"

let HeaderLogo = () => {
    return (
        <div>
            <a href="#s"><img src={Logo} alt="be able logo"/></a>
        </div>
    );
}

export default HeaderLogo;