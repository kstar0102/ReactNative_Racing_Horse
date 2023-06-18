import React from 'react';
import {  View, ImageBackground, Text, Image } from 'react-native';

// Custom Import 
import NRHeaderScreen from '../LayoutScreen/NRHeaderScreen';
import Screenstyles from '../ScreenStylesheet';
import BloodlineNameTable from '../../components/table/BloodlineNameTable';
import { PNameRegister } from '../../components/Buttons';
import TNameInput from '../../components/input/TNameInput';

const HorseNameScreen  = ({navigation}) => {
    return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../../assets/images/1.png')}
        resizeMode="contain"
        style={Screenstyles.img}>
            <NRHeaderScreen/>
            <View style={Screenstyles.HCcontainer}>
                <View style={Screenstyles.NRtitle}>
                    <Text style={Screenstyles.NRtitleA}>馬名を決める</Text>   
                    <Text style={Screenstyles.NRtitleB}>[注意1] <Text style={Screenstyles.NRSpanT}>卑猥</Text>な名前や<Text style={Screenstyles.NRSpanT}>コンプラ違反</Text>のワードは<Text style={Screenstyles.NRSpanT}>禁止</Text>します。</Text> 
                    <Text style={Screenstyles.NRtitleB}>[注意2] 一度決めた<Text style={Screenstyles.NRSpanT}>名前</Text>は<Text style={Screenstyles.NRSpanT}>変更できません。</Text> 慎重に!</Text>    
                </View>
                {/* ONE */}
                    <View style={Screenstyles.horseNameCard}>
                        <View style={Screenstyles.horseCardContent}>
                            <View style={Screenstyles.horseCardLeft}>
                                <Image 
                                    style={Screenstyles.HCNameImage}
                                    source={require('../../assets/images/horse/21.png')}
                                />
                            </View>
                            <View style={Screenstyles.horseCardRight}>
                                <BloodlineNameTable/>
                            </View>
                        </View>

                        <View style={Screenstyles.TName}>
                            <Text style={Screenstyles.Title}>・馬名</Text>
                            <View style={Screenstyles.TNameInput}>
                                <TNameInput/>
                            </View>
                            {/* <Text style={Screenstyles.caution}>※すでにその名前は<Text style={Screenstyles.NRSpanT}>使用されています</Text>。</Text> */}
                            <PNameRegister label={'購入する'} onPress={() => navigation.navigate('PastureScreen')}/>
                        </View>
                    </View>
            </View>
      </ImageBackground>
    </View>
  );
};

export default HorseNameScreen;
