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

let Navbar = () => {
  return (
    <div className="navbar">
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
