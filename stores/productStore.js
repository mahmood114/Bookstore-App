import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
  books = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await instance.get("/books");
      this.books = response.data;

      this.loading = false;
    } catch (error) {
      console.error("There was a problem\n", error);
    }
  };

  getBookById = (bookId) => this.books.find((book) => book.id === bookId);
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
