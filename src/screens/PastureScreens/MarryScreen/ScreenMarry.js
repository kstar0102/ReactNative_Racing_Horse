import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { vh } from "react-native-expo-viewport-units";
import DropdownB from "../../../components/Buttons/DropDwonB";
// Custom IMPORT
import Screenstyles from "../../ScreenStylesheet";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const ScreenMarry = () => {
  return (
    <View style={styles.container}>
      <Text>Text</Text>
      <View>
        <View>
          <DropdownB />
        </View>
        <View>
          <Text>DDD: 50000pt</Text>
          <Text>DDD: 50000pt</Text>
        </View>
      </View>
    </View>
  );
};
export default ScreenMarry;

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_WIDTH > 400 || SCREEN_HEIGHT > 738 ? vh(30) : vh(28),
    flexDirection: "column",
  },
});
