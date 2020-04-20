import React from "react";
import HeaderLogo from "./HeaderComponents/HeaderLogo";
import HeaderSearch from "./HeaderComponents/HeaderSearch";
import HeaderNotifications from "./HeaderComponents/HeaderNotifications";
import HeaderMusic from "./HeaderComponents/HeaderMusic";
import HeaderUser from "./HeaderComponents/HeaderUser";


let Header = (props) => {
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
          <HeaderUser isAuth={props.isAuth} login={props.login} profile={props.profile}/>
      </div>
      </div>
        
    </header>
  );
};

export default Header;
