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
  checkKnicks
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

const FaceModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageSource, setImageSource] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("種付けしますか？");

  console.log(props.imageSource);

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
    console.log(childGrow);

    // distance start
    const fatherDistance = getDistanceLetter(props.filteredMan.distance_min);
    const motherDistance = getDistanceLetter(props.filteredGirl.distance_min);

    const childDistanceChances = getChildDistance(
      fatherDistance,
      motherDistance
    );
    const childDistance = generateResult(childDistanceChances);

    console.log(childDistance);

    // ground start
    const fatherGround = props.filteredMan.ground;
    const motherGround = props.filteredGirl.ground;

    const childGrondChance = getChildGround(fatherGround, motherGround);

    const childGround = generateResult(childGrondChance);
    console.log(childGround);

    // qualityLeg start
    const fatherQualityT = props.filteredMan.quality_leg;
    const motherQualityT = props.filteredGirl.quality_leg;

    const fatherQualityLeg = convertQualityString(fatherQualityT);
    const motherQualityLeg = convertQualityString(motherQualityT);

    const childQualityLegChance = getChildQualityLeg(
      fatherQualityLeg,
      motherQualityLeg
    );

    console.log(childQualityLegChance);

    const childQualityLeg = generateResult(childQualityLegChance);
    console.log(childQualityLeg);

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

      case "final":
        addAbilitySpeed = FINAL_SPEED;
        addAbilityStrength = FINAL_STRENGTH;
        addAbilityMoment = FINAL_MOMENT;
        addAbilityStamina = FINAL_STAMINA;
        addAbilityCondition = FINAL_CONDITION;
        addAbilityHealth = FINAL_HEALTH;
        break;

      case "triple crown":
        addAbilitySpeed = TRIPLE_CROWN_SPEED;
        addAbilityStrength = TRIPLE_CROWN_STRENGTH;
        break;

      case "shot reversal":
        addAbilitySpeed = SHOT_REVERSAL_SPEED;
        addAbilityStrength = SHOT_REVERSAL_STRENGTH;
        addAbilityMoment = SHOT_REVERSAL_MOMENT;
        addAbilityStamina = SHOT_REVERSAL_STAMINA;
        addAbilityCondition = SHOT_REVERSAL_CONDITION;
        addAbilityHealth = SHOT_REVERSAL_HEALTH;
        break;

      case "cross":
        // addAbilitySpeed = MIRACLE_SPEED;
        // addAbilityStrength = MIRACLE_STRENGTH;
        // addAbilityMoment = MIRACLE_MOMENT;
        // addAbilityStamina = MIRACLE_STAMINA;
        // addAbilityCondition = MIRACLE_CONDITION;
        // addAbilityHealth = MIRACLE_HEALTH;
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

    const chlidAbilitySpeed = convertAbilityNum(resultSpeedB);    
    const childAbilityStrength = convertAbilityNum(resultStrengthB);    
    const childAbilityMoment = convertAbilityNum(resultMomentB);    
    const childAbilityStamina = convertAbilityNum(resultStaminaB);    
    const childAbilityCondition = convertAbilityNum(resultConditionB);
    const childAbilityHealth = convertAbilityNum(resultHealthB);

    console.log(chlidAbilitySpeed, checkNum(realAddSpeed));
    console.log(childAbilityStrength, checkNum(realAddStrength));
    console.log(childAbilityMoment, checkNum(realAddMoment));
    console.log(childAbilityStamina, checkNum(realAddStamina));
    console.log(childAbilityCondition, checkNum(realAddCondition));
    console.log(childAbilityHealth, checkNum(realAddHealth));

    


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
