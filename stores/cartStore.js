import AsyncStorage from "@react-native-community/async-storage";
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CartStore {
  items = [
    {
      itemId: 1,
      quantity: 5,
    },
    {
      itemId: 2,
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };
  addItemToCart = async (newItem) => {
    const foundItem = this.items.find((item) => item.itemId === newItem.itemId);
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.itemId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  checkout = async () => {
    try {
      const res = await instance.post("/checkout", this.items);
      console.log("CartStore -> checkout -> res", res.data);
      this.items = [];
      await AsyncyStorage.removeItem("myCart");
      alert("I'm a cute message");
    } catch (error) {
      console.log("CartStore -> checkoutCart -> error", error);
    }
  };
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
