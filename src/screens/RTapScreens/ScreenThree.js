import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, ScrollView } from 'react-native';
import DropDownR from '../../components/Buttons/DropDwonR';
import { ImageButton } from '../../components/Buttons';
import DetailButton from '../../components/Buttons/DetailButton';
import RTapScreensStyle from './RTapScreensStyle';
import WorkingButton from '../../components/Buttons/WorkingButtons';

const ScreenThree = () => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: '馬名A', labelValue: 'A', id: 1, sp: 'S+', st: 'D+', fatigue: '△',  instantaneous:'A', guts:'C', temper:'B',  health: 'A', Hair:''},
    { label: '馬名B', labelValue: 'B', id: 2, sp: 'S+', st: 'D', fatigue: 'O',  instantaneous:'A+', guts:'C', temper:'B',  health: 'A', Hair:''},
    { label: '馬名C', labelValue: 'C', id: 3, sp: 'S', st: 'D', fatigue: '▲',  instantaneous:'A', guts:'C+', temper:'B',  health: 'A+', Hair:''},
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
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxtA}>馬名<Text style={RTapScreensStyle.oneRioghtHeaderTxtPink}>{(!!selected && selected.labelValue) || 'A'}</Text></Text>
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
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>SP <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.sp) || 'S+'}</Text></Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>ST <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.st) || 'D+'}</Text></Text>
                  </View>
                  <View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>疲労 <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>{(!!selected && selected.fatigue) || '△'}</Text></Text>
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
                      source={require('../../assets/images/horse/21.png')}
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
                      source={require('../../assets/images/horse/21.png')}
                    />
                  )} 
              </View>
              <View style={RTapScreensStyle.ButtonGroup}>
                <WorkingButton label={'入廐'} colorNumber={2} styleId={1}/>
                <WorkingButton label={'売却'} colorNumber={1} styleId={2}/>
              </View>
            </View>
          </View>
          <View  style={RTapScreensStyle.oneBottomContent}>
            <ImageBackground  style={RTapScreensStyle.BottomBackground} resizeMode="cover"  source={require('../../assets/images/Pasture/background.jpg')}>
                <Image 
                      style={RTapScreensStyle.TitleImage}
                      source={require('../../assets/images/Pasture/background_text.png')}
                  />
              <View style={RTapScreensStyle.ImageButtonTop}>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewB]}>
                      <Text style={RTapScreensStyle.label}>メニュー予約</Text>
                  </View>
                  <ImageButton label={'メニュー予約'} source={require('../../assets/images/Pasture/icon1.png')} id={1}/>
                  <DetailButton label={'育成する'}/>
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewF]}>
                      <Text style={RTapScreensStyle.label}>スベシャル</Text>
                  </View>
                  <ImageButton label={'スベシャル'} source={require('../../assets/images/Pasture/icon9.png')} id={2} disabled={false}/>
                  <DetailButton label={'育成する'} disabled={false}/>
                  {/* <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../assets/images/Pasture/icon8.png')}
                  /> */}
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewT]}>
                      <Text style={RTapScreensStyle.label}>放牧</Text>
                  </View>
                  <ImageButton label={'放牧'} source={require('../../assets/images/Pasture/icon2.png')} id={3}/>
                  <DetailButton label={'育成する'}/>
                </View>
              </View>
              <View style={RTapScreensStyle.ImageButtonMiddle}>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewO]}>
                      <Text style={RTapScreensStyle.label}>芝</Text>
                  </View>
                  <ImageButton label={'芝'} source={require('../../assets/images/Pasture/icon3.png')} id={4}/>
                  <DetailButton label={'育成する'}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteView}>
                      <Text style={RTapScreensStyle.label}>ダート</Text>
                  </View>
                  <ImageButton label={'ダート'} source={require('../../assets/images/Pasture/icon4.png')} id={5}/>
                  <DetailButton label={'育成する'}/>
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewB]}>
                      <Text style={RTapScreensStyle.label}>ウッドチップ</Text>
                  </View>
                  <ImageButton label={'ウッドチップ'} source={require('../../assets/images/Pasture/icon10.png')} id={6}/>
                  <DetailButton label={'育成する'}/>
                </View>
              </View>
              <View style={RTapScreensStyle.ImageButtonBottom}>
                <View>
                  <View style={RTapScreensStyle.absoluteView}>
                      <Text style={RTapScreensStyle.label}>プール</Text>
                  </View>
                  <ImageButton label={'プール'} source={require('../../assets/images/Pasture/icon7.png')} id={7}/>
                  <DetailButton label={'育成する'}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteViewT}>
                      <Text style={RTapScreensStyle.label}>並走</Text>
                  </View>
                  <ImageButton label={'並走'} source={require('../../assets/images/Pasture/icon5.png')} id={8} disabled={true}/>
                  <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../assets/images/Pasture/icon8.png')}
                  />
                  <DetailButton label={'育成する'} disabled={true}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteViewT}>
                      <Text style={RTapScreensStyle.label}>坂路</Text>
                  </View>
                  <ImageButton label={'坂路'} source={require('../../assets/images/Pasture/icon6.png')} id={9} disabled={true}/>
                  <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../assets/images/Pasture/icon8.png')}
                  />
                  <DetailButton label={'育成する'} disabled={true}/>
                </View>
               
              </View>
            </ImageBackground>              
          </View>
      </ScrollView>
    )
  }
export default ScreenThree;