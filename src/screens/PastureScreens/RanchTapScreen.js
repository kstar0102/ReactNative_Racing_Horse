import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

// REDUX
import { connect, useDispatch } from 'react-redux';
import { signAction } from '../../store/actions/horse/signAction';
// CUSTOM BUTTON
import { RTapButton } from '../../components/Buttons';
import ScreenOne from './RanchTapScreens/ScreenOne';
import ScreenTwo from './RanchTapScreens/ScreenTwo';
import ScreenThree from './RanchTapScreens/ScreenThree';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const RanchTapScreen = ({ saveData }) => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
    dispatch((signAction()))
  };

  const renderScreenBelowButtons = () => {
    const filtereOneData = saveData.filter(data => data.age === '・0歳馬' || data.age === '・1歳馬');
    const filtereTwoData = saveData.filter(data => data.age === '・2歳馬' || data.age === '・3歳馬');
    const filtereThreedData = saveData.filter(data => data.age === '・繁殖馬');

    switch (activeButton) {
      case 1:
        return <ScreenOne oneData={filtereOneData}/>;
      case 2:
        return <ScreenTwo twoData={filtereTwoData} />;
      case 3:
        return <ScreenThree threeData={filtereThreedData} />;
      default:
        return <ScreenOne oneData={filtereOneData} />;
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
export default connect(mapStateToProps)(RanchTapScreen);

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