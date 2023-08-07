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
import Screenstyles from "../ScreenStylesheet"; // Import the Screenstyles object from the appropriate file
// Redux
import { connect, useDispatch } from "react-redux";
import { RaceResultAction } from "../../store/actions/race/RaceResultAction";
import { useNavigation } from "@react-navigation/native";
import {
  raceWhipHorse,
  numberSource,
  stillSource,
  grouns,
  glasss,
} from "./../../utils/globals"; // Import the horseSource variable from the correct source
import {
  firstTiming,
  firstSpeedController,
  raceTime,
  weatherType,
  groundType,
} from "./horseRaceGlobal";
import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
} from "../../utils/constants";
const HorseRace = ({
  racingHorseData,
  raceFieldData,
  landWidth,
  reaceReigsterData,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;
  const [firstT, setFirstT] = useState(0);
  const [firstSpeed, setFirstSpeed] = useState(0);

  // const [weathers, setWeathers] = useState(0);
  const animations = Array.from(
    { length: racingHorseData.length },
    () => new Animated.Value(0)
  ); // Create an array of Animated.Value without using useState inside the loop
  const mWidth = raceFieldData.distance.split("m")[0];
  const ground = raceFieldData.ground;
  const weather = raceFieldData.weather;
  let numberWidth = Number(mWidth);
  let raceWidth = numberWidth + 2000;
  const outPutRange = raceWidth - 800;

  // WEATHER AND RACING TIME AND GROUNDS DEFAULT VAR
  const racingtime = raceTime(numberWidth);
  const weathers = weatherType(weather);
  const grounds = groundType(ground, glasss, grouns);

  useEffect(() => {
    setFirstT(firstTiming(racingtime));
    if (reaceReigsterData != "") {
      setFirstSpeed(firstSpeedController(reaceReigsterData, racingtime));
    }
  }, [racingtime, reaceReigsterData]);

  const backActionHandler = () => {
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
    setTimeout(() => {
      stopRace();
      fResumeRace();
    }, firstT);
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
      duration: racingtime,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      if (true === shouldStop) {
        // Check if animation should continue after each loop
        translate();
      }
    });
  };
  // Horse ANIMATIONsk-LJtNzjWM5I2NikxKVNJ2T3BlbkFJ1iGj35xCkRLABDfp84AW
  let animationState = false;

  const startRace = () => {
    if (animationState) {
      return; // Animation is already running
    }
    animationState = true;
    const speeds = animations.map((animation, j) => {
      const speed = firstSpeed[j];
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
      // Animation completed
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
      animationState = false;
    });
  };

  const stopRace = () => {
    animationState = false;
    // Stop the animation by setting the animation state to false
    animations.forEach((animation) => {
      animation.stopAnimation(); // Stop all the horse animations
    });
  };

  const resumeRace = (spds) => {
    if (animationState) {
      return; // Animation is already running
    }
    animationState = true;
    const currentValues = animations.map((animation) => animation.__getValue());
    const speeds = animations.map((animation, index) => {
      const speed = Math.floor(Math.random() * 10000) + 10080;
      Animated.timing(animation, {
        toValue: 1,
        duration: (1 - currentValues[index]) * speed, // Resume from the stopped value
        useNativeDriver: true,
      }).start();

      return speed;
    });
  };

  const fResumeRace = () => {
    resumeRace(Math.floor(Math.random() * 10000) + 10080);
  };

  const handleBack = () => {
    if (animationState) {
      return; // Animation is already running
    }
    animationState = true;
    const currentValues = animations.map((animation) => animation.__getValue());
    const speeds = animations.map((animation, index) => {
      const speed = Math.floor(Math.random() * 10000) + 10080;
      Animated.timing(animation, {
        toValue: 0, // Move forward by setting toValue to 1
        duration: (1 - currentValues[index]) * speed, // Resume from the stopped value and complete the remaining distance
        useNativeDriver: true,
      }).start();

      return speed;
    });
  };

  const horseAnimationStyles = [];
  for (let i = 0; i < racingHorseData.length; i++) {
    const style = {
      transform: [
        {
          translateX: animations[i].interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [
              landWidth - 60,
              (landWidth / 5) * 4 - 60,
              (landWidth / 5) * 3 - 60,
              (landWidth / 5) * 2 - 60,
              landWidth / 5 - 60,
              0,
            ],
          }),
        },
      ],
    };
    horseAnimationStyles.push(style);
  }
  // BACKIMAGE ANIMATION
  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [-outPutRange, OUTPUT_RANGE_END],
  });

  // if (translateAnimation == 0) {
  //   shouldStop = true;
  // }

  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
  AnimatedImage.defaultProps = {
    ...AnimatedImage.defaultProps,
    // Set a lower frame rate (e.g., 30 frames per second)
    maxFrameDuration: 33.333333333333336, // 1000 ms / 30 fps
  };

  let colorCount = [];
  if (racingHorseData != "") {
    racingHorseData.map((item, index) => [colorCount.push(item[0].color)]);
  }

  return (
    <>
      <View style={Screenstyles.RaceCourseContainer}>
        <AnimatedImage
          resizeMode="repeat"
          style={[
            Screenstyles.background,
            { width: raceWidth },
            {
              transform: [
                {
                  translateX: translateAnimation,
                },
              ],
            },
          ]}
          source={grounds}
        >
          <View style={[Screenstyles.stillGroup, { width: raceWidth }]}>
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
                  return <Image key={`${i}-${j}`} source={number[i + 1]} />;
                })}
              </View>
            </Animated.View>
          ))}
        </View>
        <Image style={[Screenstyles.skyImage]} source={weathers} />
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

          {/* <TouchableOpacity style={styles.button} onPress={resumeRace}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.button} onPress={stopRace}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Back Start</Text>
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
    landWidth: state.dimensions.dimensionsData.height,
    reaceReigsterData: state.raceData.raceRegisterData,
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
    width: "-30%",
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
