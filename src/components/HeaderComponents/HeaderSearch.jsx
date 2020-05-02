import React from "react";
import Search from "./HeaderImg/search1Black.svg"; 
import stl from "./Header.module.css";

let HeaderSearch = () => {
    return (
        <div className={stl.headerSearch}>
            <input className={stl.searchInput} type="text" placeholder="Search here people or tags"/>
            <img src={Search} alt=""/>
        </div>
            
    );
}

export default HeaderSearch;