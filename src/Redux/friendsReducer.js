const setFriendsType = "SET-FRIENDS";
const followType = "FOLLOW";
const unfollowType = "UNFOLLOW";
const setPagesType = "SETPAGES";
const setCurrentPageType = "SET-CURRENT-PAGE";
const setPreloaderType = "SET-PRELOADER";

let initialstate = {
  friends: [],
  totalFriends: 200,
  pageSize: 33,
  currentPage: 1,
  isLoading: false,
};

const friendsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case setFriendsType:
      return {
        ...state,
        friends: action.friends,
      };
    case followType:
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
    case unfollowType:
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
      case setPagesType:
        return {
          ...state, 
          totalFriends: action.pagesNumber
        }
      case setCurrentPageType: 
      return {
        ...state,
        currentPage: action.currentPage,
      }
      case setPreloaderType: 
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
};

export const setFriends = (friends) => {
  return {
    type: setFriendsType,
    friends,
  };
};

export const follow = (userId) => {
  return {
    type: followType,
    userId,
  };
};

export const unfollow = (userId) => {
  return {
    type: unfollowType,
    userId,
  };
};
export const setPages = (pagesNumber) => {
  return {
    type: setPagesType,
    pagesNumber,
  };
};
export const setCurrentPage = (pageNumber) => {
  return {
    type: setCurrentPageType,
    pageNumber,
  };
};

export const setPreloader = (isLoading) => {
  return{
    type: setPreloaderType, isLoading,
  }
}

export default friendsReducer;
