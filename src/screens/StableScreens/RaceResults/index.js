import React from 'react';
import { View, ImageBackground } from 'react-native';

// Custom IMPORT
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import StableFooterScreen from '../../LayoutScreen/StableFooterScreen';
import { ReturnButton } from '../../../components/Buttons';
import Screenstyles from '../../ScreenStylesheet';
// TapScreen
import TapScreen from './TapScreen';

const RaceResults = ({navigation}) => {
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../../../assets/images/horse_track/stall.jpg')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen />
        <View>
          <View>
            <View>
              <ReturnButton label="厩 舎" color={1}  onPress={() => navigation.navigate('StallScreen')}/>
            </View>
            <View style={Screenstyles.UPRButton}>
              <ReturnButton label="競走成績" color={1} />
            </View>
          </View>
          <TapScreen/>
        </View>
        <StableFooterScreen/>
      </ImageBackground>
    </View>
  );
};

export default RaceResults;