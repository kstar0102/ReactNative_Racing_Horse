import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
// container
import colors from "../../containers/colors";

const ReturnButton = ({ label, onPress, disabled, color }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				color == 1 ? styles.stallbuttonColor : "Stallbuttoncolor"
			]}
			onPress={onPress ? onPress : () => alert("Clicked")}
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
		top: hp(18.5),
		left: wp(1),
		paddingVertical: 5,
		zIndex: 1000
	},
	stallbuttonColor: {
		backgroundColor: colors.stallButtonColor
	},
	label: {
		color: colors.light.white,
		fontSize: 16,
		fontWeight: 700,
		textAlign: 'center'

	},
});

export default ReturnButton;
