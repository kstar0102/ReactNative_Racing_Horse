import React, { useState } from 'react';
import { View,Text,Image, ScrollView } from 'react-native';
import AvatarButton from '../../../components/Buttons/AvatarButton';
import RTapScreensStyle from '../RTapScreensStyle';
const MiuraScreen = () => {
    return (
      <ScrollView style={RTapScreensStyle.twoContainer}>
         <View style={RTapScreensStyle.ranchContent}>
         <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={9} disabled={true}/>
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

            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={10} disabled={true}/>
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
            
            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={11} disabled={true}/>
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

            <View style={RTapScreensStyle.avatarGroup}>
                <View style={RTapScreensStyle.avatar}>
                    <AvatarButton id={12} disabled={true}/>
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
export default MiuraScreen;