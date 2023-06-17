import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import { heightPercentageToDP as hp, 
		 widthPercentageToDP as wp } from "react-native-responsive-screen";
// container
import colors from "../../../containers/colors";

const FooterButton = ({ label, onPress, disabled, color }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				color == 1 ? styles.stallFooterbutton : 'stallFooterbutton'
			]}
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
		height: vh(4),
		width: vw(19),
		paddingVertical: 5,
	},
	stallFooterbutton:{
		backgroundColor: colors.stallButtonColor
	},
	label: {
		color: colors.light.white,
		fontSize: hp(1.2) + wp(1.4),
		fontWeight: 700,
		textAlign: 'center'

	},
});


export default FooterButton;
