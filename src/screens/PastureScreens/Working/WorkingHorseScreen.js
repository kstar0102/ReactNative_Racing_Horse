import React from "react";
import { View, ImageBackground } from "react-native";
// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import FooterScreen from "../../LayoutScreen/FooterScreen";
import { ReturnButton } from "../../../components/Buttons";
import Screenstyles from "../../ScreenStylesheet";
import WorkingHorseTapScreen from "./WorkingHorseTapScreen";

const WorkingHorseScreen = ({ navigation }) => {
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
                label="牧 場"
                onPress={() => navigation.navigate("PastureScreen")}
              />
            </View>
            <View style={Screenstyles.UPRButton}>
              <ReturnButton label="繁用馬" />
            </View>
          </View>
          <WorkingHorseTapScreen />
        </View>
        <FooterScreen />
      </ImageBackground>
    </View>
  );
};

export default WorkingHorseScreen;
