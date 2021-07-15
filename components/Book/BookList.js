import React from "react";
import { View } from "react-native";
import productStore from "../../stores/productStore";
import BookItem from "./BookItem";
import { List, Spinner } from "native-base";
import { ListWrapper } from "../../styles";
import { observer } from "mobx-react";

const BookList = ({ books, navigation }) => {
  if (productStore.loading) return <Spinner />;

  const booksList = books.map((book) => (
    <BookItem book={book} key={book.id} navigation={navigation} />
  ));

  return (
    <ListWrapper>
      <List>{booksList}</List>
    </ListWrapper>
  );
};

export default observer(BookList);
