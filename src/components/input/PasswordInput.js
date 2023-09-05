import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../../containers/colors";

const PasswordInput = ({ onChangeText }) => {
  const handlePasswordInputChange = (inputValue) => {
    onChangeText(inputValue);
  };

  return (
    <TextInput
      secureTextEntry={true}
      style={styles.passwordS}
      onChangeText={handlePasswordInputChange}
    />
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  passwordS: {
    backgroundColor: colors.white,
    borderRadius: 9,
    height: 15,
    margin: 12,
    width: 310,
    borderWidth: 1,
    padding: 10,
  },
});
