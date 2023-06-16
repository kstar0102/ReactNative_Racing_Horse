import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
// container
import colors from "../../containers/colors";

const PNameRegister = ({ label, onPress, disabled }) => {
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
        width: 350,
        height: 60,
        marginTop: 40,
        paddingVertical: 12,
        
	},
	label: {
		color: colors.light.white,
		fontSize: hp(1.8) + wp(2),
		fontWeight: 500,
		textAlign: 'center'
	},
});

export default PNameRegister;
