import React, { useState, useEffect, useCallback } from 'react';
import { View, ImageBackground, Image, Text, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
// REDUX
import { connect, useDispatch } from 'react-redux';
import { reservationAction } from '../../../store/actions/Pasture/reservationAction';
// Custom IMPORT
import HeaderScreen, { calculateGameDate } from '../../LayoutScreen/HeaderScreen';
import { ReturnButton } from '../../../components/Buttons';
import Screenstyles from '../../ScreenStylesheet';
import DropDownR from '../../../components/Buttons/DropDwonR';
import RTapScreensStyle from '../RanchTapScreens/RTapScreensStyle';

import MenuDropDown from '../../../components/Buttons/MenuDropDown';
import ReserveButton from '../../../components/Buttons/ReserveButton';
import ReservationDropDown from '../../../components/Buttons/ReservationDropDown';
import PresetRegistrationButton from '../../../components/Buttons/PresetRegistrationButton';
import { horseColor } from '../../../utils/globals';

const ReservationScreen = ({ navigation, saveData, pasture_id, user_id, reservationData }) => {
  // if(reservationData == '')
  // {
  // return <Spinner visible={true} />
  // }
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(undefined);
  const [selectedDelete, setSelectedDelete] = useState(undefined);
  const [selectedFodder, setSelectedFodder] = useState(undefined);
  const [seletedGrazing, setSeletedGrazing] = useState(undefined);
  const [banner, setBanner] = useState(saveData[0]);
  const [grazing, setGrazing] = useState('');
  const [fodder, setFodder] = useState('');
  const [allData, setAllData] = useState([]);
  const [deletes, setDeletes] = useState('');
  const [groundColor, setGroundColor] = useState('#000');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentComplate, setCurrentComplate] = useState('none');
  const [currentIncomplete, setCurrentIncomplete] = useState('none');

  const data = saveData;
  const gameAllDate = calculateGameDate(currentTime);
  const gameData = gameAllDate.toISOString().split('T')[0];


  let horse_ids = [];
  let gameDate = [];
  if (reservationData != '') {
    reservationData.forEach((element, index) => {
      horse_ids.push(element.horse_id);
      gameDate.push(element.game_date)
    });
  }


  useEffect(() => {
    if (reservationData != '') {
      if (horse_ids == banner.id && gameDate == gameData) {
        setCurrentIncomplete('flex');
        setCurrentComplate('none');
      } else {
        setCurrentIncomplete('none');
        setCurrentComplate('flex');
      }
    }else{
      setCurrentIncomplete('none');
      setCurrentComplate('flex');
    }
  }, [gameDate, horse_ids])


  useEffect(() => {
    if (saveData != '') {
      if (saveData[0].ground === 'ダ') {
        setGroundColor('#707172');
      } else if (saveData[0].ground === '芝') {
        setGroundColor('#1BFF00');
      } else if (saveData[0].ground === '万') {
        setGroundColor('red');
      }
    }
  }, [saveData])

  const handleSettingId = (value) => {
    setBanner(value);
    if (reservationData != '') {
      if (horse_ids == banner.id && gameDate == gameData) {
        setCurrentIncomplete('flex');
        setCurrentComplate('none');
      } else {
        setCurrentIncomplete('none');
        setCurrentComplate('flex');
      }
    }

    if (value.ground == 'ダ') {
      setGroundColor('#707172');
    } else if (value.ground == '芝') {
      setGroundColor('#1BFF00');
    } else if (value.ground == '万') {
      setGroundColor('red');
    }
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
    { name: 'スベシャル', price: '1' },
    { name: '放牧', price: '1' },
    { name: '芝', price: '1' },
    { name: 'ダート', price: '1' },
    { name: 'ウッドチップ', price: '1' },
    { name: 'プール', price: '1' },
  ];

  const fodderData = [
    { name: 'にんじん', price: '1' },
    { name: 'Sドリンク3', price: '3' },
    { name: 'プロテイン', price: '5' },
    { name: '角砂糖', price: '1' },
    { name: 'チョコ', price: '3' },
    { name: 'ケーキ', price: '5' },
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



  let food_name = [];
  let food_price = [];
  let food_order = [];
  allData.forEach((element, index) => {
    food_name.push(element.name);
    food_price.push(element.price);
    food_order.push(index + 1);
  });
  const handleArraySubmit = () => {
    if (allData != '') {
      const sandReserve = {
        'horse_id': banner.id,
        'pasture_id': pasture_id,
        'food_name': food_name,
        'user_id': user_id,
        'price': food_price,
        'order': food_order,
        'game_date': gameData
      }
      dispatch(reservationAction(sandReserve));
    } else {
      alert('NOT FOUND');
    }

  }
  const handleDelete = (deletes) => {
    setAllData(allData.filter((item, index) => index + 1 !== deletes));
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
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>  疲労 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.fatigue) || 'O'} </Text> <Text style={[RTapScreensStyle.oneRioghtHeaderTxtGreen, { color: groundColor }]}>{(!!selected && selected.ground) || data[0].ground}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>  瞬発 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && moment) || moment}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>  根性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && stamina) || stamina}</Text></Text>
                  </View>
                  <View style={RTapScreensStyle.oneRioghtBodyTxtGroup}>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtA}>{(!!selected && distanceValue) || distanceValue}距離  <Text style={RTapScreensStyle.oneRioghtBodyTxtValueA}> {(!!selected && selected.quality_leg) || data[0].quality_leg}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>気性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && condition) || condition}  </Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>健康 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && health) || health}  </Text></Text>
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
                  <Text style={[Screenstyles.reserveListRed, { display: currentComplate }]}>未完了</Text>
                  <Text style={[Screenstyles.reserveListBlue, { display: currentIncomplete }]}>完了</Text>
                </View>
              </View>
              <View style={Screenstyles.reserveRightList}>
                <ScrollView style={Screenstyles.reserveList}>
                  {allData.map((item, index) => (
                    <Text key={index} style={Screenstyles.reserveListtxt}>{index + 1}.  {item.name}</Text>
                  ))}
                </ScrollView>
                <View style={Screenstyles.reserveButtonGroup}>
                  <ReservationDropDown name={food_order[0]} data={food_order} onSelect={setSelectedDelete} setId={handleDeleteId} />
                  <ReserveButton label={'確定'} colorNumber={5} onPress={() => handleArraySubmit()} />
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
    saveData: state.horseData.saveData,
    pasture_id: state.pasture.pastureData.id,
    user_id: state.user.userData.id,
    reservationData: state.validationData.reservationData
  };
};
export default connect(mapStateToProps)(ReservationScreen);