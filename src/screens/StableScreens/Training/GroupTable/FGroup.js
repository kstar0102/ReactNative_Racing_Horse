import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, ScrollView } from 'react-native';

import { ImageButton } from '../../../../components/Buttons';
import DetailButton from '../../../../components/Buttons/DetailButton';
import RTapScreensStyle from '../../../PastureScreens/RanchTapScreens/RTapScreensStyle';

const FGroup = ({horseId}) => {
    return (
      <ScrollView style={RTapScreensStyle.grazingContainer}>
          <View  style={RTapScreensStyle.oneBottomContent}>
            <ImageBackground  style={RTapScreensStyle.BottomBackground} resizeMode="cover"  source={require('../../../../assets/images/Pasture/background.jpg')}>
                <Image 
                      style={RTapScreensStyle.TitleImage}
                      source={require('../../../../assets/images/Fodder/fodder.png')}
                  />
              <View style={RTapScreensStyle.ImageButtonTop}>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewA]}>
                      <Text style={RTapScreensStyle.label}>にんじん</Text>
                  </View>
                  <ImageButton label={'にんじん'} source={require('../../../../assets/images/Fodder/carrot.png')} id={1}/>
                  <DetailButton label={'調子回復'} id={1} name={'にんじん'} horseId={horseId}  flag={"upbring"}/>
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewC]}>
                      <Text style={RTapScreensStyle.label}>Sドリンク</Text>
                  </View>
                  <ImageButton label={'Sドリンク'} source={require('../../../../assets/images/Fodder/source.png')} id={0}/>
                  <DetailButton label={'調子回復'} disabled={false} id={2}  name={'Sドリンク'} horseId={horseId} flag={"upbring"}/>
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteViewC]}>
                      <Text style={RTapScreensStyle.label}>プロテイン</Text>
                  </View>
                  <ImageButton label={'プロテイン'} source={require('../../../../assets/images/Fodder/protein.png')} id={3}/>
                  <DetailButton label={'調子回復'} id={3} name={'プロテイン'} horseId={horseId}  flag={"upbring"}/>
                </View>
              </View>
              <View style={RTapScreensStyle.ImageButtonMiddle}>
                <View>
                  <View style={[RTapScreensStyle.absoluteView]}>
                      <Text style={RTapScreensStyle.label}>角砂糖</Text>
                  </View>
                  <ImageButton label={'角砂糖'} source={require('../../../../assets/images/Fodder/角砂糖2.png')} id={4}/>
                  <DetailButton label={'疲労回復'} id={4} name={'角砂糖'} horseId={horseId}  flag={"upbring"}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteView}>
                      <Text style={RTapScreensStyle.label}>チョコ</Text>
                  </View>
                  <ImageButton label={'チョコ'} source={require('../../../../assets/images/Fodder/チョコ.png')} id={5}/>
                  <DetailButton label={'疲労回復'} id={5} name={'チョコ'} horseId={horseId}  flag={"upbring"}/>
                </View>
                <View>
                  <View style={[RTapScreensStyle.absoluteView]}>
                      <Text style={RTapScreensStyle.label}>ケーキ</Text>
                  </View>
                  <ImageButton label={'ケーキ'} source={require('../../../../assets/images/Fodder/ケーキ.png')} id={6}/>
                  <DetailButton label={'疲労回復'} id={6} name={'ケーキ'} horseId={horseId}  flag={"upbring"}/>
                </View>
              </View>
              <View style={RTapScreensStyle.ImageButtonBottom}>
                <View>
                  <View style={RTapScreensStyle.absoluteViewT}>
                      <Text style={RTapScreensStyle.label}>? ? ?</Text>
                  </View>
                  <ImageButton label={'プール'} source={require('../../../../assets/images/Pasture/icon7.png')} id={7} />
                  <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../../../assets/images/Pasture/icon8.png')}
                  />
                  <DetailButton label={'????'} disabled={true} name={'プール'} horseId={horseId}  flag={"upbring"}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteViewT}>
                      <Text style={RTapScreensStyle.label}>? ? ?</Text>
                  </View>
                  <ImageButton label={'併走'} source={require('../../../../assets/images/Pasture/icon5.png')} id={8} disabled={true}/>
                  <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../../../assets/images/Pasture/icon8.png')}
                  />
                  <DetailButton label={'????'} disabled={true} name={'併走'} horseId={horseId}  flag={"upbring"}/>
                </View>
                <View>
                  <View style={RTapScreensStyle.absoluteViewT}>
                      <Text style={RTapScreensStyle.label}>? ? ?</Text>
                  </View>
                  <ImageButton label={'坂路'} source={require('../../../../assets/images/Pasture/icon6.png')} id={9} disabled={true}/>
                  <Image 
                    style={RTapScreensStyle.LongiIcon}
                    source={require('../../../../assets/images/Pasture/icon8.png')}
                  />
                  <DetailButton label={'????'} disabled={true} name={'坂路'} horseId={horseId}  flag={"upbring"}/>
                </View>
               
              </View>
            </ImageBackground>              
          </View>
      </ScrollView>
    )
  }
export default FGroup;