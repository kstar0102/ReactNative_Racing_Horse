import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
// container
import colors from "../../containers/colors";

const DetailButton = ({ label, onPress,disabled }) => {
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
		backgroundColor: colors.DetailButtonColor,
        borderRadius: 50,
		height: 25,
		width: 100,
		paddingVertical: 2,
		borderWidth: 1,
		borderColor: colors.black
	},
	label: {
		color: colors.white,
		fontSize: 13,
		fontWeight: 700,
		textAlign: 'center',
		fontWeight: 600,
      // fontSize: 24,
		fontWeight: 'bold',
		textShadowColor: colors.black,
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
	},
	disabled: {
		opacity: 0.5,
	}
});

export default DetailButton;
