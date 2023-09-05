import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// container
import colors from "../../containers/colors";

const RegisterButton = ({ label, onPress, disabled, color }) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          color == 1 ? styles.buttonColor : "Style",
          color == 2 ? styles.buttonColorTwo : "Style",
          color == 3 ? styles.buttonColorThree : "Style",
          disabled && styles.disabled,
        ]}
        onPress={onPress ? onPress : () => alert("Clicked")}
        disabled={disabled ? disabled : false}
      >
        <Text
          style={[
            styles.label,
            disabled && styles.labelDisabled,
            color == 2 ? styles.labelTwo : "Style",
            color == 3 ? styles.labelThree : "Style",
          ]}
        >
          {label ? label : "Button"}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.butonBackgroud,
    borderRadius: 10,
    height: hp(10),
    width: wp(40),
    paddingVertical: 20,
    marginTop: 60,
  },
  buttonColor: {
    backgroundColor: colors.butonBackgroud,
    marginTop: 5,
    height: hp(6),
    width: wp(35),
    paddingVertical: 5,
  },

  buttonColorTwo: {
    backgroundColor: colors.stallButtonColor,
    marginTop: 5,
    height: hp(6),
    width: wp(35),
    paddingVertical: 5,
  },
  labelTwo: {
    fontSize: wp(2) + hp(2),
  },
  buttonColorThree: {
    backgroundColor: colors.tabButtonMiddle,
    marginTop: 5,
    height: hp(6),
    width: wp(35),
    paddingVertical: 5,
  },
  labelThree: {
    fontSize: wp(2) + hp(2),
  },
  label: {
    color: colors.light.white,
    fontSize: wp(2.5) + hp(2.5),
    fontWeight: 600,
    textAlign: "center",
  },
  disabled: {
    backgroundColor: colors.grey,
    opacity: 0.8,
  },
  labelDisabled: {
    color: colors.white,
  },
});

export default RegisterButton;
