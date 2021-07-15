import React from "react";
import { View, StyleSheet, Button, ImageBackground } from "react-native";
import {
  OverLayContainer,
  TopStyling,
  Title,
  BottomStyling,
  ButtonStyling,
} from "../styles";
const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      }}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Mahmood's Bookstore</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate("VendorList")}>
            Go see our vendors
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
