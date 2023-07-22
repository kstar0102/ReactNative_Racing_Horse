import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, Alert } from "react-native";
// Redux
import { connect, useDispatch } from "react-redux";
import { stallLevelUpAction } from "../../../../store/actions/truck/TrainInstitution/apiAction/stallLevelUpAction";
// CUSTOM IMPORT
import { BuyTapButton } from "../../../../components/Buttons";
import StableStyles from "../../StableStyles";
import colors from "../../../../containers/colors";

const StallTap = ({ user_id, user_level, banner, institutionData, stallLevel}) => {
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

  const bannerId = banner == 0 ? institutionData[0].sid : banner.sid;
  const bannerLevel = stallLevel == '' ?  institutionData[0].slevel :  stallLevel[0].level;
 
  useEffect(() => {
    if (institutionData != "") {
      if (bannerLevel == 1) {
        setTwoBtnStyle("flex");
        setOneBtnStyle("none");
        setOneTxtStyle("flex");

        // ADd
        setTwoTxtStyle("none");
        setTwoBorderStyle(0);
        setThreeBtnStyle("none");
        setThreeLockStyle("flex");
        setThreeBlueStyle(0);
        setOneBorderStyle(8);
        setTwoBlueStyle(1);
      } else if (bannerLevel == 2) {
        setThreeBtnStyle("flex");
        setTwoBtnStyle("none");
        setTwoTxtStyle("flex");
        setOneTxtStyle("flex");
        setOneBtnStyle("none");

        setOneBorderStyle(8);
        setTwoBorderStyle(8);
        setTwoBlueStyle(1);
        setThreeBorderStyle(0);
        setThreeBlueStyle(1);
        setThreeLockStyle("none");
        setThreeTxtStyle("none");
      } else if (bannerLevel == 3) {
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
      setTwoTxtStyle("none");
      setTwoBorderStyle(0);
      setOneBtnStyle("flex");
      setOneTxtStyle("none");
      setOneBorderStyle(0);
      setThreeBorderStyle(0);
      setThreeTxtStyle("none");
      setThreeBlueStyle(0);
      setThreeLockStyle("flex");
      setThreeBtnStyle("none");
    }
  }, [institutionData, bannerLevel]);

  const handleSubmit = (level, price, effect) => {
    let stallData = {};
    if (banner != "") {
      if (banner.sid) {
        stallData = {
          price: price,
          user_id: user_id,
          level: level,
          stall_id: bannerId,
          user_level: user_level,
        };
      }
    } else {
      stallData = {
        price: 1000,
        user_id: user_id,
        level: level,
        stall_id: bannerId,
        user_level: user_level,
      };
    }
    Alert.alert(
      `牧場 (Lv.${level})は、${price}ptですが購入しますか?`,
      `[効果] 他の施設を ${effect}つ建設可能`,
      [
        {
          text: "いいえ",
          style: "cancel",
        },
        {
          text: "はい",
          onPress: () => dispatch(stallLevelUpAction(stallData)),
        },
      ],
      { cancelable: false, style: { fontSize: 5 } }
    );
  };
  return (
    <ScrollView
      style={[
        StableStyles.tapContainer,
        { backgroundColor: colors.tabButtonEnd, opacity: 0.9 },
      ]}
    >
      <View style={[StableStyles.tapContent]}>
        <View style={StableStyles.Bundle}>
          <Image
            style={StableStyles.tapImage}
            source={require("../../../../assets/images/facility/par1.png")}
          />
          <Text
            style={[
              StableStyles.tapPay,
              { display: oneTxtStyle, borderWidth: oneborderStyle },
            ]}
          >
            済
          </Text>
          {/* <BuyButton /> */}
          <BuyTapButton
            label={"購入する"}
            onPress={() => handleSubmit(1)}
            display={oneBtnStyle}
            height={1}
            width={20}
          />
        </View>
        <View style={StableStyles.Bundle}>
          <Image
            style={[StableStyles.tapImage]}
            source={require("../../../../assets/images/facility/par2.png")}
            blurRadius={
              twoblueStyle
                ? Platform.OS === "ios"
                  ? 0
                  : 0
                : Platform.OS === "ios"
                ? 8
                : 8
            }
          />
          <Text
            style={[
              StableStyles.tapPay,
              { display: twoTxtStyle, borderWidth: twoborderStyle },
            ]}
          >
            済
          </Text>
          <BuyTapButton
            label={"購入する"}
            onPress={() => handleSubmit(2, 2000, 2)}
            display={twoBtnStyle}
          />
          <Image
            style={[StableStyles.tapIcon, { display: oneBtnStyle }]}
            source={require("../../../../assets/images/Lock.png")}
          />
        </View>
        <View style={StableStyles.Bundle}>
          <Image
            style={[StableStyles.tapImage]}
            source={require("../../../../assets/images/facility/par3.png")}
            blurRadius={
              threeblueStyle
                ? Platform.OS === "ios"
                  ? 0
                  : 0
                : Platform.OS === "ios"
                ? 8
                : 8
            }
          />
          <Text
            style={[
              StableStyles.tapPay,
              { display: threeTxtStyle, borderWidth: threeborderStyle },
            ]}
          >
            済
          </Text>
          <BuyTapButton
            label={"購入する"}
            onPress={() => handleSubmit(3, 5000, 4)}
            display={threeBtnStyle}
          />
          <Image
            style={[StableStyles.tapIcon, { display: threeLockStyle }]}
            source={require("../../../../assets/images/Lock.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.user.userData.id,
    user_level: state.user.userData.level,
    institutionData: state.institutionStable.institutionMenuData,
    stallLevel:  state.stallUp.stallLevelUpData
  };
};
export default connect(mapStateToProps)(StallTap);
