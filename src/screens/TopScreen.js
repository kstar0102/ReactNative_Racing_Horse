import React from 'react';
import { View, ImageBackground } from 'react-native';
// Custom IMPORT
import { CustomButtons } from '../components/Buttons';
import HeaderScreen from './LayoutScreen/HeaderScreen'
import Screenstyles from '../screens/ScreenStylesheet';
import { connect } from 'react-redux';
const TopScreen = ({navigation, pasture}) => {
  return (
    <View style={Screenstyles.container}>      
      <ImageBackground
        source={require('../assets/images/1.png')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen/>
            <View style={Screenstyles.containers}>
              <View style={Screenstyles.content}>
                  <CustomButtons label="牧 場" onPress={pasture ? () => navigation.navigate('PastureScreen') : () => navigation.navigate('PastureNameScreen')}/>
                  <CustomButtons label="競馬場"/>
                  <CustomButtons label="ランキング"/>
              </View>
              <View style={Screenstyles.content}>
                  <CustomButtons label="厩 舎" onPress={() => navigation.navigate('StallScreen')}/>
                  <CustomButtons label="セ リ"/>
                  <CustomButtons label="V I P" disabled={true}/>
              </View>
            </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  return {
      pasture: state.auth.pasture
  };
};

export default connect(mapStateToProps)(TopScreen);