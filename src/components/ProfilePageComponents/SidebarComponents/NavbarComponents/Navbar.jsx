import React from "react";
import MyPage from "./NavbarMyPage";
import Newsfeeds from "./NavbarNewsfeed";
import Friend from "./NavbarFriends";
import Group from "./NavbarGroups";
import Photo from "./NavbarPhotos";
import Songs from "./NavbarMusic";
import Videos from "./NavbarVideos";
import Events from "./NavbarEvents";
import Blog from "./NavbarBlog";
import stl from "../Sidebar.module.css";
import NavbarMessages from "./NavbarMessages";

let Navbar = () => {
  return ( 
    <div className={stl.navbar}>
      <MyPage />
      <Newsfeeds />
      <NavbarMessages /> 
      <Friend /> 
      <Group />
      <Photo />
      <Songs />
      <Videos />
      <Events />
      <Blog />
    </div>
  );
};

export default Navbar;
