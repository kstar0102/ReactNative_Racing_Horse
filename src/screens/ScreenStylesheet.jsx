import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../containers/colors";
import { vh, vw } from "react-native-expo-viewport-units";

// TopScreen Style
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const Screenstyles = StyleSheet.create({
  // All Style ==================
  containers: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  auctionContainers: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    height: hp(75),
    marginTop: hp(25),
    padding: hp(1)
  },
  content: {
    flexDirection: "column",
    marginTop: hp(20),
  },
  // BackGround Image Style
  container: {
    backgroundColor: colors.backgroudColor,
    height: SCREEN_HEIGHT + hp(9),
  },

  img: {
    backgroundColor: colors.backgroudColor,
    height: SCREEN_WIDTH > 400 || SCREEN_HEIGHT > 738 ? SCREEN_HEIGHT + hp(7) : SCREEN_HEIGHT + hp(2),
    width: SCREEN_WIDTH,
  },
  // All Style End
  userPtTxt: {
    fontSize: hp(2) + wp(2),
    fontWeight: 700,
    color: colors.blue,
  },
  // NEW RGISTRATION =======================
  NRcontainer: {
    flexDirection: "column",
  },
  NRtitle: {
    flexDirection: "column",
    marginTop: hp(1.5),
    marginLeft: wp(2.6),
  },
  NRtitleA: {
    fontSize: hp(2) + wp(2),
    fontWeight: 700,
  },
  NRtitleB: {
    marginTop: hp(0.6),
    marginBottom: hp(0.6),
    fontSize: hp(1.5) + wp(0.6),
    fontWeight: 600,
  },
  NRtitleLabel: {
    marginTop: hp(0.6),
    fontSize: hp(1.8) + wp(1),
    fontWeight: 600,
  },
  NRSpan: {
    color: colors.red,
  },
  NRtitleLabelSpan: {
    color: colors.red,
  },
  NRSpanT: {
    fontSize: hp(1.5) + wp(1),
    color: colors.red,
  },
  NRpay: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    marginLeft: -15,
  },
  NRleft: {
    flexDirection: "column",
    alignItems: "center",
  },
  NRleftD: {
    width: "32%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(3.5),
  },
  NRleftL: {
    fontSize: 22,
    fontWeight: 600,
  },
  NRImageBorder: {
    borderWidth: 2,
    borderColor: colors.borderColor,
  },
  NRImageSmall: {
    borderWidth: 8,
    borderColor: colors.butonBackgroud,
    height: hp(14),
    width: wp(35),
  },
  NRImageMiddle: {
    borderWidth: 8,
    borderColor: colors.butonBackgroud,
    height: hp(18),
    width: wp(50),
  },
  NRImageBig: {
    borderWidth: 8,
    borderColor: colors.butonBackgroud,
    height: hp(20),
    width: wp(55),
  },
  NRcaution: {
    padding: 6,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 600,
  },
  NRSmallRight: {
    marginTop: hp(11),
  },
  NRMiddleRight: {
    marginTop: hp(7),
  },
  NRBigRight: {
    marginTop: hp(5),
  },
  NRRight: {
    marginTop: hp(4),
  },
  NRrightTxtGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  NRtxt: {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 9,
  },
  NRtxtSpan: {
    fontSize: 20,
    fontWeight: 600,
  },
  NRtxtT: {
    fontSize: 20,
    fontWeight: 600,
  },
  NRtxtSpanT: {
    fontSize: 20,
    fontWeight: 600,
  },
  NRtxtH: {
    fontSize: 20,
    fontWeight: 600,
  },
  NRtxtSpanH: {
    fontSize: 20,
    fontWeight: 600,
  },
  NRtxtV: {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 15,
  },
  NRtxtSpanV: {
    fontSize: 20,
    fontWeight: 600,
    marginRight: -16,
  },

  NRtxtV2: {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 20,
  },
  NRtxtSpanV2: {
    fontSize: 20,
    fontWeight: 600,
    marginRight: -20,
  },
  // HORSE CHOICE STYLE=======================
  titleFlex: {
    flexDirection: "row",
    marginLeft: 20,
  },
  ScrollView: {
    height: hp(45),
  },
  HCcontainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  HContainer: {
    flexDirection: "column",
    padding: 10,
  },
  HCtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  HCtitleTxt: {
    fontSize: 22,
    fontWeight: 600,
  },
  HCImage: {
    marginTop: 25,
    height: hp(9.8),
    width: wp(18.5),
  },
  HCNameImage: {
    marginLeft: -25,
    height: vh(8.8),
    width: vw(18),
  },
  DropDwonButton: {
    width: "20%",
    marginTop: 20,
    marginLeft: 70,
    marginBottom: 30,
  },
  horseCard: {
    marginTop: 10,
    flexDirection: "column",
  },
  horseNameCard: {
    marginTop: 30,
    flexDirection: "column",
  },
  horseCardContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  horseCardLeft: {
    paddingLeft: 15,
  },
  horseCardRight: {},

  HChorsePrice: {
    color: colors.red,
    marginLeft: -30,
  },
  HChorseName: {
    color: colors.red,
    marginLeft: -30,
  },
  // UPBRINGING SCREEN =======================
  UPCourse: {
    marginTop: 200,
  },
  UPRButton: {
    marginLeft: wp(23),
  },

  // PASTURE NAME SCREEN =====================]
  PNameRegister: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
  },
  FarmName: {
    alignItems: "center",
  },
  FarmNameInput: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  FarmCheck: {
    flexDirection: "row",
    alignItems: "center",
  },
  FarmCheckTxt: {
    fontSize: 13,
  },
  Title: {
    position: "absolute",
    left: -5,
    fontSize: 20,
    fontWeight: 500,
  },
  Title1: {
    position: "absolute",
    left: -20,
    fontSize: 20,
    fontWeight: 500,
  },
  TName: {
    marginTop: 25,
    alignItems: "center",
  },
  TNameInput: {
    marginTop: 25,
  },
  caution: {
    fontSize: 13,
    marginTop: -13,
  },
  // REVERSE SCREEN STYLE
  reserveContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: "40%",
  },
  reserveMenuLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  reserveMenuGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginRight: 15,
  },
  reserveMenuTitle: {
    fontSize: 18,
    textAlign: "center",
    marginRight: 80,
  },

  reserveMenuShowTitle: {
    fontSize: 18,
    textAlign: "center",
    marginRight: 80,
    color: colors.white,

    textShadowColor: "black",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
  },
  reserveRight: {
    width: "38%",
    marginRight: 5,
  },
  reserveTxtGroup: {
    display: "flex",
    flexDirection: "row",
  },
  reserveListTitle: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
  },

  reserveListShowTitle: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
    color: colors.white,

    textShadowColor: "black",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
  },

  reserveListConfim: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
  },
  reserveListRed: {
    color: colors.red,
    marginTop: -18,
    textAlign: "center",
  },
  reserveListBlue: {
    color: colors.blue,
    marginTop: -18,
    textAlign: "center",
  },
  reserveList: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingHorizontal: 15,

    backgroundColor: "#efefef",
    height: "80%",
  },
  reserveListtxt: {
    fontSize: 15,
  },
  reserveButtonGroup: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  // =============HORSE RACE STYLE=============
  RaceCourseContainer: {
    height: SCREEN_HEIGHT,
  },
  RaceCoursecontent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",

  },
  background: {
    position: "absolute",
    height: 400,
    top: 0,
  },
  stillGroup: {
    flexDirection: "row",
  },
  stillGroupR:{
    flexDirection: "row-reverse",
  },
  skyImage:{
    width: 1400,
    height: 115,
    flex: 1,
    zIndex: -1,
    position: "absolute",
  },
  still: {
    width: 60,
    height: 60,
    top: 55,
    marginLeft: 500
  },
  stillR: {
    width: 60,
    height: 60,
    top: 55,
  },
  final: {
    position: 'absolute',
    width: 80,
    height: 80,
    top: 35,
    left: -10,
  },
  finalR: {
    position: 'absolute',
    width: 80,
    height: 80,
    top: 35,
    right: 50,
  },
  // bankruptcy
  bank:{
    marginTop: 20,
    flexDirection: "row"  
  },
  marryAlam:{
  
    flexDirection: "row" ,
    marginLeft: 20,

  },
  bankTxt:{
    backgroundColor: colors.butonBackgroud,
    top: 10,
    padding: 5,
    left: 10,
    borderRadius: 10
  },
  marryTxt:{
    backgroundColor: colors.butonBackgroud,
    top: 10,
    padding: 5,
    left: 10,
    borderRadius: 10,
    width: wp(60)
  },
  bankruptcy: {
    left: 45,
    width: 300,
    height: 200,
    borderRadius: 30
  },
  Bankloan:{
    left: "32%",
    width: '100%',
  },
  bankPeople:{
    top: 10,
    left: 5,
    width: 70,
    height: 90
  },
  bankBtnGroup:{
    left: 40,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  marryBtnGroup:{
    width: "60%",
    left: 120,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  // Marry Screen =========================
  marryButton:{
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },

  // Auction Screen =========================
  auctionContent: {
    // marginTop: hp(25),
    paddingTop: hp(2),
  },
});

export default Screenstyles;
