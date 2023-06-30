import React from 'react';
import { View, ImageBackground } from 'react-native';
// Custom IMPORT
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import { ReturnButton } from '../../../components/Buttons';
import Screenstyles from '../../ScreenStylesheet';
import TapScreen from './TapScreen';

const Training = ({navigation}) => {
  return (
    <View style={Screenstyles.container}>      
      <ImageBackground
        source={require('../../../assets/images/horse_track/stall.jpg')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen/>
            <View style={Screenstyles.UPContainer}>
              <View style={Screenstyles.UPcontent}>
                <View>
                  <ReturnButton label="牧 場" onPress={() => navigation.navigate('StallScreen')}/>
                </View>
                <View style={Screenstyles.UPRButton}>
                    <ReturnButton label="育 成"/>
                </View>
              </View>
              <TapScreen/>
            </View>
      </ImageBackground>
    </View>
  );
};
  
export default Training;