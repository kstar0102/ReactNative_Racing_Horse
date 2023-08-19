/**
 * ===========================START=========================
 * Import parts
 * ===========================START=========================
 */
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
//
// Import the necessary modules and components
//
import * as ScreenOrientation from "expo-screen-orientation";
import Screenstyles from "../../ScreenStylesheet"; // Import the Screenstyles object from the appropriate file
import { calculateGameDate } from "../../LayoutScreen/HeaderScreen";
//
// Redux import
//
import { connect, useDispatch } from "react-redux";
import { RaceResultAction } from "../../../store/actions/race/RaceResultAction";
import { useNavigation } from "@react-navigation/native";
//
// constant values
// Import the horseSource variable from the correct source
//
import {
  raceWhipReversHorse,
  raceReversHorse,
  numberSource,
  stillSource,
  grouns,
  glasss,
} from "./../../../utils/globals";
//
// calculating formals
//
import {
  firstTiming,
  firstSpeedController,
  cSpeedController,
  secondTiming,
  threeTiming,
  fourTiming,
  fivTiming,
  speedController,
  secondSpeedController,
  threeSpeedController,
  fourSpeedController,
  fiveSpeedController,
  sixSpeedController,
  otherSpeedController,
  raceTime,
  weatherType,
  groundType,
  finalsType,
} from "../horseRaceGlobal";

import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
} from "../../../utils/constants";
/**
 * =========================END=========================
 * Import parts
 * =========================END=========================
 */

