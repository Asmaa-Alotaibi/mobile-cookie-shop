import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      console.log("TCL: AuthStore -> signup -> token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.setItem("myToken", token);
    this.user = null;
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
