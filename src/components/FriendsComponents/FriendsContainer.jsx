import React from "react";
import { connect } from "react-redux";
import { setFriends, follow, unfollow, setPages, setCurrentPage, setPreloader, } from "../../Redux/friendsReducer";
import Preloader from "../../common/preloader/Preloader.jsx"
import Axios from "axios";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
  componentDidMount() { 
    this.props.setPreloader(true)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.setPreloader(false)
      this.props.setFriends(response.data.items);
      this.props.setPages(response.data.totalCount);
    });
  }

  onPageNumberClick = (pageNumber) => {
    this.props.setCurrentPage(this.props.currentPage);
    this.props.setPreloader(true)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.setPreloader(false)
      this.props.setFriends(response.data.items);
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
      />
      </>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    totalFriends: state.friendsPage.totalFriends,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
    isLoading: state.friendsPage.isLoading,
  };
};

export default connect(mapStateToProps, { follow, unfollow, setFriends, setPages, setCurrentPage, setPreloader })
                      (FriendsContainer);

// export default FriendsContainer;
