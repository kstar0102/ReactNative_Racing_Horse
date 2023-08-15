import React, { useState, useEffect } from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import Toast from "react-native-root-toast";
import Spinner from "react-native-loading-spinner-overlay";

import DropDownR from "../../../components/Buttons/DropDwonR";
import RTapScreensStyle from "../../PastureScreens/RanchTapScreens/RTapScreensStyle";
import Screenstyles from "../../ScreenStylesheet";
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import StableFooterScreen from "../../LayoutScreen/StableFooterScreen";
import ReturnButtonScreen from "../../../components/someScreen/ReturnButtonScreen";
import { connect } from "react-redux";
import { horseColor } from "../../../utils/globals";
import RegisterTable from "./RegisterTable";
import Ccolors from "../../../containers/colors";

const RaceRegistation = ({ stableData, registering }) => {
  if (stableData == "" || stableData == undefined) {
    alert("YOUR HORSE NOT FOUND RETURN");
    return <Spinner visible={true} />;
  }
  // Ground Color
  const [groundColor, setGroundColor] = useState("#1BFF00");
  const [selected, setSelected] = useState(undefined);
  const [banner, setBanner] = useState(stableData[0]);
  const [registeringState, setRegisteringState] = useState("none");

  const filteredOneData =
    registering != "" ? registering.map((data) => Number(data.horse_id)) : [];

  useEffect(() => {
    if (filteredOneData != "") {
      if (filteredOneData.includes(banner.id)) {
        setRegisteringState("flex");
      } else {
        setRegisteringState("none");
      }
    } else {
      setRegisteringState("none");
    }
  }, [banner, registering]);
  useEffect(() => {
    setBanner(stableData[0]);
    setPattern(tiredNumber);
    if (stableData[0].ground == "ダ") {
      setGroundColor("#707172");
    } else if (stableData[0].ground == "芝") {
      setGroundColor("#1BFF00");
    } else if (stableData[0].ground == "万") {
      setGroundColor("red");
    }
  }, [stableData]);
  const data = stableData;

  const handleSettingId = (value) => {
    setBanner(value);
    if (value) {
      setPattern(tiredNumber);
    }
    if (value.ground == "ダ") {
      setGroundColor("#707172");
    } else if (value.ground == "芝") {
      setGroundColor("#1BFF00");
    } else if (value.ground == "万") {
      setGroundColor("red");
    }
  };
  // SKILL FILLTER
  const skillRange = (skill) => {
    if (typeof skill !== "number") {
      return;
    }
    let result = "";
    switch (true) {
      case skill >= 451:
        result = "S+";
        break;
      case skill >= 401 && skill <= 450:
        result = "S";
        break;
      case skill >= 351 && skill <= 400:
        result = "A+";
        break;
      case skill >= 301 && skill <= 350:
        result = "A";
        break;
      case skill >= 251 && skill <= 300:
        result = "B+";
        break;
      case skill >= 201 && skill <= 250:
        result = "B";
        break;
      case skill >= 151 && skill <= 200:
        result = "C+";
        break;
      case skill >= 101 && skill <= 150:
        result = "C";
        break;
      case skill >= 51 && skill <= 100:
        result = "D+";
        break;
      case skill >= 1 && skill <= 50:
        result = "D";
        break;
      default:
        return;
    }
    return result;
  };

  const distanceRange = (distance) => {
    if (typeof distance !== "number") {
      return;
    }
    let result = "";
    switch (true) {
      case distance >= 1000 && distance <= 1600:
        result = "短";
        break;
      case distance >= 1400 && distance <= 2000:
        result = "短中";
        break;
      case distance >= 1800 && distance <= 2400:
        result = "中";
        break;
      case distance >= 2200 && distance <= 2800:
        result = "中長";
        break;
      case distance >= 3000 && distance <= 3600:
        result = "長";
        break;
      default:
        return;
    }
    return result;
  };

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
        result = require("../../../assets/images/condition/sad.png");
        break;
      case conditionFace >= -10 && conditionFace <= -7:
        result = require("../../../assets/images/condition/bad.png");
        break;
      default:
        return;
    }
    return result;
  };

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
        result = " o";
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

  const speed = skillRange(banner.speed_b - -banner.speed_w);
  const health = skillRange(banner.health_b - -banner.health_w);
  const moment = skillRange(banner.moment_b - -banner.moment_w);
  const stamina = skillRange(banner.stamina_b - -banner.stamina_w);
  const strength = skillRange(banner.strength_b - -banner.strength_w);
  const condition = skillRange(banner.condition_b - -banner.condition_w);
  const distanceValue = distanceRange(
    (banner.distance_max - -banner.distance_min) / 2
  );
  const conditionFace = conditionFaceRange(parseInt(banner.happy));
  const tired = tiredRange(parseInt(banner.tired));
  const tiredNumber = parseInt(banner.tired);

  // Health State
  const setPattern = (condition) => {
    // Disable Injery
    return;
    let options;
    if (condition <= 10) {
      return false;
    } else if (condition == 11 || condition == 12) {
      options = {
        none: 79,
        D1: 10,
        D2: 5,
        D3: 3,
        D4: 2,
        D5: 1,
      };
    } else if (condition == 13 || condition == 14) {
      options = {
        none: 64,
        D1: 15,
        D2: 10,
        D3: 5,
        D4: 4,
        D5: 2,
      };
    } else if (condition == 15 || condition == 16) {
      options = {
        none: 43,
        D1: 20,
        D2: 15,
        D3: 10,
        D4: 8,
        D5: 4,
      };
    } else if (condition == 17 || condition == 18) {
      options = {
        none: 22,
        D1: 25,
        D2: 20,
        D3: 15,
        D4: 10,
        D5: 8,
      };
    } else if (condition == 19 || condition >= 20) {
      options = {
        none: 0,
        D1: 30,
        D2: 25,
        D3: 20,
        D4: 15,
        D5: 10,
      };
    }
    const randomNumber = Math.floor(Math.random() * 100);

    // Iterate over the options until we reach the chosen value
    let sum = 0;
    for (const [key, value] of Object.entries(options)) {
      sum += value;
      if (randomNumber < sum) {
        if (key == "D1") {
          let toast = Toast.show("疲労が溜まると故障してしまいます。", {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        } else if (key == "D2") {
          let toast = Toast.show("疲労が溜まると故障してしまいます。", {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        } else if (key == "D3") {
          let toast = Toast.show("疲労が溜まると故障してしまいます。", {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        } else if (key == "D4") {
          let toast = Toast.show("疲労が溜まると故障してしまいます。", {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        } else if (key == "D5") {
          let toast = Toast.show(" 疲労が溜まると故障してしまいます。", {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        }
        break;
      }
    }
  };

  // console.log( "================ ",  selected.gender);
  return (
    <ImageBackground
      source={require("../../../assets/images/horse_track/stall.jpg")}
      resizeMode="cover"
      style={Screenstyles.img}
    >
      <HeaderScreen />
      <ReturnButtonScreen
        BigPlace={"厩 舎"}
        screenName={"出走登録"}
        colorNumber={1}
        nviUrl={"StallScreen"}
      />
      <View style={RTapScreensStyle.RaceRegistationContainer}>
        <View style={RTapScreensStyle.oneTopContent}>
          <View style={RTapScreensStyle.oneTopContentLeft}>
            <Text style={RTapScreensStyle.shadowTxt}>所有馬一覧</Text>
            <DropDownR
              name={data[0].name}
              data={data}
              onSelect={setSelected}
              setId={handleSettingId}
            />
          </View>
          <View style={RTapScreensStyle.oneTopContentRight}>
            <View style={RTapScreensStyle.oneRioghtHeader}>
              <Text
                style={[
                  RTapScreensStyle.oneRioghtHeaderTxtA,
                  {
                    color:
                      (!!selected && selected.gender == "牡") ||
                      data[0].gender == "牡"
                        ? Ccolors.genderColorM
                        : Ccolors.genderColorF,
                  },
                ]}
              >
                {(!!selected && selected.name) || data[0].name}
              </Text>
              <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                <Text
                  style={{
                    color:
                      (!!selected && selected.gender == "牡") ||
                      data[0].gender == "牡"
                        ? Ccolors.genderColorM
                        : Ccolors.genderColorF,
                  }}
                >
                  {(!!selected && selected.gender) || data[0].gender}
                </Text>
                {(!!selected && selected.age.split("")[1]) ||
                  data[0].age.split("")[1]}
              </Text>
              <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                {(!!selected && selected.growth) || data[0].growth}
              </Text>
              <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                {(!!selected && selected.color) || data[0].color}
              </Text>
              <Text style={RTapScreensStyle.oneRioghtHeaderTxtLetter}>
                {(!!selected && selected.class) || "GIクラス"}
              </Text>
            </View>
            <View style={RTapScreensStyle.oneRioghtBody}>
              <View>
                <View style={RTapScreensStyle.conditionsGroup}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxt}>調子</Text>
                  <Image
                    style={RTapScreensStyle.conditions}
                    source={conditionFace}
                  />
                </View>
                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                    SP{" "}
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                      {(!!selected && speed) || speed}
                    </Text>
                  </Text>
                </View>
                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                    ST{" "}
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                      {(!!selected && strength) || strength}
                    </Text>
                  </Text>
                </View>
              </View>
              <View>
                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                    疲労
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtTired}>
                      {(!!selected && tired) || tired}
                    </Text>
                  </Text>

                  <Text
                    style={[
                      RTapScreensStyle.oneRioghtHeaderTxtGreenA,
                      { color: groundColor },
                    ]}
                  >
                    {(!!selected && selected.ground) || data[0].ground}
                  </Text>
                </View>

                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                    瞬発{" "}
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                      {(!!selected && moment) || moment}
                    </Text>
                  </Text>
                </View>

                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                    根性{" "}
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                      {(!!selected && stamina) || stamina}
                    </Text>
                  </Text>
                </View>
              </View>

              <View style={RTapScreensStyle.oneRioghtBodyTxtGroup}>
                <View style={RTapScreensStyle.txtGroup}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxtA}>
                    {(!!selected && distanceValue) || distanceValue}距離
                  </Text>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxtValueA}>
                    {" "}
                    {(!!selected && selected.quality_leg) ||
                      data[0].quality_leg}
                  </Text>
                </View>
                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                    気性{" "}
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                      {(!!selected && condition) || condition}
                    </Text>
                  </Text>
                </View>
                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                    健康{" "}
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                      {(!!selected && health) || health}
                    </Text>
                  </Text>
                </View>
              </View>
              {(!!selected && (
                <>
                  {horseColor.map((colorName, index) => {
                    if (colorName[selected.color]) {
                      return (
                        <View>
                          <Image
                            key={`${index}`}
                            style={RTapScreensStyle.HorseAvatar}
                            source={colorName[selected.color]}
                          />

                          <Image
                            style={[
                              RTapScreensStyle.registering,
                              { display: registeringState },
                            ]}
                            source={require("../../../assets/horseImageData/registering_1.png")}
                          />
                        </View>
                      );
                    } else {
                      return null;
                    }
                  })}
                </>
              )) || (
                <>
                  {horseColor.map((colorName, index) => {
                    if (colorName[data[0].color]) {
                      return (
                        <View>
                          <Image
                            key={`${index}`}
                            style={RTapScreensStyle.HorseAvatar}
                            source={colorName[data[0].color]}
                          />

                          <Image
                            style={[
                              RTapScreensStyle.registering,
                              { display: registeringState },
                            ]}
                            source={require("../../../assets/horseImageData/registering_1.png")}
                          />
                        </View>
                      );
                    } else {
                      return null;
                    }
                  })}
                </>
              )}
            </View>
          </View>
        </View>
      </View>
      <View>
        <RegisterTable horseData={banner ? banner : data[0]} />
      </View>

      <StableFooterScreen />
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    stableData: state.stableMenu.StableSendData,
    arrowState: state.arrow.arrowState,
    registering: state.registerData.registeringData,
  };
};
export default connect(mapStateToProps)(RaceRegistation);
