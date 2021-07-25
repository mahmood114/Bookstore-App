import { List } from "native-base";
import React from "react";
import { Text } from "react-native";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name}</Text>
      <Text>
        {item.price}KD * {item.quantity}
      </Text>
      <Text>{item.price * item.quantity}</Text>
    </List.Item>
  );
};

export default CartItem;
