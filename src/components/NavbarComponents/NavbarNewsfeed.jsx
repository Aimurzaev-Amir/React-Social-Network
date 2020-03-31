import React from "react";
import NewsfeedIcon from "../../img/Navbar/Newsfeed.svg";

let Newsfeeds = () => {
  return (
    <div className="navbarItem newsfeed">
      <img src={NewsfeedIcon} alt="" />
      <p>Newsfeed</p>
    </div>
  );
};

export default Newsfeeds;
