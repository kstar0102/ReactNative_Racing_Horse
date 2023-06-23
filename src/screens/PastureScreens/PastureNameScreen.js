import React,{useState, useEffect} from 'react';
import {  View, ImageBackground, Text } from 'react-native';

// Redux
import { connect,useDispatch } from 'react-redux';
import { pastureNameAction } from '../../store/actions/Pasture/pastureNameAction';
// Custom Import
import NRHeaderScreen from '../LayoutScreen/NRHeaderScreen';
import Screenstyles from '../ScreenStylesheet';
import{ TNameInput, FarmNameInput }from '../../components/input';
import { PNameRegister, CheckRadioButton } from '../../components/Buttons';

const PastureNameScreen = ({navigation, validationData}) => {
const dispatch = useDispatch();
const [pastureName, setPastureName] = useState(''); 
const [nameMean, setNameMean] = useState(''); 
const [pastureStyle, setPastureStyle] = useState('牧場');
const [checkSub, setCheckSub] = useState(false);
const [displayName, setDisplayName] = useState('none');
const [displayNameMean, setDisplayNameMean] = useState('none');
const [displayNameStyle, setDisplayNameStyle] = useState('none');
const [displayNameMeanStyle, setDisplayNameMeanStyle] = useState('none');

//
  useEffect(() => {
    setDisplayNameMean('none');
    setDisplayName('none');
    if (checkSub) {
      if(validationData.noName || validationData.noNameMean){
        validationData.noName ? setDisplayName('flex') : setDisplayNameMean('flex');
      }
      else{
        navigation.navigate('PastureRegistration');
      }
    }
  }, [validationData]);

  // SUBMIT
  const handleSubmit = () =>{
    setCheckSub('ok');
    if(pastureName == ''){
      setDisplayNameStyle('flex');
      setDisplayNameMeanStyle('none');
      return false;
    }
    else if(nameMean == ''){
      setDisplayNameStyle('none');
      setDisplayNameMeanStyle('flex');
      return false;
    }
    else{
      const sendData = {
        'name' : pastureName,
        'name_mean' : nameMean,
        'style' : pastureStyle
      }
      dispatch(pastureNameAction(sendData));
      setDisplayNameStyle('none');
      setDisplayNameMeanStyle('none');
    }
  };

  // NAME
  const handleInputChangeName = (inputValue) => {
    setPastureName(inputValue);
  };

  // NAME MEAN
  const handleInputChangeMean = (inputValue) => {
    setNameMean(inputValue);
  }

  // CHEKC CHAGE
  const handleCheckChange = (inputValue) => {
    setPastureStyle(inputValue);
  }
    return (
      <View style={Screenstyles.container}>
        <ImageBackground
          source={require('../../assets/images/1.png')}
          resizeMode="contain"
          style={Screenstyles.img}>
              <NRHeaderScreen />
              <View style={Screenstyles.NRcontainer}>
                  <View style={Screenstyles.NRtitle}>
                      <Text style={Screenstyles.NRtitleA}>牧場名・冠名を決める</Text>   
                      <Text style={Screenstyles.NRtitleB}>[注意1]<Text style={Screenstyles.NRSpanT}>卑猥</Text>な名前や<Text style={Screenstyles.NRSpanT}>コンプラ違反</Text>のワードは<Text style={Screenstyles.NRSpanT}>禁止</Text>します。</Text> 
                      <Text style={Screenstyles.NRtitleB}>[注意2] 一度決めた<Text style={Screenstyles.NRSpanT}>名前</Text>は<Text style={Screenstyles.NRSpanT}>変更できません。</Text> 慎重に !</Text> 
                  </View>
                  <View style={Screenstyles.PNameRegister}>
                      <View style={Screenstyles.FarmName}>
                          <Text style={Screenstyles.Title1}>・牧場名</Text>
                          <View style={Screenstyles.FarmNameInput}>
                              <FarmNameInput onChangeText={handleInputChangeName}/> 
                              <CheckRadioButton  onChangeText={handleCheckChange}/>
                          </View>
                          <Text style={[{display: displayName}]} id="caution">※すでにその名前は<Text style={Screenstyles.NRSpanT}>使用されています</Text>。</Text>
                          <Text style={[{display: displayNameStyle}]} id="caution">※すでにその名前は<Text style={Screenstyles.NRSpanT}>使用されています</Text>。</Text>
                      </View>
                      <View style={Screenstyles.TName}>
                          <Text style={Screenstyles.Title}>・冠名</Text>
                          <View style={Screenstyles.TNameInput}>
                              <TNameInput onChangeText={handleInputChangeMean}/>
                          </View>
                          <Text style={[{display: displayNameMean}]}>※すでにその名前は<Text style={Screenstyles.NRSpanT}>使用されています</Text>。</Text>
                          <Text style={[{display: displayNameMeanStyle}]} id="caution">※すでにその名前は<Text style={Screenstyles.NRSpanT}>使用されています</Text>。</Text>
                      </View>
                      
                      <PNameRegister label={'決定する'}  onPress={handleSubmit}/>
                  </View>
              </View>
        </ImageBackground>
      </View>
    );  
};

const mapStateToProps = state => {
  return {
    validationData: state.validationData
  };
};

export default connect(mapStateToProps)(PastureNameScreen);
