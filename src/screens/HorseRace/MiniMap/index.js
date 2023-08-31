import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import { numberCount } from "../../../utils/globals";
import Screenstyles from "../../ScreenStylesheet";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const MiniMap = ({
  startState,
  horseSpeeds,
  firstSpeed,
  secondSpeeds,
  threeSpeeds,
  fourSpeeds,
  fiveSpeeds,
  firstTime,
  secondTime,
  threeTime,
  fourTime,
}) => {
  const animations = Array.from({ length: 10 }, () => new Animated.Value(0));
  const horseAnimationStyles = [];

  useEffect(() => {
    if (startState == 1) {
      startMiniHorse(firstSpeed);
      setTimeout(() => {
        startMiniHorse(secondSpeeds);
      }, firstTime);

      setTimeout(() => {
        startMiniHorse(threeSpeeds);
      }, firstTime + secondTime);

      setTimeout(() => {
        startMiniHorse(fourSpeeds);
      }, firstTime + secondTime + threeTime);

      setTimeout(() => {
        startMiniHorse(fiveSpeeds);
      }, firstTime + secondTime + threeTime + fourTime);
    }
  }, [startState]);

  const startMiniHorse = (spds) => {
    const speeds = animations.map((animation, j) => {
      const speed = horseSpeeds[j];
      Animated.timing(animation, {
        toValue: -(SCREEN_HEIGHT - 30),
        duration: speed,
        useNativeDriver: true,
      }).start(() => {});
      return speed;
    });

    Animated.parallel(
      animations.map((animation, index) =>
        Animated.timing(animation, {
          toValue: -(SCREEN_HEIGHT - 30),
          duration: speeds[index],
          useNativeDriver: true,
        })
      )
    ).start(() => {});
  };

  for (let i = 0; i < 10; i++) {
    const style = {
      left: SCREEN_HEIGHT - 30,
      transform: [{ translateX: animations[i] }],
    };
    horseAnimationStyles.push(style);
  }

  return (
    <View style={styles.miniMap}>
      {horseAnimationStyles.map((style, i) => (
        <View key={i}>
          <Animated.View style={[styles.miniMap_users, style]}>
            <View key={i} style={Screenstyles.RaceCoursecontent}>
              <Text style={styles.number}>{numberCount[i]}</Text>
            </View>
          </Animated.View>
        </View>
      ))}
    </View>
  );
};
// .........① ② ③ ④ ⑤...⑥ ⑦ ⑧ ⑨ ⑩.........

export default MiniMap;

const styles = StyleSheet.create({
  miniMap: {
    backgroundColor: "#000000a7",
    height: 60,
    width: SCREEN_HEIGHT,
  },
  miniMap_users: {
    position: "absolute",
    top: 10,
    right: 0,
  },
  number: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 700,
  },
});
