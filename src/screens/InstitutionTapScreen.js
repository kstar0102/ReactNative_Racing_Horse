import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import { ITapButton } from '../components/Buttons';

import ScreenLongiField from './InstitutionTapScreens/ScreenLongiField';
import ScreenPasture from './InstitutionTapScreens/ScreenPasture';
import ScreenBlue from './InstitutionTapScreens/ScreenBlue';
import ScreenRoad from './InstitutionTapScreens/ScreenRoad';
import ScreenTruck from './InstitutionTapScreens/ScreenTruck';

const InstitutionTapScreen = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch(activeButton) {
      case 1:
        return <ScreenPasture />;
      case 2:
        return <ScreenLongiField />;
      case 3:
        return <ScreenTruck />;
      case 4:
        return <ScreenRoad />;
      case 5:
        return <ScreenBlue />;
      default:
        return <ScreenPasture />;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.Buttons}>
            <ITapButton id={1} isActive={activeButton === 1} label={'牧場'} style={styles.Button1} onPress={handleButtonPress} />
            <ITapButton id={2} isActive={activeButton === 2} label={'ロンギ場'} style={styles.Button2} onPress={handleButtonPress} />
            <ITapButton id={3} isActive={activeButton === 3} label={'トラック'} style={styles.Button3} onPress={handleButtonPress} />
            <ITapButton id={4} isActive={activeButton === 4} label={'坂路'} style={styles.Button4} onPress={handleButtonPress} />
            <ITapButton id={5} isActive={activeButton === 5} label={'プール'} style={styles.Button5} onPress={handleButtonPress} />
        </View>     
      {renderScreenBelowButtons()}
    </View>
  );
};

export default InstitutionTapScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vh(22),
    flexDirection: 'column',
  
  },
  Buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }

});