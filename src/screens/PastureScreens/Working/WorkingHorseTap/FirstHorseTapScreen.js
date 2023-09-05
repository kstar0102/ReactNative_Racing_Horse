import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import RTapScreensStyle from "../../RanchTapScreens/RTapScreensStyle";
import DropDownR from "../../../../components/Buttons/DropDwonR";
import { horseColor } from "../../../../utils/globals";
import WorkingButton from "../../../../components/Buttons/WorkingButtons";
import { SaleButton } from "../../../../components/Buttons";
import colors from "../../../../containers/colors";

const FirstHorseTapScreen = ({ oneData }) => {
  if (oneData == "") {
    alert("NOT FOUND HORSE");
    return false;
  }
  const [selected, setSelected] = useState(undefined);
  const [banner, setBanner] = useState(oneData[0]);

  const data = oneData;

  const handleSettingId = (value) => {
    setBanner(value);
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
        result = require("../../../../assets/images/condition/happy.png");
        break;
      case conditionFace >= 3 && conditionFace <= 6:
        result = require("../../../../assets/images/condition/middlehappy.png");
        break;
      case conditionFace >= -2 && conditionFace <= 2:
        result = require("../../../../assets/images/condition/normel.png");
        break;
      case conditionFace >= -6 && conditionFace <= 6:
        result = require("../../../../assets/images/condition/sad.png");
        break;
      case conditionFace >= -10 && conditionFace <= 7:
        result = require("../../../../assets/images/condition/bad.png");
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

  return (
    <View style={RTapScreensStyle.twoContainer}>
      <View style={RTapScreensStyle.oneTopContent}>
        <View style={RTapScreensStyle.oneTopContentLeft}>
          <Text style={RTapScreensStyle.oneRightContentTxt}>所有馬一覧</Text>
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
                    (!!selected && selected.gender == "牝") ||
                    data[0].gender == "牝"
                      ? colors.genderColorF
                      : colors.genderColorM,
                },
              ]}
            >
              {(!!selected && selected.name) || data[0].name}
            </Text>
            <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
              <Text
                style={{
                  color:
                    (!!selected && selected.gender == "牝") ||
                    data[0].gender == "牝"
                      ? colors.genderColorF
                      : colors.genderColorM,
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
                {/* {(!!selected && selected.value) || 1} */}
              </View>
              <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                SP{" "}
                <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                  {(!!selected && speed) || speed}
                </Text>
              </Text>
              <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                ST{" "}
                <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                  {(!!selected && strength) || strength}
                </Text>
              </Text>
            </View>
            <View>
              <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                疲労{" "}
                <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                  {(!!selected && selected.fatigue) || "O"}{" "}
                </Text>{" "}
                <Text style={RTapScreensStyle.oneRioghtHeaderTxtGreen}>
                  {(!!selected && selected.ground) || data[0].ground}
                </Text>
              </Text>
              <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                瞬発{" "}
                <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                  {(!!selected && moment) || moment}
                </Text>
              </Text>
              <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                根性{" "}
                <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                  {(!!selected && stamina) || stamina}
                </Text>
              </Text>
            </View>
            <View style={RTapScreensStyle.oneRioghtBodyTxtGroup}>
              <Text style={RTapScreensStyle.oneRioghtBodyTxtA}>
                {(!!selected && distanceValue) || distanceValue}距離{" "}
                <Text style={RTapScreensStyle.oneRioghtBodyTxtValueA}>
                  {" "}
                  {(!!selected && selected.quality_leg) || data[0].quality_leg}
                </Text>
              </Text>
              <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                気性{" "}
                <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                  {(!!selected && condition) || condition}
                </Text>
              </Text>
              <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                健康{" "}
                <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                  {(!!selected && health) || health}
                </Text>
              </Text>
            </View>
            {(!!selected && (
              <>
                {horseColor.map((colorName, index) => {
                  if (colorName[selected.color]) {
                    return (
                      <Image
                        key={`${index}`}
                        style={RTapScreensStyle.HorseAvatar}
                        source={colorName[selected.color]}
                      />
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
                      <Image
                        key={`${index}`}
                        style={RTapScreensStyle.HorseAvatar}
                        source={colorName[data[0].color]}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </>
            )}
          </View>
          <View style={RTapScreensStyle.ButtonGroup}>
            <View style={RTapScreensStyle.ButtonGroupTwo}>
              <SaleButton label={"売却"} colorNumber={1} />
            </View>
          </View>
        </View>
      </View>
      <View style={RTapScreensStyle.oneBottomContent}></View>
    </View>
  );
};
export default FirstHorseTapScreen;
