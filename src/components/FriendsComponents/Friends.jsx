import React from "react";
import stl from "./Friends.module.css";
import Friend from "./Friend";
import Axios from "axios";
import friendPhoto from "../../assets/user.png";
import friendBanner from "./FriendsImg/eric-nopanen-624212-unsplash-800x534.jpg";

class Friends extends React.Component {
  componentDidMount() {
    Axios.get("https://social-network.samuraijs.com/api/1.0/users?count=9")
    .then((response) => { this.props.setFriends(response.data.items); });
  }
  FriendsElements = this.props.friends.map((friend) => {
    return (
      <Friend
        key={friend.id}
        id={friend.id}
        friendPhoto={
          friend.friendPhoto != null ? friend.friendPhoto : friendPhoto
        }
        banner={friend.banner != null ? friend.banner : friendBanner}
        friendName={friend.name}
        friendStatus={friend.status != null ? friend.status : "status"}
        followed={friend.followed}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  });

  render() {
    return (
      <div className={stl.friendsGrid}>
        {this.FriendsElements}
      </div>
    );
  }
}

export default Friends;
