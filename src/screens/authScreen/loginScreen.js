import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";

// Redux
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Toast from "react-native-root-toast";
import { loginAction } from "../../store/actions/auth/loginAction";
// Custom Import
import AuthHeaderScreen from "../LayoutScreen/AuthHeaderScreen";
import CheckButton from "../../components/Buttons/CheckButton";
import LoginButton from "../../components/Buttons/LoginButton";
import EmailInput from "../../components/input/EmailInput";
import PasswordInput from "../../components/input/PasswordInput";
import Screenstyles from "../ScreenStylesheet";
import AuthStyle from "./AuthStyle";

const LoginScreen = () => {

  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = () => {
    if (userId == "") {
      let toast = Toast.show("Please enter an User ID", {
        duration: Toast.durations.LONG,
      });
      setTimeout(function hideToast() {
        Toast.hide(toast);
      }, 2000);
      return false;
    } else if (userPassword == "") {
      let toast = Toast.show("Please enter a password", {
        duration: Toast.durations.LONG,
      });
      setTimeout(function hideToast() {
        Toast.hide(toast);
      }, 2000);
      return false;
    } else {
      const sendData = {
        login_id: userId,
        password: userPassword,
      };
      dispatch(loginAction(sendData));
    }
  };

  const handleInputChangeID = (inputValue) => {
    setUserId(inputValue); // This will update the state with the new value of the input
  };

  const handleInputChangePassword = (inputValue) => {
    setUserPassword(inputValue);
  };
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../assets/images/1.png")}
        resizeMode="contain"
        style={Screenstyles.img}
      >
        {/* <Text style={{fontSize: 100}}>{message}</Text> */}
        <AuthHeaderScreen />
        <View style={AuthStyle.InputGroup}>
          <View style={AuthStyle.EmailInput}>
            <Text style={AuthStyle.labelT}>
              ログイン<Text style={AuthStyle.labelTID}>ID</Text>
            </Text>
            <EmailInput onChangeText={handleInputChangeID} />
          </View>
          <View style={AuthStyle.PasswordInput}>
            <Text style={AuthStyle.labelTBottom}>パスワード</Text>
            <PasswordInput onChangeText={handleInputChangePassword} />
          </View>
          <View style={AuthStyle.checkboxContainer}>
            <CheckButton />
            <Text style={AuthStyle.label}>パスワードを保存しますか ?</Text>
          </View>
          <LoginButton label={"ログイン"} onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(LoginScreen);
