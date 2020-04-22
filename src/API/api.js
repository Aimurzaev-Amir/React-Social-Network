import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "a99ccbf5-990a-4005-92c0-87f75884284c" },
});
export const ProfileAPI = {
  getProfile(userId) {
    return instance.get("profile/" + userId).then((response) => {
      return response.data;
    });
  },
};
export const UsersAPI = {
  getState(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const FollowAPI = {
  postFollow(userId) {
    return instance.post("follow/" + userId, {}).then((response) => {
      return response.data;
    });
  },
  deleteFollow(userId) {
    return instance.delete("follow/" + userId).then((response) => {
      return response.data;
    });
  },
};

export const AuthAPI = {
  getAuth() {
    return instance.get("auth/me").then((response) => {
      return response.data;
    });
  },
};
