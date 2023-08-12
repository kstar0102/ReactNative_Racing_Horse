import React, { useState, useEffect, useRef } from 'react';
import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
// Rudux
import { connect, useDispatch } from 'react-redux';
import { gameTimeAction } from '../../store/actions/gameTime/gameTimeAction';
import { countDownAction } from '../../store/actions/gameTime/countDownAction';
// CUSTOM IMPORT
import { HeaderButton } from '../../components/Buttons';
import CountDownTimer from '../../components/time/CountDownTimer';
import CurrentDateTimeWeather from '../../components/time/CurrentDateTimeWeather';
import HeaderStylesheet from './HeaderStylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const calculateGameDate = (time) => {
  const startCalTime = new Date("2023-06-25");
  const startTime = new Date("2023-04-01");
  let currentGameSecond = (time - startCalTime)*14;
  const currentDateMilliseconds = startTime.getTime() + currentGameSecond;
  let currentDate = new Date(currentDateMilliseconds);
  //dispatch(gameTimeAction(currentDate));
  return currentDate;
};


const HeaderScreen = ({userData, fCountDownTime, sCountDownTime, tCountDownTime}) => {
  const dispatch = useDispatch();
  const [secondsRemaining, setSecondsRemaining] = useState(33000);
  const [thirdRemaining, setThirdRemaining] = useState(60000);
  const [fourthRemaining, setFourthRemaining] = useState(43200);
  const [userPt, setUserPt] = useState();
  const [userLevel, setUserLevel] = useState();
  const secondsRemainingRef = useRef(secondsRemaining);
  const thirdRemainingRef = useRef(thirdRemaining);
  const fourthRemainingRef = useRef(fourthRemaining);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setUserPt(userData.user_pt);
    setUserLevel(userData.level);
      
    return () => {
      AsyncStorage.setItem('secondsRemaining', String(secondsRemainingRef.current));
    };
  }, [userData]);


  useEffect(() => {
    
   
    
   
    const intervalId = setInterval(() => {

      var d = new Date();
      const hour = d.getHours();
      const minute = d.getMinutes();
      const second = d.getSeconds();

      setSecondsRemaining(prevSeconds => prevSeconds - 1);
      setThirdRemaining(prevSeconds => prevSeconds - 1);
      setFourthRemaining(prevSeconds => prevSeconds - 1);

      let starttime = 9;
      let endtime = 21;
      
      if(starttime <= hour <= endtime){
        dispatch(countDownAction(String(20 - hour), String(60 - minute), String(60 - second)));
      }
      else{
        let inputHour = '';
        if(hour >= 21){
          inputHour = 30 - hour;
        }
        else{
          inputHour = 9 - hour;
        }
        dispatch(countDownAction(String(inputHour), String(60 - minute), String(60 - second)));
      }
      
      if (secondsRemainingRef.current <= 0 || thirdRemainingRef.current <= 0 || fourthRemainingRef.current <= 0) {
        setSecondsRemaining(43200);
        setThirdRemaining(43200);
        setFourthRemaining(43200);
        secondsRemainingRef.current = 43200;
        thirdRemainingRef.current = 43200;
        fourthRemainingRef.current = 43200;
      } else {
        secondsRemainingRef.current -= 1;
        thirdRemainingRef.current -= 1;
        fourthRemainingRef.current-= 1;
      }
      setCurrentTime(new Date());

    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <SafeAreaView style={HeaderStylesheet.container}>
      {/* Header Start */}
      <View style={HeaderStylesheet.headerContentStart}>
        <Text style={HeaderStylesheet.weatherCurrent}>
          {<CurrentDateTimeWeather gameTime = {calculateGameDate(currentTime)} />}
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
          <CountDownTimer secondsRemaining={{fCountDownTime, sCountDownTime, tCountDownTime}} />
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
  return{
    userData: state.user.userData,
    fCountDownTime: state.countDownTime.fCountDown,
    sCountDownTime: state.countDownTime.sCountDown,
    tCountDownTime: state.countDownTime.tCountDown,
  }  
};

export default connect(mapStateToProps)(HeaderScreen);
