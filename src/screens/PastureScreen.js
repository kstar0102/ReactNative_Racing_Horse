import React, {useState} from 'react';
import { View, ImageBackground} from 'react-native';
// Redux
import { connect,useDispatch } from 'react-redux';
import { institutionAction } from '../store/actions/institution/institutionAction';
import { raceAction } from '../store/actions/racepaln/getApi/racePlanAction';
import { signAction } from '../store/actions/horse/signAction';
// Custom Import
import HeaderScreen, { calculateGameDate } from './LayoutScreen/HeaderScreen';
import FooterScreen from './LayoutScreen/FooterScreen';
import { CustomButtons, ReturnButton } from '../components/Buttons';
import Screenstyles from '../screens/ScreenStylesheet';

const PastureScreen = ({navigation, user_id, gameTime}) => {
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(new Date());

  // POST USER ID
  const handleSubmit = () => {
    const sandUserId =  {
      "user_id": user_id
    } 
    dispatch(institutionAction(sandUserId));
    navigation.navigate('InstitutionScreen');
  }
  // GET RACE DATA
  const handleGetSubmit = () => {
    dispatch(raceAction(calculateGameDate(currentTime)));
    navigation.navigate('RacetrackScreen')
  }

  const gotoUpBringScreen = () => {
    const sandUserId =  {
      "user_id": user_id
    } 
    dispatch(institutionAction(sandUserId));
    dispatch(signAction());
    navigation.navigate('UpbringingScreen');
  }
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../assets/images/1.png')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen/>
            <ReturnButton label="牧  場"/>
            <View style={Screenstyles.containers}>
              <View style={Screenstyles.content}>
                  <CustomButtons label="育 成" onPress={() => gotoUpBringScreen()}/>
                  <CustomButtons label="繁用馬" onPress={() => navigation.navigate('WorkingHorseScreen')}/>
                  <CustomButtons label="事務所" onPress={() => navigation.navigate('OfficeScreen')}/>
              </View>
              <View style={Screenstyles.content}>
                  <CustomButtons label="施 設" onPress={handleSubmit}/>
                  <CustomButtons label="競馬場" onPress={handleGetSubmit}/>
                  <CustomButtons label="種 付" disabled={true}/>
              </View>
            </View>
            <FooterScreen/>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    user_id: state.user.userData.id,
    pasture_id: state.pasture.pastureData.id,
    // gameTime: state.currentGameTime.gameTime
  }
};

export default connect(mapStateToProps)(PastureScreen);