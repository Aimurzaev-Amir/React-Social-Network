import React from "react";
import stl from "./Friends.module.css";

let Friend = (props) => {
  let followOnClick = () => {
    props.unfollow(props.id);
  };

  let unfollowOnClick = () => {
    props.follow(props.id);
  };

  let followedA = props.followed ? (
    <button onClick={followOnClick} className={stl.followedBtn}>unfollow</button>
  ) : (
    <button onClick={unfollowOnClick} className={stl.followedBtn}>follow</button>
  );


  return (
    <div className={stl.friend}>
      <div className={stl.friendBanner}>
        <img src={props.banner} alt="" />
      </div>
      <div className={stl.friendPhoto}>
        <img src={props.friendPhoto} alt="be able friends {props.friendName}" />
      </div>
      <div className={stl.friendInfo}>
        <div className={stl.friendName}>
          <p className={stl.Name}>{props.friendName}</p>
          <p className={stl.status}>{props.friendStatus}</p>
        </div>
        <div className={stl.friendFollowed}>{followedA}</div>
      </div>
    </div>
  );
};

export default Friend;
