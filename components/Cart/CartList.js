import { observer } from "mobx-react";
import { List, Spinner } from "native-base";
import React from "react";
import cartStore from "../../stores/cartStore";
import productStore from "../../stores/productStore";
import CartItem from "./CartItem";

const CartList = () => {
  if (productStore.loading) return <Spinner />;

  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getBookById(item.bookId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return <List>{cartList}</List>;
};

export default observer(CartList);
