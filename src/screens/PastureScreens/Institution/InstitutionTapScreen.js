import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

// Custom IMPORT
import { ITapButton } from '../../../components/Buttons';
import ScreenLongiField from './InstitutionTapScreens/ScreenLongiField';
import ScreenPasture from './InstitutionTapScreens/ScreenPasture';
import ScreenBlue from './InstitutionTapScreens/ScreenBlue';
import ScreenRoad from './InstitutionTapScreens/ScreenRoad';
import ScreenTruck from './InstitutionTapScreens/ScreenTruck';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const InstitutionTapScreen = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch (activeButton) {
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
        <ITapButton id={1} otherColor={1} isActive={activeButton === 1} label={'牧場'} style={styles.Button1} onPress={handleButtonPress} />
        <ITapButton id={2} otherColor={2} isActive={activeButton === 2} label={'ロンギ場'} style={styles.Button2} onPress={handleButtonPress} />
        <ITapButton id={3} otherColor={3} isActive={activeButton === 3} label={'トラック'} style={styles.Button3} onPress={handleButtonPress} />
        <ITapButton id={4} otherColor={4} isActive={activeButton === 4} label={'坂路'} style={styles.Button4} onPress={handleButtonPress} />
        <ITapButton id={5} otherColor={5} isActive={activeButton === 5} label={'プール'} style={styles.Button5} onPress={handleButtonPress} />
      </View>
      {renderScreenBelowButtons()}
    </View>
  );
};

export default InstitutionTapScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_WIDTH > 400 || SCREEN_HEIGHT > 738 ? vh(30) : vh(28),
    flexDirection: 'column',

  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    height: vh(5),
    paddingBottom: vh(1)
  }

});