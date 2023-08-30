import React, { useEffect } from "react";
import { StyleSheet, Animated, Image, Dimensions } from "react-native";

const Loading = ({fadeOutLodingAnimation}) => {
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeOutLodingAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 3000);
  }, [fadeOutLodingAnimation]);
  return (
    <>
      <Animated.View
        style={[
          styles.loadingBack,
          { opacity: fadeOutLodingAnimation, zIndex: fadeOutLodingAnimation },
        ]}
      >
        <Image
          style={{ left: 340, top: 150, width: 100, height: 64 }}
          source={require("../../assets/images/ezgif.com-resize.gif")}
        />
      </Animated.View>
    </>
  );
};

export default Loading;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  loadingBack: {
    position: "absolute",
    zIndex: 3000,
    width: 1000,
    height: SCREEN_WIDTH,
    backgroundColor: "#fff",
  },
});
