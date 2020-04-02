import React from "react";
import MyPage from "./NavbarMyPage";
import Newsfeeds from "./NavbarNewsfeed";
import Friend from "./NavbarFriends";
import Group from "./NavbarGroups";
import Photo from "./NavbarPhotos";
import Songs from "./NavbarMusic";
import Videos from "./NavbarVideos";
import Eventss from "./NavbarEvents";
import Blog from "./NavbarBlog";
import stl from "../Sidebar.module.css";

let Navbar = () => {
  return (
    <div className={stl.navbar}>
      <MyPage />
      <Newsfeeds />
      <Friend />
      <Group />
      <Photo />
      <Songs />
      <Videos />
      <Eventss />
      <Blog />
    </div>
  );
};

export default Navbar;
