import React, { useState, useEffect, useRef } from 'react';
import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
// Rudux
import { connect } from 'react-redux';
// CUSTOM IMPORT
import { HeaderButton } from '../../components/Buttons';
import CountDownTimer from '../../components/time/CountDownTimer';
import CurrentDateTimeWeather from '../../components/time/CurrentDateTimeWeather';
import HeaderStylesheet from './HeaderStylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderScreen = ({userData}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(21000);
  const [userPt, setUserPt] = useState();
  const [userLevel, setUserLevel] = useState();
  const secondsRemainingRef = useRef(secondsRemaining);

  useEffect(() => {
    setUserPt(userData.user_pt);
    setUserLevel(userData.level);
    AsyncStorage.getItem('secondsRemaining')
      .then(value => {
        if (value !== null) {
          setSecondsRemaining(parseInt(value));
          secondsRemainingRef.current = parseInt(value)
        }
      })
      .catch(error => console.log(error));

    return () => {
      AsyncStorage.setItem('secondsRemaining', String(secondsRemainingRef.current));
    };
  }, [userData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining(prevSeconds => prevSeconds - 1);
      AsyncStorage.setItem('secondsRemaining', String(secondsRemainingRef.current - 1));

      if (secondsRemainingRef.current <= 0) {
        setSecondsRemaining(30);
        secondsRemainingRef.current = 21000;
      } else {
        secondsRemainingRef.current -= 1;
      }

    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
          <Text style={HeaderStylesheet.goldCoinAndLevel}>馬主Lv. {userLevel}</Text>
          <Text style={HeaderStylesheet.goldCoinAndLevel}>資金 {userPt}pt</Text>
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

const mapStateToProps = state => {
  return  state.user
};

export default connect(mapStateToProps)(HeaderScreen);
