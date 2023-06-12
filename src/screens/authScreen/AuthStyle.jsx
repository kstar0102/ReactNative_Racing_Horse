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

    },
    PasswordInput:{

    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: -10,
        marginLeft: -130,
        marginBottom: 35,
    },
    labelT:{
        margin: 9,
        marginLeft: -3
    },
    label: {

        margin: 9,
        marginLeft: 32
    },
});

export default AuthStyle;