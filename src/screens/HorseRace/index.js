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
import { calculateGameDate } from "../LayoutScreen/HeaderScreen";
// Redux
import { connect, useDispatch } from "react-redux";
import { RaceResultAction } from "../../store/actions/race/RaceResultAction";
import { useNavigation } from "@react-navigation/native";
import {
  raceWhipHorse,
  raceHorse,
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
  otherSpeedController,
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
  prizeData,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;
  const fadeInAnimation = new Animated.Value(1);
  const fadeOutAnimation = new Animated.Value(0);

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
  const [otherSpeeds, setOtherSpeeds] = useState(null);
  const [isHandleStartRunning, setIsHandleStartRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const whipRef = useRef(false);

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
  let tiredValue = [];
  // SPEED VALUe VALI
  const spd_arr = [];
  const totals = [];
  const totalWinners = [];
  // ANIMATION VALI
  let shouldStop = false;
  let animationState = false;
  const horseAnimationStyles = [];
  // CLEARTIMEOUT VALI
  let raceTimeout;
  useEffect(() => {
    whipRef.current = false;
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
        secondSpeedController(racingHorseData, speedControllers, firstSpeed)
      );
      setOtherSpeeds(
        otherSpeedController(racingHorseData, speedControllers, firstSpeed)
      );
      setThreeSpeeds(
        threeSpeedController(racingHorseData, speedControllers, firstSpeed)
      );
      setFourSpeeds(
        fourSpeedController(racingHorseData, speedControllers, firstSpeed)
      );
      setFiveSpeeds(
        fiveSpeedController(racingHorseData, speedControllers, firstSpeed)
      );
    }
  }, [firstSpeed, speedControllers]);

  const otherSpeedReturn =
    otherSpeeds != null ? otherSpeeds.sort((a, b) => a - b)[0] : "";
  const backActionHandler = () => {
    return true;
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
    clearTimeout(raceTimeout);
    raceTimeout = setTimeout(() => {
      stopRace();
      fResumeRace();
    }, firstT);

    raceTimeout = setTimeout(() => {
      stopRace();
      sResumeRace();
    }, firstT + secondT);

    raceTimeout = setTimeout(() => {
      stopRace();
      tResumeRace();
    }, firstT + secondT + threeT);

    raceTimeout = setTimeout(() => {
      stopRace();
      foResumeRace();
      for (let i = 0; i < spd_arr[0].length; i++) {
        totals.push({
          time: (
            (spd_arr[0][i] / 5 +
              spd_arr[1][i] / 4 +
              spd_arr[2][i] / 3 +
              spd_arr[3][i] / 2 +
              spd_arr[4][i] +
              10000) /
            1000
          ).toFixed(2),
          ranking: i + 1,
        });
      }
      const winners = totals.sort((a, b) => a.time - b.time);
      totalWinners.push(winners);
    }, firstT + secondT + threeT + fourT);
  };

  let horseData = [];
  const handleResult = () => {
    if (totalWinners[0] != undefined) {
      // RANKING AND TIME ARRAY ADD
      let rankings = [];
      let times = [];
      // PUSH
      reaceReigsterData.map((item) => {
        const race_id = item.race_id;
        const user_name = item.user_name;
        const user_id = item.user_id;
        const horse_name = item.horse_name;
        const horse_id = item.horse_id;
        const horse_gender = item.horse_gender;
        const horse_age = item.horse_age;
        const mass = item.mass;
        const jockey_name = item.jockey_name;
        const jockey_id = item.jockey_id;
        const quality_leg = item.quality_leg;
        const race_type = item.prize_id;
        const stall_type = item.stall_type;
        horseData.push({
          race_id,
          user_name,
          user_id,
          horse_name,
          horse_id,
          horse_gender,
          horse_age,
          mass,
          jockey_name,
          jockey_id,
          quality_leg,
          race_type,
          stall_type,
        });
      });

      if (totalWinners[0] != undefined) {
        totalWinners[0].map((ranking) => {
          rankings.push(ranking.ranking);
          times.push(ranking.time);
        });
      }
      for (let i = 0; i < horseData.length; i++) {
        if (i < rankings.length || times.length) {
          horseData[i].ranking = rankings[i];
          horseData[i].time = times[i];
        } else {
          break;
        }
      }

      for (let i = 0; i < prizeData.length; i++) {
        const rank = prizeData[i].rank.trim();

        for (let j = 0; j < horseData.length; j++) {
          if (rank === String(horseData[j].ranking)) {
            horseData[j].prize = prizeData[i].money;
            break;
          }
        }
      }
    }

    if (horseData != "") {
      dispatch(RaceResultAction(horseData, calculateGameDate(currentTime)));
      clearTimeout(raceTimeout);
      navigation.navigate("RaceResult");
    }
  };
  // BACK IMAGE ANIMATION
  const translate = () => {
    if (shouldStop) {
      return;
    }
    translateValue.setValue(initialValue);
    Animated.timing(translateValue, {
      toValue: ANIMATION_TO_VALUE,
      duration: otherSpeedReturn,
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
    fadeIn();
    fadeOut();
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
    racingHorseData.map((item) => {
      colorCount.push(item[0].color);
    });
  }

  // -----------------------------------------------------------------
  // ANIMATIOON FADE IN OUT
  // -------------------------------------------------------------------
 const fadeIn = () => {
    Animated.timing(fadeInAnimation, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeOutAnimation, {
      toValue: 1,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

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
            {stillSource.map((still, l) => {
              return (
                <Image
                  key={`${l}`}
                  style={Screenstyles.still}
                  source={still[l + 1]}
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
            <View key={i}>
              <Animated.View style={[styles.noWhip, style, {opacity: fadeOutAnimation}]}>
                <View key={i} style={Screenstyles.RaceCoursecontent}>
                  {raceHorse.map((item, k) => {
                    return (
                      <View key={`${i}-${k}`}>
                        <Image
                          style={Screenstyles.horseSize}
                          source={item[colorCount[i]]}
                        />
                      </View>
                    );
                  })}
                </View>
                <View style={[styles.number]}>
                  {numberSource.map((number, j) => {
                    return <Image key={`${i}-${j}`} source={number[i + 1]} />;
                  })}
                </View>
              </Animated.View>

              <Animated.View style={[styles.horse, style, {opacity: fadeInAnimation}]}>
                <View key={i} style={Screenstyles.RaceCoursecontent}>
                  {raceWhipHorse.map((item, k) => {
                    return (
                      <View key={`${i}-${k}`}>
                        <Image
                          style={Screenstyles.horseSize}
                          source={item[colorCount[i]]}
                        />
                      </View>
                    );
                  })}
                </View>
                <View style={[styles.number]}>
                  {numberSource.map((number, j) => {
                    return <Image key={`${i}-${j}`} source={number[i + 1]} />;
                  })}
                </View>
              </Animated.View>
            </View>
          ))}
        </View>
        <Image style={[Screenstyles.skyImage]} source={weathers} />

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleStart}
            disabled={isHandleStartRunning == true ? true : false}
          >
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
  // rank money
  return {
    racingHorseData: state.racingHJData.racingHorse,
    racingJockeyData: state.racingHJData.racingJockey,
    raceFieldData: state.raceData.raceFieldData,
    landWidth: state.dimensions.dimensionsData.height,
    reaceReigsterData: state.raceData.raceRegisterData,
    prizeData: state.raceData.prizeData,
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
    marginTop:-33,
  },
  noWhip:{
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
