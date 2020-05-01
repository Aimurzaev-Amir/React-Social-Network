import React from "react";
import stl from "./Friends.module.css";
import Friend from "./Friend";
import friendPhoto from "../../assets/user.png";
import friendBanner from "./FriendsImg/eric-nopanen-624212-unsplash-800x534.jpg";
import Pagination from "../../common/Pagination/Pagination";

let Friends = (props) => {
  let FriendsElements = props.friends.map((friend) => {
    return (
      <Friend
        key={friend.id}
        id={friend.id}
        friendPhoto={
          friend.photos.small != null ? friend.photos.small : friendPhoto
        }
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

  return (
    <div>
      <Pagination
        totalFriends={props.totalFriends}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageNumberClick={props.onPageNumberClick}
      />
      <div className={stl.friendsGrid}>{FriendsElements}</div>
    </div>
  );
};

export default Friends;
