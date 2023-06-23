import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
// container
import colors from "../../containers/colors";

const CustomButtons = ({ label, onPress,disabled, color }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				color == 1 ? styles.buttonColor : 'Style',
				disabled && styles.disabled]}
			onPress={onPress ? onPress : () => alert("Clicked")}
			disabled={disabled ? disabled : false}
		>
			<Text style={[styles.label, disabled && styles.labelDisabled]}>{label ? label : "Button"}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.butonBackgroud,
        borderRadius: 10,
		height: hp(10),
		width: wp(40),
		paddingVertical: 20,
		marginTop: 60
	},
	buttonColor: {
		backgroundColor: colors.stallButtonColor
	},
	label: {
		color: colors.light.white,
		fontSize: wp(2.5) + hp(2.5),
		fontWeight: 600,
		textAlign: 'center'
	},
	disabled: {
		
		backgroundColor: colors.grey,
		opacity: 0.8,
	},
	labelDisabled:{
		color: colors.white,
	}
});

export default CustomButtons;
