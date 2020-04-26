import React from "react";
import { connect } from "react-redux";
import { getUsers, setFollow, setUnfollow } from "../../Redux/friendsReducer";
import Preloader from "../../common/preloader/Preloader.jsx";
import Friends from "./Friends";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withRedirect";
import {
  getFriends,
  getTotalFriends,
  getPageSize,
  getCurrentPage,
  getIsLoading,
  getFollowingInProgress,
} from "../../Redux/friendsSelectors";

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
    friends: getFriends(state),
    totalFriends: getTotalFriends(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, { getUsers, setFollow, setUnfollow }),
  withAuthRedirect
)(FriendsContainer);
