import React from "react";
import { View } from "react-native";
import vendorStore from "../../stores/vendorStore";
import VendorItem from "./VendorItem";
import { List, Spinner } from "native-base";
import { ListWrapper } from "../../styles";
import { observer } from "mobx-react";

const VendorList = ({ navigation }) => {
  if (vendorStore.loading) return <Spinner />;
  const vendors = vendorStore.vendors.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} navigation={navigation} />
  ));

  return (
    <ListWrapper>
      <List>{vendors}</List>
    </ListWrapper>
  );
};

export default observer(VendorList);
