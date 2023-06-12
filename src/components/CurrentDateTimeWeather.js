import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {getRandomWeather} from "../utils/weather";

const CurrentDateTimeWeather = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonth , setCurrentMonth] = useState();
  useEffect(() => {
      const currentDate = new Date();
      setCurrentMonth(currentDate.getMonth()+1);
  },[])
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekNumber = Math.ceil(day / 7);
    setCurrentDate(`${year}年${month}月${weekNumber}週`);
  }, []);

  return (
    <View>
      <Text>{currentDate} ({getRandomWeather(currentMonth)[0]})</Text>
    </View>
  );
};

export default CurrentDateTimeWeather;
