import React, {useState} from "react";
import { TouchableOpacity, Text, StyleSheet,Alert, TextInput  } from "react-native";
// container
import colors from "../../../containers/colors";

const WorkingButton = ({ label, onPress, disabled, colorNumber,styleId }) => {
	const [text, setText] = useState("");

  const handleTextChange = (inputText) => {
    setText(inputText);
  };
	const handlePress = () => {
		  Alert.alert(
			"売却",
			"セリに登録して売却しますか?",
			[
			  {
				text: "いいえ",
				style: "cancel"
			  },
			  { 
				text: "はい", 
				onPress: () => handleInputButton()
			  }
			],
			{ cancelable: false }
		  );
		}

		const handleInputButton = () =>{
			Alert.alert(
				"・提示価格",
				<TextInput
					style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
					onChangeText={handleTextChange}
					value={text}
				/>,
				// "この価格でセリに登録しますか?",
				[
					{
						text: "いいえ",
						style: "cancel"
					},
					{ 
						text: "はい", 
						onPress: () => console.log("Yes pressed")
					}
				],
				{ cancelable: false }
			);
		}
	return (
		<TouchableOpacity
			style={[
				styles.button,
				colorNumber == 1 ? styles.buttonOne : 'styles.button' ,
				colorNumber == 2 ? styles.buttonTwo : 'styles.button',
				colorNumber == 3 ? styles.buttonThree : 'styles.button',
				colorNumber == 4 ? styles.buttonFour : 'styles.button',
				colorNumber == 5 ? styles.buttonFive : 'styles.button',
				styleId == 1 ? styles.buttonStyle : 'styles.button',
				styleId == 2 ? styles.buttonStyle : 'styles.button',
				disabled && styles.disabled]}
			onPress={onPress ? onPress : () => handlePress()}
			disabled={disabled ? disabled : false}
		>
			<Text style={styles.label}>{label ? label : "Button"}</Text>
		</TouchableOpacity>
	);
};

export default WorkingButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.tabButtonEnd,
        borderRadius: 6,
		height: 30,
		width: 80,
		paddingVertical: 2,
		marginTop: 30
	},
	buttonOne:{
		backgroundColor: colors.tabButtonMiddle
	},
	buttonTwo:{
		backgroundColor: colors.tabButtonEnd
	},
	buttonThree:{
		backgroundColor: '#94b7fe'
	},
	buttonFour:{
		backgroundColor: colors.IButtonfour
	},
	buttonFive:{
		backgroundColor: '#fecdfe'	
	},
	label: {
		color: colors.light.white,
		fontSize: 18,
		fontWeight: 700,
		textAlign: 'center'
	},
	buttonStyle:{
		marginTop: 5
	},
	disabled: {
		backgroundColor: colors.grey,
		opacity: 0.8,
	}
});