import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { vh } from "react-native-expo-viewport-units";
import { ITapButton } from "../../../components/Buttons";

import OfficeTapBreedingHorseScreen from "./OfficeTapScreens/BreedingHorseScreen";
import OfficeTapKnightScreen from "./OfficeTapScreens/KnightScreen";
import OfficeTapRaceHorseScreen from "./OfficeTapScreens/RaceHorseScreen";
import OfficeTapSaintScreen from "./OfficeTapScreens/SaintScreen";
import OfficeTapStallionScreen from "./OfficeTapScreens/StallionScreen";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const OfficeTapScreen = () => {
  const [activeButton, setActiveButton] = useState(3);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch (activeButton) {
      case 1:
        return <OfficeTapRaceHorseScreen />;
      case 2:
        return <OfficeTapKnightScreen />;
      case 3:
        return <OfficeTapSaintScreen />;
      case 4:
        return <OfficeTapBreedingHorseScreen />;
      case 5:
        return <OfficeTapStallionScreen />;
      default:
        return <OfficeTapSaintScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <ITapButton
          id={3}
          color={3}
          isActive={activeButton === 3}
          label={"戦績"}
          onPress={handleButtonPress}
        />
        <ITapButton
          id={2}
          color={2}
          isActive={activeButton === 2}
          label={"騎手"}
          onPress={handleButtonPress}
        />
        <ITapButton
          id={1}
          color={1}
          isActive={activeButton === 1}
          label={"競走馬"}
          onPress={handleButtonPress}
        />
        <ITapButton
          id={4}
          color={4}
          isActive={activeButton === 4}
          label={"繁殖馬"}
          onPress={handleButtonPress}
        />
        <ITapButton
          id={5}
          color={5}
          isActive={activeButton === 5}
          label={"種牡馬"}
          onPress={handleButtonPress}
        />
      </View>
      {renderScreenBelowButtons()}
    </View>
  );
};

export default OfficeTapScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_WIDTH > 400 || SCREEN_HEIGHT > 738 ? vh(30) : vh(28),
    flexDirection: "column",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    width: "100%",
    height: vh(5),
    paddingBottom: vh(1),
  },
});
