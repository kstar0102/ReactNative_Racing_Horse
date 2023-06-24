import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, ScrollView } from 'react-native';
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

const ReservationScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { name: 'A', id: 1, sp: 'S', st: 'D+', fatigue: 'O', instantaneous: 'A', guts: 'C', temper: 'B', health: 'A', Hair: '白毛', class: 'GIクラス' },
    { name: 'B', id: 2, sp: 'S+', st: 'D', fatigue: '△', instantaneous: 'A+', guts: 'C', temper: 'B', health: 'A', Hair: '黑鹿毛', class: 'GⅡクラス' },
    { name: 'C', id: 3, sp: 'S', st: 'D+', fatigue: '▲', instantaneous: 'A', guts: 'C+', temper: 'B', health: 'A+', Hair: '栗毛', class: 'GⅢクラス' },
  ];


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
                <DropDownR name='A' data={data} onSelect={setSelected} />
              </View>
              <View style={RTapScreensStyle.oneTopContentRight}>
                <View style={RTapScreensStyle.oneRioghtHeader}>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxtA}>馬名<Text style={RTapScreensStyle.oneRioghtHeaderTxtPink}>{(!!selected && selected.labelValue) || 'A'}</Text></Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}><Text style={RTapScreensStyle.oneRioghtHeaderTxtPink}>牝</Text>2</Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>早熟</Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>{(!!selected && selected.Hair) || '白毛'}</Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxtLetter}>{(!!selected && selected.class) || 'GIクラス'}</Text>
                </View>
                <View style={RTapScreensStyle.oneRioghtBody}>
                  <View>
                    <View style={RTapScreensStyle.conditionsGroup}>
                      <Text style={RTapScreensStyle.oneRioghtBodyTxt}>調子</Text>
                      <Image
                        style={RTapScreensStyle.conditions}
                        source={require('../../../assets/images/condition/happy.png')}
                      />
                      {/* {(!!selected && selected.value) || 1} */}
                    </View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>SP <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.sp) || 'S'}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>ST <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.st) || 'D+'}</Text></Text>
                  </View>
                  <View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>疲労 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.fatigue) || 'O'}  </Text><Text style={RTapScreensStyle.oneRioghtHeaderTxtGreen}>芝</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>瞬発 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.instantaneous) || 'A'}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>根性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.guts) || 'C'}</Text></Text>
                  </View>
                  <View style={RTapScreensStyle.oneRioghtBodyTxtGroup}>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtA}>中距離  <Text style={RTapScreensStyle.oneRioghtBodyTxtValueA}> 差</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>気性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.temper) || 'B'}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>健康 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.health) || 'A'}</Text></Text>
                  </View>
                  {(!!selected && selected.id == 1 ?
                    <Image
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../../assets/images/horse/22.png')}
                    />
                    :
                    <Image
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../../assets/images/horse/22.png')}
                    />

                      &&

                      !!selected && selected.id == 2 ?
                      <Image
                        style={RTapScreensStyle.HorseAvatar}
                        source={require('../../../assets/images/horse/23.png')}
                      />
                      :
                      <Image
                        style={RTapScreensStyle.HorseAvatar}
                        source={require('../../../assets/images/horse/23.png')}
                      />

                        &&

                        !!selected && selected.id == 3 ?
                        <Image
                          style={RTapScreensStyle.HorseAvatar}
                          source={require('../../../assets/images/horse/21.png')}
                        />
                        :
                        <Image
                          style={RTapScreensStyle.HorseAvatar}
                          source={require('../../../assets/images/horse/22.png')}
                        />
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={Screenstyles.reserveContent}>
            <View style={Screenstyles.reserveMenuLeft}>
              <Text style={Screenstyles.reserveMenuTitle}>育成メニュー</Text>
                <View style={Screenstyles.reserveMenuGroup}>
                    <MenuDropDown name={' '} data={data}/>
                    <ReserveButton label={'予約'} colorNumber={3}/>
                </View>
                <Text style={Screenstyles.reserveMenuTitle}>飼葉メニュー</Text>
                <View style={Screenstyles.reserveMenuGroup}>
                    <MenuDropDown name={' '} data={data}/>
                    <ReserveButton label={'予約'} colorNumber={3}/>
                </View>
                <Text style={Screenstyles.reserveMenuTitle}>プリセット</Text>
                <View style={Screenstyles.reserveMenuGroup}>
                    <MenuDropDown name={' '} data={data}/>
                    <ReserveButton label={'予約'} colorNumber={3}/>
                </View>
                <PresetRegistrationButton label={'プリセット登録'}/>
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
                    <Text style={Screenstyles.reserveListtxt}>1:    芝強め</Text>
                    <Text style={Screenstyles.reserveListtxt}>2:    Sドリンク</Text>
                    <Text style={Screenstyles.reserveListtxt}>3:    坂一杯</Text>
                    <Text style={Screenstyles.reserveListtxt}>4:    にんじん</Text>
                    <Text style={Screenstyles.reserveListtxt}>5:    ダ馬なり</Text>
                    <Text style={Screenstyles.reserveListtxt}> .      .</Text>
                    <Text style={Screenstyles.reserveListtxt}> .      .</Text>
                    <Text style={Screenstyles.reserveListtxt}> .      .</Text>
                    <Text style={Screenstyles.reserveListtxt}>50:   Sドリンク</Text>
                </ScrollView>
                <View style={Screenstyles.reserveButtonGroup}>
                  <ReservationDropDown name='3'/>
                  <ReserveButton label={'確定'} colorNumber={5}/>
                  <ReserveButton label={'刪除'} colorNumber={4}/>
              </View>
              </View>
              
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ReservationScreen;