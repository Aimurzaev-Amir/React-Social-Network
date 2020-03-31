import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfileInfo";
import SidebarContent from "./components/SidebarContent";
import Content from "./components/Content";


let App = () => {
  return (
    <div>
      <Header />
      <body>
        <ProfileInfo />
        
        <div className="content wrapper">
          <SidebarContent />
          <Content />
        </div>

        
      </body>
    </div>
  );
};

export default App;
