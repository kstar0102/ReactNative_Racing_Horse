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
  BackHandler,
  Dimensions,
  ScrollView,
} from "react-native";

//
// Import the necessary modules and components
//
import * as ScreenOrientation from "expo-screen-orientation";
import Screenstyles from "../ScreenStylesheet"; // Import the Screenstyles object from the appropriate file
import { calculateGameDate } from "../LayoutScreen/HeaderScreen";
//
// Redux import
//
import { connect, useDispatch } from "react-redux";
import { RaceResultAction } from "../../store/actions/race/RaceResultAction";
import { useNavigation } from "@react-navigation/native";
//
// constant values
// Import the horseSource variable from the correct source
//
import {
  raceWhipHorse,
  raceHorse,
  numberSource,
  stillSource,
  grouns,
  glasss,
} from "./../../utils/globals";
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
  raceTime,
  weatherType,
  groundType,
  finalsType,
} from "./horseRaceGlobal";

import RaceHorses from "./RaceHorses";
/**
 * =========================END=========================
 * Import parts
 * =========================END=========================
 */

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

//
// Redux data
//
const HorseRace = ({
  racingHorseData,
  raceFieldData,
  raceResultDatas,
  landWidth,
  reaceReigsterData,
  raceHorseData,
  racingJockeyData,
  prizeData,
  oddsData,
  raceCpuData,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const fadeInButtonAnimation = new Animated.Value(0);
  const fadeInAnimation = new Animated.Value(0);
  const fadeOutAnimation = new Animated.Value(1);
  
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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startState, setStartState] = useState(0);
  const [horseState, setHorseState] = useState(0);

  let raceAllData = [];
  let raceResultData = [];
  let colorCount = [];
  //
  if (racingHorseData != "") {
    racingHorseData.map((item) => {
      colorCount.push(item[0].color);
      raceAllData.push(item[0]);
    });
  }

  if (raceHorseData != "") {
    raceHorseData.map((item) => {
      raceResultData.push(item);
    });
  }

  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      colorCount.push(item.color);
      raceAllData.push(item);
      raceResultData.push(item);
    });
  }

  // Global scope variables
  //

  const animations = Array.from({ length: 10 }, () => new Animated.Value(0)); // Create an array of Animated.Value without using useState inside the loop
  const mWidth = raceFieldData.distance.split("m")[0];
  const ground = raceFieldData.ground;
  const place = raceFieldData.place;
  const weather = raceFieldData.weather;
  let numberWidth = Number(mWidth);
  let raceWidth = (numberWidth / 100) * 290;
  const outPutRange = raceWidth - 800;
  const [stateA, setStateA] = useState({ a: raceWidth - 60 });
  const fastSpeed = useRef(raceWidth - 60);
  // WEATHER AND RACING TIME AND GROUNDS DEFAULT VAR
  const racingtime = raceTime(numberWidth);
  const weathers = weatherType(weather);
  const grounds = groundType(ground, glasss, grouns);
  const finals = finalsType(ground, place);

  // SPEED VALUE VALI
  const spd_arr = [];
  const totals = [];
  const totalWinners = [];
  // ANIMATION VALI
  let animationState = false;
  const horseAnimationStyles = [];
  // CLEARTIMEOUT VALI
  let raceTimeout;
  /**
   * ======================start==========================
   * UseEffect
   * ======================start==========================
   */
  // setTimeout(() => {
  //   Animated.timing(fadeOutLodingAnimation, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // }, 3000);

  //
  // calculate first time, first speed and speedController(basic value)
  //
  useEffect(() => {
    //
    setFirstT(firstTiming(racingtime));
    setFirstSpeed(firstSpeedController(raceAllData, racingtime));
    setCSpeed(cSpeedController(raceAllData, racingtime));
    if (
      reaceReigsterData != "" &&
      racingHorseData != "" &&
      racingJockeyData != "" &&
      raceCpuData != ""
    ) {
      setSpeedControllers(
        speedController(racingHorseData, ground, racingJockeyData, raceCpuData)
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
        secondSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          raceCpuData
        )
      );
      setThreeSpeeds(
        threeSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          raceCpuData
        )
      );
      setFourSpeeds(
        fourSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          raceCpuData
        )
      );
      setFiveSpeeds(
        fiveSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          raceCpuData
        )
      );
      setSixSpeeds(
        sixSpeedController(
          racingHorseData,
          speedControllers,
          firstSpeed,
          raceCpuData
        )
      );
    }
  }, [firstSpeed, secondT, threeT]);

  const backActionHandler = () => {
    return false;
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
    setStartState(1);
    // startRace(cSpeed);
    // setTimeout(() => {
    //   startRace(firstSpeed);
    // }, 2000);

    // clearTimeout(raceTimeout);

    // for (let i = 0; i < spd_arr[0].length; i++) {
    //   totals.push({
    //     time: (
    //       (spd_arr[0][i] / 5 +
    //         spd_arr[1][i] / 4 +
    //         spd_arr[2][i] / 3 +
    //         spd_arr[3][i] / 2 +
    //         spd_arr[4][i] +
    //         10000) /
    //       1000
    //     ).toFixed(2),
    //     ranking: i + 1,
    //     odds: oddsData[i],
    //   });
    // }
    // const winners = totals;
    // totalWinners.push(winners);

    raceTimeout = setTimeout(() => {
      console.log("---------------firstT---------");
    }, firstT);

    raceTimeout = setTimeout(() => {
      console.log("---------------secondT---------");
    }, firstT + secondT);

    raceTimeout = setTimeout(() => {
      console.log("---------------threeT---------");
      fadeInEnd();
      fadeOutEnd();
    }, firstT + secondT + threeT);

    raceTimeout = setTimeout(() => {
      console.log("---------------fourT--------------- ");
    }, firstT + secondT + threeT + fourT);

    raceTimeout = setTimeout(() => {
      console.log("---------------fivT--------------- ");
    }, firstT + secondT + threeT + fivT);
  };

  const startRace = (spds) => {
    spd_arr.push(firstSpeed, secondSpeeds, threeSpeeds, fourSpeeds, fiveSpeeds);

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
  for (let i = 0; i < 10; i++) {
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

  return (
    <>
      <View style={Screenstyles.RaceCourseContainer}>
        {/* ground start */}
        <ScrollView horizontal={true} style={[Screenstyles.background]}>
          <Image
            resizeMode="repeat"
            style={[Screenstyles.background, { width: raceWidth }]}
            source={require("../../assets/horseImageData/NewBack/G-1.png")}
          />
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
          <Image style={Screenstyles.final} source={finals} />
          <RaceHorses
            raceWidth={raceWidth}
            startState={startState}
            fadeInAnimation={fadeInAnimation}
            fadeOutAnimation={fadeOutAnimation}
          />
        </ScrollView>
        <Image style={[Screenstyles.skyImage]} source={weathers} />
        {/* buttons start */}
        <View style={styles.buttonGroup}>
          <Animated.View>
            <TouchableOpacity style={styles.button} onPress={handleStart}>
              <Text style={styles.buttonText}>レース</Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#f02054" }]}
            // onPress={handleResult}
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
            top: SCREEN_WIDTH > 738 || SCREEN_HEIGHT > 400 ? "48%" : "49%",
          }}
        >
          <Image
            style={{ zIndex: -1, height: 35 }}
            source={require("../../assets/images/raceBackground.jpg")}
          />
          <Image
            style={{
              zIndex: -1,
              right: SCREEN_WIDTH > 738 || SCREEN_HEIGHT > 400 ? 47 : 60,
              height: 35,
            }}
            source={require("../../assets/images/raceBackgroundR.jpg")}
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
    raceCpuData: state.raceData.raceCpuData,
    raceFieldData: state.raceData.raceFieldData,
    landWidth: state.dimensions.dimensionsData.height,
    reaceReigsterData: state.raceData.raceRegisterData,
    raceHorseData: state.racingHorseData.racingHorseData,
    raceResultDatas: state.racingData.raceResultData,
    prizeData: state.raceData.prizeData,
    oddsData: state.raceOddsData.oddsData,
  };
};
export default connect(mapStateToProps)(HorseRace);
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
    height: SCREEN_WIDTH,
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
    left: "30%",
    top: SCREEN_WIDTH > 738 || SCREEN_HEIGHT > 400 ? "45.8%" : "46.8%",
    width: "100%",
    flexDirection: "row",
    paddingLeft: 20,
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
  finalNumber: {
    left: 20,
    top: -30,
    zIndex: 1000,
  },
  finalNumberOne: {
    marginTop: 5,
  },
});
/**
 * ======================END=======================
 * style part
 * ======================END=======================
 */
