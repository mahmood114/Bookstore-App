import { observer } from "mobx-react";
import { List } from "native-base";
import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { ItemTitleStyled, ItemWrapper } from "../../styles";

const BookItem = ({ book, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("BookDetail", { book: book })}
    >
      <Image style={styles.imageStyle} source={{ uri: book.image }} />
      <ItemTitleStyled>{book.name}</ItemTitleStyled>
    </List.Item>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
  },
});

export default observer(BookItem);
