import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Custom IMPORT
import { ReturnButton } from "../Buttons";
import Screenstyles from "../../screens/ScreenStylesheet";

const NormalButtonGrop = ({ onFirstEvent, BigPlace, screenName, colorNumber }) => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <ReturnButton
          label={BigPlace ? BigPlace : "404 NOT FOUND"}
          onPress={onFirstEvent}
          color={colorNumber}
        />
      </View>
      <View style={Screenstyles.UPRButton}>
        <ReturnButton
          label={screenName ? screenName : "404 NOT FOUND"}
          color={colorNumber}
          onPress={() => alert("hhh")}
          // onPress={() => navigation.navigate(secondNviUrl ? secondNviUrl : "mmm")}
        />
      </View>
    </>
  );
};

export default NormalButtonGrop;
