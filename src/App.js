import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfileInfo";
import SidebarContent from "./components/SidebarContent";


let App = () => {
  return (
    <div>
      <Header />
      <body>
        <ProfileInfo />
        
        <div className="cotent">
          <SidebarContent />
        </div>

        
      </body>
    </div>
  );
};

export default App;
