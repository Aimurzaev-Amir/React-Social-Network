import React from "react";
import UserBannerPhoto from "../ContentImg/Banner/banner1.jpg";

let ContentBanner = () => {
  return (
    <div className="contentBanner">
      <img src={UserBannerPhoto} alt="be able user banner" />
      <div className="bannerPagination">
        <div className="bannerDot bannerDotActive"></div>
        <div className="bannerDot bannerDotNonActive"></div>
        <div className="bannerDot bannerDotNonActive"></div>
      </div>
    </div>
  );
};

export default ContentBanner;
