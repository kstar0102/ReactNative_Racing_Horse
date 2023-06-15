import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";

// container
import colors from "../../../containers/colors";

const WorkingButton = ({ label, onPress, disabled, colorNumber,styleId }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				colorNumber == 1 ? styles.buttonOne : 'styles.button' ,
				colorNumber == 2 ? styles.buttonTwo : 'styles.button',
				colorNumber == 3 ? styles.buttonThree : 'styles.button',
				colorNumber == 4 ? styles.buttonFour : 'styles.button',
				styleId == 1 ? styles.buttonStyle : 'styles.button',
				styleId == 2 ? styles.buttonStyle : 'styles.button',
				disabled && styles.disabled]}
			onPress={onPress ? onPress : () => alert("Clicked")}
			disabled={disabled ? disabled : false}
		>
			<Text style={styles.label}>{label ? label : "Button"}</Text>
		</TouchableOpacity>
	);
};

export default WorkingButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.pink,
        borderRadius: 6,
		height: 30,
		width: 80,
		paddingVertical: 2,
		marginTop: 30
	},
	buttonOne:{
		backgroundColor: colors.tabButtonMiddle
	},
	buttonTwo:{
		backgroundColor: colors.tabButtonEnd
	},
	buttonThree:{
		backgroundColor: '#94b7fe'
	},
	buttonFour:{
		backgroundColor: colors.IButtonfour
	},
	label: {
		color: colors.light.white,
		fontSize: 18,
		fontWeight: 700,
		textAlign: 'center'
	},
	buttonStyle:{
		marginTop: 5
	},
	disabled: {
		backgroundColor: colors.grey,
		opacity: 0.8,
	}
});