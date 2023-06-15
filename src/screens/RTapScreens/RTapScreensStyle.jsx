import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { vw,vh  } from 'react-native-expo-viewport-units';
import colors from '../../containers/colors';

const RTapScreensStyle = StyleSheet.create({
  BottomImg:{
    position: 'absolute',
    // bottom: 20,
    top: 20,
    left: 20,
    width: vw(90),
    height: vh(40)
  },
  oneContainer: {
    flexDirection: 'column',
    // alignItems: 'center'
    height: vh(55)
  },
  oneTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  oneRightContentTxt:{
    fontSize: hp(2)+ wp(2),
    fontWeight: 600
  },
  oneTopContentLeft: {

  },
  oneTopContentRight: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  oneRioghtHeader:{
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: colors.HBrown,
    flexDirection: 'row',
    // justifyContent: 'space-evenly'
  },
  oneRioghtHeaderTxtA:{
    fontSize: hp(1.5) + wp(2),
    color: colors.white,
    paddingLeft: 10,
    marginRight: 50
  },
  oneRioghtHeaderTxt:{
    color: colors.white,
    paddingVertical: 3,
    paddingLeft: 10,
  //  marginRight: -40
  },
  oneRioghtHeaderTxtPink:{
    color: '#FF0009',
  },
  oneRioghtHeaderTxtGreen:{
    color: '#1BFF00',
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
  oneRioghtBodyTxt:{
    fontSize: hp(1.2) + wp(1.8),
    fontWeight: 700,
    color: colors.white
  },
  oneRioghtBodyTxtValue:{
    fontSize: hp(1) + wp(2.5),
    fontWeight: 600,
    color: colors.black
  },
  oneRioghtBodyTxtGroup:{
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  oneRioghtBodyTxtA:{
    fontSize:  hp(1) + wp(1),
    fontWeight: 600,
    paddingVertical: 3,
    marginLeft: -5
  },
  oneRioghtBodyTxtValueA:{

  },
  HorseAvatar:{
    width: vw(3) + vh(5),
  },
  conditionsGroup:{
    flexDirection: 'row',
  },
  conditions:{
    marginLeft:3,
    width:20,
    height:20
  },
  // Bottom
  BottomBackground:{
    width: vw(95),
    height: vh(50),
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  oneBottomContent: {
    position: 'relative',
    alignItems: 'center'
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
    width: 100,
    height: 50,
    opacity: .9,
    position: 'absolute',
    // left: 30,
    // top: 8,
    // zIndex: 1000
  },
  label:{
    color: colors.black,
    // borderWidth: 1,
    // borderColor: colors.white,
    fontWeight: 600,
    // fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  absoluteView: {
    position: 'absolute',
    left: 30,
    top: -10,
    zIndex: 1000,
  },
  absoluteViewB:{
    position: 'absolute',
    left: 8,
    top: -10,
    zIndex: 1000,
  },
  absoluteViewF:{
    position: 'absolute',
    top: -10,
    left: 18,
    zIndex: 1000,
  },
  absoluteViewO:{
    position: 'absolute',
    top: -10,
    left: 45,
    zIndex: 1000,
  },
  absoluteViewT:{
    position: 'absolute',
    top: -10,
    left: 37,
    zIndex: 1000,
  },
  ButtonGroup:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

  export default RTapScreensStyle;