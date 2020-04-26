export const getFriends = (state) => {
  return state.friendsPage.friends;
};
export const getTotalFriends = (state) => {
  return state.friendsPage.totalFriends;
};
export const getPageSize = (state) => {
  return state.friendsPage.pageSize;
};
export const getCurrentPage = (state) => {
  return state.friendsPage.currentPage;
};
export const getIsLoading = (state) => {
  return state.friendsPage.isLoading;
};
export const getFollowingInProgress = (state) => {
  return state.friendsPage.followingInProgress;
};
