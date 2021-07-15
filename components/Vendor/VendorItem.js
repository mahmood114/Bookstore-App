import { observer } from "mobx-react";
import { List } from "native-base";
import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { ItemTitleStyled, ItemWrapper } from "../../styles";

const VendorItem = ({ vendor, navigation }) => {
  return (
    <List.Item
      onPress={() =>
        navigation.navigate("VendorDetail", {
          vendor: vendor,
          navigation: navigation,
        })
      }
    >
      <Image style={styles.imageStyle} source={{ uri: vendor.image }} />
      <ItemTitleStyled>{vendor.name}</ItemTitleStyled>
    </List.Item>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
  },
});

export default observer(VendorItem);
