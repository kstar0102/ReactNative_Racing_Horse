import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { vw,vh  } from 'react-native-expo-viewport-units';
import colors from '../../containers/colors';

const ITapScreenStyles = StyleSheet.create({
    LongiContainer: {
      height: hp(60),
    },
    Longicontent: {
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
    LongiPay: {
      fontWeight: 700,
      position: 'absolute',
      top: 15,
      fontSize: 60,
      color: colors.red,
      borderWidth: 8,
      borderRadius: 50,
      borderColor: colors.red,
      textAlign: 'center',
      padding: 10,
      width: 100,
      height: 100,
      transform: [{ rotateZ: '-15deg' }]
    },
    LongiIcon: {
      position: 'absolute',
      top: 19,
      width: vw(23),
      height: vh(15),
    },
    LongiImage:{
      width: vw(60),
      height: vh(15),
      marginTop: vh(3)
    }
  });

  export default ITapScreenStyles;