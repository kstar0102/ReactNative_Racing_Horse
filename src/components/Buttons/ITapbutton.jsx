import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import colors from '../../containers/colors';

const ITapButton = ({ id, isActive, onPress, label}) => {
    const handlePress = () => {
        onPress(id);
    };

  return (
    <TouchableOpacity style={[ 
        styles.button, 
        id == 1 ? styles.button1 : styles.button, 
        id == 2 ? styles.button2 : styles.button,  
        id == 3 ? styles.button3 : styles.button,  
        id == 4 ? styles.button4 : styles.button,  
        id == 5 ? styles.button5 : styles.button,
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
      borderTopRightRadius: 50,
      width: vw(20),
      height: vh(5),
      borderWidth: 1,
      paddingVertical: 4,
      alignItems: 'center',
      // transform: [{ scaleY: 1 }],
    },
    activeButton: {
      marginTop: -20,
      height: vh(7.8),
      paddingVertical: 14,
      zIndex: 1000
    },
    buttonText: {
      paddingVertical: 5.5,
      marginLeft: -5,
      zIndex: 1000
      // transform: [{ scaleY: 1 }],
    },
    button1: {
        backgroundColor: colors.tabButtonFirst,
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