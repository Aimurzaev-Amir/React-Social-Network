import React from "react";
import { connect } from "react-redux";
import {
  setFriendsAC,
  followAC,
  unfollowAC,
  setPagesAC,
  setCurrentPageAC,
} from "../../Redux/friendsReducer";
import Axios from "axios";
import Friends from "./Friends";

class FriendsApiContainer extends React.Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.setFriends(response.data.items);
      this.props.setPages(response.data.totalCount);
    });
  }

  onPageNumberClick = (pageNumber) => {
    this.props.setCurrentPage(this.props.currentPage);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.setFriends(response.data.items);
    });
  };

  render() {
    return (
      <Friends
        pageSize={this.props.pageSize}
        totalFriends={this.props.totalFriends}
        onPageNumberClick={this.onPageNumberClick}
        friends={this.props.friends}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        currentPage={this.props.currentPage}
      />
    );
  }
}

// export default FriendsApiContainer;

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    totalFriends: state.friendsPage.totalFriends,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow(userId) {
      dispatch(followAC(userId));
    },
    unfollow(userId) {
      dispatch(unfollowAC(userId));
    },
    setFriends(friends) {
      dispatch(setFriendsAC(friends));
    },
    setPages(pagesNumber) {
      dispatch(setPagesAC(pagesNumber));
    },
    setCurrentPage(pageNumber) {
      dispatch(setCurrentPageAC(pageNumber));
    },
  };
};

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(FriendsApiContainer);

export default FriendsContainer;
