import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import { RTapButton } from '../../../components/Buttons';

import AbroadScreen from './AbroadScreen';
import Ritto from './RittoScreen';
import MiuraScreen from './MiuraScreen';

const AvatarTapScreen = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch(activeButton) {
      case 1:
        return <AbroadScreen />;
      case 2:
        return <Ritto />;
      case 3:
        return <MiuraScreen />;
      default:
        return <AbroadScreen />;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.Buttons}>
            <RTapButton id={1} isActive={activeButton === 1} label={'美浦'} style={styles.ButtonT} onPress={handleButtonPress} />
            <RTapButton id={2} isActive={activeButton === 2} label={'栗東'} style={styles.ButtonM} onPress={handleButtonPress} />
            <RTapButton id={3} isActive={activeButton === 3} label={'海外'} style={styles.ButtonE} onPress={handleButtonPress} />
        </View>     
      {renderScreenBelowButtons()}
    </View>
  );
};

export default AvatarTapScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vh(5),
    flexDirection: 'column',
    
  },
  Buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    height: vh(5.5),
    paddingBottom: vh(1)
  }

});