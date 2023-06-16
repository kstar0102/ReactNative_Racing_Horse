import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import colors from '../../containers/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const RTapButton = ({ id, isActive, onPress, label}) => {
    // const [height, setHeight] = useState(30);
    const handlePress = () => {
        onPress(id);
    };

  return (
    <TouchableOpacity style={[ 
        styles.button, 
        id ==1 ? styles.buttonT : styles.button, 
        id ==2 ? styles.buttonM : styles.button,  
        id ==3 ? styles.buttonE : styles.button,  
        isActive ? styles.activeButton : null,
      
      ]}
        onPress={handlePress}
    >
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RTapButton;

const styles = StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 50,
      width: vw(33.5),
      height: vh(5),
      borderWidth: 1,
    },
    activeButton: {
      height: hp(7.5),
      zIndex: 1000
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 600,
      textAlign: 'center',
    },
    buttonT: {
        backgroundColor: colors.tabButtonFirst,
    },
    buttonM: {
        backgroundColor: colors.tabButtonMiddle
    },
    buttonE: {
        backgroundColor: colors.tabButtonEnd
    },
  
  });