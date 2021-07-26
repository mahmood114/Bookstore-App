import { observer } from "mobx-react";
import { Button, List } from "native-base";
import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { ItemTitleStyled, ItemWrapper } from "../../styles";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../../stores/cartStore";

const BookItem = ({ book, navigation }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const newItem = {
      bookId: book.id,
      quantity,
    };

    cartStore.addItemToCart(newItem);
  };

  return (
    <List.Item
      onPress={() => navigation.navigate("BookDetail", { book: book })}
    >
      <Image style={styles.imageStyle} source={{ uri: book.image }} />
      <ItemTitleStyled>{book.name}</ItemTitleStyled>
      <NumericInput
        value={quantity}
        onChange={setQuantity}
        totalWidth={130}
        rounded
      />
      <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
    </List.Item>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 70,
    height: 70,
  },
  itemWrapper: {
    justifyContent: "space-between",
  },
});

export default observer(BookItem);
