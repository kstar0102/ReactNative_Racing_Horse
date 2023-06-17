import React, { useState } from 'react';
import { View,Text, Image, ScrollView } from 'react-native';
import AvatarButton from '../../../components/Buttons/AvatarButton';
import RTapScreensStyle from '../RTapScreensStyle';
const AbroadScreen = () => {
    return (
      <ScrollView style={RTapScreensStyle.twoContainer}>
         <View style={RTapScreensStyle.ranchContent}>
            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={1}/>
                 </View>
                <View style={RTapScreensStyle.avatarTxt}>
                    <Text> 国沢厩舎</Text>
                    <Text>「馬を大切に!」がモットー !</Text>
                    <Text>「GIレース」が得意!</Text>
                    <Text>「併走」が使用可能!</Text>
                    <Text>  預託料: 1000Pt/1頭</Text>
                </View>
            </View>

            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={2}/>
                 </View>
                <View style={RTapScreensStyle.avatarTxt}>
                    <Text> 堀塚厩舎</Text>
                    <Text>「じっくりと!」がモットー!</Text>
                    <Text>「晩成馬」が得意!</Text>
                    <Text>「ブール」が使用可能!</Text>
                    <Text>  預託料:1000Pt/1頭</Text>
                </View>
            </View>
            
            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={3}/>
                 </View>
                <View style={RTapScreensStyle.avatarTxt}>
                    <Text> 木藤厩舎</Text>
                    <Text>「スパルタ!」がモットー!</Text>
                    <Text>「ダート馬」が得意!</Text>
                    <Text>「坂路」が使用可能!</Text>
                    <Text>  預託料: 1000Pt/1頭</Text>
                </View>
            </View>

            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={4} disabled={true}/>
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
export default AbroadScreen;