import React from "react";
import UserBannerPhoto from "../ContentImg/Banner/banner1.jpg";
import stl from "../Content.module.css";

let ContentBanner = () => {
  return (
    <div className={stl.contentBanner}>
      <img src={UserBannerPhoto} alt="be able user banner" />
      <div className={stl.bannerPagination}>
        <div className={`${stl.bannerDot} ${stl.bannerDotActive}`}></div>
        <div className={`${stl.bannerDot} ${stl.bannerDotNonActive}`}></div>
        <div className={`${stl.bannerDot} ${stl.bannerDotNonActive}`}></div>
      </div>
    </div>
  );
};

export default ContentBanner;
