import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import Toast from 'react-native-root-toast';
// Redux
import { connect } from 'react-redux';
// Custom import

import DropDownR from '../../../../components/Buttons/DropDwonR';
import RTapScreensStyle from '../../../PastureScreens/RanchTapScreens/RTapScreensStyle';
import GrazingGroup from '../../../PastureScreens/RanchTapScreens/GrazingGroup';
import FodderGroup from '../../../PastureScreens/RanchTapScreens/FodderGroup';
import WorkingButton from '../../../../components/Buttons/WorkingButtons';
import { SaleButton } from '../../../../components/Buttons';
import { horseColor } from '../../../../utils/globals';


const OneHorseTap = ({ oneData, arrowState }) => {
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
  // State
  const [State, setState] = useState('⬆');
  const [tiredArror, setArrorState] = useState('⬆');
  const [colors, setColors] = useState('red');
  const [tiredArrorColor, setArrorColor] = useState('red');

  // Ground Color
  const [groundColor, setGroundColor] = useState('#1BFF00');

  if (oneData == '') {
    alert('YOUR HORSE NOT FOUND RETURN')
    return false
  }
  const [selected, setSelected] = useState(undefined);
  const [activeButton, setActiveButton] = useState(0);
  const [banner, setBanner] = useState(oneData[0]);

  useEffect(() => {
    setBanner(oneData[0]);
    setPattern(tiredNumber);
    if(oneData[0].ground == 'ダ'){
      setGroundColor('#707172');
    }else if(oneData[0].ground == '芝'){
      setGroundColor('#1BFF00');
    }else if(oneData[0].ground == '万'){
      setGroundColor('red');
    }
  }, [oneData]);
  const data = oneData;


  useEffect(() => {
    setArrowState(arrowState);
  }, [arrowState]);

  useEffect(() => {
    if (arrowStates.what == 'スベシャル') {

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
    } else if (arrowStates.what == '芝') {
      setHappyState(1);
      setTiredState(1);
      setSpeedState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setSpeedState(0);
      }, 2000);
    } else if (arrowStates.what == 'ダート') {
      setHappyState(1);
      setTiredState(1);
      setStrengthState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setStrengthState(0);
      }, 2000);
    } else if (arrowStates.what == 'ウッドチップ') {
      setHappyState(1);
      setTiredState(1);
      setContitionState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setContitionState(0);
      }, 2000);
    } else if (arrowStates.what == 'プール') {
      setHappyState(1);
      setTiredState(1);
      setHealthState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setHealthState(0);
      }, 2000);
    } else if (arrowStates.what == '併走') {
      setHappyState(1);
      setTiredState(1);
      setStaminaState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setStaminaState(0);
      }, 2000);
    } else if (arrowStates.what == '坂路') {
      setHappyState(1);
      setTiredState(1);
      setMomentState(1);
      setTimeout(() => {
        setHappyState(0);
        setTiredState(0);
        setMomentState(0);
      }, 2000);
    } else if (arrowStates.what == 'にんじん') {
      setHappyState(1);
      setTimeout(() => {
        setHappyState(0);
      }, 2000);
    } else if (arrowStates.what == 'Sドリンク') {
      setHappyState(1);
      setTimeout(() => {
        setHappyState(0);
      }, 2000);
    } else if (arrowStates.what == 'プロテイン') {
      setHappyState(1);
      setTimeout(() => {
        setHappyState(0);
      }, 2000);
    } else if (arrowStates.what == '角砂糖') {
      setTiredState(1);
      setArrorState('⬇');
      setArrorColor('blue');
      setTimeout(() => {
        setTiredState(0);
      }, 2000);
    } else if (arrowStates.what == 'チョコ') {
      setTiredState(1);
      setArrorState('⬇');
      setArrorColor('blue');
      setTimeout(() => {
        setTiredState(0);
      }, 2000);
    } else if (arrowStates.what == 'ケーキ') {
      setTiredState(1);
      setArrorState('⬇');
      setArrorColor('blue');
      setTimeout(() => {
        setTiredState(0);
      }, 2000);
    }
    if (banner.direction == 0) {
      setState('⬇');
      setColors('blue')
    } else if (banner.direction == 1) {
      setState('⬆');
      setColors('red')
    }
  }, [arrowStates]);


  const handleSettingId = (value) => {
    setBanner(value);
    if (value) {
      setPattern(tiredNumber);
    }
    if(value.ground == 'ダ'){
      setGroundColor('#707172');
    }else if(value.ground == '芝'){
      setGroundColor('#1BFF00');
    }else if(value.ground == '万'){
      setGroundColor('red');
    }
  }
  // SKILL FILLTER
  const skillRange = (skill) => {
    if (typeof (skill) !== 'number') {
      return;
    }
    let result = "";
    switch (true) {
      case (skill >= 451):
        result = 'S+';
        break;
      case (skill >= 401 && skill <= 450):
        result = 'S';
        break;
      case (skill >= 351 && skill <= 400):
        result = 'A+';
        break;
      case (skill >= 301 && skill <= 350):
        result = 'A';
        break;
      case (skill >= 251 && skill <= 300):
        result = 'B+';
        break;
      case (skill >= 201 && skill <= 250):
        result = 'B';
        break;
      case (skill >= 151 && skill <= 200):
        result = 'C+';
        break;
      case (skill >= 101 && skill <= 150):
        result = 'C';
        break;
      case (skill >= 51 && skill <= 100):
        result = 'D+';
        break;
      case (skill >= 1 && skill <= 50):
        result = 'D';
        break;
      default:
        return;
    }
    return result;
  }

  const distanceRange = (distance) => {
    if (typeof (distance) !== 'number') {
      return;
    }
    let result = "";
    switch (true) {
      case (distance >= 1000 && distance <= 1600):
        result = '短';
        break;
      case (distance >= 1400 && distance <= 2000):
        result = '短中';
        break;
      case (distance >= 1800 && distance <= 2400):
        result = '中';
        break;
      case (distance >= 2200 && distance <= 2800):
        result = '中長';
        break;
      case (distance >= 3000 && distance <= 3600):
        result = '長';
        break;
      default:
        return;
    }
    return result;
  }

  const conditionFaceRange = (conditionFace) => {
    if (typeof (conditionFace) !== 'number') {
      return;
    }
    let result = "";
    switch (true) {
      case (conditionFace >= 7 && conditionFace <= 500):
        result = require('../../../../assets/images/condition/happy.png');
        break;
      case (conditionFace >= 3 && conditionFace <= 6):
        result = require('../../../../assets/images/condition/middlehappy.png');
        break;
      case (conditionFace >= -2 && conditionFace <= 2):
        result = require('../../../../assets/images/condition/normel.png');
        break;
      case (conditionFace >= -6 && conditionFace <= -3):
        result = require('../../../../assets/images/condition/sad.png');
        break;
      case (conditionFace >= -10 && conditionFace <= -7):
        result = require('../../../../assets/images/condition/bad.png');
        break;
      default:
        return;
    }
    return result;
  }

  const tiredRange = (tired) => {
    if (typeof (tired) !== 'number') {
      return;
    }
    let result = "";
    switch (true) {
      case (tired >= 0 && tired <= 7):
        result = ' ◎'
        break;
      case (tired >= 9 && tired <= 12):
        result = ' o'
        break;
      case (tired >= 13 && tired <= 14):
        result = ' ▲'
        break;
      case (tired >= 15 && tired <= 17):
        result = ' △'
        break;
      case (tired >= 18):
        result = ' ×'
        break;
      default:
        return;
    }
    return result;
  }

  const speed = skillRange(banner.speed_b - (-banner.speed_w));
  const health = skillRange(banner.health_b - (-banner.health_w));
  const moment = skillRange(banner.moment_b - (-banner.moment_w));
  const stamina = skillRange(banner.stamina_b - (-banner.stamina_w));
  const strength = skillRange(banner.strength_b - (-banner.strength_w));
  const condition = skillRange(banner.condition_b - (-banner.condition_w));
  const distanceValue = distanceRange((banner.distance_max - (-banner.distance_min)) / 2);
  const conditionFace = conditionFaceRange((parseInt(banner.happy)));
  const tired = tiredRange((parseInt(banner.tired)));
  const tiredNumber = (parseInt(banner.tired));

  // Health State
  const setPattern = (condition) => {
     // Disable Injery
     return;
    let options;
    if (condition <= 10) {
      return false;
    }
    else if (condition == 11 || condition == 12) {
      options = {
        none: 79,
        D1: 10,
        D2: 5,
        D3: 3,
        D4: 2,
        D5: 1
      };
    }
    else if (condition == 13 || condition == 14) {
      options = {
        none: 64,
        D1: 15,
        D2: 10,
        D3: 5,
        D4: 4,
        D5: 2
      };
    }
    else if (condition == 15 || condition == 16) {
      options = {
        none: 43,
        D1: 20,
        D2: 15,
        D3: 10,
        D4: 8,
        D5: 4
      };
    }
    else if (condition == 17 || condition == 18) {
      options = {
        none: 22,
        D1: 25,
        D2: 20,
        D3: 15,
        D4: 10,
        D5: 8
      };
    }
    else if (condition == 19 || condition == 20) {
      options = {
        none: 0,
        D1: 30,
        D2: 25,
        D3: 20,
        D4: 15,
        D5: 10
      };
    }
    const randomNumber = Math.floor(Math.random() * 100);

    // Iterate over the options until we reach the chosen value
    let sum = 0;
    for (const [key, value] of Object.entries(options)) {
      sum += value;
      if (randomNumber < sum) {
        if (key == 'D1') {
          let toast = Toast.show('疲労が溜まりすぎるとケガ(挫跖 ど)をする', {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        } else if (key == 'D2') {
          let toast = Toast.show('疲労が溜まりすぎるとケガ(裂蹄 ど)をする', {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        } else if (key == 'D3') {
          let toast = Toast.show('疲労が溜まりすぎるとケガ(屈腱炎 ど)をする', {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        } else if (key == 'D4') {
          let toast = Toast.show('疲労が溜まりすぎるとケガ(骨折 ど)をする', {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        } else if (key == 'D5') {
          let toast = Toast.show(' 疲労が溜まりすぎるとケガ(予後不良 ど)をする', {
            duration: Toast.durations.LONG,
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2000);
        }
        break;
      }
    }
  }
  // tired
  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch (activeButton) {
      case 1:
        return <FodderGroup horseId={banner.id} />;
      default:
        return <GrazingGroup horseId={banner.id} />;
    }
  }

  return (
    <View style={RTapScreensStyle.twoContainer}>
      <View style={RTapScreensStyle.oneTopContent}>
        <View style={RTapScreensStyle.oneTopContentLeft}>
          <Text style={RTapScreensStyle.oneRightContentTxt}>所有馬一覧</Text>
          <DropDownR name={data[0].name} data={data} onSelect={setSelected} setId={handleSettingId} />
        </View>
        <View style={RTapScreensStyle.oneTopContentRight}>
          <View style={RTapScreensStyle.oneRioghtHeader}>
            <Text style={RTapScreensStyle.oneRioghtHeaderTxtA}>{(!!selected && selected.name) || data[0].name}</Text>
            <Text style={RTapScreensStyle.oneRioghtHeaderTxt}><Text style={RTapScreensStyle.oneRioghtHeaderTxtPink}>{(!!selected && selected.gender) || data[0].gender}</Text>2</Text>
            <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>{(!!selected && selected.growth) || data[0].growth}</Text>
            <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>{(!!selected && selected.color) || data[0].color}</Text>
            <Text style={RTapScreensStyle.oneRioghtHeaderTxtLetter}>{(!!selected && selected.class) || 'GIクラス'}</Text>
          </View>
          <View style={RTapScreensStyle.oneRioghtBody}>
            <View>
              <View style={RTapScreensStyle.conditionsGroup}>
                <Text style={RTapScreensStyle.oneRioghtBodyTxt}>調子</Text>
                <Image
                  style={RTapScreensStyle.conditions}
                  source={conditionFace}
                />
                <Text style={[RTapScreensStyle.oneRightTxtUp, { opacity: happySate, color: colors }]}>{State}</Text>
              </View>
              <View style={RTapScreensStyle.oneRightTxt}>
                <Text style={RTapScreensStyle.oneRioghtBodyTxt}>SP <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && speed) || speed}</Text></Text>
                <Text style={[RTapScreensStyle.oneRightTxtUp, { opacity: speedState }]}>⬆</Text>
              </View>
              <View style={RTapScreensStyle.oneRightTxt}>
                <Text style={RTapScreensStyle.oneRioghtBodyTxt}>ST <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && strength) || strength}</Text></Text>
                <Text style={[RTapScreensStyle.oneRightTxtUp, { opacity: strengthState }]}>⬆</Text>
              </View>
            </View>
            <View>
              <View style={RTapScreensStyle.oneRightTxt}>
                <Text style={RTapScreensStyle.oneRioghtBodyTxt}>疲労
                  <Text style={RTapScreensStyle.oneRioghtBodyTxtTired}>{(!!selected && tired) || tired}</Text></Text>
                <Text style={[RTapScreensStyle.oneRightTxtUp, { opacity: tiredState, color: tiredArrorColor }]}>{tiredArror}</Text>

                <Text style={[RTapScreensStyle.oneRioghtHeaderTxtGreen, { color: groundColor }]}>
                  {(!!selected && selected.ground) || data[0].ground}
                </Text>
              </View>

              <View style={RTapScreensStyle.oneRightTxt}>
                <Text style={RTapScreensStyle.oneRioghtBodyTxt}>瞬発 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && moment) || moment}</Text></Text>
                <Text style={[RTapScreensStyle.oneRightTxtUp, { opacity: momentState }]}>⬆</Text>
              </View>

              <View style={RTapScreensStyle.oneRightTxt}>
                <Text style={RTapScreensStyle.oneRioghtBodyTxt}>根性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && stamina) || stamina}</Text></Text>
                <Text style={[RTapScreensStyle.oneRightTxtUp, { opacity: staminaState }]}>⬆</Text>
              </View>
            </View>

            <View style={RTapScreensStyle.oneRioghtBodyTxtGroup}>
              <Text style={RTapScreensStyle.oneRioghtBodyTxtA}>{(!!selected && distanceValue) || distanceValue}距離  <Text style={RTapScreensStyle.oneRioghtBodyTxtValueA}> {(!!selected && selected.quality_leg) || data[0].quality_leg}</Text></Text>
              <View style={RTapScreensStyle.oneRightTxt}>
                <Text style={RTapScreensStyle.oneRioghtBodyTxt}>気性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && condition) || condition}</Text></Text>
                <Text style={[RTapScreensStyle.oneRightTxtUp, { opacity: contitionState }]}>⬆</Text>
              </View>
              <View style={RTapScreensStyle.oneRightTxt}>
                <Text style={RTapScreensStyle.oneRioghtBodyTxt}>健康 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && health) || health}</Text></Text>
                <Text style={[RTapScreensStyle.oneRightTxtUp, { opacity: healthState }]}>⬆</Text>
              </View>
            </View>
            {(!!selected &&
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
            ) ||
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
            }
          </View>

          <View style={RTapScreensStyle.ButtonGroup}>
            <WorkingButton label={'飼葉'} colorNumber={5} styleId={2} onPress={(() => handleButtonPress(1))} />
            <SaleButton label={'売却'} />
          </View>
        </View>
      </View>
      <View style={RTapScreensStyle.oneBottomContent}>
        {renderScreenBelowButtons()}
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    arrowState: state.arrow.arrowState,
    poolLevel: state.pool.poolBuyData,
    truckLevel: state.truck.truckBuyData,
    roadLevel: state.road.roadBuyData,
  };
};



export default connect(mapStateToProps)(OneHorseTap);