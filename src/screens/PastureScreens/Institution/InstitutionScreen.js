import React from "react";
import { View, ImageBackground } from "react-native";

// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import FooterScreen from "../../LayoutScreen/FooterScreen";
import ReturnButtonScreen from "../../../components/someScreen/ReturnButtonScreen";
import Screenstyles from "../../ScreenStylesheet";
import InstitutionTapScreen from "./InstitutionTapScreen";

const InstitutionScreen = () => {
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../../assets/images/1.png")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View>
          <ReturnButtonScreen
            BigPlace={"牧 場"}
            screenName={"施 設"}
            nviUrl={"PastureScreen"}
          />
          <InstitutionTapScreen />
        </View>
        <FooterScreen />
      </ImageBackground>
    </View>
  );
};

export default InstitutionScreen;
