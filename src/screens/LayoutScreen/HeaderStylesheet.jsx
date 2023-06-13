import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import colors from '../../containers/colors';

const HeaderStyleSheet = StyleSheet.create({
    //BG Default Container
    container:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: colors.headerColor,
      height: hp(12),
      width: wp(100),
      position: 'absolute',
      top:0,
      zIndex: 1000
    },
    // Header Firts Start
    headerContentStart: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    weatherCurrent: {
        backgroundColor: colors.white,
        padding: 3,
        paddingHorizontal: 6,
        borderRadius: 5
    },
    
    goldCoinAndLevel: {
        fontSize: hp(2),
    },
    headerLogo:{
        padding: 2,
        width: wp(26)
    },   
    // Header Middle 
    headerContentMidle: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    destination: {
        fontSize: hp(2) + wp(.5),
    },
    currentTime: {
    },
    // HeaderEnd
    headerContentEnd: {
        marginTop: 4,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    // RHEADER STYLE
    // Default Style
    LHcontainer: {
        backgroundColor: colors.RheaderColor,
        borderBottomWidth: 2.5,
        borderBottomColor: colors.white,
        width: wp(100),
        height: hp(12),
        zIndex: 1000
    },
    // Importent Content Style
    LHeaderContent:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: hp(12),
        alignItems: 'center'
    },
    // Logo Style
    LHeaderLogo: {

    },
    LheaderLogoImage: {
        height: hp(10),
        width: wp(29),
    },
    // Rheader Text Syle
    LHeaderTextGroup: {
        flexDirection: 'column',
    },
    LHeaderText: {
        fontSize: hp(2) + wp(1),
        // marginLeft: -6
    },
    LHeaderTextRight:{
        fontSize: hp(2) + wp(1),
        marginLeft: -6,
        letterSpacing: -2
    },
    // NEW REGISTRATION
    NRHcontainer:{
        backgroundColor: colors.RheaderColor,
        borderBottomWidth: 2.5,
        borderBottomColor: colors.white,
        width: wp(100),
        height: hp(12),
        zIndex: 1000
    },
    NRHeaderContent: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: hp(12),
        marginLeft: 15
    },
    NRHeaderTextGroup:{

    },
    NRHeaderText:{
        fontWeight: 700,
        fontSize: hp(2) + wp(2)
    },
  });

  export default HeaderStyleSheet;