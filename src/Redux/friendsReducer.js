const setFriends = "SET-FRIENDS";
const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const setPages = "SETPAGES";
const setCurrentPage = "SETCURRENTPAGE";

let initialstate = {
  friends: [],
  totalFriends: 200,
  pageSize: 33,
  currentPage: 1,
};

const friendsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case setFriends:
      return {
        ...state,
        friends: action.friends,
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
          return friend;
        }),
      };
      case setCurrentPage: 
      return {
        ...state,
        currentPage: action.currentPage,
      }

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
export const setPagesAC = (pagesNumber) => {
  return {
    type: setPages,
    pagesNumber,
  };
};
export const setCurrentPageAC = (pageNumber) => {
  return {
    type: setCurrentPage,
    pageNumber,
  };
};

export default friendsReducer;
