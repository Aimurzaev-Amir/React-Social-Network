import React from "react";
import stl from "../Content.module.css";

let ViewProfileGrid = () => {
  return (
    <div className={stl.viewProfileGrid}>
      <div className={stl.profileMainColumn}>
        <p>Name: Aimurzayev Amir</p>
        <p>Speciality: Information systems</p>
        <p>Date of Birth: 15/08/1997</p>
      </div>
      <div className={stl.profileMainInfoColumn}>
        <p>Email: aimurzayev@mail.ru</p>
        <p>Location: Almaty, Kazakhstan</p>
        <p>Marital status: married </p>
      </div>
    </div>
  );
};

export default ViewProfileGrid;