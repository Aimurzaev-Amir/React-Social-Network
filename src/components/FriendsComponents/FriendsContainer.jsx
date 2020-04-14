import { connect } from "react-redux";
import Friends from "./Friends";
import { setFriendsAC, followAC, unfollowAC } from "../../Redux/friendsReducer";

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
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
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
