import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { vw,vh  } from 'react-native-expo-viewport-units';
import { ITapButton } from '../../components/Buttons';

import FirstHorseTapScreen from './WorkingHorseTap/FirstHorseTapScreen';
import SecondHorseLisTapScreen from './WorkingHorseTap/SecondHorseLisTapScreen';
import GrazingHorseTapScreen from './WorkingHorseTap/GrazingHorseTapScreen';
import BroodmareHorseTapScreen from './WorkingHorseTap/BroodmareHorseTapScreen';
import StallionHorseTapScreen from './WorkingHorseTap/StallionHorseTapScreen';
import { connect } from 'react-redux';

const WorkingHorseTapScreen = ({allCheckData}) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    const OneData = allCheckData.filter(data => data.age === '・0歳馬' || data.age === '・1歳馬');
    const TwoData = allCheckData.filter(data => data.age === '・2歳馬' || data.age === '・3歳馬');
    const GrazingData = allCheckData.filter(data => data.age === '・放牧馬');

    switch(activeButton) {
      case 1:
        return <FirstHorseTapScreen OneData={OneData} />;
      case 2:
        return <SecondHorseLisTapScreen  TwoData={TwoData}/>;
      case 3:
        return <GrazingHorseTapScreen  GrazingData={GrazingData}/> ;
      case 4:
        return <BroodmareHorseTapScreen />;
      case 5:
        return <StallionHorseTapScreen />;
      default:
        return <FirstHorseTapScreen />;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.Buttons}>
            <ITapButton id={1} isActive={activeButton === 1} label={'0 ~ 1歲'} style={styles.Button1} onPress={handleButtonPress} />
            <ITapButton id={2} isActive={activeButton === 2} label={'2 ~ 3歲'} style={styles.Button2} onPress={handleButtonPress} />
            <ITapButton id={3} isActive={activeButton === 3} label={'放牧馬'} style={styles.Button3} onPress={handleButtonPress} />
            <ITapButton id={4} isActive={activeButton === 4} label={'繁殖馬'} style={styles.Button4} onPress={handleButtonPress} />
            <ITapButton id={5} isActive={activeButton === 5} label={'種牡馬'} style={styles.Button5} onPress={handleButtonPress} />
        </View>     
      {renderScreenBelowButtons()}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    allCheckData: state.horseData.allCheckData
  };
};
export default connect(mapStateToProps)(WorkingHorseTapScreen);

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