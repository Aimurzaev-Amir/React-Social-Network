import React from "react";
import stl from "./Friends.module.css";
import Friend from "./Friend";
import Axios from "axios";
import friendPhoto from "../../assets/user.png";
import friendBanner from "./FriendsImg/eric-nopanen-624212-unsplash-800x534.jpg";

let Friends = (props) => {
  let friends = [
    {
      id: 1,
      friendPhoto: require("./FriendsImg/Friend1.jpg"),
      banner: require("./FriendsImg/profile-banner.jpg"),
      friendName: "Valentin Lisenkov",
      friendStatus: "I'm a boss!",
      followed: false,
    },
    {
      id: 2,
      friendPhoto: require("./FriendsImg/Friend2.jpg"),
      banner: require("./FriendsImg/about0img.jpg"),
      friendName: "Chumak Arnold",
      friendStatus: "I'm a boss too!",
      followed: false,
    },
    {
      id: 3,
      friendPhoto: require("./FriendsImg/Friend3.jpg"),
      banner: require("./FriendsImg/eric-nopanen-624212-unsplash-800x534.jpg"),
      friendName: "Berdali Sancharsultan",
      friendStatus: "I'm a boss too!",
      followed: false,
    },
    {
      id: 4,
      friendPhoto: require("./FriendsImg/Friend4.jpg"),
      banner: require("./FriendsImg/winter.jpg"),
      friendName: "Artemenko Bogdan",
      friendStatus: "I'm a boss too!",
      followed: true,
    },
    {
      id: 5,
      friendPhoto: require("./FriendsImg/5.jpg"),
      banner: require("./FriendsImg/profile-banner.jpg"),
      friendName: "Zhaksibayev Anuar",
      friendStatus: "I'm a boss!",
      followed: true,
    },
    {
      id: 6,
      friendPhoto: require("./FriendsImg/6.jpg"),
      banner: require("./FriendsImg/about0img.jpg"),
      friendName: "Svetlana Laboda",
      friendStatus: "I'm a boss too!",
      followed: true,
    },
    {
      id: 7,
      friendPhoto: require("./FriendsImg/7.jpg"),
      banner: require("./FriendsImg/eric-nopanen-624212-unsplash-800x534.jpg"),
      friendName: "Kim Chen In",
      friendStatus: "I'm a boss too!",
      followed: true,
    },
    {
      id: 8,
      friendPhoto: require("./FriendsImg/8.jpg"),
      banner: require("./FriendsImg/winter.jpg"),
      friendName: "Vasiliy Povlobich",
      friendStatus: "I'm a boss too!",
      followed: true,
    },
    {
      id: 9,
      friendPhoto: require("./FriendsImg/9.jpg"),
      banner: require("./FriendsImg/winter.jpg"),
      friendName: "Nikita Pukita",
      friendStatus: "I'm a boss too!",
      followed: true,
    },
  ];

  const viewFriends = () => {
    if (props.friends.length === 0) {
      Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
        (response) => {
          props.setFriends(response.data.items);
        }
      );
    }
  }

  let FriendsElements = props.friends.map((friend) => {
    return (
      <Friend
        key={friend.id}
        id={friend.id}
        friendPhoto={
          friend.friendPhoto != null ? friend.friendPhoto : friendPhoto
        }
        banner={friend.banner != null ? friend.banner : friendBanner}
        friendName={friend.name}
        friendStatus={friend.status != null ? friend.status : "I'am user"}
        followed={friend.followed}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    );
  });

  return (
    <div className={stl.friendsGrid}>
      <button onClick={viewFriends}>View Friends</button>
      {FriendsElements}
    </div>
  );
};

export default Friends;
