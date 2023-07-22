import React from "react";
import { View, ImageBackground } from "react-native";

// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import StableFooterScreen from "../../LayoutScreen/StableFooterScreen";
import ReturnButtonScreen from "../../../components/someScreen/ReturnButtonScreen";
import { ReturnButton } from "../../../components/Buttons";
import Screenstyles from "../../ScreenStylesheet";
// TapScreen
import TapScreen from "./TapScreen";

const RaceResults = ({ navigation }) => {
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../../assets/images/horse_track/stall.jpg")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View>
          <ReturnButtonScreen
            BigPlace={"厩 舎"}
            screenName={"競走成績"}
            nviUrl={"StallScreen"}
            colorNumber={1}
          />
          <TapScreen />
        </View>
        <StableFooterScreen />
      </ImageBackground>
    </View>
  );
};

export default RaceResults;
