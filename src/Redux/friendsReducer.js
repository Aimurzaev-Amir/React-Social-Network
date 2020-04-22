import { UsersAPI, FollowAPI } from "../API/api";

const setFriendsType = "SET-FRIENDS";
const followType = "FOLLOW";
const unfollowType = "UNFOLLOW";
const setPagesType = "SETPAGES";
const setCurrentPageType = "SET-CURRENT-PAGE";
const setPreloaderType = "SET-PRELOADER";
const followingToggleType = "FOLLOWING-TOGGLE-TYPE";

let initialstate = {
  friends: [],
  totalFriends: 200,
  pageSize: 33,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
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
        totalFriends: action.pagesNumber,
      };
    case setCurrentPageType:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case setPreloaderType:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case followingToggleType:
      return {
        ...state,
        followingInProgress: action.isLoading
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
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
  return {
    type: setPreloaderType,
    isLoading,
  };
};
export const followingToggle = (isLoading, userId) => {
  return {
    type: followingToggleType,
    isLoading,
    userId,
  };
};

//Thunks
export const getUsers = (pageNumber = 1, currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setPreloader(true));
    UsersAPI.getState(currentPage, pageSize).then(
      (data) => {
        dispatch(setPreloader(false));
        dispatch(setFriends(data.items));
        dispatch(setPages(data.totalCount));
      }
    );
  }
};
export const setUnfollow = (id) => {
  return (dispatch) => {
    dispatch(followingToggle(true, id))
        FollowAPI.deleteFollow(id).then((data) => {
          if (data.resultCode === 0) {
            dispatch(unfollow(id));
          }
          dispatch(followingToggle(false, id))
        });
  } 
}
export const setFollow = (id) => {
  return (dispatch) => {
    dispatch(followingToggle(true, id))
        FollowAPI.postFollow(id).then((data) => {
          if (data.resultCode === 0) {
            dispatch(follow(id));
          }
          dispatch(followingToggle(false, id))
        });
  }
}


export default friendsReducer;
