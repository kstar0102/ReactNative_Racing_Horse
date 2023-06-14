import React from 'react';
import {  View, ImageBackground, Text, Image} from 'react-native';

// Custom Import 
import NRHeaderScreen from './LayoutScreen/NRHeaderScreen';
import Screenstyles from './ScreenStylesheet';
import FarmNameInput from '../components/FarmNameInput';
import TNameInput from '../components/TNameInput';
import { PNameRegister } from '../components/Buttons';
import {CheckRadioButton} from '../components/Buttons';

const PastureNameScreen  = ({navigation}) => {
    return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../assets/images/1.png')}
        resizeMode="contain"
        style={Screenstyles.img}>
            <NRHeaderScreen/>
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
                            <FarmNameInput/> 
                            <CheckRadioButton/>
                        </View>
                        {/* <Text style={Screenstyles.caution}>※すでにその名前は<Text style={Screenstyles.NRSpanT}>使用されています</Text>。</Text> */}
                    </View>
                    <View style={Screenstyles.TName}>
                        <Text style={Screenstyles.Title}>・冠名</Text>
                        <View style={Screenstyles.TNameInput}>
                            <TNameInput/>
                        </View>
                        {/* <Text style={Screenstyles.caution}>※すでにその名前は<Text style={Screenstyles.NRSpanT}>使用されています</Text>。</Text> */}
                    </View>
                    
                    <PNameRegister label={'決定する'}  onPress={() => navigation.navigate('NRegistration')}/>
                </View>
            </View>
      </ImageBackground>
    </View>
  );
};

export default PastureNameScreen;
