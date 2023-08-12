import React from 'react';
import { Text,StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import colors from '../../containers/colors';

const CountDownTimer = ({secondsRemaining}) => {
  const displayValue = `${secondsRemaining.fCountDownTime.toString().padStart(2, '0')}:${secondsRemaining.sCountDownTime.toString().padStart(2, '0')}:${secondsRemaining.tCountDownTime.toString().padStart(2, '0')}`;

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