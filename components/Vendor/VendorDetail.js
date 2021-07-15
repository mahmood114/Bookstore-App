import { observer } from "mobx-react";
import { Spinner } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import productStore from "../../stores/productStore";
import vendorStore from "../../stores/vendorStore";
import { DetailWrapper, DetailImage, DetailTitle } from "../../styles";
import BookList from "../Book/BookList";

const VendorDetail = ({ route }) => {
  const { vendor, navigation } = route.params;

  const books = vendor.books?.map((book) => productStore.getBookById(book.id));

  if (vendorStore.loading) return <Spinner />;

  return (
    <DetailWrapper>
      <DetailImage source={{ uri: vendor.image }} />
      <DetailTitle style={styles.nameStyle}>{vendor.name}</DetailTitle>
      <BookList books={books} navigation={navigation} />
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
});

export default observer(VendorDetail);
