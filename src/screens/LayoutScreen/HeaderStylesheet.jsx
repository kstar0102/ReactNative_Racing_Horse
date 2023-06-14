import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import {StyleSheet, StatusBar} from 'react-native';
import colors from '../../containers/colors';

const HeaderStyleSheet = StyleSheet.create({
    //BG Default Container
    container:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: colors.headerColor,
      height: hp(18),
      width: wp(100),
      position: 'absolute',
      top:0,
      zIndex: 1000,
      paddingTop: StatusBar.currentHeight 
    },
    // Header Firts Start
    headerContentStart: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    weatherCurrent: {
        backgroundColor: colors.white,
        padding: 3,
        paddingTop: hp(.7),
        paddingBottom: hp(.7),
        paddingHorizontal: 6,
        borderRadius: 5,
        marginTop: hp(.5)
    },
    
    goldCoinAndLevel: {
        fontSize: hp(2.1),
    },
    headerLogo:{
        paddingTop: hp(1),
        padding: 5,
        paddingBottom: hp(1),
        width: wp(28),
        // height: hp(9),
        // paddingVertical: 
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
        marginTop: hp(1.5),
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    // RHEADER STYLE
    // Default Style
    LHcontainer: {
        backgroundColor: colors.RheaderColor,
        borderBottomWidth: 2.5,
        borderBottomColor: colors.white,
        // width: wp(100),
        // height: hp(12),
        zIndex: 1000,
        paddingTop: StatusBar.currentHeight

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
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors.white
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
        fontSize: hp(2.2) + wp(1.2),
        marginTop: -5,
        marginBottom: 5
        // marginLeft: -6
    },
    LHeaderTextRight:{
        fontSize: hp(2.1) + wp(1.2),
        marginLeft: -6,
        letterSpacing: -3
    },
    // NEW REGISTRATION
    NRHcontainer:{
        backgroundColor: colors.RheaderColor,
        borderBottomWidth: 2.5,
        borderBottomColor: colors.white,
        // width: wp(100),
        // height: hp(12),
        zIndex: 1000,
        paddingTop: StatusBar.currentHeight
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
        fontWeight: 600,
        fontSize: hp(2) + wp(2.3)
    },
    NRHeaderTextTop:{
        fontSize: hp(1.8) + wp(2)
    }
  });

  export default HeaderStyleSheet;