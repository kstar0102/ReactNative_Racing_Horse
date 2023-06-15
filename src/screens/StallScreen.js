import React from 'react';
import { View, ImageBackground} from 'react-native';
// Custom Import 
import HeaderScreen from './LayoutScreen/HeaderScreen';
import FooterScreen from './LayoutScreen/FooterScreen';
import { CustomButtons, ReturnButton } from '../components/Buttons';
import Screenstyles from '../screens/ScreenStylesheet';

const StallScreen = ({navigation}) => {
  return (
    <View style={Screenstyles.container}>
         
      <ImageBackground
        source={require('../assets/images/horse_track/stall.jpg')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen/>
            <ReturnButton label="牧  場" color={1} onPress={() => navigation.navigate('TopScreen')}/>
            <View style={Screenstyles.containers}>
              <View style={Screenstyles.content}>
                  <CustomButtons label="育 成" color={1} onPress={() => navigation.navigate('UpbringingScreen')}/>
                  <CustomButtons label="繁用馬"color={1}  onPress={() => navigation.navigate('WorkingHorseScreen')}/>
                  <CustomButtons label="事務所"color={1} onPress={() => navigation.navigate('OfficeScreen')}/>
              </View>
              <View style={Screenstyles.content}>
                  <CustomButtons label="施 設" color={1} onPress={() => navigation.navigate('InstitutionScreen')}/>
                  <CustomButtons label="競馬場" color={1} onPress={() => navigation.navigate('RacetrackScreen')}/>
                  <CustomButtons label="種 付" color={1} />
              </View>
            </View>
            <FooterScreen/>
      </ImageBackground>
    </View>
  );
};

export default StallScreen;