import { StyleSheet, Dimensions } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const MarryStyle = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: SCREEN_WIDTH > 400 || SCREEN_HEIGHT > 738 ? vh(30) : vh(25),
  },
  content: {
    marginTop: 10,
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dropdown: {
    width: 150,
  },
  textStyle: {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtFont: {
    fontSize: 15,
    fontWeight: 700,
  },
});

export default MarryStyle;
