import React, { useState } from 'react';
import { View,Text,Image, ScrollView } from 'react-native';
import AvatarButton from '../../../components/Buttons/AvatarButton';
import RTapScreensStyle from '../RTapScreensStyle';
const Ritto = () => {
    return (
      <ScrollView style={RTapScreensStyle.twoContainer}>
         <View style={RTapScreensStyle.ranchContent}>
            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={5}/>
                 </View>
                <View style={RTapScreensStyle.avatarTxt}>
                    <Text> 矢道厩舎</Text>
                    <Text>「世界制覇! 」がモットー!</Text>
                    <Text>「海外レース」が得意!</Text>
                    <Text>「併走」が使用可能 !</Text>
                    <Text>  預託料: 1000Pt/1頭</Text>
                </View>
            </View>

            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={6}/>
                 </View>
                <View style={RTapScreensStyle.avatarTxt}>
                    <Text> 池貝廳舍</Text>
                    <Text>「長時間調教!」 がモットー!</Text>
                    <Text>「長距離」が得意!</Text>
                    <Text>「ブール」が使用可能!</Text>
                    <Text>  預託料: 1000Pt/1頭</Text>
                </View>
            </View>
            
            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={7}/>
                 </View>
                <View style={RTapScreensStyle.avatarTxt}>
                    <Text> 中外田厩舎</Text>
                    <Text>「仕上げ早く!」 がモットー!</Text>
                    <Text>「短距離」が得意!</Text>
                    <Text>「坂路」が使用可能!</Text>
                    <Text>  預託料: 1000Pt/1頭</Text>
                </View>
            </View>

            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={8} disabled={true}/>
                 </View>
                 <View>
                    <Text style={RTapScreensStyle.lockTitle}>? ? ?厩舎</Text>
                    <View style={RTapScreensStyle.avatarTxtLock}>
                        <Image 
                            style={RTapScreensStyle.avatarTxtLock}
                            source={require('../../../assets/images/avatars/icon8.png')} 
                        />
                    </View>
                    
                 </View>
            </View>
         </View>
      </ScrollView>
    )
  }
export default Ritto;