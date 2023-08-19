import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
// container
import colors from "../../containers/colors";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ReturnButton = ({ label, onPress, disabled, color }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				color == 1 ? styles.stallbuttonColor : "Stallbuttoncolor"
			]}
			onPress={onPress}
            disabled={disabled ? disabled : false}
		>
			<Text style={styles.label}>{label ? label : "Button"}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.headerColor,
        borderRadius: 6,
		height: 35,
		width: 80,
		position: "absolute",
		top: SCREEN_HEIGHT > 740 || SCREEN_WIDTH > 400 ? hp(21) : hp(18.5),
		left: wp(1),
		paddingVertical: 7,
		zIndex: 1000
	},
	stallbuttonColor: {
		backgroundColor: colors.stallButtonColor,
		height: 30,
		width: 70,
		paddingVertical: 5,
	},
	label: {
		color: colors.light.white,
		fontSize: 16,
		fontWeight: 700,
		textAlign: 'center'

	},
});

export default ReturnButton;
