import React, { useEffect } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
// Redux
import { connect } from "react-redux";
// Custom IMPORT
import HeaderScreen from "../LayoutScreen/HeaderScreen";
import FooterScreen from "../LayoutScreen/FooterScreen";
import ReturnButtonScreen from "../../components/someScreen/ReturnButtonScreen";
import Screenstyles from "../ScreenStylesheet";

const RaceResultScreen = ({ raceResultData }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

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
            BigPlace={"競馬場"}
            screenName={"結果"}
            nviUrl={"RaceList"}
          />
        </View>
        <View style={{ marginTop: 250, marginLeft: 90 }}>
          {raceResultData != "" ? (
            raceResultData.map((result, index) => {
              return (
                <View key={index}>
                  <Text style={{ fontSize: 25 }}>{result}</Text>
                </View>
              );
            })
          ) : (
            <Text>NOT FOUND RESULT</Text>
          )}
        </View>

        <FooterScreen />
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    raceResultData: state.racingData.raceResultData,
  };
};
export default connect(mapStateToProps)(RaceResultScreen);
