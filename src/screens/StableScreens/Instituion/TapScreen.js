import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

// Custom IMPORT
import { ITapButton } from '../../../components/Buttons';
import PastureTap from './TapScreens/PastureTap';
import PoolTap from './TapScreens/PoolTap';
import RanchTap from './TapScreens/RanchTap';
import SlopeTap from './TapScreens/SlopeTap';
import TruckTap from './TapScreens/TruckTap';

const TapScreen = () => {
  const [activeButton, setActiveButton] = useState(3);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch(activeButton) {
      case 3:
        return <PastureTap />;
      case 2:
        return <RanchTap />;
      case 1:
        return <TruckTap />;
      case 4:
        return <SlopeTap />;
      case 5:
        return <PoolTap />;
      default:
        return <PastureTap />;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.Buttons}>
            <ITapButton id={3} color={3} isActive={activeButton === 3} label={'厩 舎'} onPress={handleButtonPress} />
            <ITapButton id={2} color={5} isActive={activeButton === 2} label={'ロンギ場'} onPress={handleButtonPress} />
            <ITapButton id={1} color={4} isActive={activeButton === 1} label={'トラック'} onPress={handleButtonPress} />
            <ITapButton id={4} color={2} isActive={activeButton === 4} label={'坂路'} onPress={handleButtonPress} />
            <ITapButton id={5} color={1} isActive={activeButton === 5} label={'プール'} onPress={handleButtonPress} />
        </View>     
      {renderScreenBelowButtons()}
    </View>
  );
};

export default TapScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vh(6),
    flexDirection: 'column',
  
  },
  Buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    height: vh(5),
  }

});