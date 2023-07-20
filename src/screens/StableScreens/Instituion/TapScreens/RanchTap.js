import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, Alert } from "react-native";
// Redux
import { connect, useDispatch } from "react-redux";
import { ranchLevelUpAction } from "../../../../store/actions/truck/TrainInstitution/apiAction/ranchLevelUpAction";
// import longiField
// CUSTOM IMPORT
import { BuyTapButton } from "../../../../components/Buttons";
import StableStyles from "../../StableStyles";
import colors from "../../../../containers/colors";

const RanchTap = ({  user_id, user_level, stallRanch, banner, institutionData }) => {
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

  useEffect(() => {
    if (stallRanch != "") {
      if (stallRanch[0].level == 1) {
        setTwoBtnStyle("flex");
        setOneBtnStyle("none");
        setOneTxtStyle("flex");
        // ADd
        setTwoTxtStyle('none');
        setTwoBorderStyle(0);
        setThreeBtnStyle('none');
        setThreeLockStyle('flex');
        setThreeBlueStyle(0);

        setOneBorderStyle(8);
        setTwoBlueStyle(1);
      } else if (stallRanch[0].level == 2) {
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
      } else if (stallRanch[0].level == 3) {
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
  }, [stallRanch]);

  const handleSubmit = (level, price, effect) => {
    let longiFieldData = {};
    if (stallRanch != "") {
      if (stallRanch[0].id) {
        longiFieldData = {
          ranch_id: stallRanch[0].id,
          price: price,
          user_id: user_id,
          level: level,
          stall_id: bannerId,
          user_level: user_level,
        };
        Alert.alert(
          `ロンギ場 (Lv.${level})は、${price}ptですが購入しますか?`,
          `[効果] 入厩時に「気性+${effect}」`,
          [
            {
              text: "いいえ",
              style: "cancel",
            },
            {
              text: "はい",
              onPress: () => dispatch(ranchLevelUpAction(longiFieldData)),
            },
          ],
          { cancelable: false, style: { fontSize: 5 } }
        );
      }
    } else {
      longiFieldData = {
        ranch_id: 0,
        price: 1000,
        user_id: user_id,
        level: level,
        stall_id: bannerId,
        user_level: user_level,
      };
      Alert.alert(
        `ロンギ場 (Lv.1)は、1000ptですが購入しますか?`,
        "[効果] 入厩時に「気性+10」",
        [
          {
            text: "いいえ",
            style: "cancel",
          },
          {
            text: "はい",
            onPress: () => dispatch(ranchLevelUpAction(longiFieldData)),
          },
        ],
        { cancelable: false, style: { fontSize: 5 } }
      );
    }
  };
  return (
    <ScrollView
      style={[
        StableStyles.tapContainer,
        { backgroundColor: colors.IButtonFive, opacity: 0.9 },
      ]}
    >
      <View style={StableStyles.tapContent}>
        <View style={StableStyles.Bundle}>
          <Image
            style={StableStyles.tapImage}
            source={require("../../../../assets/images/facility/longijang1.png")}
          />
          <Text
            style={[
              StableStyles.tapPay,
              { display: oneTxtStyle, borderWidth: oneborderStyle },
            ]}
          >
            済
          </Text>
          {/* <BuyTapButton /> */}
          <BuyTapButton
            label={"購入する"}
            onPress={() => handleSubmit(1)}
            display={oneBtnStyle}
          />
        </View>
        <View style={StableStyles.Bundle}>
          <Image
            style={[StableStyles.tapImage]}
            source={require("../../../../assets/images/facility/longijang2.png")}
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
              StableStyles.tapPay,
              { display: twoTxtStyle, borderWidth: twoborderStyle },
            ]}
          >
            済
          </Text>
          <BuyTapButton
            label={"購入する"}
            onPress={() => handleSubmit(2, 3000, 20)}
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
            source={require("../../../../assets/images/facility/longijang3.png")}
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
              StableStyles.tapPay,
              { display: threeTxtStyle, borderWidth: threeborderStyle },
            ]}
          >
            済
          </Text>
          <BuyTapButton
            label={"購入する"}
            onPress={() => handleSubmit(3, 6000, 30)}
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

const mapStateToProps = state => {
  return {
    pasture_name: state.pasture.pastureData.name,
    user_id: state.user.userData.id,
    user_level: state.user.userData.level,
    stallRanch: state.stallRanch.ranchLevelUpData,
    institutionData: state.institutionStable.institutionMenuData,
  };
};
export default connect(mapStateToProps)(RanchTap);
