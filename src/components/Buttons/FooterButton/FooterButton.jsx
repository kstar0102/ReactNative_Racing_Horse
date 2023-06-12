import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";

// container
import colors from "../../../containers/colors";

const FooterButton = ({ label, onPress, disabled }) => {
	return (
		<TouchableOpacity
			style={styles.button}
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
        borderRadius: 5,
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


export default FooterButton;
