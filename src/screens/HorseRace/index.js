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
  secondTiming,
  threeTiming,
  fourTiming,
  speedController,
  secondSpeedController,
  threeSpeedController,
  fourSpeedController,
  fiveSpeedController,
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
  racingJockeyData,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;
  const [firstT, setFirstT] = useState(0);
  const [secondT, setSecondT] = useState(0);
  const [threeT, setThreeT] = useState(0);
  const [fourT, setFourT] = useState(0);
  const [firstSpeed, setFirstSpeed] = useState(null);
  const [speedControllers, setSpeedControllers] = useState(null);
  const [secondSpeeds, setSecondSpeeds] = useState(null);
  const [threeSpeeds, setThreeSpeeds] = useState(null);
  const [fourSpeeds, setFourSpeeds] = useState(null);
  const [fiveSpeeds, setFiveSpeeds] = useState(null);
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

  let colorCount = [];

  // SPEED VALUe VALI
  const spd_arr = [];
  const totals = [];
  // ANIMATION VALI
  let shouldStop = false;
  let animationState = false;
  const horseAnimationStyles = [];
  // CLEARTIMEOUT VALI
  let raceTimer1;
  let raceTimer2;
  let raceTimer3;
  let raceTimer4;
  let raceTimer5;
  useEffect(() => {
    setFirstT(firstTiming(racingtime));
    if (
      reaceReigsterData != "" &&
      racingHorseData != "" &&
      racingJockeyData != ""
    ) {
      setFirstSpeed(firstSpeedController(reaceReigsterData, racingtime));
      setSpeedControllers(
        speedController(racingHorseData, ground, racingJockeyData)
      );
    }
  }, [racingtime, reaceReigsterData, racingHorseData, racingJockeyData]);

  useEffect(() => {
    if (firstSpeed !== null) {
      setSecondT(secondTiming(firstSpeed));
      setThreeT(threeTiming(firstSpeed, firstT, secondT));
      setFourT(fourTiming(firstSpeed, firstT, secondT, threeT));
    }

    if (speedControllers !== null && racingHorseData !== "") {
      setSecondSpeeds(
        secondSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          firstT
        )
      );
      setThreeSpeeds(
        threeSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          firstT + secondT
        )
      );
      setFourSpeeds(
        fourSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          firstT + secondT + threeT
        )
      );
      setFiveSpeeds(
        fiveSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          firstT + secondT + threeT + fourT
        )
      );
    }
  }, [firstSpeed, speedControllers]);

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

  const handleStart = () => {
    startRace(firstSpeed);
    translate();
    raceTimer1 = setTimeout(() => {
      stopRace();
      fResumeRace();
    }, firstT);

    raceTimer2 = setTimeout(() => {
      stopRace();
      sResumeRace();
    }, firstT + secondT);

    raceTimer3 = setTimeout(() => {
      stopRace();
      tResumeRace();
    }, firstT + secondT + threeT);

    raceTimer4 = setTimeout(() => {
      stopRace();
      foResumeRace();
      for (let i = 0; i < spd_arr[0].length; i++) {
        totals.push({
          position: (
            (spd_arr[0][i] / 5 +
              spd_arr[1][i] / 4 +
              spd_arr[2][i] / 3 +
              spd_arr[3][i] / 2 +
              spd_arr[4][i] +
              10000) /
            1000
          ).toFixed(2),
          horse: `Horse ${i + 1}`,
        });
      }
      const winners = totals.sort((a, b) => a.position - b.position);
      dispatch(
        RaceResultAction(
          winners.map(
            ({ position, horse }, index) =>
              `${index + 1}st place: ${horse} \n time: ${position}`
          )
        )
      );
    }, firstT + secondT + threeT + fourT);
  };
  const handleResult = () => {
    clearTimeout(raceTimer1);
    clearTimeout(raceTimer2);
    clearTimeout(raceTimer3);
    clearTimeout(raceTimer4);
    clearTimeout(raceTimer5);
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
  // Horse ANIMATION
  const startRace = (spds) => {
    if (spds != undefined) {
      spd_arr.push(spds);
    }
    if (animationState) {
      return; // Animation is already running
    }
    animationState = true;
    const speeds = animations.map((animation, j) => {
      const speed = spds[j];
      Animated.timing(animation, {
        toValue: 1,
        duration: speed,
        useNativeDriver: true,
      }).start(() => {
        animationState = false;
      });
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
    ).start(() => {});
  };

  const stopRace = () => {
    animationState = false;
    // Stop the animation by setting the animation state to false
    animations.forEach((animation) => {
      animation.stopAnimation(); // Stop all the horse animations
    });
  };

  const fResumeRace = () => {
    startRace(secondSpeeds);
  };

  const sResumeRace = () => {
    startRace(threeSpeeds);
  };

  const tResumeRace = () => {
    startRace(fourSpeeds);
  };

  const foResumeRace = () => {
    startRace(fiveSpeeds);
  };

  for (let i = 0; i < racingHorseData.length; i++) {
    const style = {
      transform: [
        {
          translateX: animations[i].interpolate({
            inputRange: [0, 1],
            outputRange: [landWidth - 60, 0],
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

  if (translateAnimation == 0) {
    shouldStop = true;
  }

  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
  AnimatedImage.defaultProps = {
    ...AnimatedImage.defaultProps,
    // Set a lower frame rate (e.g., 30 frames per second)
    maxFrameDuration: 33.333333333333336, // 1000 ms / 30 fps
  };

  if (racingHorseData != "") {
    racingHorseData.map((item) => [colorCount.push(item[0].color)]);
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
