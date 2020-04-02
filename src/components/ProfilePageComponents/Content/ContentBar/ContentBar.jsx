import React from "react";
import Overview from "./ContentBarItem1";
import Activity from "./ContentBarItem2";
import About from "./ContentBarItem3";
import Friends from "./ContentBarItem4";
import Groups from "./ContentBarItem5";
import More from "./ContentBarItem6";

let ContentBar = () => {
  return (
    <div className="contentBar">
      <Overview />
      <Activity />
      <About />
      <Friends />
      <Groups />
      <More />
    </div>
  );
};

export default ContentBar;
