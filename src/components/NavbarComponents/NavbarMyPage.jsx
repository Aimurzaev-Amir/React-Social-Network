import React from "react";
import MyPageIcon from "../../img/Navbar/myPage.svg";

let MyPage = () => {
  return (
    <div className="navbarItem myPage">
      <img src={MyPageIcon} alt="" />
      <p>Aimurzayev Amir</p>
    </div>
  );
};

export default MyPage;
