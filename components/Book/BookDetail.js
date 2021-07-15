import { observer } from "mobx-react";
import { Spinner } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";
import productStore from "../../stores/productStore";
import {
  DetailWrapper,
  DetailImage,
  DetailTitle,
  DetailDescriptionStyled,
} from "../../styles";

const BookDetail = ({ route }) => {
  const { book } = route.params;

  if (productStore.loading) return <Spinner />;

  return (
    <DetailWrapper>
      <DetailImage source={{ uri: book.image }} />
      <DetailTitle style={styles.nameStyle}>{book.name}</DetailTitle>
      <Text style={styles.description}>{book.description}</Text>
      <Text style={styles.price}>Price: {book.price}</Text>
    </DetailWrapper>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  nameStyle: {
    fontSize: 25,
    textAlign: "center",
  },
  description: {
    marginVertical: 30,
    fontSize: 20,
  },
  price: {
    fontSize: 20,
  },
});

export default observer(BookDetail);
