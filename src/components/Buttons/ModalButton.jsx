import { TouchableOpacity, Text, StyleSheet, Button, View } from "react-native";

// container
import colors from "../../containers/colors";

const ModalButton = ({ label,count, onPress,disabled, id }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button, 
				id === 1 ? styles.count : styles.button,  
				id === 4 ? styles.count : styles.button,  
				id === 3 ? styles.countRight : styles.button,  
				id === 6 ? styles.countRight : styles.button,  
				disabled && styles.disabled
			]}
			onPress={onPress ? onPress : () => alert("Clicked")}
			disabled={disabled ? disabled : false}
		>
			<Text style={[styles.label]}>{label}</Text>
			<Text style={[styles.label, id ? styles.labelLeft : styles.label,]}>{count}</Text>
			
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
	labelLeft:{
		marginTop: -10,
		fontSize: 16,
	},
	count:{
		height: 40,
		width: 45,
		marginLeft: -60
	},
	countRight:{
		height: 40,
		width: 45,
		marginRight: -60
	},
	disabled: {
		opacity: 0.5,
	}
});

export default ModalButton;
