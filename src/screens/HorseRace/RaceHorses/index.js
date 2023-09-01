import React, { useEffect } from "react";
import { View, Image, StyleSheet, Animated, Easing } from "react-native";
import { connect } from "react-redux";

import Screenstyles from "../../ScreenStylesheet";
import { numberSource, raceWhipHorse, raceHorse } from "../../../utils/globals";

const RaceHorses = ({
  raceWidth,
  startState,
  firstSpeed,
  secondSpeeds,
  threeSpeeds,
  fourSpeeds,
  fiveSpeeds,
  sixSpeeds,
  firstTime,
  secondTime,
  threeTime,
  fourTime,
  racingHorseData,
  raceCpuData,
  cSpeed
}) => {
  const animations = Array.from({ length: 10 }, () => new Animated.Value(0));
  const fadeInAnimation = new Animated.Value(0);
  const fadeOutAnimation = new Animated.Value(1);
  const horseAnimationStyles = [];
  let colorCount = [];

  if (racingHorseData != "") {
    racingHorseData.map((item) => {
      colorCount.push(item[0].color);
    });
  }

  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      colorCount.push(item.color);
    });
  }

  useEffect(() => {
    if (startState === 1) {
      const statHorseWithDelay = (speed, delay) => {
        setTimeout(() => {
          statHorse(speed);
        }, delay);
      };

      statHorse(cSpeed)
      statHorseWithDelay(firstSpeed, 3000);
      statHorseWithDelay(secondSpeeds, firstTime);
      statHorseWithDelay(threeSpeeds, firstTime + secondTime);
      statHorseWithDelay(sixSpeeds, firstTime + secondTime + threeTime + fourTime);

      setTimeout(() => {
        statHorse(fourSpeeds);
        fadeInEnd();
        fadeOutEnd();
      }, firstTime + secondTime + threeTime);
    }
  }, [startState]);

  const statHorse = (spds) => {
     const speeds = animations.map((animation, j) => {
       const speed = spds[j];
       Animated.timing(animation, {
         toValue: -(raceWidth - 60),
         duration: speed,
         useNativeDriver: true,
         easing: Easing.linear,
       }).start();
       return speed;
     });

    Animated.parallel(
      animations.map((animation, index) =>
        Animated.timing(animation, {
          toValue: -(raceWidth - 60),
          duration: speeds[index],
          useNativeDriver: true,
          easing: Easing.linear,
        })
      )
    ).start();
  };

  for (let i = 0; i < 10; i++) {
    const style = {
      left: raceWidth - 60,
      transform: [{ translateX: animations[i] }],
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
      <View style={styles.horseGroup}>
        {horseAnimationStyles.map((style, i) => (
          <View key={i}>
            <Animated.View
              style={[styles.noWhip, style, { opacity: fadeOutAnimation }]}
            >
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

            <Animated.View
              style={[styles.horse, style, { opacity: fadeInAnimation }]}
            >
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    racingHorseData: state.racingHJData.racingHorse,
    raceCpuData: state.raceData.raceCpuData,
    styles: styles,
  };
};

export default connect(mapStateToProps)(RaceHorses);

const styles = StyleSheet.create({
  horseGroup: {
    marginTop: 100,
    position: "absolute",
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
