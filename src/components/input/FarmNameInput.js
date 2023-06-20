import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../../containers/colors';

const FarmNameInput = ({onChangeText}) => {
  const handleInputChange = (inputValue) => {
    onChangeText(inputValue);
   };
   
  return (
    <TextInput
      onChangeText={handleInputChange}  
      style={styles.passwordS}
      maxLength={7}
    />
  );
};

export default FarmNameInput;

const styles = StyleSheet.create({
  passwordS: {
    backgroundColor: colors.white,
    borderRadius: 9,
    height: 30,
    marginTop: 8,
    width: 105,
    borderWidth: 1,
    padding: 8,
  }
});