//
// Redux data
//
const ReverseRace = ({
  racingHorseData,
  raceFieldData,
  landWidth,
  reaceReigsterData,
  raceHorseData,
  racingJockeyData,
  prizeData,
  oddsData,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;
  const fadeInAnimation = new Animated.Value(0);
  const fadeOutAnimation = new Animated.Value(1);
  const fadeOutButtonAnimation = new Animated.Value(1);
  const fadeInButtonAnimation = new Animated.Value(0);
  const fadeOutLodingAnimation = new Animated.Value(1);

  //
  // state define
  //  setFiveT
  const [firstT, setFirstT] = useState(0);
  const [secondT, setSecondT] = useState(0);
  const [threeT, setThreeT] = useState(0);
  const [fourT, setFourT] = useState(0);
  const [fivT, setFivT] = useState(0);
  const [firstSpeed, setFirstSpeed] = useState(null);
  const [cSpeed, setCSpeed] = useState(null);
  const [speedControllers, setSpeedControllers] = useState(null);
  const [secondSpeeds, setSecondSpeeds] = useState(null);
  const [threeSpeeds, setThreeSpeeds] = useState(null);
  const [fourSpeeds, setFourSpeeds] = useState(null);
  const [fiveSpeeds, setFiveSpeeds] = useState(null);
  const [sixSpeeds, setSixSpeeds] = useState(null);
  const [otherSpeeds, setOtherSpeeds] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Global scope variables
  //
  const animations = Array.from(
    { length: racingHorseData.length },
    () => new Animated.Value(0)
  ); // Create an array of Animated.Value without using useState inside the loop
  const mWidth = raceFieldData.distance.split("m")[0];
  const ground = raceFieldData.ground;
  const place = raceFieldData.place;
  const weather = raceFieldData.weather;
  let numberWidth = Number(mWidth);
  let raceWidth = (numberWidth / 100) * 290;
  const outPutRange = raceWidth - 800;
  // WEATHER AND RACING TIME AND GROUNDS DEFAULT VAR
  const racingtime = raceTime(numberWidth);
  const weathers = weatherType(weather);
  const grounds = groundType(ground, glasss, grouns);
  const finals = finalsType(ground, place);
  let colorCount = [];
  // SPEED VALUE VALI
  const spd_arr = [];
  const totals = [];
  const totalWinners = [];
  // ANIMATION VALI
  let shouldStop = false;
  let animationState = false;
  const horseAnimationStyles = [];
  // CLEARTIMEOUT VALI
  let raceTimeout;
  /**
   * ======================start==========================
   * UseEffect
   * ======================start==========================
   */
  setTimeout(() => {
    Animated.timing(fadeOutLodingAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, 3000);

  //
  // calculate first time, first speed and speedController(basic value)
  //
  useEffect(() => {
    //
    setFirstT(firstTiming(racingtime));
    setFirstSpeed(firstSpeedController(reaceReigsterData, racingtime));
    setCSpeed(cSpeedController(reaceReigsterData, racingtime));
    if (
      reaceReigsterData != "" &&
      racingHorseData != "" &&
      racingJockeyData != ""
    ) {
      setSpeedControllers(
        speedController(racingHorseData, ground, racingJockeyData)
      );
    }
  }, [racingtime]);
  //
  // calculate second, third, fourth time, and another speeds
  //
  useEffect(() => {
    if (firstSpeed != null) {
      setSecondT(secondTiming(firstSpeed));

      if (secondT != 0) {
        setThreeT(threeTiming(firstSpeed, firstT, secondT));
        if (threeT != 0) {
          setFourT(fourTiming(firstSpeed, firstT, secondT, threeT));
          setFivT(fivTiming(firstSpeed, firstT, secondT, threeT));
        }
      }
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
      setSixSpeeds(
        sixSpeedController(racingHorseData, speedControllers, firstSpeed)
      );
    }
  }, [firstSpeed, secondT, threeT]);

  const otherSpeedReturn =
    otherSpeeds != null ? firstT + secondT + threeT + fourT : "";
  const backActionHandler = () => {
    return true;
  };
  //
  // screen orientation
  //
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
  /**
   * =======================END=========================
   * UseEffect
   * =======================END=========================
   */

  /**
   * =======================START=======================
   * handle main work
   * =======================START=======================
   */
  //
  // start race with settime out
  //
  const handleStart = () => {
    startRace(cSpeed);
    setTimeout(() => {
      startRace(firstSpeed);
    }, 1000);

    translate();
    fadeOutButton();
    fadeInButton();
    clearTimeout(raceTimeout);

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
        odds: oddsData[i],
      });
    }

    const winners = totals;
    totalWinners.push(winners);

    raceTimeout = setTimeout(() => {
      stopRace();
      startRace(secondSpeeds);
    }, firstT);

    raceTimeout = setTimeout(() => {
      stopRace();
      startRace(threeSpeeds);
    }, firstT + secondT);

    raceTimeout = setTimeout(() => {
      stopRace();
      startRace(fourSpeeds);
      fadeInEnd();
      fadeOutEnd();
    }, firstT + secondT + threeT);

    raceTimeout = setTimeout(() => {
      startRace(sixSpeeds);
    }, firstT + secondT + threeT + fourT);

    raceTimeout = setTimeout(() => {
      stopRace();
      startRace(sixSpeeds);
    }, firstT + secondT + threeT + fivT);
    
  };
  //
  // get result
  //
  let horseData = [];
  const handleResult = () => {
    if (totalWinners[0] != undefined) {
      // RANKING AND TIME ARRAY ADD
      let rankings = [];
      let times = [];
      let oddss = [];
      // PUSH
      raceHorseData.map((item) => {
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
          oddss.push(ranking.odds);
        });
      }

      for (let i = 0; i < horseData.length; i++) {
        if (i < rankings.length || times.length) {
          horseData[i].ranking = rankings[i];
          horseData[i].time = times[i];
          horseData[i].odds = oddss[i];
        } else {
          break;
        }
      }

      for (let i = 0; i < prizeData.length; i++) {
        const rank = prizeData[i].rank.trim();

        for (let j = 0; j < horseData.length; j++) {
          if (rank === String(horseData[j].ranking)) {
            horseData[j].prize = prizeData[i].money;
          }
        }
      }

      for (let j = 0; j < horseData.length; j++) {
        if (!horseData[j].prize) {
          horseData[j].prize = 0;
        }
      }

      const timestamp = calculateGameDate(currentTime);
      const date = new Date(timestamp);
      const year = date.getFullYear();

      for (let j = 0; j < horseData.length; j++) {
        horseData[j].year = year;
      }
    }

    if (horseData != "") {
      dispatch(
        RaceResultAction(
          horseData.sort((a, b) => a.time - b.time),
          calculateGameDate(currentTime)
        )
      );
      clearTimeout(raceTimeout);
      navigation.navigate("RaceResult");
    }
  };
  //
  // moving ground
  //
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
  //
  // start race(only logic)
  // Horse ANIMATION ACTION
  //
  const startRace = (spds) => {
    spd_arr.push(firstSpeed, secondSpeeds, threeSpeeds, fourSpeeds, fiveSpeeds);
    if (animationState) {
      return; // Animation is already running
    }
    animationState = true;
    const currentValues = animations.map((animation) => animation.__getValue());
    const speeds = animations.map((animation, index) => {
      const speed = spds[index];
      Animated.timing(animation, {
        toValue: 0, // Move forward by setting toValue to 1
        duration: (1 - currentValues[index]) * speed, // Resume from the stopped value and complete the remaining distance
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
    ).start(() => {});
  };
  //
  // stop race(only logic)
  //
  const stopRace = () => {
    animationState = false;
    // Stop the animation by setting the animation state to false
    animations.forEach((animation) => {
      animation.stopAnimation(); // Stop all the horse animations
    });
  };
  //
  // set every horse outputrange so that to calculate there distance
  //
  for (let i = 0; i < racingHorseData.length; i++) {
    const style = {
      transform: [
        {
          translateX: animations[i].interpolate({
            inputRange: [0, 1],
            outputRange: [20, landWidth - 40],
          }),
        },
      ],
    };
    horseAnimationStyles.push(style);
  }
  //
  // moving background
  // BACKIMAGE ANIMATION
  //
  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_END, -outPutRange],
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
  /**
   * =========================START==========================
   * fade in, fade out part
   * =========================START==========================
   */
  const fadeInEnd = () => {
    Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutEnd = () => {
    Animated.timing(fadeOutAnimation, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutButton = () => {
    Animated.timing(fadeOutButtonAnimation, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

  const fadeInButton = () => {
    Animated.timing(fadeInButtonAnimation, {
      toValue: 1,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };
  /**
   * =========================END==========================
   * fade in, fade out part
   * =========================END==========================
   */
  //VIEW---------------------------------------------------
  return (
    <>
      <View style={Screenstyles.RaceCourseContainer}>
        <Animated.View
          style={[
            styles.loadingBack,
            { opacity: fadeOutLodingAnimation, zIndex: fadeOutLodingAnimation },
          ]}
        >
          <Image
            style={{ left: 340, top: 150, width: 100, height: 64 }}
            source={require("../../../assets/images/ezgif.com-resize.gif")}
          />
        </Animated.View>

        {/* ground start */}
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
          <View style={[Screenstyles.stillGroupR, { width: raceWidth }]}>
            {stillSource.map((still, l) => {
              return (
                <Image
                  key={`${l}`}
                  style={Screenstyles.stillR}
                  source={still[l + 1]}
                />
              );
            })}
          </View>

          <Image style={Screenstyles.finalR} source={finals} />
        </AnimatedImage>
        {/* ground end */}
        {/* horse start */}
        <View style={styles.horseGroup}>
          {horseAnimationStyles.map((style, i) => (
            <View key={i}>
              <Animated.View
                style={[styles.noWhip, style, { opacity: fadeOutAnimation }]}
              >
                <View key={i} style={Screenstyles.RaceCoursecontent}>
                  {raceReversHorse.map((item, k) => {
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
                <View style={[styles.numberR]}>
                  {numberSource.map((number, j) => {
                    return <Image key={`${i}-${j}`} source={number[i + 1]} />;
                  })}
                </View>
              </Animated.View>

              <Animated.View
                style={[styles.horse, style, { opacity: fadeInAnimation }]}
              >
                <View key={i} style={Screenstyles.RaceCoursecontent}>
                  {raceWhipReversHorse.map((item, k) => {
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
                <View style={[styles.numberR]}>
                  {numberSource.map((number, j) => {
                    return <Image key={`${i}-${j}`} source={number[i + 1]} />;
                  })}
                </View>
              </Animated.View>
            </View>
          ))}
        </View>
        {/* hrose end */}
        {/* sky image */}
        <Image style={[Screenstyles.skyImage]} source={weathers} />
        {/* buttons start */}
        <View style={styles.buttonGroup}>
          <Animated.View
            style={{
              opacity: fadeOutButtonAnimation,
              zIndex: fadeOutButtonAnimation,
            }}
          >
            <TouchableOpacity style={styles.button} onPress={handleStart}>
              <Text style={styles.buttonText}>レース</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={{
              opacity: fadeInButtonAnimation,
              zIndex: fadeInButtonAnimation,
            }}
          >
            <TouchableOpacity
              style={styles.button1}
              onPress={handleStart}
              disabled={true}
            >
              <Text style={styles.buttonText}>レース</Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#f02054" }]}
            onPress={handleResult}
          >
            <Text style={styles.buttonText}>結果</Text>
          </TouchableOpacity>
        </View>
        {/* buttons end */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: -3,
            position: "absolute",
            top: "49%",
          }}
        >
          <Image
            style={{ zIndex: -1, height: 35 }}
            source={require("../../../assets/images/raceRBackground.jpg")}
          />
          <Image
            style={{ zIndex: -1, right: 60, height: 35 }}
            source={require("../../../assets/images/raceRBackgroundR.jpg")}
          />
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
    raceHorseData: state.racingHorseData.racingHorseData,
    prizeData: state.raceData.prizeData,
    oddsData: state.raceOddsData.oddsData,
  };
};
export default connect(mapStateToProps)(ReverseRace);
/**
 * ======================START=======================
 * style part
 * ======================START=======================
 */
//
const styles = StyleSheet.create({
  loadingBack: {
    position: "absolute",
    zIndex: 3000,
    width: 1000,
    height: 400,
    backgroundColor: "#fff",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
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
    marginTop: -33,
  },
  noWhip: {
    width: 50,
    marginVertical: -10,
  },
  button: {
    height: 26,
    width: 80,
    backgroundColor: "#0568aa",
    padding: 2,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
  },
  button1: {
    height: 26,
    width: 80,
    backgroundColor: "#0568aa",
    padding: 2,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: -80,
    opacity: 0.5,
  },
  buttonGroup: {
    position: "absolute",
    left: "60%",
    top: "46.8%",
    width: "100%",
    flexDirection: "row",
    paddingLeft: 20
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

  numberR: {
    position: "absolute",
    left: -20,
    top: 30,
    zIndex: 1000,
  },
});
/**
 * ======================END=======================
 * style part
 * ======================END=======================
 */