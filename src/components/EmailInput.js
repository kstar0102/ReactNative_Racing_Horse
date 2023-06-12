import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../containers/colors';

const EmailInput = () => {
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <TextInput
      style={styles.passwordS}
    />
  );
};

export default EmailInput;

const styles = StyleSheet.create({
  passwordS: {
    backgroundColor: colors.white,
    borderRadius: 9,
    height: 30,
    margin: 12,
    width: 310,
    borderWidth: 1,
    padding: 10,
  }
});