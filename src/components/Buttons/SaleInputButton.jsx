import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
// container
import colors from "../../containers/colors";

const SaleInputButton = ({ label, onPress,disabled, color }) => {
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
		height: hp(5),
		width: wp(15),
		// paddingVertical: 17,
		// marginTop: 60
	},
	buttonColor: {
		backgroundColor: colors.stallButtonColor
	},
	label: {
		color: '#42a0db',
		fontSize: wp(1.6) + hp(1.4),
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

export default SaleInputButton;
