import React from "react";
import PhotosIcon from "../../img/Navbar/images.svg";

let Photo = () => {
  return (
    <div className="navbarItem photos">
          <img src={PhotosIcon} alt="" />
          <p>Photos</p>
        </div>
  );
};

export default Photo;
