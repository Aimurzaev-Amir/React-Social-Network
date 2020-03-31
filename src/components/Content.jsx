import React from "react";
import MyPage from "./NavbarComponents/NavbarMyPage";
import Newsfeeds from "./NavbarComponents/NavbarNewsfeed";
import Friend from "./NavbarComponents/NavbarFriends";
import Group from "./NavbarComponents/NavbarGroups";
import Photo from "./NavbarComponents/NavbarPhotos";
import Songs from "./NavbarComponents/NavbarMusic";
import Videos from "./NavbarComponents/NavbarVideos";
import Eventss from "./NavbarComponents/NavbarEvents";
import Blog from "./NavbarComponents/NavbarBlog";

let Content = () => {
  return (
    <div className="content wrapper">
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
    </div>
  );
};

export default Content;
