import React, { useState, useEffect } from "react";
import { 
  View, 
  Image, 
  Text, 
  ScrollView,
  modal
} from "react-native";
import Toast from "react-native-root-toast";
// Redux
import { connect, useDispatch } from "react-redux";
import { showHorseGrow } from "../../../store/actions/horse/showHorseGrow";
// Custom import
import STapScreensStyle from "./STapScreensStyle";
import DropDownR from "../../../components/Buttons/DropDwonR";
import { horseColor } from "../../../utils/globals";
import Ccolors from "../../../containers/colors";
import NormalButton from "../../../components/Buttons/NormalButton";
import PedigreeTableModal from "./PedigreeTableModal";
import SaleModal from "./SaleModal";

const Screen = ({ horseData, arrowState, showGrowstate }) => {
  if (horseData == "") {
    alert("YOUR HORSE NOT FOUND RETURN");
    return null;
  }

  const dispatch = useDispatch();
  const [arrowStates, setArrowState] = useState(arrowState);
  // ALL REPEAT
  const [happySate, setHappyState] = useState(0);
  const [tiredState, setTiredState] = useState(0);
  // スベシャル & 芝
  const [speedState, setSpeedState] = useState(0);
  // スベシャル & ダート
  const [strengthState, setStrengthState] = useState(0);
  // スベシャル & 坂路
  const [momentState, setMomentState] = useState(0);
  // スベシャル & 併走
  const [staminaState, setStaminaState] = useState(0);
  // ウッドチップ
  const [contitionState, setContitionState] = useState(0);
  // プール
  const [healthState, setHealthState] = useState(0);

  // SHOW GROW STATE
  const [speedMax, setSpeedMax] = useState("");
  const [strengthMax, setStrengthMax] = useState("");
  const [staminaMax, setStaminaMax] = useState("");
  const [momentMax, setMomentMax] = useState("");
  const [conditionMax, setConditionMax] = useState("");
  const [healthMax, setHealthMax] = useState("");

  // State
  const [State, setState] = useState("⬆");
  const [tiredArror, setArrorState] = useState("⬆");
  const [colors, setColors] = useState("red");
  const [tiredArrorColor, setArrorColor] = useState("red");

  // Ground Color
  const [groundColor, setGroundColor] = useState("#1BFF00");

  const [selected, setSelected] = useState(undefined);

  const [banner, setBanner] = useState(horseData[0]);

  const [modalPedigreeVsible, setModalPedigreeVisible] = useState(false);

  const handlePedigreeVisible = () => {
    setModalPedigreeVisible(!modalPedigreeVsible);
  }

  const [modalSaleVisible, setModalSaleVisible] = useState(false);

  const handleSaleVisible = () => {
    setModalSaleVisible(!modalSaleVisible);
  }

  useEffect(() => {
    const sandIds = {
      horse_id: banner.id,
    };
    dispatch(showHorseGrow(sandIds));
  }, [horseData]);

  useEffect(() => {
    setBanner(horseData[0]);
    setPattern(tiredNumber);
    if (horseData[0].ground == "ダ") {
      setGroundColor("#707172");
    } else if (horseData[0].ground == "芝") {
      setGroundColor("#1BFF00");
    } else if (horseData[0].ground == "万") {
      setGroundColor("red");
    }
  }, [horseData]);

  const data = horseData;

  useEffect(() => {
    setArrowState(arrowState);
  }, [arrowState]);

  useEffect(() => {
    if (showGrowstate != undefined) {
      if (showGrowstate.type == "早熟") {
        setSpeedMax(50);
        setStrengthMax(50);
        setStaminaMax(10);
        setMomentMax(50);
        setConditionMax(50);
        setHealthMax(500);
      } else if (showGrowstate.type == "早め") {
        setSpeedMax(100);
        setStrengthMax(100);
        setStaminaMax(10);
        setMomentMax(80);
        setConditionMax(100);
        setHealthMax(99);
      } else if (showGrowstate.type == "普通") {
        setSpeedMax(150);
        setStrengthMax(150);
        setStaminaMax(10);
        setMomentMax(80);
        setConditionMax(150);
        setHealthMax(99);
      } else if (showGrowstate.type == "持続") {
        setSpeedMax(170);
        setStrengthMax(170);
        setStaminaMax(10);
        setMomentMax(80);
        setConditionMax(170);
        setHealthMax(99);
      } else if (showGrowstate.type == "遅め") {
        setSpeedMax(170);
        setStrengthMax(200);
        setStaminaMax(10);
        setMomentMax(80);
        setConditionMax(185);
        setHealthMax(99);
      } else if (showGrowstate.type == "晩成") {
        setSpeedMax(170);
        setStrengthMax(170);
        setStaminaMax(10);
        setMomentMax(80);
        setConditionMax(170);
        setHealthMax(99);
      }
    }
  }, [showGrowstate]);

  useEffect(() => {
    if (arrowStates.what == "スベシャル") {
      // ALL REPAET
      setHappyState(1);
      setTiredState(1);
      // ===========
      setSpeedState(1);
      setStrengthState(1);
      setMomentState(1);
      setStaminaState(1);
      // ===========

      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setSpeedState(0);
        setStrengthState(0);
        setMomentState(0);
        setStaminaState(0);
      }, 2000);
    } else if (arrowStates.what == "芝") {
      setHappyState(1);
      setTiredState(1);
      if (showGrowstate != undefined) {
        if (speedMax <= showGrowstate.speed_b) {
          setSpeedState(0);
        } else {
          setSpeedState(1);
        }
      }
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setSpeedState(0);
      }, 2000);

      // if(speedMax)
    } else if (arrowStates.what == "ダート") {
      setHappyState(1);
      setTiredState(1);
      if (showGrowstate != undefined) {
        if (strengthMax <= showGrowstate.strength_b) {
          setStrengthState(0);
        } else {
          setStrengthState(1);
        }
      }
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setStrengthState(0);
      }, 2000);
    } else if (arrowStates.what == "ウッドチップ") {
      setHappyState(1);
      setTiredState(1);
      if (showGrowstate != undefined) {
        if (conditionMax <= showGrowstate.condition_b) {
          setContitionState(0);
        } else {
          setContitionState(1);
        }
      }
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setContitionState(0);
      }, 2000);
    } else if (arrowStates.what == "プール") {
      setHappyState(1);
      setTiredState(1);
      if (showGrowstate != undefined) {
        if (healthMax <= showGrowstate.health_b) {
          setHealthState(0);
        } else {
          setHealthState(1);
        }
      }
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setHealthState(0);
      }, 2000);
    } else if (arrowStates.what == "併走") {
      setHappyState(1);
      setTiredState(1);
      if (showGrowstate != undefined) {
        if (staminaMax <= showGrowstate.stamina_b) {
          setStaminaState(0);
        } else {
          setStaminaState(1);
        }
      }
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setStaminaState(0);
      }, 2000);
    } else if (arrowStates.what == "坂路") {
      setHappyState(1);
      setTiredState(1);
      if (showGrowstate != undefined) {
        if (momentMax <= showGrowstate.moment_b) {
          setMomentState(0);
        } else {
          setMomentState(1);
        }
      }
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setMomentState(0);
      }, 2000);
    } else if (arrowStates.what == "にんじん") {
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
    if (banner.direction == 0) {
      setState("⬇");
      setColors("blue");
    } else if (banner.direction == 1) {
      setState("⬆");
      setColors("red");
    }
  }, [arrowStates]);

  const handleSettingId = (value) => {
    setBanner(value);
    const sandIds = {
      horse_id: value.id,
    };
    dispatch(showHorseGrow(sandIds));
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

  // Health state
  const setPattern = (tCondition) => {
    // Disable Injury
    let options;
    // return;
    if (tCondition <= 10) {
      return false;
    } else if (tCondition === 11 || tCondition === 12) {
      options = {
        none: 79,
        D1: 10,
        D2: 5,
        D3: 3,
        D4: 2,
        D5: 1,
      };
    } else if (tCondition === 13 || tCondition === 14) {
      options = {
        none: 64,
        D1: 15,
        D2: 10,
        D3: 5,
        D4: 4,
        D5: 2,
      };
    } else if (tCondition === 15 || tCondition === 16) {
      options = {
        none: 43,
        D1: 20,
        D2: 15,
        D3: 10,
        D4: 8,
        D5: 4,
      };
    } else if (tCondition === 17 || tCondition === 18) {
      options = {
        none: 22,
        D1: 25,
        D2: 20,
        D3: 15,
        D4: 10,
        D5: 8,
      };
    } else if (tCondition === 19 || tCondition >= 20) {
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
        displayToastMessage(key);
        break;
      }
    }
  };

  const displayToastMessage = (key) => {
    let message = "";
    switch (key) {
      case "D1":
        message = "疲労が溜まると故障してしまいます。";
        break;
      case "D2":
        message = "疲労が溜まると故障してしまいます。";
        break;
      case "D3":
        message = "疲労が溜まると故障してしまいます。";
        break;
      case "D4":
        message = "疲労が溜まると故障してしまいます。";
        break;
      case "D5":
        message = "疲労が溜まると故障してしまいます。";
        break;
    }

    let toast = Toast.show(message, {
      duration: Toast.durations.LONG,
    });
    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 2000);
  };

  const initialState = () => {
    setSelected('');
  }

  return (
    <ScrollView style={STapScreensStyle.twoContainer}>
      <View style={STapScreensStyle.oneTopContent}>
        <View style={STapScreensStyle.oneTopContentLeft}>
          <Text style={STapScreensStyle.oneRightContentTxt}>所有馬一覧</Text>
          <DropDownR
            name={data[0].name}
            data={data}
            onSelect={setSelected}
            setId={handleSettingId}
          />
        </View>
        <View style={STapScreensStyle.oneTopContentRight}>
          <View style={STapScreensStyle.oneRioghtHeader}>
            <Text
              style={[
                STapScreensStyle.oneRioghtHeaderTxtA,
                {
                  color:
                    (!!selected && selected.gender == "牝") ||
                    data[0].gender == "牝"
                      ? Ccolors.genderColorF
                      : Ccolors.genderColorM,
                },
              ]}
            >
              {(!!selected && selected.name) || data[0].name}
            </Text>
            <Text style={STapScreensStyle.oneRioghtHeaderTxt}>
              <Text
                style={{
                  color:
                    (!!selected && selected.gender == "牝") ||
                    data[0].gender == "牝"
                      ? Ccolors.genderColorF
                      : Ccolors.genderColorM,
                }}
              >
                {(!!selected && selected.gender) || data[0].gender}
              </Text>
              {(!!selected && selected.age.split("")[1]) ||
                data[0].age.split("")[1]}
            </Text>
            <Text style={STapScreensStyle.oneRioghtHeaderTxt}>
              {(!!selected && selected.growth) || data[0].growth}
            </Text>
            <Text style={STapScreensStyle.oneRioghtHeaderTxt}>
              {(!!selected && selected.color) || data[0].color}
            </Text>
            <Text style={STapScreensStyle.oneRioghtHeaderTxtLetter}>
              {(!!selected && selected.class) || "GIクラス"}
            </Text>
          </View>
          <View style={STapScreensStyle.oneRioghtBody}>
            <View>
              <View style={STapScreensStyle.conditionsGroup}>
                <Text style={STapScreensStyle.oneRioghtBodyTxt}>調子</Text>
                <Image
                  style={STapScreensStyle.conditions}
                  source={conditionFace}
                />
                <Text
                  style={[
                    STapScreensStyle.oneRightTxtUp,
                    { opacity: happySate, color: colors },
                  ]}
                >
                  {State}
                </Text>
              </View>
              <View style={STapScreensStyle.oneRightTxt}>
                <Text style={STapScreensStyle.oneRioghtBodyTxt}>
                  SP{" "}
                  <Text style={STapScreensStyle.oneRioghtBodyTxtValue}>
                    {(!!selected && speed) || speed}
                  </Text>
                </Text>
                <Text
                  style={[
                    STapScreensStyle.oneRightTxtUp,
                    { opacity: speedState },
                  ]}
                >
                  ⬆
                </Text>
              </View>
              <View style={STapScreensStyle.oneRightTxt}>
                <Text style={STapScreensStyle.oneRioghtBodyTxt}>
                  ST{" "}
                  <Text style={STapScreensStyle.oneRioghtBodyTxtValue}>
                    {(!!selected && strength) || strength}
                  </Text>
                </Text>
                <Text
                  style={[
                    STapScreensStyle.oneRightTxtUp,
                    { opacity: strengthState },
                  ]}
                >
                  ⬆
                </Text>
              </View>
            </View>
            <View>
              <View style={STapScreensStyle.oneRightTxt}>
                <Text style={STapScreensStyle.oneRioghtBodyTxt}>
                  疲労
                  <Text style={STapScreensStyle.oneRioghtBodyTxtTired}>
                    {(!!selected && tired) || tired}
                  </Text>
                </Text>
                <Text
                  style={[
                    STapScreensStyle.oneRightTxtUp,
                    { opacity: tiredState, color: tiredArrorColor },
                  ]}
                >
                  {tiredArror}
                </Text>

                <Text
                  style={[
                    STapScreensStyle.oneRioghtHeaderTxtGreen,
                    { color: groundColor },
                  ]}
                >
                  {(!!selected && selected.ground) || data[0].ground}
                </Text>
              </View>

              <View style={STapScreensStyle.oneRightTxt}>
                <Text style={STapScreensStyle.oneRioghtBodyTxt}>
                  瞬発{" "}
                  <Text style={STapScreensStyle.oneRioghtBodyTxtValue}>
                    {(!!selected && moment) || moment}
                  </Text>
                </Text>
                <Text
                  style={[
                    STapScreensStyle.oneRightTxtUp,
                    { opacity: momentState },
                  ]}
                >
                  ⬆
                </Text>
              </View>

              <View style={STapScreensStyle.oneRightTxt}>
                <Text style={STapScreensStyle.oneRioghtBodyTxt}>
                  根性{" "}
                  <Text style={STapScreensStyle.oneRioghtBodyTxtValue}>
                    {(!!selected && stamina) || stamina}
                  </Text>
                </Text>
                <Text
                  style={[
                    STapScreensStyle.oneRightTxtUp,
                    { opacity: staminaState },
                  ]}
                >
                  ⬆
                </Text>
              </View>
            </View>

            <View style={STapScreensStyle.oneRioghtBodyTxtGroup}>
              <View style={STapScreensStyle.txtGroup}>
                <Text style={STapScreensStyle.oneRioghtBodyTxtA}>
                  {(!!selected && distanceValue) || distanceValue}距離
                </Text>
                <Text style={STapScreensStyle.oneRioghtBodyTxtValueA}>
                  {" "}
                  {(!!selected && selected.quality_leg) || data[0].quality_leg}
                </Text>
              </View>
              <View style={STapScreensStyle.oneRightTxt}>
                <Text style={STapScreensStyle.oneRioghtBodyTxt}>
                  気性{" "}
                  <Text style={STapScreensStyle.oneRioghtBodyTxtValue}>
                    {(!!selected && condition) || condition}
                  </Text>
                </Text>
                <Text
                  style={[
                    STapScreensStyle.oneRightTxtUp,
                    { opacity: contitionState },
                  ]}
                >
                  ⬆
                </Text>
              </View>
              <View style={STapScreensStyle.oneRightTxt}>
                <Text style={STapScreensStyle.oneRioghtBodyTxt}>
                  健康{" "}
                  <Text style={STapScreensStyle.oneRioghtBodyTxtValue}>
                    {(!!selected && health) || health}
                  </Text>
                </Text>
                <Text
                  style={[
                    STapScreensStyle.oneRightTxtUp,
                    { opacity: healthState },
                  ]}
                >
                  ⬆
                </Text>
              </View>
            </View>
            {(!!selected && (
              <>
                {horseColor.map((colorName, index) => {
                  if (colorName[selected.color]) {
                    return (
                      <Image
                        key={`${index}`}
                        style={STapScreensStyle.HorseAvatar}
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
                        style={STapScreensStyle.HorseAvatar}
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

        </View>
      </View>

      <View style={STapScreensStyle.oneBottomContent}>
          
        <View style={{flexDirection: 'row'}}>
          
          {(!!selected && (
            <>
              {horseColor.map((colorName, index) => {
                if (colorName[selected.color]) {
                  return (
                    <Image
                      key={`${index}`}
                      style={STapScreensStyle.mainHorseAvatar}
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
                      style={STapScreensStyle.mainHorseAvatar}
                      source={colorName[data[0].color]}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </>
          )}

          <View style={STapScreensStyle.imageRightContainer}>
              
              <View style={STapScreensStyle.valuationLabel}>
                <Text style={STapScreensStyle.normalTxt}>評価額:</Text>
                <Text style={STapScreensStyle.smallTxt}> {(!!selected && selected.etc) || data[0].etc}Pt </Text> 
              </View>
              
              <View>

                <Text style={STapScreensStyle.normalTxt}>父：{(!!selected && selected.f_name) || data[0].f_name}</Text> 
                <View style={{height: 10}}></View>
                <Text style={STapScreensStyle.normalTxt}>母：{(!!selected && selected.m_name) || data[0].m_name}</Text> 

              </View>
              
              <View style={{alignItems: 'center'}}>

                <NormalButton label={'血 統 表'} onPress={handlePedigreeVisible} />

              </View>

          </View> 
          
        </View>
        
      </View>
      
      <View style={{alignItems: 'center'}}>
        
        <View style={STapScreensStyle.footerButton}>

          <NormalButton label={' 売        却 '} onPress={handleSaleVisible} buttonStyle={{backgroundColor: '#ffc0cb'}} />

        </View>

      </View>
      

      <PedigreeTableModal modalState={modalPedigreeVsible} banner={banner} onPress={handlePedigreeVisible}/>
      
      <SaleModal modalState={modalSaleVisible} onPress={handleSaleVisible} etc={banner.etc} horse_id={banner.id} user_id={banner.user_id} pasture_id={banner.pasture_id} initialState={initialState}/>

    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    arrowState: state.arrow.arrowState,
    showGrowstate: state.showGrowData.allGrowData[0],
    poolLevel: state.pool.poolBuyData,
    truckLevel: state.truck.truckBuyData,
    roadLevel: state.road.roadBuyData,
  };
};

export default connect(mapStateToProps)(Screen);
