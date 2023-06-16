import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import colors from '../containers/colors';
import { ITapButton } from '../components/Buttons';

import BreedingHorseScreen from './OfficeTapScreen/BreedingHorseScreen';
import KnightScreen from './OfficeTapScreen/KnightScreen';
import RaceHorseScreen from './OfficeTapScreen/RaceHorseScreen';
import SaintScreen from './OfficeTapScreen/SaintScreen';
import StallionScreen from './OfficeTapScreen/StallionScreen';

const OfficeTapScreen = () => {
  const [activeButton, setActiveButton] = useState(3);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch(activeButton) {
      case 1:
        return <RaceHorseScreen />;
      case 2:
        return <KnightScreen />;
      case 3:
        return <SaintScreen /> ;
      case 4:
        return <BreedingHorseScreen />;
      case 5:
        return <StallionScreen />;
      default:
        return <SaintScreen />;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.Buttons}>
            <ITapButton id={3} isActive={activeButton === 3} label={'戦績'} style={styles.Button1} onPress={handleButtonPress} />
            <ITapButton id={2} isActive={activeButton === 2} label={'騎手'} style={styles.Button2} onPress={handleButtonPress} />
            <ITapButton id={1} isActive={activeButton === 1} label={'競争馬'} style={styles.Button3} onPress={handleButtonPress} />
            <ITapButton id={4} isActive={activeButton === 4} label={'繁殖馬'} style={styles.Button4} onPress={handleButtonPress} />
            <ITapButton id={5} isActive={activeButton === 5} label={'種牡馬'} style={styles.Button5} onPress={handleButtonPress} />
        </View>     
      {renderScreenBelowButtons()}
    </View>
  );
};

export default OfficeTapScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vh(28),
    flexDirection: 'column',
  
  },
  Buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    height: vh(5),
    paddingBottom: vh(1)
  }

});