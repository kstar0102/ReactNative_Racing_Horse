import React, { useState } from 'react';
import { View, StyleSheet,Alert } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

// REDUX
import { connect } from 'react-redux';
// CUSTOM BUTTON
import { RTapButton } from '../../components/Buttons';
import ScreenOne from './RanchTapScreens/ScreenOne';
import ScreenTwo from './RanchTapScreens/ScreenTwo';
import ScreenThree from './RanchTapScreens/ScreenThree';

const RanchTapScreen = ({allCheckData}) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  
  const renderScreenBelowButtons = () => {
    const filtereOneData = allCheckData.filter(data => data.age === '・0歳馬' || data.age === '・1歳馬');
    const filtereTwoData = allCheckData.filter(data => data.age === '・2歳馬' || data.age === '・3歳馬');
    const filtereThreedData = allCheckData.filter(data => data.age === '・放牧馬');
  
    switch(activeButton) {
      case 1:
        return <ScreenOne oneData={filtereOneData}/>;
      case 2:
        return <ScreenTwo twoData={filtereTwoData}/>;
      case 3:
        return <ScreenThree threeData={filtereThreedData}/>;
      default:
        return <ScreenOne oneData={filtereOneData}/>;
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.Buttons}>
            <RTapButton id={1} isActive={activeButton === 1} label={'0～1歲馬'} style={styles.ButtonT} onPress={handleButtonPress} />
            <RTapButton id={2} isActive={activeButton === 2} label={'2～3歲馬'} style={styles.ButtonM} onPress={handleButtonPress} />
            <RTapButton id={3} isActive={activeButton === 3} label={'放牧馬'} style={styles.ButtonE} onPress={handleButtonPress} />
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
export default connect(mapStateToProps)(RanchTapScreen);

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