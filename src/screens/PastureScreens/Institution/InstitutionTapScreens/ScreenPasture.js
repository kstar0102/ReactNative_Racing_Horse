import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, Alert } from "react-native";
// Redux
import { connect, useDispatch } from "react-redux";
import { pastureBuyAction } from "../../../../store/actions/institution/apiAction/pastureBuyAction";
// CUSTOM IMPORT
import { BuyButton } from "../../../../components/Buttons";
import ITapScreenStyles from "./ITapScreenStyles";

const ScreenPasture = ({ pasture_name, user_id, user_level, pasture }) => {
  const dispatch = useDispatch();
  // LV.0
  const [oneborderStyle, setOneBorderStyle] = useState(0);
  const [oneBtnStyle, setOneBtnStyle] = useState("none");
  const [oneTxtStyle, setOneTxtStyle] = useState("none");
  // LV.1
  const [twoborderStyle, setTwoBorderStyle] = useState(0);
  const [twoBtnStyle, setTwoBtnStyle] = useState("none");
  const [twoblueStyle, setTwoBlueStyle] = useState(0);
  const [twoTxtStyle, setTwoTxtStyle] = useState("none");
  // lV.2
  const [threeborderStyle, setThreeBorderStyle] = useState(0);
  const [threeLockStyle, setThreeLockStyle] = useState("flex");
  const [threeTxtStyle, setThreeTxtStyle] = useState("none");
  const [threeblueStyle, setThreeBlueStyle] = useState(0);
  const [threeBtnStyle, setThreeBtnStyle] = useState("none");

  useEffect(() => {
    if (pasture != "") {
      if (pasture.etc == 1) {
        setTwoBtnStyle("flex");
        setOneBtnStyle("none");
        setOneTxtStyle("flex");
        setOneBorderStyle(8);
        setTwoBlueStyle(1);
      } else if (pasture.etc == 2) {
        setThreeBtnStyle("flex");
        setTwoBtnStyle("none");
        setTwoTxtStyle("flex");
        setOneTxtStyle("flex");
        setOneBorderStyle(8);
        setTwoBorderStyle(8);
        setTwoBlueStyle(1);
        setThreeBorderStyle(0);
        setThreeBlueStyle(1);
        setThreeLockStyle("none");
      } else if (pasture.etc == 3) {
        setThreeBtnStyle("none");
        setTwoBtnStyle("none");
        setTwoTxtStyle("flex");
        setOneTxtStyle("flex");
        setOneBorderStyle(8);
        setTwoBorderStyle(8);
        setTwoBlueStyle(1);
        setThreeBorderStyle(8);
        setThreeBlueStyle(1);
        setThreeLockStyle("none");
        setThreeTxtStyle("flex");
      }
    } else {
      setTwoBtnStyle("none");
      setOneBtnStyle("flex");
      setOneBorderStyle(0);
    }
  }, [pasture]);

  const handleSubmit = (level, price) => {
    let pastureData = {};
    if (pasture != "") {
      if (pasture.id) {
        pastureData = {
          pasture_id: pasture.id,
          price: price,
          user_id: user_id,
          level: level,
          pasture_name: pasture_name,
          user_level: user_level,
        };
      }
    } else {
      pastureData = {
        pasture_id: 0,
        price: 1000,
        user_id: user_id,
        level: level,
        pasture_name: pasture_name,
        user_level: user_level,
      };
    }
    Alert.alert(
      " ",
      `牧場 (Lv.${level})は、${price}ptですが購入しますか?`,
      [
        {
          text: "いいえ",
          style: "cancel",
        },
        {
          text: "はい",
          onPress: () => dispatch(pastureBuyAction(pastureData)),
        },
      ],
      { cancelable: false, style: { fontSize: 5 } }
    );
  };
  return (
    <ScrollView style={ITapScreenStyles.LongiContainer}>
      <View style={ITapScreenStyles.Longicontent}>
        <View style={ITapScreenStyles.Bundle}>
          <Text style={ITapScreenStyles.Lavel}>Lv.1</Text>
          <Image
            style={ITapScreenStyles.LongiImage}
            source={require("../../../../assets/images/facility/par1.png")}
          />
          <Text
            style={[
              ITapScreenStyles.LongiPay,
              { display: oneTxtStyle, borderWidth: oneborderStyle },
            ]}
          >
            済
          </Text>
          {/* <BuyButton /> */}
          <BuyButton
            label={"購入する"}
            onPress={() => handleSubmit(1)}
            display={oneBtnStyle}
          />
        </View>
        <View style={ITapScreenStyles.Bundle}>
          <Text style={ITapScreenStyles.Lavel}>Lv.2</Text>
          <Image
            style={[ITapScreenStyles.LongiImage]}
            source={require("../../../../assets/images/facility/par2.png")}
            blurRadius={
              twoblueStyle
                ? Platform.OS === "ios"
                  ? 0
                  : 0
                : Platform.OS === "ios"
                ? 8
                : 3
            }
          />
          <Text
            style={[
              ITapScreenStyles.LongiPay,
              { display: twoTxtStyle, borderWidth: twoborderStyle },
            ]}
          >
            済
          </Text>
          <BuyButton
            label={"購入する"}
            onPress={() => handleSubmit(2, 2000)}
            display={twoBtnStyle}
          />
          <Image
            style={[ITapScreenStyles.LongiIcon, { display: oneBtnStyle }]}
            source={require("../../../../assets/images/Lock.png")}
          />
        </View>
        <View style={ITapScreenStyles.Bundle}>
          <Text style={ITapScreenStyles.Lavel}>Lv.3</Text>
          <Image
            style={[ITapScreenStyles.LongiImage]}
            source={require("../../../../assets/images/facility/par3.png")}
            blurRadius={
              threeblueStyle
                ? Platform.OS === "ios"
                  ? 0
                  : 0
                : Platform.OS === "ios"
                ? 8
                : 3
            }
          />
          <Text
            style={[
              ITapScreenStyles.LongiPay,
              { display: threeTxtStyle, borderWidth: threeborderStyle },
            ]}
          >
            済
          </Text>
          <BuyButton
            label={"購入する"}
            onPress={() => handleSubmit(3, 5000)}
            display={threeBtnStyle}
          />
          <Image
            style={[ITapScreenStyles.LongiIcon, { display: threeLockStyle }]}
            source={require("../../../../assets/images/Lock.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    pasture_name: state.pasture.pastureData.name,
    user_id: state.user.userData.id,
    user_level: state.user.userData.level,
    pasture: state.pasture.pastureData,
  };
};
export default connect(mapStateToProps)(ScreenPasture);
