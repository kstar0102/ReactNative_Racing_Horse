import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet } from "react-native";
import colors from "../../containers/colors";
import { vh, vw } from "react-native-expo-viewport-units";

const ButtonStyle = StyleSheet.create({
  //  HEADERBUTTON

  // FOOTERBUTTON

  // CUSTOMBUTTONS

  // LOGINBUTTON

  // RETURNBUTTON

  // BUYBUTTON

  // Modal Style
  container: {
    backgroundColor: colors.white,
  },
  ModalCenter: {
    backgroundColor: colors.white,
    marginTop: vh(38),
    margin: vw(0.1) + vh(4),
    width: vw(85),
    height: vh(23),
    padding: 12,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  bankruptcyModal: {
    marginTop: vh(60),
  },
  ModalCenterTxt: {
    marginTop: 30,
  },
  inputText: {
    flexDirection: "row",
    alignItems: "center",
  },
  Itxt: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  saleTxtTitle: {
    fontSize: 20,
  },
  saleTxt: {
    paddingTop: 20,
    paddingBottom: 30,
    fontSize: 15,
  },
  button: {
    backgroundColor: colors.tabButtonMiddle,
    borderRadius: 6,
    height: 30,
    width: 80,
    paddingVertical: 2,
    marginTop: 5,
  },

  label: {
    color: colors.light.white,
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
  Dropdown: {
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default ButtonStyle;
