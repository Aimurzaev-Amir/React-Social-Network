import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "af5ce268-bf22-4e58-9923-f42ace540d31" },
});
export const ProfileAPI = {
  getProfile(userId) {
    return instance.get("profile/" + userId).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId).then((response) => {
      return response.data
    })
  },
  puStatus(status) {
    return instance.put("profile/status", {status}).then((response) => {
      return response.data
    })
  }
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
  postAuth(email, password, rememberMe, captcha) {
    return instance.post("auth/login", {email, password, rememberMe, captcha}).then((response) => {
      return response.data;
    })
  },
  deleteAuth() {
    return instance.delete("auth/login").then((response) => {
      return response.data;
    })
  },
  getCaptcha() {
    return instance.get("security/get-captcha-url").then((response) => {
      return response.data;
    })
  }
};
 