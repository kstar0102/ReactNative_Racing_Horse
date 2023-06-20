import React, { useState} from 'react';
import {  View, ImageBackground, Text, Image} from 'react-native';
// Redux
import { connect, useDispatch } from 'react-redux';
import { pastureSizeAction } from '../../store/actions/Pasture/pastureSizeAction';
// Custom Import 
import NRHeaderScreen from '../LayoutScreen/NRHeaderScreen';
import Screenstyles from '../ScreenStylesheet';
import { BuyButton } from '../../components/Buttons';
import DropDownB from '../../components/Buttons/DropDwonB';

const PastureRegistration  = ({navigation, pastureData, id}) => {
    const name = pastureData.name;
    const name_mean = pastureData.name_mean;
    const style = pastureData.style;

    const dispatch = useDispatch();
    const  [pasturePrice, setPasturePrice] = useState(500);

    const [selected, setSelected] = useState('牧場(小)');
    const data = [
      { label: '牧場(小)', value: '1', payMent: '500', id: 1 },
      { label: '牧場(中)', value: '5',  Caution: ' ', id: 2, CautionS:' ', labelV: '施設 : ', TypeV: '2種類', labelH: '種牡馬 : ', TypeH: '5頭', payMent: '2000' },
      { label: '牧場(大)', value: '10', Caution: ' ', id: 3, CautionS:' ', labelV: '施設 :', TypeV: '5種類', labelH: '種牡馬 : ', TypeH: '10頭', payMent: '5000'  },
    ];
    
    const handleSubmit = () =>{
        const sendData = {
            'user_id' : id,
            'name' : name,
            'name_mean' : name_mean,
            'style': style,
            'price': pasturePrice
        }
        dispatch(pastureSizeAction(sendData));
        navigation.navigate('HorseChoiceScreen');
    };

    const onSelected = (value) => {
        setPasturePrice(value.payMent)
        setSelected(value);
    }

    return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../../assets/images/1.png')}
        resizeMode="contain"
        style={Screenstyles.img}>
            <NRHeaderScreen/>
            <View style={Screenstyles.NRcontainer}>
                <View style={Screenstyles.NRtitle}>
                    <Text style={Screenstyles.NRtitleA}>牧場を購入する</Text>   
                    <Text style={Screenstyles.NRtitleLabel}>[注意] 同じポイント分、 <Text style={Screenstyles.NRtitleLabelSpan}>維持費</Text>がかかります !</Text> 
                </View>
                <View style={Screenstyles.NRpay}>
                    <View style={Screenstyles.NRleft}> 
                        <View style={Screenstyles.NRleftD}>
                            <DropDownB label="牧場 (小)" data={data} onSelect={onSelected} />
                            <Text style={Screenstyles.NRleftL}>{(!!selected && selected.payMent) || '500'}pt</Text>
                        </View>
                        <View style={Screenstyles.NRImageBorder}>
                            <Image 
                                style={(!!selected && selected.id == 1 ? Screenstyles.NRImageSmall : !!selected && selected.id == 2 ? Screenstyles.NRImageMiddle : !!selected && selected.id == 3 ? Screenstyles.NRImageBig : Screenstyles.NRImageSmall)}
                                source={require('../../assets/images/pasture.jpg')}
                            />
                        </View>
                        <Text  style={Screenstyles.NRcaution}>{(!!selected && selected.Caution) || '※種牡馬・施設は'}<Text style={Screenstyles.NRSpan}>{(!!selected && selected.CautionS) || '不可'}</Text></Text>
                        
                        <BuyButton label={'購入する'} onPress={handleSubmit}/>
                    </View>
                        <View style={(!!selected && selected.id == 1 ? Screenstyles.NRSmallRight : !!selected && selected.id == 2 ? Screenstyles.NRMiddleRight : !!selected && selected.id == 3 ? Screenstyles.NRBigRight : Screenstyles.NRRight)}>
                            <View style={Screenstyles.NRrightTxtGroup}>
                                <Text style={Screenstyles.NRtxt}>0歳馬 : </Text>
                                <Text style={Screenstyles.NRtxtSpan}> {(!!selected && selected.value) || 1}頭</Text>
                            </View>
                            <View style={Screenstyles.NRrightTxtGroup}>
                                <Text style={Screenstyles.NRtxt}>1歳馬 : </Text>
                                <Text style={Screenstyles.NRtxtSpan}> {(!!selected && selected.value) || 1}頭</Text>
                            </View>
                            <View style={Screenstyles.NRrightTxtGroup}>
                                <Text style={Screenstyles.NRtxt}>2歳馬 : </Text>
                                <Text style={Screenstyles.NRtxtSpan}> {(!!selected && selected.value) || 1}頭</Text>
                            </View>
                            <View style={Screenstyles.NRrightTxtGroup}>
                                <Text style={Screenstyles.NRtxt}>3歳馬 : </Text>
                                <Text style={Screenstyles.NRtxtSpan}> {(!!selected && selected.value) || 1}頭</Text>
                            </View>
                            <View style={Screenstyles.NRrightTxtGroup}>
                                <Text style={Screenstyles.NRtxtT}>放牧馬 : </Text>
                                <Text style={Screenstyles.NRtxtSpanT}> {(!!selected && selected.value) || 1}頭</Text>
                            </View>
                            <View style={Screenstyles.NRrightTxtGroup}>
                                <Text style={Screenstyles.NRtxtT}>繁殖馬 : </Text>
                                <Text style={Screenstyles.NRtxtSpanT}> {(!!selected && selected.value) || 1}頭</Text>
                            </View>
                           {!!selected && (
                             <View style={Screenstyles.NRrightTxtGroup}>
                                <Text style={Screenstyles.NRtxtH}>{selected.labelH}</Text>
                                <Text style={Screenstyles.NRtxtSpanH}> {selected.TypeH}</Text>
                            </View>
                            )}
                            {!!selected && (
                                <View style={Screenstyles.NRrightTxtGroup}>
                                    <Text style={(!!selected && selected.id == 2 ? Screenstyles.NRtxtV2 : !!selected && selected.id == 3 ? Screenstyles.NRtxtV: Screenstyles.NRtxtV)}>{selected.labelV}</Text>
                                    <Text style={(!!selected && selected.id == 2 ? Screenstyles.NRtxtSpanV2 : !!selected && selected.id == 3 ? Screenstyles.NRtxtSpanV: Screenstyles.NRtxtSpanV)}>{selected.TypeV}</Text>
                                </View>
                            )}
                        </View>
                </View>
            </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
    return {
        pastureData: state.pastureData.name,
        id: state.auth.user.id
    };
  };

export default connect(mapStateToProps)(PastureRegistration);

