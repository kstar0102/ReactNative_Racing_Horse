import React, { useState, useEffect, useCallback } from "react";
import { View, ImageBackground, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
// Redux
import { connect, useDispatch } from "react-redux";
import { JockeyRegisterAction } from "../../../store/actions/jockey/JockeyRegisterAction";
// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import StableFooterScreen from "../../LayoutScreen/StableFooterScreen";
import { ReturnButton, SaleButton } from "../../../components/Buttons";
import Screenstyles from "../../ScreenStylesheet";
import StableStyles from "../StableStyles";
import RTapScreensStyle from "../../PastureScreens/RanchTapScreens/RTapScreensStyle";
import WorkingButton from "../../../components/Buttons/WorkingButtons";
import UpGrazing from "./Upbring/UpGrazing";
import UpFodder from "./Upbring/UpFodder";

const JocTraining = ({ jockeyData, arrowState }) => {
  if (jockeyData == undefined) {
    return <Spinner visible={true} />;
  }
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(0);
  const [arrowStates, setArrowState] = useState(arrowState);
  // ALL REPEAT
  const [happySate, setHappyState] = useState(0);
  const [tiredState, setTiredState] = useState(0);
  // スベシャル & 逃げ
  const [missState, setMissState] = useState(0);
  // スベシャル & 先行
  const [targetthState, setTargetState] = useState(0);
  // ウッドチップ & 差し
  const [differences, setDifferenceState] = useState(0);
  // プール & 追い
  const [addState, setAddState] = useState(0);

  // State
  const [State, setState] = useState("⬆");
  const [tiredArror, setArrorState] = useState("⬆");
  const [colors, setColors] = useState("red");
  const [tiredArrorColor, setArrorColor] = useState("red");

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch (activeButton) {
      case 1:
        return <UpFodder />;
      default:
        return <UpGrazing />;
    }
  };

  useEffect(() => {
    setArrowState(arrowState);
  }, [arrowState]);

  useEffect(() => {
    if (arrowStates.what == "スベシャル") {
      // ALL REPAET
      setHappyState(1);
      setTiredState(1);
      // ===========
      setMissState(1);
      setTargetState(1);
      setDifferenceState(1);
      setAddState(1);
      // ===========

      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setMissState(0);
        setTargetState(0);
        setDifferenceState(0);
        setAddState(0);
      }, 2000);
    } else if (arrowStates.what == "逃げ") {
      setHappyState(1);
      setTiredState(1);
      setMissState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setMissState(0);
      }, 2000);
    } else if (arrowStates.what == "先行") {
      setHappyState(1);
      setTiredState(1);
      setTargetState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setTargetState(0);
      }, 2000);
    } else if (arrowStates.what == "差し") {
      setHappyState(1);
      setTiredState(1);
      setDifferenceState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setDifferenceState(0);
      }, 2000);
    } else if (arrowStates.what == "追い") {
      setHappyState(1);
      setTiredState(1);
      setAddState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setAddState(0);
      }, 2000);
    } else if (arrowStates.what == "おにぎり") {
      setHappyState(1);
      setTimeout(() => {
        setHappyState(0);
      }, 2000);
    } else if (arrowStates.what == "Sドリンク") {
      setHappyState(1);
      setTimeout(() => {
        setHappyState(0);
      }, 2000);
    } else if (arrowStates.what == "プロテイン") {
      setHappyState(1);
      setTimeout(() => {
        setHappyState(0);
      }, 2000);
    } else if (arrowStates.what == "角砂糖") {
      setTiredState(1);
      setArrorState("⬇");
      setArrorColor("blue");
      setTimeout(() => {
        setTiredState(0);
      }, 2000);
    } else if (arrowStates.what == "チョコ") {
      setTiredState(1);
      setArrorState("⬇");
      setArrorColor("blue");
      setTimeout(() => {
        setTiredState(0);
      }, 2000);
    } else if (arrowStates.what == "ケーキ") {
      setTiredState(1);
      setArrorState("⬇");
      setArrorColor("blue");
      setTimeout(() => {
        setTiredState(0);
      }, 2000);
    }
    if (jockeyData.direction == 0) {
      setState("⬇");
      setColors("blue");
    } else if (jockeyData.direction == 1) {
      setState("⬆");
      setColors("red");
    }
  }, [arrowStates]);

  // Condition Value

  const conditionFaceRange = (conditionFace) => {
    if (typeof conditionFace !== "number") {
      return;
    }

    let result = "";
    switch (true) {
      case conditionFace >= 7 && conditionFace <= 500:
        result = require("../../../assets/images/condition/happy.png");
        break;
      case conditionFace >= 3 && conditionFace <= 6:
        result = require("../../../assets/images/condition/middlehappy.png");
        break;
      case conditionFace >= -2 && conditionFace <= 2:
        result = require("../../../assets/images/condition/normel.png");
        break;
      case conditionFace >= -6 && conditionFace <= -3:
        result = require("../../..//assets/images/condition/sad.png");
        break;
      case conditionFace >= -10 && conditionFace <= -7:
        result = require("../../../assets/images/condition/bad.png");
        break;
      default:
        return;
    }
    return result;
  };

  // Tired Value
  const tiredRange = (tired) => {
    if (typeof tired !== "number") {
      return;
    }
    let result = "";
    switch (true) {
      case tired <= 7:
        result = " ◎";
        break;
      case tired >= 8 && tired <= 12:
        result = " 〇";
        break;
      case tired >= 13 && tired <= 14:
        result = " ▲";
        break;
      case tired >= 15 && tired <= 17:
        result = " △";
        break;
      case tired >= 18:
        result = " ×";
        break;
      default:
        return;
    }
    return result;
  };

  // SKILL FILLTER
  const skillRange = (skill) => {
    if (typeof skill !== "number") {
      return;
    }
    let result = "";
    switch (true) {
      case skill >= 4501 && skill <= 5000:
        result = "S+";
        break;
      case skill >= 4001 && skill <= 4500:
        result = "S";
        break;
      case skill >= 3501 && skill <= 4000:
        result = "A+";
        break;
      case skill >= 3001 && skill <= 3500:
        result = "A";
        break;
      case skill >= 2501 && skill <= 3000:
        result = "B+";
        break;
      case skill >= 2001 && skill <= 2500:
        result = "B";
        break;
      case skill >= 1501 && skill <= 2000:
        result = "C+";
        break;
      case skill >= 1001 && skill <= 1500:
        result = "C";
        break;
      case skill >= 501 && skill <= 1000:
        result = "D+";
        break;
      case skill >= 0 && skill <= 500:
        result = "D";
        break;
      default:
        return;
    }
    return result;
  };

  const miss = skillRange(parseInt(jockeyData.p_miss));
  const target = skillRange(parseInt(jockeyData.p_target));
  const difference = skillRange(parseInt(jockeyData.p_difference));
  const add = skillRange(parseInt(jockeyData.p_add));
  const tired = tiredRange(parseInt(jockeyData.tired));
  const conditionFace = conditionFaceRange(parseInt(jockeyData.happy));

  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../../assets/images/horse_track/stall.jpg")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View style={Screenstyles.UPContainer}>
          <View style={Screenstyles.UPcontent}>
            <View>
              <ReturnButton
                label="厩 舎"
                color={1}
                onPress={() => navigation.navigate("StallScreen")}
              />
            </View>
            <View style={Screenstyles.UPRButton}>
              <ReturnButton label="騎手育成" color={1} />
            </View>
          </View>
          {/* SCREEN SHOW */}
          <View style={StableStyles.institutionContainer}>
            <View style={StableStyles.upperContent}>
              <View style={StableStyles.upperLeftImg}>
                {jockeyData.gender == "女性" ? (
                  <Image
                    style={StableStyles.upperLeftImg}
                    source={require("../../../assets/images/People/0.png")}
                  />
                ) : (
                  <Image
                    style={StableStyles.upperLeftImg}
                    source={require("../../../assets/images/People/1.png")}
                  />
                )}
              </View>
              <View style={StableStyles.upperRight}>
                <View style={StableStyles.cardJokeyHeader}>
                  <Text style={StableStyles.cardHeaderTxt}>
                    {jockeyData.name}
                  </Text>
                  <Text style={StableStyles.cardHeaderTxt}>
                    男{jockeyData.age}歳
                  </Text>
                  <Text style={StableStyles.cardHeaderTxt}>
                    賞金 {jockeyData.prize}
                  </Text>
                </View>

                <View style={StableStyles.cardBody}>
                  <View style={StableStyles.cardBodyRow}>
                    <View style={StableStyles.cardBodyRow}>
                      <Text style={StableStyles.cardBodyTxt}>調子</Text>
                      <Image
                        style={RTapScreensStyle.conditions}
                        source={conditionFace}
                      />
                      <Text
                        style={[
                          RTapScreensStyle.oneRightTxtUp,
                          { opacity: happySate, color: colors },
                        ]}
                      >
                        {State}
                      </Text>
                    </View>

                    <View style={StableStyles.cardTxtGroup}>
                      <Text style={StableStyles.cardBodyTxt}>疲労 </Text>
                      <Text style={StableStyles.cardBodyTxtSymbol}>
                        {tired}
                      </Text>
                      <Text
                        style={[
                          RTapScreensStyle.oneRightTxtUp,
                          { opacity: tiredState, color: tiredArrorColor },
                        ]}
                      >
                        {tiredArror}
                      </Text>
                    </View>

                    <Text style={StableStyles.cardBodyTxt}>
                      {jockeyData.t1}-{jockeyData.t2}-{jockeyData.t3}-
                      {jockeyData.t4}
                    </Text>
                  </View>
                  <View style={StableStyles.cardBodyRow}>
                    {/* <View style={RTapScreensStyle.oneRightTxt}>
                    
                    </View> */}
                    <View style={StableStyles.cardTxtGroup}>
                      <Text style={StableStyles.cardBodyTxt}>
                        逃 <Text style={StableStyles.cardTxtRed}> {miss}</Text>
                      </Text>
                      <Text
                        style={[
                          RTapScreensStyle.oneRightTxtUp,
                          { opacity: missState },
                        ]}
                      >
                        ⬆
                      </Text>
                    </View>

                    <View style={StableStyles.cardTxtGroup}>
                      <Text style={StableStyles.cardBodyTxt}>
                        先{" "}
                        <Text style={StableStyles.cardTxtRed}> {target}</Text>
                      </Text>
                      <Text
                        style={[
                          RTapScreensStyle.oneRightTxtUp,
                          { opacity: targetthState },
                        ]}
                      >
                        ⬆
                      </Text>
                    </View>

                    <View style={StableStyles.cardTxtGroup}>
                      <Text style={StableStyles.cardBodyTxt}>
                        差{" "}
                        <Text style={StableStyles.cardTxtRed}>
                          {" "}
                          {difference}
                        </Text>
                      </Text>
                      <Text
                        style={[
                          RTapScreensStyle.oneRightTxtUp,
                          { opacity: differences },
                        ]}
                      >
                        ⬆
                      </Text>
                    </View>

                    <View style={StableStyles.cardTxtGroup}>
                      <Text style={StableStyles.cardBodyTxt}>
                        追 <Text style={StableStyles.cardTxtRed}> {add}</Text>
                      </Text>
                      <Text
                        style={[
                          RTapScreensStyle.oneRightTxtUp,
                          { opacity: addState },
                        ]}
                      >
                        ⬆
                      </Text>
                    </View>
                  </View>
                  <View style={StableStyles.cardAlilityRow}>
                    <Image
                      style={StableStyles.upperAlilityImg}
                      source={require("../../../assets/images/ablility/1.gif")}
                    />
                    <Image
                      style={StableStyles.upperAlilityImg}
                      source={require("../../../assets/images/ablility/2.gif")}
                    />
                    <Image
                      style={StableStyles.upperAlilityImg}
                      source={require("../../../assets/images/ablility/3.gif")}
                    />
                    <Image
                      style={StableStyles.upperAlilityImg}
                      source={require("../../../assets/images/ablility/4.gif")}
                    />
                    <Image
                      style={StableStyles.upperAlilityImg}
                      source={require("../../../assets/images/ablility/5.gif")}
                    />
                    <Image
                      style={StableStyles.upperAlilityImg}
                      source={require("../../../assets/images/ablility/6.gif")}
                    />
                    <Image
                      style={StableStyles.upperAlilityImg}
                      source={require("../../../assets/images/ablility/7.gif")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={RTapScreensStyle.ButtonJokeyGroup}>
            {activeButton ? (
              <WorkingButton
                label={"育成"}
                colorNumber={2}
                styleId={2}
                onPress={() => handleButtonPress(0)}
              />
            ) : (
              <WorkingButton
                label={"休憩"}
                colorNumber={5}
                styleId={2}
                onPress={() => handleButtonPress(1)}
              />
            )}
            <WorkingButton label={`引退`} colorNumber={1} styleId={2} />
          </View>
          {renderScreenBelowButtons()}
          {/* SCREEN SHOW END */}
        </View>
        <StableFooterScreen />
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    jockeyData: state.jockeyData.getAllData,
    arrowState: state.arrow.arrowState,
  };
};

export default connect(mapStateToProps)(JocTraining);
