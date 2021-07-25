import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      bookId: 1,
      quantity: 5,
    },
    {
      bookId: 3,
      quantity: 4,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();

export default cartStore;
