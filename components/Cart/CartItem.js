import { Button, List } from "native-base";
import React from "react";
import { Text, StyleSheet } from "react-native";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name}</Text>
      <Text>
        {item.price} KD * {item.quantity}
      </Text>
      <Text style={styles.priceStyled}> {item.price * item.quantity} KD</Text>
    </List.Item>
  );
};

const styles = StyleSheet.create({
  priceStyled: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 80,
  },
});

export default CartItem;
