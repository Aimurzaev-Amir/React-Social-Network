import React from "react";
import stl from "./ProfileInfo.module.css";

let ProfileIntroButtons = () => {
  return (
    <div className={stl.profileButtons}>
      <button>Add friend</button>
      <button>Private message</button>
    </div>
  );
};

export default ProfileIntroButtons;