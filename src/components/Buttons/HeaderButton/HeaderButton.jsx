import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// container
import colors from "../../../containers/colors";

const HeaderButton = ({ label, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress ? onPress : () => alert("Clicked")}
		>
			<Text style={styles.label}>{label ? label : "Button"}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.headerButtonColor,
        borderRadius:6,
		width: wp(20),
		paddingVertical: 5,
		
	},
	label: {
		color: colors.light.white,
		fontSize: hp(1.5) + wp(.5),
		fontWeight: 700,
		textAlign: 'center'

	},
});

export default HeaderButton;
