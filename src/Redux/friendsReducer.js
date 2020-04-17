const setFriends = "SET-FRIENDS";
const follow = "FOLLOW";
const unfollow = "UNFOLLOW";

let initialstate = {
  friends: [ ],
};
 
const friendsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case setFriends:
      return {
        ...state, friends: [ ...action.friends],
      };
    case follow:
      return { 
        ...state,
        friends: state.friends.map((friend) => {
          if (friend.id === action.userId) {
            return {
              ...friend,
              followed: true,
            };
          }
          return friend;
        }),
      };
    case unfollow:
      return {
        ...state,
        friends: state.friends.map((friend) => {
          if (friend.id === action.userId) {
            return {
              ...friend,
              followed: false,
            };
          }
          return friend ;
        }),
      };
    default:
      return state;
  }
};

export const setFriendsAC = (friends) => {
  return {
    type: setFriends,
    friends,
  };
};

export const followAC = (userId) => {
  return {
    type: follow,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: unfollow,
    userId,
  };
};

export default friendsReducer;
