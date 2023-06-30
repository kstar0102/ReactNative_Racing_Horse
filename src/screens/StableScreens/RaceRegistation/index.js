import React, { useState } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import DropDownR from '../../../components/Buttons/DropDwonR';
import RTapScreensStyle from '../../PastureScreens/RanchTapScreens/RTapScreensStyle';
import Screenstyles from '../../ScreenStylesheet';
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import { ReturnButton } from '../../../components/Buttons';
import RacetrackCourse from '../../PastureScreens/RacetrackTableScreen/RacetrackCourse';

const RaceRegistation = ({ navigation }) => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'A', labelValue: 'A', id: 1, sp: 'S', st: 'D+', fatigue: 'O', instantaneous: 'A', guts: 'C', temper: 'B', health: 'A', Hair: '白毛', class: 'GIクラス' },
    { label: 'B', labelValue: 'B', id: 2, sp: 'S+', st: 'D', fatigue: '△', instantaneous: 'A+', guts: 'C', temper: 'B', health: 'A', Hair: '黑鹿毛', class: 'GⅡクラス' },
    { label: 'C', labelValue: 'C', id: 3, sp: 'S', st: 'D', fatigue: '▲', instantaneous: 'A', guts: 'C+', temper: 'B', health: 'A+', Hair: '栗毛', class: 'GⅢクラス' },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/images/horse_track/stall.jpg')}
      resizeMode="cover"
      style={Screenstyles.img}>
      <HeaderScreen />
      <View>


        <View>
          <View>
            <ReturnButton color={1} label="厩 舎" onPress={() => navigation.navigate('StallScreen')} />
          </View>
          <View style={Screenstyles.UPRButton}>
            <ReturnButton label="出走登錄" color={1} />
          </View>
        </View>
        <View style={RTapScreensStyle.RaceRegistationContainer}>
          <View style={RTapScreensStyle.oneTopContentLeft}>
            <Text style={RTapScreensStyle.oneRightContentTxt}>所有馬一覧</Text>
            <DropDownR label='A' data={data} onSelect={setSelected} />
          </View>
          <View style={RTapScreensStyle.oneTopContentRight}>
            <View style={RTapScreensStyle.oneRioghtHeader}>
              <Text style={RTapScreensStyle.oneRioghtHeaderTxtA}>{(!!selected && selected.labelValue) || 'A'}</Text>
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
        <View  style={RTapScreensStyle.RacetrackCourse}>
          <RacetrackCourse />
        </View>
      </View>
    </ImageBackground>
  )
}
export default RaceRegistation;