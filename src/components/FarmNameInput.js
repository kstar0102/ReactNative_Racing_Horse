import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../containers/colors';

const FarmNameInput = () => {
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <TextInput
      style={styles.passwordS}
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