import React, { useEffect, useState } from "react";
import { View, Modal, Image, Text } from "react-native";

import WorkingButton from "../../../components/Buttons/WorkingButtons";
import ButtonStyle from "../../../components/Buttons/ButtonStyle";
import Screenstyles from "../../ScreenStylesheet";
import {
  convertAbility,
  getChildAbilities,
  generateResult,
  getChildGrow,
  getDistanceLetter,
  getChildDistance,
  getChildGround,
  convertQualityString,
  getChildQualityLeg,
  getRandomValue,
  convertAbilityNum,
  checkNum,
  calculatorKincks,
  calculatorCross,
  calculatorAbilityFactor,
  getChildColor
} from "./marryGlobalFuntion";
// inbreeding case
import {
  INBREEDING_SPEED,
  INBREEDING_STAMINA,
  INBREEDING_CONDITION,
  INBREEDING_HEALTH,
} from "../../../utils/abilities";

// miracle case
import {
  MIRACLE_SPEED,
  MIRACLE_STRENGTH,
  MIRACLE_MOMENT,
  MIRACLE_STAMINA,
  MIRACLE_CONDITION,
  MIRACLE_HEALTH,
} from "../../../utils/abilities";

// know case
import { KNOW_MOMENT, KNOW_STRENGTH } from "../../../utils/abilities";

// match case
import { MATCH_STAMINA } from "../../../utils/abilities";

// good friend case
import {
  GOOD_FRIEND_SPEED,
  GOOD_FRIEND_STRENGTH,
} from "../../../utils/abilities";

// final case
import {
  FINAL_SPEED,
  FINAL_STRENGTH,
  FINAL_MOMENT,
  FINAL_STAMINA,
  FINAL_CONDITION,
  FINAL_HEALTH,
} from "../../../utils/abilities";

// triple crown case
import {
  TRIPLE_CROWN_SPEED,
  TRIPLE_CROWN_STRENGTH,
} from "../../../utils/abilities";

//shot reversal case
import {
  SHOT_REVERSAL_SPEED,
  SHOT_REVERSAL_STRENGTH,
  SHOT_REVERSAL_MOMENT,
  SHOT_REVERSAL_STAMINA,
  SHOT_REVERSAL_CONDITION,
  SHOT_REVERSAL_HEALTH,
} from "../../../utils/abilities";

// outblid case
import { OUTBLID_STAMINA, OUTBLID_HEALTH } from "../../../utils/abilities";

import { useDispatch, useSelector } from "react-redux";
import { progPastureAction } from "../../../store/actions/Pasture/progPastureAction";
import { useNavigation } from "@react-navigation/native";

const FaceModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageSource, setImageSource] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("種付けしますか？");
  
  const user_id  = useSelector(state => state.user.userData.id);
  const pasture_id = useSelector(state => state.pasture.pastureData.id);

  console.log(props.imageSource);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleYes = () => {
    // speed_b
    const fatherSpeedB = convertAbility(props.filteredMan.speed_b);
    const matherSpeedB = convertAbility(props.filteredGirl.speed_b);

    // strength_b
    const fatherStrengthB = convertAbility(props.filteredMan.strength_b);
    const matherStrengthB = convertAbility(props.filteredGirl.strength_b);

    // moment_b
    const fatherMomentB = convertAbility(props.filteredMan.moment_b);
    const matherMomentB = convertAbility(props.filteredGirl.moment_b);

    // stamina_b
    const fatherStaminaB = convertAbility(props.filteredMan.stamina_b);
    const matherStaminaB = convertAbility(props.filteredGirl.stamina_b);

    // condition_b
    const fatherConditionB = convertAbility(props.filteredMan.condition_b);
    const matherConditionB = convertAbility(props.filteredGirl.condition_b);

    // health_b
    const fatherHealthB = convertAbility(props.filteredMan.health_b);
    const matherHealthB = convertAbility(props.filteredGirl.health_b);

    console.log(getChildAbilities(fatherSpeedB, matherSpeedB));

    const childSpeedBArr = getChildAbilities(fatherSpeedB, matherSpeedB);
    const resultSpeedB = generateResult(childSpeedBArr);

    const childStrengthBArr = getChildAbilities(
      fatherStrengthB,
      matherStrengthB
    );
    const resultStrengthB = generateResult(childStrengthBArr);

    const childMomentBArr = getChildAbilities(fatherMomentB, matherMomentB);
    const resultMomentB = generateResult(childMomentBArr);

    const childStaminaBArr = getChildAbilities(fatherStaminaB, matherStaminaB);
    const resultStaminaB = generateResult(childStaminaBArr);

    const childConditionBArr = getChildAbilities(
      fatherConditionB,
      matherConditionB
    );
    const resultConditionB = generateResult(childConditionBArr);

    const childHealthBArr = getChildAbilities(fatherHealthB, matherHealthB);
    const resultHealthB = generateResult(childHealthBArr);

    console.log("speed_b----------");
    console.log(resultSpeedB);

    console.log("strength_b----------");
    console.log(resultStrengthB);

    console.log("moment_b----------");
    console.log(resultMomentB);

    console.log("stamina_b----------");
    console.log(resultStaminaB);

    console.log("codition_b----------");
    console.log(resultConditionB);

    console.log("health_b----------");
    console.log(resultHealthB);

    // grow start
    const fatherGrow = props.filteredMan.growth;
    const motherGrow = props.filteredGirl.growth;

    const childGrowChances = getChildGrow(fatherGrow, motherGrow);
    const childGrow = generateResult(childGrowChances);
    console.log("grow", childGrow);

    // distance start
    const fatherDistance = getDistanceLetter(props.filteredMan.distance_min);
    const motherDistance = getDistanceLetter(props.filteredGirl.distance_min);

    const childDistanceChances = getChildDistance(
      fatherDistance,
      motherDistance
    );
    const childDistance = generateResult(childDistanceChances);

    console.log("distance",childDistance);

    // ground start
    const fatherGround = props.filteredMan.ground;
    const motherGround = props.filteredGirl.ground;

    const childGrondChance = getChildGround(fatherGround, motherGround);

    const childGround = generateResult(childGrondChance);
    console.log("ground", childGround);

    // qualityLeg start
    const fatherQualityT = props.filteredMan.quality_leg;
    const motherQualityT = props.filteredGirl.quality_leg;

    const fatherQualityLeg = convertQualityString(fatherQualityT);
    const motherQualityLeg = convertQualityString(motherQualityT);
    console.log(fatherQualityLeg, motherQualityLeg);
    const childQualityLegChance = getChildQualityLeg(
      fatherQualityLeg,
      motherQualityLeg
    );

    console.log("qualityLegChance", childQualityLegChance);

    const childQualityLeg = generateResult(childQualityLegChance);
    console.log("qualityleg", childQualityLeg);
    
    // color start
    const fatherColor = props.filteredMan.color;
    const motherColor = props.filteredGirl.color;

    const childColorChance = getChildColor(fatherColor, motherColor);

    const childColor = generateResult(childColorChance);
    console.log("color", childColor);

    // gender start
    const genderData = { "牡" : 50, "牡" : 50};
    const childGender = generateResult(genderData);
    console.log("gender", childGender);

    // adding speed start
    let addAbilitySpeed = [];
    let addAbilityStrength = [];
    let addAbilityStamina = [];
    let addAbilityMoment = [];
    let addAbilityCondition = [];
    let addAbilityHealth = [];

    // checking combination
    switch (props.imageSource) {
      case "inbreeding":
        addAbilitySpeed = INBREEDING_SPEED;
        addAbilityStamina = INBREEDING_STAMINA;
        addAbilityCondition = INBREEDING_CONDITION;
        addAbilityHealth = INBREEDING_HEALTH;
        break;

      case "miracle":
        addAbilitySpeed = MIRACLE_SPEED;
        addAbilityStrength = MIRACLE_STRENGTH;
        addAbilityMoment = MIRACLE_MOMENT;
        addAbilityStamina = MIRACLE_STAMINA;
        addAbilityCondition = MIRACLE_CONDITION;
        addAbilityHealth = MIRACLE_HEALTH;
        break;

      case "Know":
        addAbilityMoment = KNOW_MOMENT;
        addAbilityStrength = KNOW_STRENGTH;
        break;

      case "match":
        addAbilityStamina = MATCH_STAMINA;
        break;

      case "good friend":
        addAbilitySpeed = GOOD_FRIEND_SPEED;
        addAbilityStrength = GOOD_FRIEND_STRENGTH;
        break;

      case "outblid":
        addAbilityStamina = OUTBLID_STAMINA;
        addAbilityHealth = OUTBLID_HEALTH;
        break;

      default:
        break;
    }
    
    const realAddSpeed = getRandomValue(addAbilitySpeed);
    const realAddStrength = getRandomValue(addAbilityStrength);
    const realAddMoment = getRandomValue(addAbilityMoment);
    const realAddStamina = getRandomValue(addAbilityStamina);
    const realAddCondition = getRandomValue(addAbilityCondition);
    const realAddHealth = getRandomValue(addAbilityHealth);

    // adding speed end

    const childAbilitySpeed = convertAbilityNum(resultSpeedB);    
    const childAbilityStrength = convertAbilityNum(resultStrengthB);    
    const childAbilityMoment = convertAbilityNum(resultMomentB);    
    const childAbilityStamina = convertAbilityNum(resultStaminaB);    
    const childAbilityCondition = convertAbilityNum(resultConditionB);
    const childAbilityHealth = convertAbilityNum(resultHealthB);

    console.log("===================================================");
    console.log(childAbilitySpeed, checkNum(realAddSpeed));
    console.log(childAbilityStrength, checkNum(realAddStrength));
    console.log(childAbilityMoment, checkNum(realAddMoment));
    console.log(childAbilityStamina, checkNum(realAddStamina));
    console.log(childAbilityCondition, checkNum(realAddCondition));
    console.log(childAbilityHealth, checkNum(realAddHealth));
    console.log("===================================================");

    let childCrossSpeed = 0;
    let childCrossStrength = 0;
    let childCrossMoment  = 0;
    let childCrossStamina = 0;
    let childCrossCondition = 0;
    let childCrossHealth = 0;

    if (props.imageSource == 'cross') {
      const filteredManArray = calculatorCross(props.filteredMan);

      childCrossSpeed += filteredManArray.speed;
      childCrossStrength += filteredManArray.strength;
      childCrossMoment  += filteredManArray.moment;
      childCrossStamina += filteredManArray.stamina;
      childCrossCondition += filteredManArray.condition;
      childCrossHealth += filteredManArray.health;

      const fillterGirlArray = calculatorCross(props.filteredGirl);

      childCrossSpeed += fillterGirlArray.speed;
      childCrossStrength += fillterGirlArray.strength;
      childCrossMoment  += fillterGirlArray.moment;
      childCrossStamina += fillterGirlArray.stamina;
      childCrossCondition += fillterGirlArray.condition;
      childCrossHealth += fillterGirlArray.health;
    }

    console.log("===================================================");
    console.log("childCrossSpeed", childCrossSpeed);
    console.log("childCrossStrength", childCrossStrength);
    console.log("childCrossMoment", childCrossMoment);
    console.log("childCrossStamina", childCrossStamina);
    console.log("childCrossCondition", childCrossCondition);
    console.log("childCrossHealth", childCrossHealth);
    console.log("===================================================");

    const childKnicksSpeed = props.knicks ? calculatorKincks() : 0;
    const childKnicksStrength = props.knicks ? calculatorKincks() : 0;
    const childKnicksMoment = props.knicks ? calculatorKincks() : 0;
    const childKnicksStamina = props.knicks ? calculatorKincks() : 0;
    const childKnicksCondition = props.knicks ? calculatorKincks() : 0;
    const childKnicksHealth = props.knicks ? calculatorKincks() : 0;

    console.log("===================================================");
    console.log("childKnicksSpeed", childKnicksSpeed);
    console.log("childKnicksStrength", childKnicksStrength);
    console.log("childKnicksMoment", childKnicksMoment);
    console.log("childKnicksStamina", childKnicksStamina);
    console.log("childKnicksCondition", childKnicksCondition);
    console.log("childKnicksHealth", childKnicksHealth);
    console.log("===================================================");

    const fillterManAbilityFactorArray = calculatorAbilityFactor(props.filteredMan);
    const fillterGirlAbilityFactorArray = calculatorAbilityFactor(props.filteredGirl);
    const childAbilityFactorSpeed = fillterManAbilityFactorArray.speed + fillterGirlAbilityFactorArray.speed;
    const childAbilityFactorStrength = fillterManAbilityFactorArray.strength + fillterGirlAbilityFactorArray.strength;
    const childAbilityFactorMoment = fillterManAbilityFactorArray.moment + fillterGirlAbilityFactorArray.moment;
    const childAbilityFactorStamina = fillterManAbilityFactorArray.stamina + fillterGirlAbilityFactorArray.stamina;
    const childAbilityFactorCondition = fillterManAbilityFactorArray.condition + fillterGirlAbilityFactorArray.condition;
    const childAbilityFactorHealth = fillterManAbilityFactorArray.health + fillterGirlAbilityFactorArray.health;

    console.log("===================================================");
    console.log("childAbilityFactorSpeed", childAbilityFactorSpeed);
    console.log("childAbilityFactorStrenth", childAbilityFactorStrength);
    console.log("childAbilityFactorMoment", childAbilityFactorMoment);
    console.log("childAbilityFactorStamina", childAbilityFactorStamina);
    console.log("childAbilityFactorCondition", childAbilityFactorCondition);
    console.log("childAbilityFactorHealth", childAbilityFactorHealth);
    console.log("===================================================");
    
    const childFinalSpeed = props.imageSource == "final" ? getRandomValue(FINAL_SPEED) : 0;
    const childFinalStrength = props.imageSource == "final" ? getRandomValue(FINAL_STRENGTH) : 0;
    const childFinalMoment = props.imageSource == "final" ? getRandomValue(FINAL_MOMENT) : 0;
    const childFinalStamina = props.imageSource == "final" ? getRandomValue(FINAL_STAMINA) : 0;
    const childFinalCondition = props.imageSource == "final" ? getRandomValue(FINAL_CONDITION) : 0;
    const childFinalHealth = props.imageSource == "final" ? getRandomValue(FINAL_HEALTH) : 0;

    console.log("===================================================");
    console.log("childFinalSpeed", childFinalSpeed);
    console.log("childFinalStrenth", childFinalStrength);
    console.log("childFinalMoment", childFinalMoment);
    console.log("childFinalStamina", childFinalStamina);
    console.log("childFinalCondition", childFinalCondition);
    console.log("childFinalHealth", childFinalHealth);
    console.log("===================================================");

    const childTripeCrownSpeed = props.imageSource == "triple crown" ? getRandomValue(TRIPLE_CROWN_SPEED) : 0;
    const childTripeCrownStrength = props.imageSource == "triple crown" ? getRandomValue(TRIPLE_CROWN_STRENGTH) : 0;

    console.log("===================================================");
    console.log("childTripeCrownSpeed", childTripeCrownSpeed);
    console.log("childTripeCrownStrength", childTripeCrownStrength);
    console.log("===================================================");

    const childShotReversalSpeed = props.imageSource == "shot reversal" ? getRandomValue(SHOT_REVERSAL_SPEED) : 0;
    const childShotReversalStrength = props.imageSource == "shot reversal" ? getRandomValue(SHOT_REVERSAL_STRENGTH) : 0;
    const childShotReversalMoment = props.imageSource == "shot reversal" ? getRandomValue(SHOT_REVERSAL_MOMENT) : 0;
    const childShotReversalStamina = props.imageSource == "shot reversal" ? getRandomValue(SHOT_REVERSAL_STAMINA) : 0;
    const childShotReversalCondition = props.imageSource == "shot reversal" ? getRandomValue(SHOT_REVERSAL_CONDITION) : 0;
    const childShotReversalHealth = props.imageSource == "shot reversal" ? getRandomValue(SHOT_REVERSAL_HEALTH) : 0;

    console.log("===================================================");
    console.log("childShotReversalSpeed", childShotReversalSpeed);
    console.log("childShotReversalStrength", childShotReversalStrength);
    console.log("childShotReversalMoment", childShotReversalMoment);
    console.log("childShotReversalStamina", childShotReversalStamina);
    console.log("childShotReversalCondition", childShotReversalCondition);
    console.log("childShotReversalHealth", childShotReversalHealth);
    console.log("===================================================");

    const allChildSpeed = childAbilitySpeed + childCrossSpeed + childKnicksSpeed + childAbilityFactorSpeed + childFinalSpeed + childTripeCrownSpeed + childShotReversalSpeed;
    const allChildStrength = childAbilityStrength + childCrossStrength + childKnicksStrength + childAbilityFactorStrength + childFinalStrength + childTripeCrownStrength + childShotReversalStrength;
    const allChildMoment = childAbilityMoment + childCrossMoment + childKnicksMoment + childAbilityFactorMoment + childFinalMoment + childShotReversalMoment;
    const allChildStamina = childAbilityStamina + childCrossStamina + childKnicksStamina + childAbilityFactorStamina + childFinalStamina + childShotReversalStamina;
    const allChildCondition = childAbilityCondition + childCrossCondition + childKnicksCondition + childAbilityFactorCondition + childFinalCondition + childShotReversalCondition;
    const allChildHealth = childAbilityHealth + childCrossHealth + childKnicksHealth + childAbilityFactorHealth + childFinalHealth + childShotReversalHealth;

    console.log("**************************************************");
    console.log("allChildSpeed", allChildSpeed);
    console.log("allChildStrength", allChildStrength);
    console.log("allChildMoment", allChildMoment);
    console.log("allChildStamina", allChildStamina);
    console.log("allChildCondition", allChildCondition);
    console.log("allChildHealth", allChildHealth);
    console.log("**************************************************");

    console.log(props.filteredGirl.name)
    const progPastureChildData = {
      breedingHorseName : props.filteredGirl.name,
      distance: childDistance,
      color: childColor,
      gender: childGender,
      ground: childGround,
      quality_leg: childQualityLeg,
      speed_b: allChildSpeed,
      strength_b: allChildStrength,
      moment_b: allChildMoment,
      stamina_b: allChildStamina,
      condition_b: allChildCondition,
      health_b: allChildHealth,
      f_sys : props.filteredMan.f_sys,
      f_name: props.filteredMan.name,
      f_factor: props.filteredMan.f_factor,
      m_sys: props.filteredMan.m_sys,
      m_name: props.filteredGirl.name,
      f_f_sys: props.filteredMan.f_sys,
      f_f_name: props.filteredMan.f_name,
      f_f_factor: props.filteredMan.f_factor,
      f_m_sys: props.filteredMan.m_sys,
      f_m_name: props.filteredMan.m_name,
      m_f_sys: props.filteredGirl.f_sys,
      m_f_name: props.filteredGirl.f_name,
      m_f_factor : props.filteredGirl.f_factor,
      m_m_sys: props.filteredGirl.m_sys,
      m_m_name: props.filteredGirl.m_name,
      f_f_f_sys: props.filteredMan.f_f_sys,
      f_f_f_name: props.filteredMan.f_f_name,
      f_f_f_factor: props.filteredMan.f_f_factor,
      f_f_m_sys: props.filteredMan.f_m_sys,
      f_f_m_name: props.filteredMan.f_m_name,
      f_m_f_sys: props.filteredMan.m_f_sys,
      f_m_f_name: props.filteredMan.m_f_name,
      f_m_f_factor: props.filteredMan.m_f_factor,
      f_m_m_sys: props.filteredMan.m_m_sys,
      f_m_m_name: props.filteredMan.m_m_name,
      m_f_f_sys: props.filteredGirl.f_f_sys,
      m_f_f_name: props.filteredGirl.f_f_name,
      m_f_f_factor: props.filteredGirl.f_f_factor,
      m_f_m_sys: props.filteredGirl.f_m_sys,
      m_f_m_name: props.filteredGirl.f_m_name,
      m_m_f_sys: props.filteredGirl.m_f_sys,
      m_m_f_name: props.filteredGirl.m_f_name,
      m_m_f_factor:  props.filteredGirl.m_f_factor,
      m_m_m_sys: props.filteredGirl.m_m_sys,
      m_m_m_name: props.filteredGirl.m_m_name,
      user_id: user_id,
      pasture_id: pasture_id
    };

    const result = dispatch(progPastureAction(progPastureChildData));

    // if (result !== undefined) {
    //   navigation.navigate("TopScreen");
    // }

    props.updateModalState(false);
  };

  const handleNo = () => {
    props.updateModalState(false);
  };

  useEffect(() => {
    setModalVisible(props.modalVisible);
  }, [props.modalVisible]);

  useEffect(() => {
    switch (props.imageSource) {
      case "inbreeding":
        setImageSource(require("../../../assets/images/marry/10.png"));
        setMessage1("これは・・・危険な配合です・・・");
        break;

      case "miracle":
        setImageSource(require("../../../assets/images/marry/8.png"));
        setMessage1("すばらしい！最強配合ですよ！");
        break;

      case "Know":
        setImageSource(require("../../../assets/images/marry/3.png"));
        setMessage1("おっ！これは知り合い配合ですね！");
        break;

      case "match":
        setImageSource(require("../../../assets/images/marry/7.png"));
        setMessage1("いよいよお見合い配合ですね！");
        break;

      case "good friend":
        setImageSource(require("../../../assets/images/marry/2.png"));
        setMessage1("仲良しそうな配合を考えましたね！");
        break;

      case "final":
        setImageSource(require("../../../assets/images/marry/6.png"));
        setMessage1("残り数少ない、最後の配合じゃな！");
        break;

      case "triple crown":
        setImageSource(require("../../../assets/images/marry/5.png"));
        setMessage1("偉大な父と母の夢の三冠配合です！");
        break;

      case "shot reversal":
        setImageSource(require("../../../assets/images/marry/9.png"));
        setMessage1("一か八かの一発配合じゃな！");
        break;

      case "cross":
        setImageSource(require("../../../assets/images/marry/4.png"));
        setMessage1(props.crossName + "のクロスが成立していますね！");
        break;

      case "outblid":
        setImageSource(require("../../../assets/images/marry/1.png"));
        setMessage1("文句のない配合です！");
        break;

      default:
        break;
    }
  }, [props.imageSource]);

  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={ButtonStyle.marryModal}>
        <View style={Screenstyles.marryAlam}>
          <Image style={Screenstyles.bankPeople} source={imageSource} />
          <View style={Screenstyles.marryTxt}>
            <Text>{message1}</Text>
            <Text>{message2}</Text>
          </View>
        </View>

        <View style={Screenstyles.marryBtnGroup}>
          <WorkingButton
            label={"はい"}
            colorNumber={6}
            onPress={() => handleYes()}
          />
          <WorkingButton
            label={"いいえ"}
            colorNumber={6}
            onPress={() => handleNo()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FaceModal;
