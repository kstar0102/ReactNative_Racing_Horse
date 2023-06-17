import React, { useState } from 'react';
import { View, Image, Text, ScrollView,Alert } from 'react-native';
import DropDownR from '../../components/Buttons/DropDwonR';
import RTapScreensStyle from './RTapScreensStyle';
import ConfirmButton from '../../components/ConfirmButton';
import GrazingGroup from './GrazingGroup';
import WorkingButton from '../../components/Buttons/WorkingButtons';
import AvatarTapScreen from './AvataTapScreen';
import { SaleButton } from '../../components/Buttons';

const ScreenThree = () => {
  const [selected, setSelected] = useState(undefined);
  const [activeButton, setActiveButton] = useState(0);
  const data = [
    { label: '馬名A', labelValue: 'A', id: 1, sp: 'S', st: 'D+', fatigue: 'O',  instantaneous:'A', guts:'C', temper:'B',  health: 'A', Hair:'黑鹿毛',  class:'GIクラス'},
    { label: '馬名B', labelValue: 'B', id: 2, sp: 'S+', st: 'D', fatigue: '△',  instantaneous:'A+', guts:'C', temper:'B',  health: 'A', Hair:'黑鹿毛', class:'GⅡクラス' },
    { label: '馬名C', labelValue: 'C', id: 3, sp: 'S', st: 'D', fatigue: '▲',  instantaneous:'A', guts:'C+', temper:'B',  health: 'A+', Hair:'栗毛', class:'GⅢクラス' },
 ];

 const handleButtonPress = (styleId) => {
  setActiveButton(styleId);
};

const renderScreenBelowButtons = () => {
  switch(activeButton) {
    case 1:
      return <AvatarTapScreen/>;
    default:
      return <GrazingGroup />;
  }
}

const handlePress = () => {
      Alert.alert(
        "入厩",
        "入厩させますか?",
        [
          {
            text: "いいえ",
            style: "cancel"
          },
          { 
            text: "はい", 
            onPress: () => handleButtonPress(1)
          }
        ],
        { cancelable: false },
      );
    }

    return (
      <View style={RTapScreensStyle.twoContainer}>
          <View  style={RTapScreensStyle.oneTopContent}>
            <View style={RTapScreensStyle.oneTopContentLeft}>
                <Text style={RTapScreensStyle.oneRightContentTxt}>所有馬一覧</Text>
                <DropDownR label='馬名A'data={data} onSelect={setSelected} />
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
                        source={require('../../assets/images/condition/happy.png')}
                      />
                      {/* {(!!selected && selected.value) || 1} */}
                    </View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>SP <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.sp) || 'S'}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>ST <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.st) || 'D+'}</Text></Text>
                  </View>
                  <View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>疲労 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.fatigue) || 'O'} </Text> <Text style={RTapScreensStyle.oneRioghtHeaderTxtGreen}>芝</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>瞬発 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.instantaneous) || 'A'}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>根性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.guts) || 'C'}</Text></Text>
                  </View>
                  <View  style={RTapScreensStyle.oneRioghtBodyTxtGroup}>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxtA}>中距離  <Text style={RTapScreensStyle.oneRioghtBodyTxtValueA}> 差</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>気性 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.temper) || 'B'}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>健康 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.health) || 'A'}</Text></Text>
                  </View>
                  {(!!selected && selected.id ==1 ? 
                    <Image 
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../assets/images/horse/23.png')}
                    />
                    :
                    <Image 
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../assets/images/horse/23.png')}
                    />
                    
                    &&

                    !!selected && selected.id ==2 ? 
                    <Image 
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../assets/images/horse/23.png')}
                    />
                    :
                    <Image 
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../assets/images/horse/23.png')}
                    />

                    &&

                    !!selected && selected.id == 3 ? 
                    <Image 
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../assets/images/horse/21.png')}
                    />
                    :
                    <Image 
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../assets/images/horse/23.png')}
                    />
                  )} 
                  
              </View>
              
              <View style={RTapScreensStyle.ButtonGroup}>
                <WorkingButton label={'飼葉'} colorNumber={5} styleId={1} onPress={(handlePress)}/>
                <WorkingButton label={'入廐'} colorNumber={2} styleId={1} onPress={(handlePress)}/>
                <SaleButton label={'売却'} />
              </View>
            </View>
          </View>
          <View  style={RTapScreensStyle.oneBottomContent}>
            {renderScreenBelowButtons()}
          </View>
      </View>
    )
  }
export default ScreenThree;