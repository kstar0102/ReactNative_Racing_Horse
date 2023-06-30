import React, {useState} from 'react';
import { View, ImageBackground} from 'react-native';
// Redux
import { connect, useDispatch } from 'react-redux';
import { raceAction } from '../store/actions/racepaln/getApi/racePlanAction';
// Custom Import 
import HeaderScreen, { calculateGameDate } from './LayoutScreen/HeaderScreen';
import StableFooterScreen from './LayoutScreen/StableFooterScreen';
import { CustomButtons, ReturnButton } from '../components/Buttons';
import Screenstyles from '../screens/ScreenStylesheet';

const StableScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());
    // GET RACE DATA
    const handleGetSubmit = () => {
      dispatch(raceAction(calculateGameDate(currentTime)));
      navigation.navigate('RaceCourse')
    }

  return (
    <View style={Screenstyles.container}>
         
      <ImageBackground
        source={require('../assets/images/horse_track/stall.jpg')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen/>
            <ReturnButton label="厩 舎" color={1} onPress={() => navigation.navigate('TopScreen')}/>
            <View style={Screenstyles.containers}>
              <View style={Screenstyles.content}>
                  <CustomButtons label="調 教" color={1} onPress={() => navigation.navigate('Training')}/>
                  <CustomButtons label="騎手育成"color={1} onPress={() => navigation.navigate('JockeyTraingin')}/>
                  <CustomButtons label="競馬場"color={1}   onPress={handleGetSubmit}/>
              </View>
              <View style={Screenstyles.content}>
                  <CustomButtons label="出走登錄" color={1} onPress={() => navigation.navigate('RaceRegistation')}/>
                  <CustomButtons label="施 設" color={1} onPress={() => navigation.navigate('Institution')}/>
                  <CustomButtons label="競争成績" color={1} onPress={() => navigation.navigate('RaceResults')}/>
              </View>
            </View>
              <StableFooterScreen/>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  return{

  }
}
export default connect(mapStateToProps)(StableScreen);