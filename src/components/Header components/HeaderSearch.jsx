import React from "react";
import Search from "../../img/search1(black).svg";

let HeaderSearch = () => {
    return (
        <div className="headerSearch">
            <input className="searchInput" type="text" placeholder="Search here people or tags"/>
            <img src={Search} alt=""/>
        </div>
            
    );
}

export default HeaderSearch;