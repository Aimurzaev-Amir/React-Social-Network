import React from "react";
import HeaderLogo from "./ProfilePageComponents/HeaderComponents/HeaderLogo";
import HeaderSearch from "./ProfilePageComponents/HeaderComponents/HeaderSearch";
import HeaderNotifications from "./ProfilePageComponents/HeaderComponents/HeaderNotifications";
import HeaderMusic from "./ProfilePageComponents/HeaderComponents/HeaderMusic";
import HeaderUser from "./ProfilePageComponents/HeaderComponents/HeaderUser";


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
