import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Toast from "react-native-root-toast";
// Redux
import { connect, useDispatch } from "react-redux";
import { marryButtonAction } from "../../../store/actions/Pasture/marryButtonAction";

import DropDwonM from "../../../components/Buttons/DropDwonM";
import MarryBloodlineTable from "../../../components/table/MarryBloodlineTable";
import MarryBloodlineSysTable from "../../../components/table/MarryBloodlineSysTable";
import RTapScreensStyle from "../../PastureScreens/RanchTapScreens/RTapScreensStyle";

import { horseColor } from "../../../utils/globals";
import Ccolors from "../../../containers/colors";
import WorkingButton from "../../../components/Buttons/WorkingButtons";
// Custom IMPORT
// Style
import MarryStyle from "./MarryStyle";
const ScreenMarryG = ({ saveData, buttonAction }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(undefined);
  const [banner, setBanner] = useState(saveData[0]);
  // Ground Color
  const [groundColor, setGroundColor] = useState("#1BFF00");

  useEffect(() => {
    setBanner(saveData[0]);
    setPattern(tiredNumber);
    if (saveData[0].ground == "ダ") {
      setGroundColor("#707172");
    } else if (saveData[0].ground == "芝") {
      setGroundColor("#1BFF00");
    } else if (saveData[0].ground == "万") {
      setGroundColor("red");
    }
  }, [saveData]);
  const data = saveData;
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

  const speed = skillRange(banner.speed_b - -banner.speed_w);
  const health = skillRange(banner.health_b - -banner.health_w);
  const moment = skillRange(banner.moment_b - -banner.moment_w);
  const stamina = skillRange(banner.stamina_b - -banner.stamina_w);
  const strength = skillRange(banner.strength_b - -banner.strength_w);
  const condition = skillRange(banner.condition_b - -banner.condition_w);
  const distanceValue = distanceRange(
    (banner.distance_max - -banner.distance_min) / 2
  );
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
  const handleButtonPress = (id) => {
    dispatch(marryButtonAction(id));
  };
  const renderScreenBelowButtons = () => {
    switch (buttonAction) {
      case 1:
        return (
          <MarryBloodlineTable
            gender={"girl"}
            horseName={banner.name}
            father_sys={banner.f_name}
            father_f_sys={banner.f_f_name}
            father_m_sys={banner.f_m_name}
            mother_sys={banner.m_name}
            mother_f_sys={banner.m_f_name}
            mother_m_sys={banner.m_m_name}
          />
        );
      default:
        return (
          <MarryBloodlineSysTable
            gender={"girl"}
            horseName={banner.sys}
            father_sys={banner.f_sys}
            father_f_sys={banner.f_f_sys}
            father_m_sys={banner.f_m_sys}
            mother_sys={banner.m_sys}
            mother_f_sys={banner.m_f_sys}
            mother_m_sys={banner.m_m_sys}
          />
        );
    }
  };
  return (
    <ScrollView style={MarryStyle.content}>
      <View>
        <View style={RTapScreensStyle.oneTopContent}>
          <View style={RTapScreensStyle.oneTopContentLeft}>
            <DropDwonM
              name={data[0].name}
              data={data}
              onSelect={setSelected}
              setId={handleSettingId}
            />
          </View>
          <View style={RTapScreensStyle.oneTopContentRight}>
            <View style={RTapScreensStyle.oneRioghtHeader}>
              <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                <Text
                  style={{
                    color: Ccolors.genderColorF,
                  }}
                >
                  牝{/* {(!!selected && selected.gender) || 牝} */}
                </Text>
                6
                {/* {(!!selected && selected.age.split("")[1]) ||
                  data[0].age.split("")[1]} */}
              </Text>
              <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                {(!!selected && selected.growth) || data[0].growth}
              </Text>

              <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                {(!!selected && selected.color) || data[0].color}
              </Text>
              <Text
                style={[
                  RTapScreensStyle.oneRioghtHeaderTxtGreenA,
                  { color: groundColor },
                ]}
              >
                {(!!selected && selected.ground) || data[0].ground}
              </Text>
              <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                {(!!selected && `${distanceValue}距離`) ||
                  `${distanceValue}距離`}
              </Text>
            </View>
            <View style={RTapScreensStyle.oneRightMarryBody}>
              <View>
                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRightMarryBodyTxt}>
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
                <View style={RTapScreensStyle.marryPt}>
                  <Text style={RTapScreensStyle.marryPtTxt}>
                    評価額 : 5000pt
                  </Text>
                </View>
              </View>

              <View>
                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRightMarryBodyTxt}>
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
                <View style={RTapScreensStyle.oneRightTxt}>
                  <Text style={RTapScreensStyle.oneRightMarryBodyTxt}>
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
                            style={RTapScreensStyle.HorseMarryAvatar}
                            source={colorName[selected.color]}
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
                            style={RTapScreensStyle.HorseMarryAvatar}
                            source={colorName[data[0].color]}
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

        <View style={RTapScreensStyle.ButtonGroup}>
          {buttonAction ? (
            <WorkingButton
              label={`系  統`}
              colorNumber={2}
              styleId={4}
              onPress={() => handleButtonPress(0)}
            />
          ) : (
            <WorkingButton
              label={`馬  名`}
              colorNumber={5}
              styleId={4}
              onPress={() => handleButtonPress(1)}
            />
          )}
        </View>
        <View>{renderScreenBelowButtons()}</View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    saveData: state.horseData.saveData,
    buttonAction: state.buttonAction.actionData
  };
};

export default connect(mapStateToProps)(ScreenMarryG);
