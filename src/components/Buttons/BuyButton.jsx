import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
// container
import colors from "../../containers/colors";

const BuyButton = ({ label, onPress, disabled, display }) => {
	return (
		<TouchableOpacity
			style={[styles.button, {display: display }]}
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
        borderRadius: 6,
		height: 43,
		width: 130,
		paddingVertical: 8,
		zIndex: 100
	},
	label: {
		color: colors.light.white,
		fontSize: hp(2) + wp(1.6),
		fontWeight: 600,
		textAlign: 'center'

	},
});

export default BuyButton;
