import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfileInfo";
import Content from "./components/Content";


let App = () => {
  return (
    <div>
      <Header />
      <body>
        <ProfileInfo />
        <Content />
      </body>
    </div>
  );
};

export default App;
