import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { vw, vh } from 'react-native-expo-viewport-units';
import colors from '../../containers/colors';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const StableStyles = StyleSheet.create({
  // Stall Style
  stallContainer: {
    flexGrow: 1,
    height: vh(57),
    borderWidth: 1,
    borderColor: colors.black
  },
  // InstitutionContainer Start
  institutionContainer: {
    marginTop: 190
  },
  upperContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  upperLeft: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '35%',
  },
  upperLeftImg: {
    width: 100,
    height: 100
  },
  upperLeftTxt: {
    color: colors.white,
    fontWeight: 600,
    fontSize: 18,

    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  // Right
  upperRight: {
    width: '60%',
  },
  cardHeader: {
    backgroundColor: colors.cardHeader,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5
  },
  cardJokeyHeader: {
    backgroundColor: colors.cardHeader,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  cardHeaderTxt: {
    fontWeight: 600
  },
  cardHeaderTxtLv: {
    color: colors.white,
    marginLeft: 30
  },
  cardBody: {
    backgroundColor: colors.cardBody,
  },
  cardBodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5
  },
  cardAlilityRow: {
    flexDirection: 'row',
    padding: 2
  },
  upperAlilityImg: {
    marginLeft: 5
  },
  cardBodyTxt: {
    fontSize: 13,
    fontWeight: 600
  },
  cardBodyGroundTxt: {
    color: colors.HBrown
  },
  cardTxtRed: {
    color: colors.red
  },
  // InstitutionContainer End
  stallGroup: {
    padding: 10
  },
  abroadTap: {
    backgroundColor: colors.tapAbroadColor,
  },
  rittoTap: {
    backgroundColor: colors.tapRittoColor
  },
  miuraTap: {
    backgroundColor: colors.tabButtonMiddle,
    borderWidth: 1,
    borderColor: colors.black
  },
  // Tap Screen
  tapContainer: {
    height: hp(43),
  },
  tapContent: {
    marginLeft: 50,
    marginRight: 50
  },
  Bundle: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: vh(2)
  },
  Lavel: {
    fontSize: hp(2) + wp(1),
    position: 'absolute',
    left: 0,
    top: 0
  },
  tapPay: {
    fontWeight: 700,
    position: 'absolute',
    top: 10,
    fontSize: 45,
    color: colors.red,
    borderWidth: 8,
    borderRadius: 50,
    borderColor: colors.red,
    textAlign: 'center',
    padding: 10,
    width: 80,
    height: 80,
    transform: [{ rotateZ: '-15deg' }]
  },
  tapIcon: {
    position: 'absolute',
    top: 10,
    width: vw(16),
    height: vh(10),
  },

  RaceLockIcon: {
    position: 'absolute',
    top: '25%',
    left: '35%',
    // right: 0,
    // bottom: 0,
    //justifyContent: "center",
    width: vw(30),
    height: vh(20),
  },
  RaceLockBlur:{
    position: 'absolute',
    height: vh(60),
  },
  tapImage: {
    width: vw(40),
    height: vh(10),
    marginTop: vh(3),
  }
});

export default StableStyles;