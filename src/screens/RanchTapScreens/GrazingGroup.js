import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, ScrollView } from 'react-native';
import { ImageButton } from '../../components/Buttons';
import DetailButton from '../../components/Buttons/DetailButton';
import RTapScreensStyle from './RTapScreensStyle';

const GrazingGroup = () => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: '馬名A', labelValue: 'A', id: 1, sp: 'S+', st: 'D+', fatigue: '△',  instantaneous:'A', guts:'C', temper:'B',  health: 'A', Hair:'栗毛', class:'GIクラス'},
    { label: '馬名B', labelValue: 'B', id: 2, sp: 'S+', st: 'D', fatigue: 'O',  instantaneous:'A+', guts:'C', temper:'B',  health: 'A', Hair:'黑鹿毛', class:'GⅡクラス'},
    { label: '馬名C', labelValue: 'C', id: 3, sp: 'S', st: 'D', fatigue: '▲',  instantaneous:'A', guts:'C+', temper:'B',  health: 'A+', Hair:'栗毛', class:'GⅢクラス'},
 ];
 
    return (
      <ScrollView style={RTapScreensStyle.grazingContainer}>
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
                      <Text style={RTapScreensStyle.label}>スぺシャル</Text>
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
export default GrazingGroup;