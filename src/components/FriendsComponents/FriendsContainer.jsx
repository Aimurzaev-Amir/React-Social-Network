import React from "react";
import { connect } from "react-redux";
import {
  setFriends,
  follow,
  unfollow,
  setPages,
  setCurrentPage,
  setPreloader,
  followingToggle,
} from "../../Redux/friendsReducer";
import Preloader from "../../common/preloader/Preloader.jsx";
import Friends from "./Friends";
import { UsersAPI } from "../../API/api";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.setPreloader(true);
    UsersAPI.getState(this.props.currentPage, this.props.pageSize).then(
      (data) => {
        this.props.setPreloader(false);
        this.props.setFriends(data.items);
        this.props.setPages(data.totalCount);
      }
    );
  }

  onPageNumberClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setPreloader(true);
    UsersAPI.getState(pageNumber, this.props.pageSize).then((data) => {
      this.props.setPreloader(false);
      this.props.setFriends(data.items);
    });
  };
 
  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Friends
          pageSize={this.props.pageSize}
          totalFriends={this.props.totalFriends}
          onPageNumberClick={this.onPageNumberClick}
          friends={this.props.friends}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          followingInProgress={this.props.followingInProgress}
          followingToggle={this.props.followingToggle}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    totalFriends: state.friendsPage.totalFriends,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
    isLoading: state.friendsPage.isLoading,
    followingInProgress: state.friendsPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setFriends,
  setPages,
  setCurrentPage,
  setPreloader,
  followingToggle,
})(FriendsContainer);

// export default FriendsContainer;
