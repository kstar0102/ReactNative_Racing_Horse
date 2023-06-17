import React from 'react';
import { View, ImageBackground} from 'react-native';
// Custom Import 
import HeaderScreen from './LayoutScreen/HeaderScreen';
import StableFooterScreen from './LayoutScreen/StableFooterScreen';
import { CustomButtons, ReturnButton } from '../components/Buttons';
import Screenstyles from '../screens/ScreenStylesheet';

const StableScreen = ({navigation}) => {
  return (
    <View style={Screenstyles.container}>
         
      <ImageBackground
        source={require('../assets/images/horse_track/stall.jpg')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen/>
            <ReturnButton label="厩 舎" color={1} onPress={() => navigation.navigate('TopScreen')}/>
            <View style={Screenstyles.containers}>
              <View style={Screenstyles.content}>
                  <CustomButtons label="調 教" color={1} onPress={() => navigation.navigate('Training')}/>
                  <CustomButtons label="騎手育成"color={1}/>
                  <CustomButtons label="競馬場"color={1}/>
              </View>
              <View style={Screenstyles.content}>
                  <CustomButtons label="出走登錄" color={1} onPress={() => navigation.navigate('RaceRegistation')}/>
                  <CustomButtons label="施 設" color={1}/>
                  <CustomButtons label="競争成績" color={1}/>
              </View>
            </View>
              <StableFooterScreen/>
      </ImageBackground>
    </View>
  );
};

export default StableScreen;