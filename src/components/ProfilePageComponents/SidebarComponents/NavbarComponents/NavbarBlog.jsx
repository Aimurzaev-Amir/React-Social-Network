import React from "react";
import BlogIcon from "../SidebarImg/Blog.svg";
import stl from "../Sidebar.module.css";

let Blog = () => {
  return (
    <div className={`${stl.navbarItem} ${stl.blog}`}>
      <img src={BlogIcon} alt="" />
      <p>Blog</p>
    </div>
  );
};

export default Blog;
