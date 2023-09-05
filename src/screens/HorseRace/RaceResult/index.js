import React from "react";
import { View, ImageBackground } from "react-native";
import { connect } from "react-redux";
// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import Screenstyles from "../../ScreenStylesheet";
import ReturnButtonScreen from "../../../components/someScreen/ReturnButtonScreen";
import RaceResultScreen from "./RaceResultScreen";

const RaceResult = ({ navigation, saveData }) => {
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../../assets/images/1.png")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View>
          <View>
            <View>
              <ReturnButtonScreen
                BigPlace={"競馬場"}
                screenName={"結果"}
                nviUrl={"RaceList"}
              />
            </View>
          </View>
          <View style={Screenstyles.UPCourse}>
            <RaceResultScreen />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    saveData: state.horseData.saveData,
  };
};
export default connect(mapStateToProps)(RaceResult);
