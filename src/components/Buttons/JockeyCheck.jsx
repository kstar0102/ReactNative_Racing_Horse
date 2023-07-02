import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
// container
import colors from "../../containers/colors";

const JockeyCheck = ({ label, onPress,disabled, color }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				color == 1 ? styles.buttonColor : 'Style',
				color == 2 ? styles.buttonTwo : 'Style',
				color == 3 ? styles.buttonThree : 'Style',
				disabled && styles.disabled]}
			onPress={onPress ? onPress : () => alert("Clicked")}
			disabled={disabled ? disabled : false}
		>
			<Text style={[styles.label, disabled && styles.labelDisabled, color == 2 ? styles.labelColor : 'Style', color == 3 ? styles.labelColor : 'Style',]}>{label ? label : "Button"}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.butonBackgroud,
        borderRadius: 10,
		height: hp(6),
		width: wp(30),
		paddingVertical: 5,
		marginTop: 10
	},
	buttonColor: {
		backgroundColor: colors.stallButtonColor
	},
	buttonTwo:{
		backgroundColor: '#2d329a'
	},
	buttonThree:{
		backgroundColor: '#dc2448'
	},
	label: {
		color: colors.light.white,
		fontSize: wp(2.5) + hp(2),
		fontWeight: 600,
		textAlign: 'center'
	},
	labelColor:{
		color: colors.white
	},
	disabled: {
		
		backgroundColor: colors.grey,
		opacity: 0.8,
	},
	labelDisabled:{
		color: colors.white,
	}
});

export default JockeyCheck;
