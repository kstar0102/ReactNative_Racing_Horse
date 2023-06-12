import React from 'react';
import { View, ImageBackground } from 'react-native';
// Custom IMPORT
import HeaderScreen from '../screens/LayoutScreen/HeaderScreen';
import { ReturnButton, AnimationButton } from '../components/Buttons';
import Screenstyles from '../screens/ScreenStylesheet';
import RanchTapScreen from './RanchTapScreen';

const UpbringingScreen = ({navigation}) => {
  return (
    <View style={Screenstyles.container}>      
      <ImageBackground
        source={require('../assets/images/1.png')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen/>
            <View style={Screenstyles.UPContainer}>
              <View style={Screenstyles.UPcontent}>
                <View>
                  <ReturnButton label="牧 場" onPress={() => navigation.navigate('TopScreen')}/>
                </View>
                <View style={Screenstyles.UPRButton}>
                    <ReturnButton label="育 成" onPress={() => navigation.navigate('PastureScreen')}/>
                </View>
              </View>
              <RanchTapScreen/>
            </View>
      </ImageBackground>
    </View>
  );
};
  
export default UpbringingScreen;