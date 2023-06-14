
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import colors from '../../containers/colors';

const AuthStyle = StyleSheet.create({
    InputGroup:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Input: {
        backgroundColor: colors.white,
        borderRadius: 8,
        height: 40,
        margin: 12,
        width: 310,
        borderWidth: 1,
        padding: 10,
    },
    EmailInput: {
        marginTop: 8
    },
    PasswordInput:{
        marginTop: 20
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: -5,
        marginLeft: -130,
        marginBottom: 35,
    },
    labelT:{
        fontSize: wp(1.5) + hp(2),
        margin: 9,
        marginLeft: -3,
        marginBottom: -6
    },
    labelTID:{
        fontSize: wp(1.8) + hp(2),
        fontWeight: 600
    },
    labelTBottom:{
        fontSize: wp(1.8) + hp(2),
    },
    label: {

        margin: 9,
        marginLeft: 32
    },
});

export default AuthStyle;