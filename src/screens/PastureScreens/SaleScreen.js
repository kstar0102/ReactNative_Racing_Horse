import React from "react";
import { View, ImageBackground } from "react-native";
// Custom IMPORT
import HeaderScreen from "../LayoutScreen/HeaderScreen";
import FooterScreen from "../LayoutScreen/FooterScreen";
import ReturnButtonScreen from "../../components/someScreen/ReturnButtonScreen";
import Screenstyles from "../ScreenStylesheet";
import SaleTapScreen from "./SaleTapScreen";

const SaleScreen = () => {
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../assets/images/1.png")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View style={Screenstyles.UPContainer}>
          <ReturnButtonScreen
            BigPlace={"牧 場"}
            screenName={"売 却"}
            nviUrl={"PastureScreen"}
          />
          <SaleTapScreen />
        </View>
        <FooterScreen />
      </ImageBackground>
    </View>
  );
};

export default SaleScreen;
