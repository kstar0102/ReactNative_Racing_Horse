import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Custom IMPORT
import { ReturnButton } from "../Buttons";
import Screenstyles from "../../screens/ScreenStylesheet";

const ReturnButtonScreen = ({ nviUrl, secondNviUrl, BigPlace, screenName, colorNumber }) => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <ReturnButton
          label={BigPlace ? BigPlace : "404 NOT FOUND"}
          onPress={() => navigation.navigate(nviUrl)}
          color={colorNumber}
        />
      </View>
      <View style={Screenstyles.UPRButton}>
        <ReturnButton
          label={screenName ? screenName : "404 NOT FOUND"}
          color={colorNumber}
          // onPress={() => navigation.navigate(secondNviUrl ? secondNviUrl : "mmm")}
        />
      </View>
    </>
  );
};

export default ReturnButtonScreen;
