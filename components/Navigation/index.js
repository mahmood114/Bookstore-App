import React from "react";

// Components
import Home from "../Home";
import VendorList from "../Vendor/VendorList";
import VendorDetail from "../Vendor/VendorDetail";
import { createStackNavigator } from "@react-navigation/stack";
import BookDetail from "../Book/BookDetail";

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "darkgreen" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="VendorList"
        component={VendorList}
        options={{ title: "Our amazing vendors" }}
      ></Stack.Screen>
      <Stack.Screen
        name="VendorDetail"
        component={VendorDetail}
        options={({ route }) => {
          const { vendor } = route.params;
          return {
            title: vendor.name,
          };
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={({ route }) => {
          const { book } = route.params;
          return {
            title: book.name,
          };
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
