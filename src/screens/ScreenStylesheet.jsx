import {StyleSheet, Dimensions} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colors from '../containers/colors';
import { vh, vw } from 'react-native-expo-viewport-units';


// TopScreen Style
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Screenstyles = StyleSheet.create({
  // All Style ==================
    containers:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      },
      content: {
        flexDirection: 'column',
        // justifyContent: 'center'
        marginTop: hp(20) 
      },
      // BackGround Image Style
      container:{
        backgroundColor: colors.backgroudColor,
        height: SCREEN_HEIGHT + hp(9)
      },
      img: {
          backgroundColor: colors.backgroudColor,
          height: SCREEN_HEIGHT + hp(1),
          width:  SCREEN_WIDTH ,
      },
      // footerTap:{
      //   marginBottom: 30
      // },
    // All Style End

    // NEW RGISTRATION =======================
    NRcontainer: {
      flexDirection: 'column',
  
    },
    NRtitle: {
      flexDirection: 'column',
      marginTop: hp(1.5),
      marginLeft: wp(2.6)
    },
    NRtitleA: {
      // marginLeft: wp(1),
      fontSize: hp(2) + wp(2),
      fontWeight: 700
    },
    NRtitleB: {
      marginTop: hp(.6),
      marginBottom: hp(.6),
      fontSize: hp(1.5) + wp(.6),
      fontWeight: 600,

    },
    NRtitleLabel:{
      marginTop: hp(.6),
      fontSize: hp(1.8) + wp(1),
      fontWeight: 600
    },
    NRSpan: {
      color: colors.red
    },
    NRtitleLabelSpan:{
      color: colors.red
    },
    NRSpanT: {
      fontSize: hp(1.5) + wp(1),
      color: colors.red
    },
    NRpay: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: -15
    },
    NRleft: {
      flexDirection: 'column',
      alignItems: 'center',

    },
    NRleftD:{
      width: '32%',
      // marginLeft: '-20%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(3.5),
    },
    NRleftL: {
      fontSize: 22,
      fontWeight: 600
    },
    NRImageBorder:{
      borderWidth: 2,
      borderColor: colors.borderColor,
    },
    NRImageSmall: {
      borderWidth: 8,
      borderColor: colors.butonBackgroud,
      height: hp(14),
      width: wp(35)
    },
    NRImageMiddle: {
      borderWidth: 8,
      borderColor: colors.butonBackgroud,
      height: hp(18),
      width: wp(50)
    },
    NRImageBig: {
      borderWidth: 8,
      borderColor: colors.butonBackgroud,
      height: hp(20),
      width: wp(55)
    },
    NRcaution:{
      padding: 6,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: 600
    },
    NRSmallRight:{
      marginTop: hp(11)
    },
    NRMiddleRight:{
      marginTop: hp(7)
    },
    NRBigRight:{
      marginTop: hp(5)
    },
    NRRight: {
      marginTop: hp(4),
    },
    NRrightTxtGroup:{
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    NRtxt: {
      fontSize: 20,
      fontWeight: 600,
      marginLeft: 9
    },
    NRtxtSpan: {
      fontSize: 20,
      fontWeight: 600,
    },
    NRtxtT: {
      fontSize: 20,
      fontWeight: 600,
      // marginLeft: -9
    },
    NRtxtSpanT: {
      fontSize: 20,
      fontWeight: 600,
    },
    NRtxtH: {
      fontSize: 20,
      fontWeight: 600,
      // marginLeft: -10
    },
    NRtxtSpanH: {
      fontSize: 20,
      fontWeight: 600,
      // marginLeft: -20
    },
    NRtxtV: {
      fontSize: 20,
      fontWeight: 600,
        marginLeft:15
    },
    NRtxtSpanV: {
      fontSize: 20,
      fontWeight: 600,
      marginRight: -16
    },

    NRtxtV2: {
      fontSize: 20,
      fontWeight: 600,
      marginLeft: 20
    },
    NRtxtSpanV2:{
      fontSize: 20,
      fontWeight: 600,
      marginRight: -20
    },
    // HORSE CHOICE STYLE=======================
    ScrollView:{
      height: hp(45),
    },
    HCcontainer:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    HContainer:{
      flexDirection: 'column',
      padding: 10,
    },
    HCtitle: {
      
    },
    HCtitleTxt: {
      fontSize: 22,
      fontWeight: 600
    },
    HCImage: {
      marginTop: 25,
      height: hp(9.8),
      width: wp(18.5)
    },
    HCNameImage: {
      marginLeft: -25,
      height: vh(8.8),
      width: vw(18)
    },
    DropDwonButton: {
      width: '20%',
      marginTop: 20,
      marginLeft: 70,
      marginBottom: 30
    },
    horseCard:{
      marginTop: 10,
      flexDirection: 'column',
    },
    horseNameCard:{
      marginTop: 30,
      flexDirection: 'column',
    },
    horseCardContent:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'

    },
    horseCardLeft: {
      paddingLeft: 15,
    },
    horseCardRight: {

    },

    HChorsePrice:{
      color: colors.red,
      marginLeft: -30
    },
    HChorseName: {
      color: colors.red,
      marginLeft: -30
    },
    // UPBRINGING SCREEN =======================
    UPCourse:{
      marginTop: 200
    },
    UPRButton:{
      marginLeft: wp(23)
    },

    // PASTURE NAME SCREEN =====================]
    PNameRegister:{
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 25
    }, 
    FarmName:{
      alignItems:'center',
    }, 
    FarmNameInput:{
      marginTop: 25,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    FarmCheck:{
      flexDirection: 'row',
      alignItems: 'center'
    }, 
    FarmCheckTxt: {
      fontSize: 13
    },
    Title:{
      position: 'absolute',
      left: -5,
      fontSize: 20,
      fontWeight: 500,
    },
    Title1:{
      position: 'absolute',
      left: -20,
      fontSize: 20,
      fontWeight: 500,
    },
    TName:{
      marginTop: 25,
      alignItems:'center'
    }, 
    TNameInput:{
      marginTop: 25
    },
    caution:{
      fontSize: 13,
    },
    registerButton:{
      // marginLeft: 20
    },
    // REVERSE SCREEN STYLE
    reserveContent:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: '40%'
    },
    reserveMenuLeft:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      
    },
    reserveMenuGroup:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginRight: 15
    },
    reserveMenuTitle:{
      fontSize: 18,
      textAlign:'center',
      marginRight: 80
    },
    reserveRight:{
      width: "38%",
      marginRight: 5

    },
    reserveTxtGroup:{
      // marginTop: -20,
      display: 'flex',
      flexDirection: 'row',
    },
    reserveListTitle:{
      fontSize: 25,
      fontWeight: 600,
      textAlign:'center',
      // marginRight: 80
    },
    reserveListConfim:{
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // fontSize: 25,
      // fontWeight: 600,
      textAlign:'center',
    },
    reserveListRed:{
      color: colors.red,
      marginTop: -18,
      textAlign:'center',
    },
    reserveListBlue:{
      color: colors.blue,
      marginTop: -18,
      textAlign:'center',
    },
    reserveRightList:{
    },
    reserveList:{
      display: 'flex',
      flexDirection: 'column',
      textAlign:'center',
      paddingHorizontal: 15,
      
      backgroundColor: '#efefef', 
      height: '80%',
      // with: 20
    },
    reserveListtxt:{
      fontSize: 15
    },
    reserveButtonGroup:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5
    }
  });

export default Screenstyles;