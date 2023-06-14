import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { HeaderButton } from '../../components/Buttons';
import CountDownTimer from '../../components/CountDownTimer';
import CurrentDateTimeWeather from '../../components/CurrentDateTimeWeather';
import HeaderStylesheet from './HeaderStylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderScreen = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(6000);

  useEffect(() => {
    const loadSecondsRemaining = () => {
      AsyncStorage.getItem('secondsRemaining').then((value) => {
        if (value !== null) {
          AsyncStorage.setItem('secondsRemaining', String(secondsRemaining - 1)); // Save the updated value to AsyncStorage
          if (value <= 0) {
            setSecondsRemaining(21600); // Set default value
          }
        } else {
          setSecondsRemaining(21600); // Set default value
        }
      }).catch((error) => {
        console.log(error);
      });
    };
  
    // Call the function once immediately on mount
    loadSecondsRemaining();
  
    // Use setInterval to call the function every one second
    const intervalId = setInterval(loadSecondsRemaining, 1000);
  
    // Return a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
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
