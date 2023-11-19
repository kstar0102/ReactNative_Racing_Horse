import { TouchableOpacity, Text, StyleSheet } from "react-native";

// container
import colors from "../../containers/colors";
import { 
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
const NormalButton = ({ label, onPress, disabled, buttonStyle, labelStyle }) => {

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle && buttonStyle]}
      onPress={onPress ? onPress : () => alert("Clicked")}
      disabled={disabled ? disabled : false}
    >
      <Text style={[styles.label, labelStyle && labelStyle]}>{label ? label : 'Button'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.ModalButtonColor,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    marginVertical: hp(1),
  },
  label: {
    color: colors.light.white,
    fontSize: 22,
    fontWeight: 700,
    textAlign: "center",
    paddingHorizontal: wp(3)
  }
});

export default NormalButton;