import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, ScrollView } from 'react-native';
import { ImageButton } from '../../../components/Buttons';
import DetailButton from '../../../components/Buttons/DetailButton';
import RTapScreensStyle from './RTapScreensStyle';

const FodderGroup = () => {
    return (
      <ScrollView style={RTapScreensStyle.grazingContainer}>
          <View  style={RTapScreensStyle.oneBottomContent}>
            <ImageBackground  style={RTapScreensStyle.BottomBackground} resizeMode="cover"  source={require('../../../assets/images/Pasture/background.jpg')}>
                <Image 
                      style={RTapScreensStyle.TitleImage}
                      source={require('../../../assets/images/Fodder/fodder.png')}
                  />
              <View style={RTapScreensStyle.ImageButtonTop}>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewF]}>
                      <Text style={RTapScreensStyle.label}>にんじん</Text>
                  </View>
                  <ImageButton label={'にんじん'} source={require('../../../assets/images/Fodder/carrot.png')} id={1}/>
                  <DetailButton label={'育成する'} id={1}/>
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewC]}>
                      <Text style={RTapScreensStyle.label}>Sドリンク3</Text>
                  </View>
                  <ImageButton label={'スベシャル'} source={require('../../../assets/images/Fodder/source.png')} id={0}/>
                  <DetailButton label={'育成する'} disabled={false} id={2}/>
                  {/* <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../../assets/images/Pasture/icon8.png')}
                  /> */}
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewC]}>
                      <Text style={RTapScreensStyle.label}>プロテイン</Text>
                  </View>
                  <ImageButton label={'プロテイン'} source={require('../../../assets/images/Fodder/protein.png')} id={3}/>
                  <DetailButton label={'育成する'} id={3}/>
                </View>
              </View>
              <View style={RTapScreensStyle.ImageButtonMiddle}>
                <View>
                  <View style={[RTapScreensStyle.absoluteView]}>
                      <Text style={RTapScreensStyle.label}>角砂糖</Text>
                  </View>
                  <ImageButton label={'角砂糖'} source={require('../../../assets/images/Pasture/icon3.png')} id={4}/>
                  <DetailButton label={'育成する'} id={4}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteView}>
                      <Text style={RTapScreensStyle.label}>チョコ</Text>
                  </View>
                  <ImageButton label={'チョコ'} source={require('../../../assets/images/Pasture/icon4.png')} id={5}/>
                  <DetailButton label={'育成する'} id={5}/>
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteView]}>
                      <Text style={RTapScreensStyle.label}>ケーキ</Text>
                  </View>
                  <ImageButton label={'ケーキ'} source={require('../../../assets/images/Pasture/icon10.png')} id={6}/>
                  <DetailButton label={'育成する'} id={6}/>
                </View>
              </View>
              <View style={RTapScreensStyle.ImageButtonBottom}>
                <View>
                  <View style={RTapScreensStyle.absoluteViewT}>
                      <Text style={RTapScreensStyle.label}>? ? ?</Text>
                  </View>
                  <ImageButton label={'プール'} source={require('../../../assets/images/Pasture/icon7.png')} id={7} />
                  <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../../assets/images/Pasture/icon8.png')}
                  />
                  <DetailButton label={'育成する'} disabled={true}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteViewT}>
                      <Text style={RTapScreensStyle.label}>? ? ?</Text>
                  </View>
                  <ImageButton label={'併走'} source={require('../../../assets/images/Pasture/icon5.png')} id={8} disabled={true}/>
                  <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../../assets/images/Pasture/icon8.png')}
                  />
                  <DetailButton label={'育成する'} disabled={true}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteViewT}>
                      <Text style={RTapScreensStyle.label}>? ? ?</Text>
                  </View>
                  <ImageButton label={'坂路'} source={require('../../../assets/images/Pasture/icon6.png')} id={9} disabled={true}/>
                  <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../../assets/images/Pasture/icon8.png')}
                  />
                  <DetailButton label={'育成する'} disabled={true}/>
                </View>
               
              </View>
            </ImageBackground>              
          </View>
      </ScrollView>
    )
  }
export default FodderGroup;