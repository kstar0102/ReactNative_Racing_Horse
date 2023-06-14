import React from 'react';
import { Text,StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import colors from '../containers/colors';

const CountDownTimer = ({secondsRemaining}) => {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const displayValue = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <Text style={styles.currentHourStyle}>{displayValue}</Text>
  );
};

export default CountDownTimer;

const styles = StyleSheet.create({
  currentHourStyle:{
    fontSize: wp(3) + hp(4),
    color: colors.white,
  }
})