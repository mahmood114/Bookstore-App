import { observer } from "mobx-react";
import { Button, List, Spinner } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";
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
  return (
    <>
      <List>{cartList}</List>
      <Button
        style={styles.checkoutButton}
        borderRadius={false}
        onPress={cartStore.checkout}
      >
        <Text style={styles.checkoutText}>Checkout</Text>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  checkoutButton: {
    backgroundColor: "darkblue",
  },
  checkoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default observer(CartList);
