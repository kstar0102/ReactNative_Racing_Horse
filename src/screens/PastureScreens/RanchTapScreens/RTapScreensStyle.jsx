import { StyleSheet,Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { vw,vh  } from 'react-native-expo-viewport-units';
import colors from '../../../containers/colors';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const RTapScreensStyle = StyleSheet.create({
  BottomImg:{
    position: 'absolute',
    // bottom: 20,
    top: 20,
    left: 20,
    width: vw(90),
    height: vh(40)
  },
  RacetrackCourse:{
    height: vh(42)
  },
  RaceRegistationContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginBottom: 5,
    marginTop: 180,
  },
  RaceRegistationContent:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  reservationContainer:{
    marginTop: 186,
  },
  grazingContainer:{
    marginTop: 5,
    height: vh(28)
  },
  fodderContainer:{
    marginTop: 5,
    height: vh(52)
  },
  twoContainer:{
    flexGrow: 1,
    height: vh(60)
  },
  oneRioghtHeader:{
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: colors.HBrown,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  // STALL STYLE END
  oneTopContent: {
    flexDirection: 'column',
    alignItems: 'center'
    // justifyContent: 'space-around'
  },
  oneRightContentTxt:{
    fontSize: hp(2)+ wp(1.5),
    fontWeight: 600,
    paddingBottom: 10
  },
  shadowTxt:{
    color: colors.white,
    fontSize: hp(2)+ wp(1.5),
    fontWeight: 600,
    paddingBottom: 10,

    textShadowColor: 'black',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
  },
  oneTopContentLeft: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    paddingTop: -10,
    padding: 5,
    width: '98%'
  },
  oneTopContentRight: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '95%'
  },
  oneRioghtHeader:{
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: colors.HBrown,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  oneRioghtHeaderTxtA:{
    fontSize: hp(1.5) + wp(2),
    color: '#FF006B',
  },
  oneRioghtHeaderTxt:{
    color: colors.white,
    paddingVertical: 3,
    paddingLeft: 6,
    
  //  marginRight: -40
  },
  oneRioghtHeaderTxtWin:{
    color: colors.white,
    paddingVertical: 3,
    paddingLeft: 10,
    letterSpacing: -1
  },
  oneRioghtHeaderTxtLetter:{
    color: colors.white,
    paddingVertical: 3,
    paddingLeft: 10,
    letterSpacing: -1
  },
  oneRioghtHeaderTxtPink:{
    color: '#FF006B',
  },
  oneRioghtHeaderTxtGreen:{
    fontSize: 17,
    color: '#1BFF00',
    paddingLeft: 10
  },
  oneRioghtBody: {
    borderTopWidth: 1,
    borderTopColor: colors.white,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: colors.pBColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  oneRightTxt:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  oneRioghtBodyTxt:{
    fontSize: hp(1.2) + wp(1.8),
    fontWeight: 700,
    color: colors.white,
    marginTop: 1
  },
  oneRioghtBodyTxtValue:{
    fontSize: hp(1) + wp(2.5),
    fontWeight: 600,
    color: colors.black
  },
  oneRioghtBodyTxtTired:{
    fontSize: hp(1.6) + wp(2.6),
    color: colors.black,
    fontWeight: 300
  },
  oneRioghtBodyTxtGroup:{
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  txtGroup:{
    flexDirection: 'row'
  },
  oneRioghtBodyTxtA:{
    fontSize:  hp(1.2) + wp(1.8),
    fontWeight: 600,
    marginRight: -20,
    // paddingLeft: 50,
    marginTop: 6
  },
  oneRioghtBodyTxtValueA:{
    fontSize:  hp(1.2) + wp(1.8),
    fontWeight: 600,
    marginRight: -70,
    paddingLeft: 50,
    marginTop: 6
  },
  HorseAvatar:{
    width: vw(4.5) + vh(3.5),
    marginTop: 30
  },
  conditionsGroup:{
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  conditions:{
    marginLeft:3,
    width:20,
    height:20
  },
  oneRightTxtUp:{
    color: colors.red,
    fontSize:20
  
  },
  oneRightTxtDown:{
    color: colors.blue,
    fontSize:20
  },
  // Bottom
  BottomBackground:{
    width: vw(95),
    height: vh(45),
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  oneBottomContent: {
    position: 'relative',
    alignItems: 'center',
  },
  ImageButtonTop: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'relative'
  },
  ImageButtonMiddle:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ImageButtonBottom:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  TitleImage:{
    width: 130,
    height:20,
    paddingVertical: 16,
    marginLeft: vw(30),
  },
  LongiIcon:{
    width: vw(26),
    height: vh(6.7),
    opacity: 1,
    left: -3,
    position: 'absolute',
  },
  label:{
    color: colors.black,
    fontWeight: 600,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  absoluteView: {
    position: 'absolute',
    left: 27,
    top: -10,
    zIndex: 1,
  },
  absoluteViewA:{
    position: 'absolute',
    left: 24,
    top: -10,
    zIndex: 1,
  },
  absoluteViewB:{
    position: 'absolute',
    left: 5,
    top: -10,
    zIndex: 1,
  },
  absoluteViewC:{
    position: 'absolute',
    left: 18,
    top: -10,
    zIndex: 1,
  },
  absoluteViewF:{
    position: 'absolute',
    top: -10,
    left: 12,
    zIndex: 1,
  },
  absoluteViewO:{
    position: 'absolute',
    top: -10,
    left: 40,
    zIndex: 1,
  },
  absoluteViewT:{
    position: 'absolute',
    top: -10,
    left: 33,
    zIndex: 1,
  },
  ButtonGroup:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ButtonJokeyGroup:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 30,
    marginRight: 45
  },
  ButtonGroupOne:{
    marginTop: 20
  },
  ButtonGroupTwo:{
    marginTop: 5
  },
  ///////////////////////////////////////// Avatars and AvatarTap Styles
  avatarContainer:{

  },
  ranchContent:{
    display: 'flex',
    flexDirection: 'column',
    rowGap: 2
  },
  avatarGroup:{
    width: SCREEN_WIDTH,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,
    padding: 5
  },
  avatarImage:{
    width: 95,
    height: 95
  },
  avatarTxt:{
    width: vw(56),
    backgroundColor: colors.headerButtonColor,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  avatarTxtLock:{
    width: vw(57),
    height: vh(14),
  },
  lockTitle:{
    fontSize: 17,
    padding: 2
  }
});

  export default RTapScreensStyle;