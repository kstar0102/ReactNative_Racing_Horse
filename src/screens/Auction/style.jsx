import { 
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Dimensions, StyleSheet } from "react-native";
import colors from "../../containers/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'green',
        width: wp(61),
        position: 'relative',
        backgroundColor: '#ffebcd'
    },
    BigText: {
        fontSize: 18,
        fontWeight: 600
    },
    SmallText: {
        fontSize: 16,
        fontWeight: 500
    },
    boughtPersonTag: {
        width : wp(36),
        alignItems: 'center',
        marginRight: wp(3),
        marginLeft: wp(-3)
    },
    listLabel: {
        flexDirection: "row",
        marginVertical: hp(1)
    },
    horseImage: {
        width : wp(30),
        height : wp(30),
        marginVertical : hp(1)
    },
    soldImage: {
        transform: [{rotate: '-30deg'}],
        position: 'absolute',
        bottom: wp(15)
    },
    footerLabel: {
        flexDirection: 'row',
        width: wp(60),
        alignItems: 'center'
    },
    horseDropdown: {
        position: "absolute",
        top: SCREEN_HEIGHT > 740 || SCREEN_WIDTH > 400 ? hp(21.4) : hp(18.5),
        left: wp(27),
        width: wp(53)
    }
});

export default styles;