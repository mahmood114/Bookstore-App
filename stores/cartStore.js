import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find((item) => item.bookId === newItem.bookId);

    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  removeItem = () => {
    AsyncStorage.removeItem("myCart");
  };
}

const cartStore = new CartStore();
cartStore.fetchCart();
// cartStore.removeItem();
export default cartStore;
