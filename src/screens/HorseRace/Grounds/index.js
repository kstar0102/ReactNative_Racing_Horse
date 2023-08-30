import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Screenstyles from "../../ScreenStylesheet";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
import {
  groundType,
} from "../horseRaceGlobal";
import { grouns, glasss } from "../../../utils/globals";

const Grounds = ({ ground }) => {
  const grounds = groundType(ground, glasss, grouns);

  return (
    <>
      <Image
        resizeMode="repeat"
        style={[Screenstyles.background, { width: 5800 }]}
        source={grounds}
      />
    </>
  );
};

export default Grounds;

const styles = StyleSheet.create({});
