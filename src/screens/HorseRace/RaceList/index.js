import React from "react";
import { View, ImageBackground } from "react-native";
import { connect } from "react-redux";
// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import ParticipationHorsesList from "./ParticipationHorsesList";
import { ReturnButton } from "../../../components/Buttons";
import Screenstyles from "../../ScreenStylesheet";

const RaceList = ({ navigation, saveData }) => {
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
              <ReturnButton
                label="競馬場"
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
          <View style={Screenstyles.UPCourse}>
            <ParticipationHorsesList horseData={saveData[0]} />
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
export default connect(mapStateToProps)(RaceList);
