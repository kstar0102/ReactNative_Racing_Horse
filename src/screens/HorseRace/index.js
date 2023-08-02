import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Image,
  ImageBackground,
  Easing,
  BackHandler,
} from "react-native";
// Import the necessary modules and components

import * as ScreenOrientation from "expo-screen-orientation";
import backgroundImage from "../../assets/horseImageData/NewBack/1.png";
import Screenstyles from "../ScreenStylesheet"; // Import the Screenstyles object from the appropriate file
// Redux
import { connect, useDispatch } from "react-redux";
import { RaceResultAction } from "../../store/actions/race/RaceResultAction";
import { useNavigation } from "@react-navigation/native";
import {
  raceWhipHorse,
  numberSource,
  stillSource,
} from "./../../utils/globals"; // Import the horseSource variable from the correct source
import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
  ANIMATION_DURATION,
  
} from "../../utils/constants";

const HorseRace = ({ racingHorseData, raceFieldData, landWidth }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const animations = Array.from({ length: racingHorseData.length }, () => new Animated.Value(0)); // Create an array of Animated.Value without using useState inside the loop
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;

  const mWidth = raceFieldData.distance.split('m')[0];
  let numberWidth = Number(mWidth);

  const backActionHandler = () => {
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return false;
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    // Add event listener for hardware back button press on Android
    BackHandler.addEventListener("hardwareBackPress", backActionHandler);
    return () => {
      // clear/remove event listener
      BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    };
  }, []);


  let shouldStop = false;

  const handleStart = () => {
    startRace();
    translate();
  };

  const handleResult = () => {
    navigation.navigate("RaceResultScreen");
  };
  // BACK IMAGE ANIMATION
  const translate = () => {
    if (shouldStop) {
      return;
    }
    translateValue.setValue(initialValue);
    Animated.timing(translateValue, {
      toValue: ANIMATION_TO_VALUE,
      duration: ANIMATION_DURATION,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      if (true === shouldStop) {
        // Check if animation should continue after each loop
        translate();
      }
    });
  };


  // let speed = 20080;
  // racingHorseData.map((item, index)=>{
  //   if(item[0].quality_leg == "逃" ){
  //     speed = speed + 80;
  //   }
  //   if(item[0].quality_leg == "追" ){
  //     speed = speed + 10080;
  //   }
  //   if(item[0].quality_leg == "大逃" ){
  //     speed = speed - 10080;
  //   }
  //   if(item[0].quality_leg == "先" ){
  //     speed = speed - 5080;
  //   }
  //   if(item[0].quality_leg == "差" ){
  //     speed = speed + 10080;
  //   }
  // });
 
  // Horse ANIMATION
  const startRace = () => {
    const speeds = animations.map((animation) => {
      const speed = Math.floor(Math.random() * 10000) + 20080;
      Animated.timing(animation, {
        toValue: 1,
        duration: speed,
        useNativeDriver: true,
      }).start();

      return speed;
    });
    Animated.parallel(
      animations.map((animation, index) =>
        Animated.timing(animation, {
          toValue: 1,
          duration: speeds[index],
          useNativeDriver: true,
        })
      )
    ).start(() => {
      let sortedSpeeds = [...speeds].sort((a, b) => a - b);
      let winners = [];

      for (let i = 0; i < racingHorseData.length; i++) {
        let minSpeed = sortedSpeeds[i];

        for (let j = 0; j < speeds.length; j++) {
          if (speeds[j] === minSpeed) {
            winners.push({ position: i + 1, horse: `Horse ${j + 1}` });
            break;
          }
        }
      }
      dispatch(
        RaceResultAction(
          winners.map(({ position, horse }) => `${position}st place: ${horse}`)
        )
      );
    });
  };

  let colorCount = [];
  if (racingHorseData != "") {
    racingHorseData.map((item, index) => [colorCount.push(item[0].color)]);
  }
  const horseAnimationStyles = [];
  for (let i = 0; i < racingHorseData.length; i++) {
    const style = {
      transform: [
        {
          translateX: animations[i].interpolate({
            inputRange: [0, 0.2, 0.6, 1],
            outputRange: [landWidth - 57, 380, 280, 0],
          }),
        },
      ],
    };
    horseAnimationStyles.push(style);
  }
  let outPutValue = numberWidth - 300;

  // BACKIMAGE ANIMATION
  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [- outPutValue, OUTPUT_RANGE_END],
  });
  if (translateAnimation == 0) {
    shouldStop = true;
  }
  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

  return (
    <>
      <View style={Screenstyles.RaceCourseContainer}>
        <AnimatedImage
          resizeMode="repeat"
          style={[
            Screenstyles.background,
            {width: numberWidth * 1.5, flex: 1},
            {
              transform: [
                {
                  translateX: translateAnimation,
                },
              ],
            },
          ]}
          source={backgroundImage}
        >
          <View style={[Screenstyles.stillGroup, {width: numberWidth + 300}]}>
            {stillSource.map((still, j) => {
              return (
                <Image
                  key={`${j}`}
                  style={Screenstyles.still}
                  source={still[j + 1]}
                />
              );
            })}
          </View>

          <Image
            style={Screenstyles.final}
            source={require("../../assets/horseImageData/Final/1.png")}
          />
        </AnimatedImage>

        <View style={styles.horseGroup}>
          {horseAnimationStyles.map((style, i) => (
            <Animated.View key={i} style={[styles.horse, style]}>
              <View style={Screenstyles.RaceCoursecontent}>
                {raceWhipHorse.map((item, index) => {
                  return (
                    <>
                      <Image
                        key={`${index}-${i}`}
                        style={Screenstyles.horseSize}
                        source={item[colorCount[i]]}
                      />
                    </>
                  );
                })}
              </View>
              <View style={[styles.number]}>
                {numberSource.map((number, j) => {
                  return (
                    <Image
                      key={`${i}-${j}`}
                      source={number[i + 1]}
                    />
                  );
                })}
              </View>
            </Animated.View>
          ))}
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>レース</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red" }]}
            onPress={handleResult}
          >
            <Text style={styles.buttonText}>結果</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    racingHorseData: state.racingHJData.racingHorse,
    racingJockeyData: state.racingHJData.racingJockey,
    raceFieldData: state.raceData.raceFieldData,
    landWidth: state.dimensions.dimensionsData.height
  };
};
export default connect(mapStateToProps)(HorseRace);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  horseGroup: {
    marginTop: 100,
  },
  horse: {
    width: 50,
    marginVertical: -10,
  },
  button: {
    width: "20%",
    height: 32,
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
  },
  buttonGroup: {
    position: "absolute",
    left: "70%",
    top: "46%",
    width: "100%",
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  winnerText: {
    width: "100%",
    fontSize: 20,
    marginTop: 20,
  },
  number: {
    position: "absolute",
    left: 40,
    top: 30,
    zIndex: 1000,
  },
});
