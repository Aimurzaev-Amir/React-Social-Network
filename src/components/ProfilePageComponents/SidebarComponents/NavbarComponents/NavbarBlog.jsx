import React from "react";
import BlogIcon from "../SidebarImg/Blog.svg";

let Blog = () => {
  return (
    <div className="navbarItem blog">
      <img src={BlogIcon} alt="" />
      <p>Blog</p>
    </div>
  );
};

export default Blog;
