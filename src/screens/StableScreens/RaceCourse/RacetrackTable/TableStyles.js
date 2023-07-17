import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../../containers/colors";
import { vh, vw } from "react-native-expo-viewport-units";

// TopScreen Style
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const TableStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#fff",
  },
  tableHead: {
    backgroundColor: "#aae0bc",
  },
  row: {
    height: 23,
  },
  text: {
    textAlign: "center",
  },
  textCol: {
    color: colors.blue,
    fontWeight: "600",
    marginLeft: wp("1%"),
  },
  textHead: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  wrapper: {
    flexDirection: "row",
  },
  btn: {
    width: 58,
    height: 18,
    borderRadius: 2,
  },
  btnText: {
    color: colors.blue,
    fontWeight: "600",
    marginLeft: wp("1%"),
    width: "170%",
  },
});

export default TableStyles;
