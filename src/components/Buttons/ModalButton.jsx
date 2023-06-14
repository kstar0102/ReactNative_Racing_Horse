import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";

// container
import colors from "../../containers/colors";

const ModalButton = ({ label,count, onPress,disabled }) => {
	return (
		<TouchableOpacity
			style={[styles.button, disabled && styles.disabled]}
			onPress={onPress ? onPress : () => alert("Clicked")}
			disabled={disabled ? disabled : false}
		>
			<Text style={styles.label}>{label ? label : "Button"}</Text>
			<Text style={styles.count}>{count ? count : "1pt"}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.ModalButtonColor,
		borderWidth: 1,
		borderColor: colors.black,
    	borderRadius: 8,
		height: 40,
		width: 45,
		alignItems: "center"
		
	},
	label: {
		color: colors.light.white,
		fontSize: 13,
		fontWeight: 700,
		textAlign: 'center'
	},
	count:{

	},
	disabled: {
		opacity: 0.5,
	}
});

export default ModalButton;
