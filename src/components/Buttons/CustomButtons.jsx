import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";

// container
import colors from "../../containers/colors";

const CustomButtons = ({ label, onPress,disabled }) => {
	return (
		<TouchableOpacity
			style={[styles.button, disabled && styles.disabled]}
			onPress={onPress ? onPress : () => alert("Clicked")}
			disabled={disabled ? disabled : false}
		>
			<Text style={styles.label}>{label ? label : "Button"}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.butonBackgroud,
        borderRadius: 10,
		height: 50,
		width: 120,
		paddingVertical: 8,
		marginTop: 60
	},
	label: {
		color: colors.light.white,
		fontSize: 28,
		fontWeight: 700,
		textAlign: 'center'
	},
	disabled: {
		opacity: 0.5,
	}
});

export default CustomButtons;
