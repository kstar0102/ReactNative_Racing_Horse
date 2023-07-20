import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../../containers/colors';

const HorseNameInput = ({onChangeText, onBlurText, id}) => {
  const handleInputChange = (inputValue) => {
    onChangeText(inputValue, id);
  
  };
   
  return (
    <TextInput
      onBlur={onBlurText}
      onChangeText={handleInputChange}  
      style={styles.passwordS}
      placeholder='名前を入力してください。'
      maxLength={9}
    />
  ); 
};

export default HorseNameInput;

const styles = StyleSheet.create({
  passwordS: {
    backgroundColor: colors.white,
    borderRadius: 9,
    height: 18,
    margin: 12,
    width: 335,
    borderWidth: 1,
    padding: 10,
  }
});