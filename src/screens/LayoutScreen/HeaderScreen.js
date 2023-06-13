import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { HeaderButton } from '../../components/Buttons';
import CountDownTimer from '../../components/CountDownTimer';
import CurrentDateTimeWeather from '../../components/CurrentDateTimeWeather';
import HeaderStylesheet from './HeaderStylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderScreen = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(21000);

  useEffect(() => {
    // Set the saved value of `secondsRemaining` as the initial state when the component mounts.
    AsyncStorage.getItem('secondsRemaining').then((value) => {
      if (value !== null) {
        setSecondsRemaining(parseInt(value));
      }
      else if(value <= 0){
        setSecondsRemaining(21000); // Set default value
      }
      else {
        setSecondsRemaining(21000); // Set default value
      }
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      AsyncStorage.setItem('secondsRemaining', String(secondsRemaining - 1)); // Save the updated value to AsyncStorage
    }, 1000);
  
    return () => clearInterval(intervalId);
  });
  
  return (
    <SafeAreaView style={HeaderStylesheet.container}>
      {/* Header Start */}
      <View style={HeaderStylesheet.headerContentStart}>
        <Text style={HeaderStylesheet.weatherCurrent}>
          {<CurrentDateTimeWeather />}
        </Text>
        <ImageBackground
          source={require('../../assets/images/headerLogo.jpg')}
          style={HeaderStylesheet.headerLogo}
        >
          <Text style={HeaderStylesheet.goldCoinAndLevel}>馬主Lv. 100 </Text>
          <Text style={HeaderStylesheet.goldCoinAndLevel}>資金 50,000pt</Text>
        </ImageBackground>
      </View>
      {/* Header Midle */}
      <View style={HeaderStylesheet.headerContentMidle}>
        <Text style={HeaderStylesheet.destination}>
          レース発走まで あと
        </Text>
        <Text style={HeaderStylesheet.currentTime}>
          <CountDownTimer secondsRemaining={secondsRemaining} />
        </Text>
      </View>
      {/* Header End BUTTONS TWO */}
      <View style={HeaderStylesheet.headerContentEnd}>
        <HeaderButton label="予想バトル" />
        <HeaderButton label="マニュアル" />
      </View>
    </SafeAreaView>
  );
};

export default HeaderScreen;
