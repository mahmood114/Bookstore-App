import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import cartStore from "../../../stores/cartStore";
import { Button } from "native-base";
import { observer } from "mobx-react";
import { borderColor } from "styled-system";

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      style={styles.buttonStyle}
      onPress={() => navigation.navigate("CartList")}
    >
      <Feather name="shopping-cart" size={24} color="black" />
      <Text style={styles.textStyle}>{cartStore.totalQuantity}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    marginRight: 10,
  },
  textStyle: {
    padding: 4,
    borderStyle: "solid",
    borderColor: "orange",
    backgroundColor: "orange",
    overflow: "hidden",
    borderRadius: 12,
    textAlign: "center",
  },
});

export default observer(CartButton);
