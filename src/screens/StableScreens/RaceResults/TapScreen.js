import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';
// REDUX
import { connect } from 'react-redux';
// CUSTOM BUTTON
import { RTapButton } from '../../../components/Buttons';
// Tap Screens
import AbroadTap from './TapScreens/AbroadTap';
import MiuraTap from './TapScreens/MiuraTap';
import RittoTap from './TapScreens/RittoTap';

const TapScreen = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch (activeButton) {
      case 2:
        return <MiuraTap />;
      case 4:
        return <RittoTap />;
      case 5:
        return <AbroadTap />;
      default:
        return <MiuraTap />;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.Buttons}>
        <RTapButton id={2} isActive={activeButton === 2} label={'美 浦'} onPress={handleButtonPress} />
        <RTapButton id={4} isActive={activeButton === 4} label={'栗 東'} onPress={handleButtonPress} />
        <RTapButton id={5} isActive={activeButton === 5} label={'海 外'} onPress={handleButtonPress} />
      </View>
      {renderScreenBelowButtons()}
    </View>
  );
};


const mapStateToProps = state => {
  return {
  };
};
export default connect(mapStateToProps)(TapScreen);

const styles = StyleSheet.create({
  container: {
    marginTop: vh(28),
    flexDirection: 'column',

  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    height: vh(5),
  }

});