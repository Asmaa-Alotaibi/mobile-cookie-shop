import React from "react";

import { makeAutoObservable } from "mobx";
import instance from "./instance";

class BakeryStore {
  bakeries = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchBakeries = async () => {
    try {
      const response = await instance.get("/bakeries");
      this.bakeries = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BakeryStore -> fetchbakeries -> error", error);
    }
  };
}
const bakeryStore = new BakeryStore(); //new instance
bakeryStore.fetchBakeries();
export default bakeryStore;
