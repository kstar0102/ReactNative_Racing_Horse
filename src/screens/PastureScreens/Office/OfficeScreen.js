import React from 'react';
import { View, ImageBackground } from 'react-native';
// Custom IMPORT
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import FooterScreen from '../../LayoutScreen/FooterScreen';
import ReturnButtonScreen from '../../../components/someScreen/ReturnButtonScreen';
import Screenstyles from '../../ScreenStylesheet';
import OfficeTapScreen from './OfficeTapScreen';

const OfficeScreen = () => {
  return (
    <View style={Screenstyles.container}>      
      <ImageBackground
        source={require('../../../assets/images/1.png')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen/>
            <View>
              <ReturnButtonScreen BigPlace={"牧 場"} screenName={"事務所"} nviUrl={"PastureScreen"}/>
              <OfficeTapScreen/>
            </View>
            <FooterScreen/>
      </ImageBackground>
    </View>
  );
};
  
export default OfficeScreen;