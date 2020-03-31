import React from "react";
import HeaderLogo from "./Header components/HeaderLogo";
import HeaderSearch from "./Header components/HeaderSearch";
import HeaderNotifications from "./Header components/HeaderNotifications";
import HeaderMusic from "./Header components/HeaderMusic";
import HeaderUser from "./Header components/HeaderUser";


let Header = () => {
  return (
    <header>
      <div className="wrapper header-flex-space">
        <div className="header-flex">
          <HeaderLogo />
        <HeaderSearch />
        <HeaderNotifications />
        <HeaderMusic />
        </div>
        <div>
          <HeaderUser />
      </div>
      </div>
        
    </header>
  );
};

export default Header;
