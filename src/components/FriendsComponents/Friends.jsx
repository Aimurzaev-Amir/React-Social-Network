import React from "react";
import stl from "./Friends.module.css";
import Friend from "./Friend";
import friendPhoto from "../../assets/user.png";
import friendBanner from "./FriendsImg/eric-nopanen-624212-unsplash-800x534.jpg";

let Friends = (props) => {
  let FriendsElements = props.friends.map((friend) => {
    return (
        <Friend
          key={friend.id}
          id={friend.id}
          friendPhoto={ friend.photos.small != null ? friend.photos.small : friendPhoto }
          banner={friend.banner != null ? friend.banner : friendBanner}
          friendName={friend.name}
          friendStatus={friend.status != null ? friend.status : "Friend status"}
          followed={friend.followed}
          followingInProgress={props.followingInProgress}
          //thunks
          setFollow={props.setFollow}
          setUnfollow={props.setUnfollow}
        /> 
    );
  });

  let pages = [];
  // let pagesConter = Math.ceil (props.totalFriends / props.pageSize)
  // for(let i=1; i<=pagesConter; i++) {
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }
  let pagesArray = pages.map((pageNum) => {
    return (
      <span key={pageNum}
        className={props.currentPage === pageNum ? stl.selectedPage : null}
        onClick={() => props.onPageNumberClick(pageNum)} > {pageNum} </span>
    );
  });

  return (
    <div>
      {pagesArray}
      <div className={stl.friendsGrid}>{FriendsElements}</div>
    </div>
  );
};

export default Friends;
