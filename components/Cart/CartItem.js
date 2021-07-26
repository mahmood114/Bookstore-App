import { Button, List } from "native-base";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name}</Text>
      <Text>
        {item.price} KD * {item.quantity}
      </Text>
      <Text style={styles.priceStyled}> {item.price * item.quantity} KD</Text>
      <Feather
        onPress={() => cartStore.deleteItem(item.id)}
        name="x"
        size={24}
        color="red"
      />
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
