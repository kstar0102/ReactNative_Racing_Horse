import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import { getCurrentPosition } from 'react-native-geolocation-service';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import colors from '../../containers/colors';

const ITapButton = ({ id, isActive, onPress, label, color, otherColor}) => {
  const handlePress = () => {
        onPress(id);
    };

  return (
    <TouchableOpacity style={[ 
        styles.button, 
        color == 1 ? styles.button1 : styles.button, 
        color == 2 ? styles.button2 : styles.button,  
        color == 3 ? styles.button3 : styles.button,  
        color == 4 ? styles.button4 : styles.button,  
        color == 5 ? styles.button5 : styles.button,
        otherColor == 1 ? styles.button1 : styles.button, 
        otherColor == 2 ? styles.button2 : styles.button,  
        otherColor == 3 ? styles.button3 : styles.button,  
        otherColor == 4 ? styles.button4 : styles.button,  
        otherColor == 5 ? styles.button5 : styles.button,
        isActive ? styles.activeButton : null,]}
        onPress={handlePress}
    >
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ITapButton;



const styles = StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 50,
      width: vw(20),
      height: vh(5),
      borderWidth: 1,
    },
    activeButton: {
      height: hp(7.5),
      zIndex: 1000
    },
    buttonText: {
      fontSize: 15,
      paddingVertical: 5,
      marginLeft: -5,
      zIndex: 1000
    },
    button1: {
        backgroundColor: colors.headerButtonColor,
    },
    button2: {
        backgroundColor: colors.tabButtonMiddle
    },
    button3: {
        backgroundColor: colors.tabButtonEnd
    },
    button4: {
      backgroundColor: colors.IButtonfour
    },
    button5: {
      backgroundColor: colors.IButtonFive
    },
  });