import {StyleSheet, Dimensions} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import colors from '../containers/colors';


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
    // All Style End

    // NEW RGISTRATION =======================
    NRcontainer: {
      flexDirection: 'column',
  
    },
    NRtitle: {
      flexDirection: 'column',
      marginLeft: 10
    },
    NRtitleA: {
      fontSize: hp(1.5) + wp(2),
      fontWeight: 700
    },
    NRtitleB: {
      fontSize: hp(1.2) + wp(1),
      fontWeight: 500
    },
    NRSpan: {
      
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
      marginTop: 20
    },
    NRleft: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    NRleftD:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    NRleftL: {
      fontSize: 22,
      fontWeight: 600
    },  
    NRImageSmall: {
      borderWidth: 3,
      borderColor: colors.black,
      marginTop: 25,
      height: hp(14),
      width: wp(35)
    },
    NRImageMiddle: {
      borderWidth: 3,
      borderColor: colors.black,
      marginTop: 25,
      padding: 20,
      height: hp(18),
      width: wp(50)
    },
    NRImageBig: {
      borderWidth: 3,
      borderColor: colors.black,
      marginTop: 25,
      height: hp(20),
      width: wp(55)
    },
    NRcaution:{
      padding: 6,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: 600
    },
    NRright: {
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
      padding: 10
    },
    HCtitle: {
      
    },
    HCtitleTxt: {
      fontSize: 22,
      fontWeight: 600
    },
    HCImage: {
      marginTop: 25,
      height: hp(10),
      width: wp(20)
    },
    HCNameImage: {
      marginLeft: -25,
      height: hp(14),
      width: wp(28)
    },
    DropDwonButton: {
      marginTop: 20,
      marginLeft: 20,
      marginBottom: 30
    },
    horseCard:{
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
      paddingLeft: 25
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
    UPContainer:{
      
    },
    UPcontent:{
      // padding: 20
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
  });

export default Screenstyles;