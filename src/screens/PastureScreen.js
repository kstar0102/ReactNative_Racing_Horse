import React,{useEffect} from 'react';
import { View, ImageBackground} from 'react-native';
// Redux
import { connect,useDispatch } from 'react-redux';
import { pastureAction } from '../store/actions/Pasture/pastureAction';
// Custom Import 
import HeaderScreen from './LayoutScreen/HeaderScreen';
import FooterScreen from './LayoutScreen/FooterScreen';
import { CustomButtons, ReturnButton } from '../components/Buttons';
import Screenstyles from '../screens/ScreenStylesheet';

const PastureScreen = ({navigation,user_id,pasture_id}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const sandIds =  {
      "user_id": user_id,
      "pasture_id": pasture_id
    } 
    dispatch(pastureAction(sandIds))
  }, [user_id, pasture_id]);
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
                  <CustomButtons label="育 成" onPress={() => navigation.navigate('UpbringingScreen')}/>
                  <CustomButtons label="繁用馬" onPress={() => navigation.navigate('WorkingHorseScreen')}/>
                  <CustomButtons label="事務所" onPress={() => navigation.navigate('OfficeScreen')}/>
              </View>
              <View style={Screenstyles.content}>
                  <CustomButtons label="施 設" onPress={() => navigation.navigate('InstitutionScreen')}/>
                  <CustomButtons label="競馬場" onPress={() => navigation.navigate('RacetrackScreen')}/>
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
    pasture_id: state.pastureData.pastureData.id
  }
 
};

export default connect(mapStateToProps)(PastureScreen);