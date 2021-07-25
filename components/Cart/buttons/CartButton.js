import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <Feather
      name="shopping-cart"
      size={24}
      color="black"
      onPress={() => navigation.navigate("CartList")}
    />
  );
};

export default CartButton;
