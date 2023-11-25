import React, { useState, useEffect, useRef } from "react";
import { Text, View, SafeAreaView, ImageBackground } from "react-native";
import { connect, useDispatch } from "react-redux";
import { countDownAction } from "../../store/actions/gameTime/countDownAction";
import { HeaderButton } from "../../components/Buttons";
import CountDownTimer from "../../components/time/CountDownTimer";
import CurrentDateTimeWeather from "../../components/time/CurrentDateTimeWeather";
import HeaderStylesheet from "./HeaderStylesheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";

import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: "b0984f99df92877ed6f2",
  cluster: "mt1",
  forceTLS: false,
  wsHost: "192.168.144.23",
  wsPort: 6001,
  disableStats: true,
});

export const calculateGameDate = (time) => {
  const startCalTime = new Date("2023-06-25");
  const startTime = new Date("2023-04-01");
  let currentGameSecond = (time - startCalTime) * 14;
  const currentDateMilliseconds = startTime.getTime() + currentGameSecond;
  let currentDate = new Date(currentDateMilliseconds);
  return currentDate;
};

const HeaderScreen = ({
  userData,
  fCountDownTime,
  sCountDownTime,
  tCountDownTime,
}) => {
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
    
    window.Echo.channel('user-point-data')
        .listen('UserPointEvent', (e) => {
            if (userData.id == e.user_id) {
              setUserPt(e.amount);

              Toast.show("馬が売却されました。", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.TOP,
                backgroundColor: 'green',
              });
            }
        }
    );

  }, [userData]);

  useEffect(() => {
    setUserPt(userData.user_pt);
    setUserLevel(userData.level);
    return () => {
      AsyncStorage.setItem(
        "secondsRemaining",
        String(secondsRemainingRef.current)
      );
    };
  }, [userData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      var d = new Date();
      const hour = d.getHours();
      const minute = d.getMinutes();
      const second = d.getSeconds();

      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      setThirdRemaining((prevSeconds) => prevSeconds - 1);
      setFourthRemaining((prevSeconds) => prevSeconds - 1);

      let starttime = 9;
      let endtime = 21;

      if (hour >= starttime && hour < endtime) {
        dispatch(
          countDownAction(
            String(20 - hour),
            String(60 - minute),
            String(60 - second)
          )
        );
      } else {
        let inputHour = "";
        if (hour >= 21) {
          inputHour = 32 - hour;
        } else {
          inputHour = 8 - hour;
        }
        dispatch(
          countDownAction(
            String(inputHour),
            String(60 - minute),
            String(60 - second)
          )
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={HeaderStylesheet.container}>
      <View style={HeaderStylesheet.headerContentStart}>
        <Text style={HeaderStylesheet.weatherCurrent}>
          {<CurrentDateTimeWeather gameTime={calculateGameDate(currentTime)} />}
        </Text>
        <ImageBackground
          source={require("../../assets/images/headerLogo.jpg")}
          style={HeaderStylesheet.headerLogo}
        >
          <Text style={HeaderStylesheet.goldCoinAndLevel}>
            馬主Lv. {userLevel}
          </Text>
          <Text style={HeaderStylesheet.goldCoinAndLevel}>資金 {userPt}pt</Text>
        </ImageBackground>
      </View>

      <View style={HeaderStylesheet.headerContentMidle}>
        <Text style={HeaderStylesheet.destination}>レース発走まで あと</Text>
        <Text style={HeaderStylesheet.currentTime}>
          <CountDownTimer
            secondsRemaining={{
              fCountDownTime,
              sCountDownTime,
              tCountDownTime,
            }}
          />
        </Text>
      </View>

      <View style={HeaderStylesheet.headerContentEnd}>
        <HeaderButton label="予想バトル" />
        <HeaderButton label="マニュアル" />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    fCountDownTime: state.countDownTime.fCountDown,
    sCountDownTime: state.countDownTime.sCountDown,
    tCountDownTime: state.countDownTime.tCountDown,
  };
};

export default connect(mapStateToProps)(HeaderScreen);
