import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../../containers/colors';


const JokeyNameInput = ({onChangeText, onBlurText, id}) => {
  
  const handleInputChange = (inputValue) => {
    onChangeText(inputValue, id);
   };
   
  return (
    <TextInput
      onBlur={onBlurText}
      onChangeText={handleInputChange}  
      style={styles.passwordS}
      maxLength={9}
    />
  ); 
};

export default JokeyNameInput;

const styles = StyleSheet.create({
  passwordS: {
    backgroundColor: colors.white,
    borderRadius: 9,
    height: 40,
    // margin: 12,
    width: 150,
    borderWidth: 1,
    // padding: 8,
  }
});