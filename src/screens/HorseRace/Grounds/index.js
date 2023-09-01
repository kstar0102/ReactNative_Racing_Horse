import React, { useState, useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import Screenstyles from "../../ScreenStylesheet";
import { groundType } from "../horseRaceGlobal";
import { grouns, glasss } from "../../../utils/globals";

const Grounds = ({ ground, raceWidth }) => {
  const [grounds, setGrounds] = useState();

  useEffect(() => {
    setGrounds(groundType(ground, glasss, grouns));
  }, [ground]);
  return (
    <>
      <Image
        resizeMode="repeat"
        style={[Screenstyles.background, { width: raceWidth }]}
        source={grounds}
      />
    </>
  );
};

export default Grounds;

const styles = StyleSheet.create({});
