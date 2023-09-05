import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../../containers/colors";

const TNameInput = ({ onChangeText }) => {
  const handleInputChange = (inputValue) => {
    onChangeText(inputValue);
  };

  return (
    <TextInput
      onChangeText={handleInputChange}
      style={styles.passwordS}
      maxLength={9}
    />
  );
};

export default TNameInput;

const styles = StyleSheet.create({
  passwordS: {
    backgroundColor: colors.white,
    borderRadius: 9,
    height: 30,
    margin: 12,
    width: 335,
    borderWidth: 1,
    padding: 10,
  },
});
