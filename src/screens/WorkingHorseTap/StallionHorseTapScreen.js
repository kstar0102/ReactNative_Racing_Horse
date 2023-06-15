import React, { useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import DropDownR from '../../components/Buttons/DropDwonR';
import RTapScreensStyle from '../RTapScreens/RTapScreensStyle';
import WorkingButton from '../../components/Buttons/WorkingButtons';

const StallionHorseTapScreen = () => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: '馬名A', id: 1, sp: 'S', st: 'D+', fatigue: 'O',  instantaneous:'A', guts:'C', temper:'B',  health: 'A', Hair:''},
    { label: '馬名B', id: 2, sp: 'S+', st: 'D', fatigue: '△',  instantaneous:'A+', guts:'C', temper:'B',  health: 'A', Hair:''},
    { label: '馬名C', id: 3, sp: 'S', st: 'D+', fatigue: '▲',  instantaneous:'A', guts:'C+', temper:'B',  health: 'A+', Hair:''},
    { label: '馬名D', id: 4, sp: 'S', st: 'D', fatigue: 'O',  instantaneous:'A+', guts:'C+', temper:'B+',  health: 'A', Hair:''},
    { label: '馬名E', id: 5, sp: 'S+', st: 'D+', fatigue: '▲',  instantaneous:'A', guts:'C', temper:'B+',  health: 'A', Hair:''},
    { label: '馬名F', id: 6, sp: 'S', st: 'D', fatigue: '△',  instantaneous:'A+', guts:'C+', temper:'B',  health: 'A+', Hair:''},
    { label: '馬名G', id: 7, sp: 'S+', st: 'D', fatigue: 'O',  instantaneous:'A', guts:'C+', temper:'B',  health: 'A+', Hair:''},
    { label: '馬名H', id: 8, sp: 'S', st: 'D+', fatigue: '▲',  instantaneous:'A', guts:'C', temper:'B+',  health: 'A', Hair:''},
    { label: '馬名I', id: 9, sp: 'S+', st: 'D', fatigue: 'O',  instantaneous:'A+', guts:'C+', temper:'B',  health: 'A+', Hair:''},
 ];


    return (
      <ScrollView style={RTapScreensStyle.oneContainer}>
         <View  style={RTapScreensStyle.oneTopContent}>
            <View style={RTapScreensStyle.oneTopContentLeft}>
                <Text style={RTapScreensStyle.oneRightContentTxt}>所有馬一覧</Text>
                <DropDownR label='馬名A'  data={data} onSelect={setSelected} />
            </View>
            <View style={RTapScreensStyle.oneTopContentRight}>
              <View style={RTapScreensStyle.oneRioghtHeader}>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxtA}>{(!!selected && selected.label) || '馬名A'}</Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}><Text style={RTapScreensStyle.oneRioghtHeaderTxtPink}>牝</Text>2</Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>早熟   <Text style={RTapScreensStyle.oneRioghtHeaderTxtGreen}>芝</Text></Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>白毛</Text>
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
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>疲労 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.fatigue) || 'O'}</Text></Text>
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
                      source={require('../../assets/images/horse/21.png')}
                    />
                    :
                    <Image 
                      style={RTapScreensStyle.HorseAvatar}
                      source={require('../../assets/images/horse/22.png')}
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
                      source={require('../../assets/images/horse/21.png')}
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
                      source={require('../../assets/images/horse/22.png')}
                    />
                  )} 
              </View>
            </View>
          </View>
      </ScrollView>
    )
  }
export default StallionHorseTapScreen;