import React, { useState} from 'react';
import {  View, ImageBackground, Text, Image, ScrollView} from 'react-native';

// Custom Import 
import NRHeaderScreen from './LayoutScreen/NRHeaderScreen';
import Screenstyles from './ScreenStylesheet';
import BloodlineNameTable from '../components/BloodlineNameTable';
import {PNameRegister} from '../components/Buttons';
import TNameInput from '../components/TNameInput';

const HorseNameScreen  = ({navigation}) => {
    const [selected, setSelected] = useState(undefined);
    const data = [
      { label: '・0歳馬', horseFee: '500pt', SP: '10', ST:'9', instantaneous: '12', guts: '15', Temperament:'10', health: '30', img: '1.jpg' },
      { label: '・1歳馬', horseFee: '2000pt', SP: '30', ST:'22', instantaneous: '23', guts: '45', Temperament:'30', health: '60'},
      { label: '・2歳馬', horseFee: '5000pt', SP: '60', ST:'33', instantaneous: '33', guts: '55', Temperament:'60', health: '70'},
      { label: '・繁殖馬', horseFee: '9000pt', SP: '100', ST:'110', instantaneous: '123', guts: '125', Temperament:'100', health: '120', HorseName: '馬名', HorseName1: 'Snow Fairy',  HorseName2: 'Winx',  HorseName3: 'Zenyatta',  HorseName4: 'Stacelita',  HorseName5: 'Horlicks'},
    ];
    // {(!!selected && selected.label) || label}
    return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../assets/images/1.png')}
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
                                    source={require('../assets/images/horse/21.png')}
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



{/* <View style={Screenstyles.horseCard}>
<CheckButton/>
    <View style={Screenstyles.horseCardLeft}>
        <Image 
            style={Screenstyles.HCImage}
            source={require('../assets/images/horse/25.png')}
        />
    </View>
    <View style={Screenstyles.horseCardRight}>
    <Text style={Screenstyles.HChorsePrice}>馬料金:  <Text style={Screenstyles.HChorseSkillSpan}>{(!!selected && selected.HChorsePriceS) || '500pt'}</Text> </Text>
        {(!!selected && selected.HorseName &&
            <Text style={Screenstyles.HChorseName}>{(!!selected && selected.HorseName)} <Text style={Screenstyles.HChorseNameS}>{(!!selected && selected.HorseName5)} </Text> </Text>
        )} 
        <Text style={Screenstyles.HChorseSkill}>SP:  <Text style={Screenstyles.HChorseSkillSpan}>{(!!selected && selected.SP) || '100'}</Text> </Text>
        <Text style={Screenstyles.HChorseSkill}>ST:  <Text style={Screenstyles.HChorseSkillSpan}>{(!!selected && selected.ST) || '100'}</Text> </Text>
        <Text style={Screenstyles.HChorseSkill}>瞬発:  <Text style={Screenstyles.HChorseSkillSpan}>{(!!selected && selected.instantaneous) || '10'}</Text> </Text>
        <Text style={Screenstyles.HChorseSkill}>根性:  <Text style={Screenstyles.HChorseSkillSpan}>{(!!selected && selected.guts) || '20'}</Text> </Text>
        <Text style={Screenstyles.HChorseSkill}>気性:  <Text style={Screenstyles.HChorseSkillSpan}>{(!!selected && selected.Temperament) || '30'}</Text> </Text>
        <Text style={Screenstyles.HChorseSkill}>健康:  <Text style={Screenstyles.HChorseSkillSpan}>{(!!selected && selected.health) || '90'}</Text> </Text>
    </View>
</View> */}
