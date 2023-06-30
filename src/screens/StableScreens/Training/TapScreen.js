import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { vh } from 'react-native-expo-viewport-units'

// REDUX
import { connect, useDispatch } from 'react-redux';
import { signAction } from '../../../store/actions/horse/signAction';
// CUSTOM BUTTON
import { RTapButton } from '../../../components/Buttons';
import OneHorseTap from './TapScreens/OneHorseTap';
import ThreeHorseTap from './TapScreens/ThreeHorseTap';
import GrazingHorseTap from './TapScreens/GrazingHorseTap';

const TapScreen = ({ saveData }) => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
    dispatch((signAction()))
  };

  const renderScreenBelowButtons = () => {
    const filtereOneData = saveData.filter(data => data.age === '・0歳馬' || data.age === '・1歳馬');
    const filtereTwoData = saveData.filter(data => data.age === '・2歳馬' || data.age === '・3歳馬');
    const filtereThreedData = saveData.filter(data => data.age === '・放牧馬');

    switch (activeButton) {
      case 1:
        return <OneHorseTap oneData={filtereOneData}/>;
      case 2:
        return <ThreeHorseTap twoData={filtereTwoData} />;
      case 3:
        return <GrazingHorseTap threeData={filtereThreedData} />;
      default:
        // return <oneHorseTap oneData={filtereOneData} />;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.Buttons}>
        <RTapButton id={1} isActive={activeButton === 1} label={'0～1歲馬'} onPress={handleButtonPress} />
        <RTapButton id={2} isActive={activeButton === 2} label={'2～3歲馬'} onPress={handleButtonPress} />
        <RTapButton id={3} isActive={activeButton === 3} label={'放牧馬'} onPress={handleButtonPress} />
      </View>
      {renderScreenBelowButtons()}
    </View>
  );
};


const mapStateToProps = state => {
  return {
    saveData: state.horseData.saveData,
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
    paddingBottom: vh(1)
  }

});