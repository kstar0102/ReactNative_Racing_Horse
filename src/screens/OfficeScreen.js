import React from 'react';
import { View, ImageBackground } from 'react-native';
// Custom IMPORT
import HeaderScreen from '../screens/LayoutScreen/HeaderScreen';
import { ReturnButton, AnimationButton } from '../components/Buttons';
import Screenstyles from './ScreenStylesheet';
import OfficeTapScreen from './OfficeTapScreen';

const OfficeScreen = ({navigation}) => {
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
                    <ReturnButton label="事務所" onPress={() => navigation.navigate('PastureScreen')}/>
                </View>
              </View>
              <OfficeTapScreen/>
            </View>
      </ImageBackground>
    </View>
  );
};
  
export default OfficeScreen;