import React from "react";
import { View, ImageBackground } from "react-native";
// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import StableFooterScreen from "../../LayoutScreen/StableFooterScreen";
import ReturnButtonScreen from "../../../components/someScreen/ReturnButtonScreen";
import Screenstyles from "../../ScreenStylesheet";
import RaceCourses from "./RacetrackTable/RaceCourses";

const RaceCourse = ({ navigation }) => {
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
            screenName={"競馬場"}
            nviUrl={"StallScreen"}
            colorNumber={1}
          />
          <View style={Screenstyles.UPCourse}>
            <RaceCourses />
          </View>
        </View>
        <StableFooterScreen />
      </ImageBackground>
    </View>
  );
};

export default RaceCourse;
