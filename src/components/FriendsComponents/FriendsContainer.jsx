import React from "react";
import { connect } from "react-redux";
import { getUsers, setFollow, setUnfollow } from "../../Redux/friendsReducer";
import Preloader from "../../common/preloader/Preloader.jsx";
import Friends from "./Friends";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withRedirect";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.currentPage,
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageNumberClick = (pageNumber) => {
    this.props.getUsers(pageNumber, pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Friends
          //data from state
          pageSize={this.props.pageSize}
          totalFriends={this.props.totalFriends}
          onPageNumberClick={this.onPageNumberClick}
          friends={this.props.friends}
          currentPage={this.props.currentPage}
          followingInProgress={this.props.followingInProgress}
          //thunks
          setFollow={this.props.setFollow}
          setUnfollow={this.props.setUnfollow}
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

export default compose(
  connect(mapStateToProps, { getUsers, setFollow, setUnfollow }),
  withAuthRedirect
)(FriendsContainer);

