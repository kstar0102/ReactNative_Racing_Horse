import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet,View,Alert } from "react-native";
// container
import colors from '../containers/colors';

const ConfirmButton = ({colorNumber,pressFactor,label,disabled }) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch(activeButton) {
      case 1:
        return <ScreenOne />;
      default:
        return <ScreenOne />;
    }
  }

 const handlePress = () => {
      if(pressFactor == "bid"){
        Alert.alert(
          "入厩",
          "入厩させますか?",
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
      else{
        Alert.alert(
          "入厩",
          "入厩させますか?",
          [
            {
              text: "hjkhjkhjkhjk",
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
    };
  return (
    <View>
      <TouchableOpacity
      style={[
          styles.button,
          colorNumber == 1 ? styles.buttonOne : 'styles.button' ,
          colorNumber == 2 ? styles.buttonTwo : 'styles.button',
          disabled && styles.disabled]}
           
          onPress={() => handlePress()}
          disabled={disabled ? disabled : false}
      >
        <Text style={styles.label}>{label ? label : "Button"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.pink,
    borderRadius: 6,
		height: 30,
		width: 80,
		paddingVertical: 2,
		marginTop: 5
	},
	buttonOne:{
    backgroundColor: colors.tabButtonEnd
	},
	buttonTwo:{
    backgroundColor: colors.tabButtonMiddle
	},
	label: {
		color: colors.light.white,
		fontSize: 18,
		fontWeight: 700,
		textAlign: 'center'
	},
	disabled: {
		opacity: 0.5,
	}
});