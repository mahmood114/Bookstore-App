import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/index";

export default function App() {
  const theme = {
    mainColor: "#15202b",
    backgroundColor: "#ffffff",
    red: "red",
    itemBGColor: "#f1f1f1",
  };

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={NavTheme}>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const NavTheme = { colors: { background: "hsl(100, 100%, 95%)" } };
