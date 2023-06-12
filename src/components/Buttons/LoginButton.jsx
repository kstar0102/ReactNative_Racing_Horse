import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
// container
import colors from "../../containers/colors";

const LoginButton = ({ label, onPress, disabled }) => {
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
        backgroundColor: colors.loginButtonColor,
        borderRadius: 8,
        borderColor: colors.black,
        borderWidth: 1.5,
        width: 310,
        height: 45,
        paddingVertical: 8,
        
	},
	label: {
		color: colors.light.white,
		fontSize: 16,
		fontWeight: 700,
		textAlign: 'center'
	},
});

export default LoginButton;
