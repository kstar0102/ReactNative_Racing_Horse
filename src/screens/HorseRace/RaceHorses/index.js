import React, { useEffect, useState, useRef } from "react";
import { View, Image, StyleSheet, Dimensions, Animated } from "react-native";
import { connect } from "react-redux";

import Screenstyles from "../../ScreenStylesheet";
import { numberSource, raceWhipHorse, raceHorse } from "../../../utils/globals";

const RaceHorses = ({
  raceWidth,
  racingHorseData,
  raceCpuData,
  startState,
  fadeInAnimation,
  fadeOutAnimation,
}) => {
  const animations = Array.from({ length: 10 }, () => new Animated.Value(0));
  const horseAnimationStyles = [];
  let colorCount = [];
  const durations = [
    52000, 58000, 56000, 53000, 56000, 53000, 58000, 50000, 51000, 53000,
  ];
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
    if (startState == 1) {
      const speeds = animations.map((animation, j) => {
        const speed = durations[j];
        Animated.timing(animation, {
          toValue: -(raceWidth - 60),
          duration: speed,
          useNativeDriver: true,
        }).start(() => {});
        return speed;
      });

      Animated.parallel(
        animations.map((animation, index) =>
          Animated.timing(animation, {
            toValue: -(raceWidth - 60),
            duration: speeds[index],
            useNativeDriver: true,
          })
        )
      ).start(() => {});
    }
  }, [startState]);

  for (let i = 0; i < 10; i++) {
    const style = {
      left: raceWidth - 60,
      transform: [{ translateX: animations[i] }],
    };
    horseAnimationStyles.push(style);
  }
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
    styles: styles, // Injecting the styles prop
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
