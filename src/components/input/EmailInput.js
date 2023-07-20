import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../../containers/colors';

const EmailInput = ({onChangeText}) => {
 const handleInputChange = (inputValue) => {
  onChangeText(inputValue);
 };

  return (
    <TextInput
      onChangeText={handleInputChange}
      style={styles.passwordS}
    />
  );
};

export default EmailInput;

const styles = StyleSheet.create({
  passwordS: {
    backgroundColor: colors.white,
    borderRadius: 9,
    height: 15,
    margin: 12,
    width: 310,
    borderWidth: 1,
    padding: 10,
  }
});