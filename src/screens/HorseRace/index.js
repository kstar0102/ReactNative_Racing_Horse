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
import backgroundImage from "../../assets/horseImageData/BakcBigimg.png";
import Screenstyles from "../ScreenStylesheet"; // Import the Screenstyles object from the appropriate file
// Redux
import { connect, useDispatch } from "react-redux";
import { RaceResultAction } from "../../store/actions/race/RaceResultAction";
import { useNavigation } from "@react-navigation/native";
import { horseSource, numberSource, stillSource } from "./../../utils/globals"; // Import the horseSource variable from the correct source
import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_START,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
  ANIMATION_DURATION,
} from "../../utils/constants";

const HorseRace = () => {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [winner, setWinner] = useState([]);
  const animations = Array.from({ length: 10 }, () => new Animated.Value(0)); // Create an array of Animated.Value without using useState inside the loop
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;

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
      navigation.navigate('RaceResultScreen');
  }
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

      for (let i = 0; i < 10; i++) {
        let minSpeed = sortedSpeeds[i];

        for (let j = 0; j < speeds.length; j++) {
          if (speeds[j] === minSpeed) {
            winners.push({ position: i + 1, horse: `Horse ${j + 1}` });
            break;
          }
        }
      }
      // setWinner(
      //   winners.map(({ position, horse }) => `${position}st place: ${horse}`)
      // );
      dispatch(RaceResultAction( winners.map(({ position, horse }) => `${position}st place: ${horse}`)))
    });
  };

  const horseAnimationStyles = [];
  for (let i = 0; i < 10; i++) {
    const style = {
      transform: [
        {
          translateX: animations[i].interpolate({
            inputRange: [0, 1],
            outputRange: [700, 0],
          }),
        },
      ],
    };
    horseAnimationStyles.push(style);
  }
  // BACKIMAGE ANIMATION
  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  });
  if (translateAnimation == 0) {
    shouldStop = true;
  }
  const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);

  return (
    <>
      <View style={Screenstyles.RaceCourseContainer}>
        <AnimetedImage
          resizeMode="repeat"
          style={[
            Screenstyles.background,
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
          <View style={[Screenstyles.stillGroup]}>
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
        </AnimetedImage>

        <View style={styles.horseGroup}>
          {horseAnimationStyles.map((style, i) => (
            <Animated.View key={i} style={[styles.horse, style]}>
              <View style={Screenstyles.RaceCoursecontent}>
                {horseSource.map((sourceName, index) => {
                  return (
                    <>
                      <Image
                        key={`${index}-${i}`}
                        style={Screenstyles.horseSize}
                        source={sourceName[i + 1]}
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
                      style={Screenstyles.horseSize}
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
          <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]} onPress={handleResult}>
            <Text style={styles.buttonText}>結果</Text>
          </TouchableOpacity>
        </View>

        {/* {winner && (
          <Text style={styles.winnerText}>
            {`The winner${winner.length > 1 ? "s are" : " is"} ${winner.join(
              ", "
            )}`}
          </Text>
        )} */}
      </View>
    </>
  );
};

export default HorseRace;
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
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20
  },
  buttonGroup:{
    width: "100%",
    flexDirection: "row",
    // justifyContent: "center",
    marginLeft: "70%"
    
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  winnerText: {
    width: "100%",
    fontSize: 20,
    marginTop: 20,
  },
  number: {
    position: "absolute",
    left: -30,
    top: 30,
  },
});
