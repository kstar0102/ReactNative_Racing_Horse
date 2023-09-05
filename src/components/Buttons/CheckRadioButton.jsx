import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CheckRadioButton = ({ onChangeText }) => {
  const [checked, setChecked] = React.useState("牧場");

  const handleCheckChange = (value) => {
    setChecked(value);
    onChangeText(value);
  };

  return (
    <View style={styles.container}>
      <RadioButton
        value="牧場"
        label="dd"
        status={checked === "牧場" ? "checked" : "unchecked"}
        onPress={() => handleCheckChange("牧場")}
      />
      <Text style={styles.title}>牧場</Text>
      <RadioButton
        value="ファーム"
        status={checked === "ファーム" ? "checked" : "unchecked"}
        onPress={() => handleCheckChange("ファーム")}
      />
      <Text style={styles.title}>ファーム</Text>
      <RadioButton
        value="スタリオン"
        status={checked === "スタリオン" ? "checked" : "unchecked"}
        onPress={() => handleCheckChange("スタリオン")}
      />
      <Text style={styles.title}>スタリオン</Text>
    </View>
  );
};

export default CheckRadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: hp(1) + wp(1),
  },
});
