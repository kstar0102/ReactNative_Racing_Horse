import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Image, Text, ScrollView } from 'react-native';
// REDUX
import { connect } from 'react-redux';
// Custom IMPORT
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import { ReturnButton } from '../../../components/Buttons';
import Screenstyles from '../../ScreenStylesheet';
import DropDownR from '../../../components/Buttons/DropDwonR';
import RTapScreensStyle from '../RanchTapScreens/RTapScreensStyle';

import MenuDropDown from '../../../components/Buttons/MenuDropDown';
import ReserveButton from '../../../components/Buttons/ReserveButton';
import ReservationDropDown from '../../../components/Buttons/ReservationDropDown';
import PresetRegistrationButton from '../../../components/Buttons/PresetRegistrationButton';
import { horseColor } from '../../../utils/globals';

const ReservationScreen = ({ navigation, saveData }) => {
  const [selected, setSelected] = useState(undefined);
  const [selectedDelete, setSelectedDelete] = useState(undefined);
  const [selectedFodder, setSelectedFodder] = useState(undefined);
  const [seletedGrazing, setSeletedGrazing] = useState(undefined);
  const [banner, setBanner] = useState(saveData[0]);
  const [grazing, setGrazing] = useState('');
  const [fodder, setFodder] = useState('');
  const [allData, setAllData] = useState([]);
  const [deletes, setDeletes] = useState('');
  // useEffect(()=>{
  // },[allData])
  const data = saveData;

  const handleSettingId = (value) => {
    setBanner(value);
  }

  const handleGrazingId = (value) => {
    setGrazing(value);
  }

  const handleFodderId = (value) => {
    setFodder(value);
  }

  const handleDeleteId = (value) => {
    setDeletes(value);
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
        result = require('../../../assets/images/condition/happy.png');
        break;
      case (conditionFace >= 3 && conditionFace <= 6):
        result = require('../../../assets/images/condition/middlehappy.png');
        break;
      case (conditionFace >= -2 && conditionFace <= 2):
        result = require('../../../assets/images/condition/normel.png');
        break;
      case (conditionFace >= -6 && conditionFace <= 6):
        result = require('../../../assets/images/condition/sad.png');
        break;
      case (conditionFace >= -10 && conditionFace <= 7):
        result = require('../../../assets/images/condition/bad.png');
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


  const grazingData = [
    { name: 'スベシャル' },
    { name: '放牧' },
    { name: '芝' },
    { name: 'ダート' },
    { name: 'ウッドチップ' },
    { name: 'プール' },
  ];

  const fodderData = [
    { name: 'にんじん' },
    { name: 'Sドリンク3' },
    { name: 'プロテイン' },
    { name: '角砂糖' },
    { name: 'チョコ' },
    { name: 'ケーキ' },
  ];

  const handleGrazing = (grazing) => {
    if (!grazing) {
      return false;
    }
    setAllData([...allData, grazing]);
  }

  const handleFodder = (fodder) => {
    if (!fodder) {
      return false;
    }
    setAllData([...allData, fodder]);
  }

  const handleDelete = (deletes) => {
      setAllData(allData.filter((item) => item.name !== deletes.name));
  }
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../../../assets/images/1.png')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen />
        <View style={Screenstyles.UPContainer}>
          <View style={Screenstyles.UPcontent}>
            <View>
              <ReturnButton label="牧 場" onPress={() => navigation.navigate('PastureScreen')} />
            </View>
            <View style={Screenstyles.UPRButton}>
              <ReturnButton label="育 成" />
            </View>
          </View>

          <ScrollView style={RTapScreensStyle.reservationContainer}>
            <View style={RTapScreensStyle.oneTopContent}>
              <View style={RTapScreensStyle.oneTopContentLeft}>
                <Text style={RTapScreensStyle.oneRightContentTxt}>管理馬一覧</Text>
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
                    </View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>SP <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && speed) || speed}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>ST <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && strength) || strength}</Text></Text>
                  </View>
                  <View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>疲労 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.fatigue) || 'O'} </Text> <Text style={RTapScreensStyle.oneRioghtHeaderTxtGreen}>{(!!selected && selected.ground) || data[0].ground}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>瞬発 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && moment) || moment}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>根性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && stamina) || stamina}</Text></Text>
                  </View>
                  <View style={RTapScreensStyle.oneRioghtBodyTxtGroup}>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtA}>{(!!selected && distanceValue) || distanceValue}距離  <Text style={RTapScreensStyle.oneRioghtBodyTxtValueA}> {(!!selected && selected.quality_leg) || data[0].quality_leg}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>気性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && condition) || condition}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>健康 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && health) || health}</Text></Text>
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
              </View>
            </View>
          </ScrollView>
          <View style={Screenstyles.reserveContent}>
            <View style={Screenstyles.reserveMenuLeft}>
              <Text style={Screenstyles.reserveMenuTitle}>育成メニュー</Text>
              <View style={Screenstyles.reserveMenuGroup}>
                <MenuDropDown name={' '} data={grazingData} onSelect={setSeletedGrazing} setId={handleGrazingId} />
                <ReserveButton label={'予約'} colorNumber={3} onPress={() => handleGrazing(grazing)} />
              </View>
              <Text style={Screenstyles.reserveMenuTitle}>飼葉メニュー</Text>
              <View style={Screenstyles.reserveMenuGroup}>
                <MenuDropDown name={' '} data={fodderData} onSelect={setSelectedFodder} setId={handleFodderId} />
                <ReserveButton label={'予約'} colorNumber={3} onPress={() => handleFodder(fodder)} />
              </View>
              <Text style={Screenstyles.reserveMenuTitle}>プリセット</Text>
              <View style={Screenstyles.reserveMenuGroup}>
                <MenuDropDown name={' '} onSelect={setSelected} />
                <ReserveButton label={'予約'} colorNumber={3} />
              </View>
              <PresetRegistrationButton label={'プリセット登録'} />
            </View>
            <View style={Screenstyles.reserveRight}>
              <View style={Screenstyles.reserveTxtGroup}>
                <Text style={Screenstyles.reserveListTitle}>予約一覧</Text>
                <View style={Screenstyles.reserveListConfim}>
                  <Text style={Screenstyles.reserveListRed}>未完了</Text>
                  <Text style={Screenstyles.reserveListBlue}>完了</Text>
                </View>
              </View>
              <View style={Screenstyles.reserveRightList}>
                <ScrollView style={Screenstyles.reserveList}>
                  {allData.map((item, index) => (
                    <Text key={index} style={Screenstyles.reserveListtxt}>{index}.  {item.name}</Text>
                  ))}
                </ScrollView>
                <View style={Screenstyles.reserveButtonGroup}>
                  <ReservationDropDown name='3' data={allData} onSelect={setSelectedDelete} setId={handleDeleteId} />
                  <ReserveButton label={'確定'} colorNumber={5} />
                  <ReserveButton label={'削除'} colorNumber={4} onPress={() => handleDelete(deletes)} />
                </View>
              </View>

            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


const mapStateToProps = state => {
  return {
    saveData: state.horseData.saveData
  };
};
export default connect(mapStateToProps)(ReservationScreen);