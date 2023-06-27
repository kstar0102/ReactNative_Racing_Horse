import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, Image, ScrollView } from 'react-native';

// Redux
import { connect, useDispatch } from 'react-redux';
import { horseAction } from '../../store/actions/horse/horseAction';
// Custom Import 
import NRHeaderScreen from '../LayoutScreen/NRHeaderScreen';
import Screenstyles from '../ScreenStylesheet';
import BloodlineNameTable from '../../components/table/BloodlineNameTable';
import { PNameRegister } from '../../components/Buttons';
import HorseNameInput from '../../components/input/HorseNameInput';
import { horseColor } from '../../utils/globals';

let horseNames = [];
let inputCount;
let inputIds = [];

const HorseNameScreen = ({ navigation, horseCheckData, user_id, pasture_id, saveData }) => {
  const dispatch = useDispatch();
  const [horseName, setHorseName] = useState('');
  const [inputId, setInputId] = useState('');
  useEffect(() => {
    if (horseCheckData) {
      inputCount = horseCheckData.length;
    }
  }, [horseCheckData]);

  const handleInputChange = (value, id) => {
    setHorseName(value);
    setInputId(id);
  }

  const handleOnBlur = () => {
    for (let index = 0; index < horseNames.length; index++) {
      if(horseNames[index] === horseName){
        return false;
      }
      if(inputIds[index] === inputId){
        horseNames[index] = horseName;
        return false;
      }               
    }
    horseNames.push(horseName);
    inputIds.push(inputId);
  }

  const handleSubmit = () => {
    if(horseNames.length !== inputCount){
      alert('Input Value is not Found');
      return false;
    } else {
      const CheckData = {
        'name' : horseNames,
        'data' : horseCheckData,
        'user_id' : user_id,
        'pasture_id' : pasture_id
      }
      dispatch(horseAction(CheckData));
    }
  }

  useEffect(() => {
    if(saveData != ""){
      navigation.navigate('PastureScreen');
    }
    
  }, [saveData]);

  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../../assets/images/1.png')}
        resizeMode="contain"
        style={Screenstyles.img}>
        <NRHeaderScreen />
        <View style={Screenstyles.HCcontainer}>
          <View style={Screenstyles.NRtitle}>
            <Text style={Screenstyles.NRtitleA}>馬名を決める</Text>   
            <Text style={Screenstyles.NRtitleB}>
              [注意1] <Text style={Screenstyles.NRSpanT}>卑猥</Text>な名前や
              <Text style={Screenstyles.NRSpanT}>コンプラ違反</Text>のワードは
              <Text style={Screenstyles.NRSpanT}>禁止</Text>します。
            </Text>
            <Text style={Screenstyles.NRtitleB}>
              [注意2] 一度決めた<Text style={Screenstyles.NRSpanT}>名前</Text>は
              <Text style={Screenstyles.NRSpanT}>変更できません。</Text> 慎重に!
            </Text>
          </View>
          <ScrollView style={Screenstyles.ScrollView}>
            {horseCheckData.map((item, index) => {
              return (
                <View key={index} style={Screenstyles.horseNameCard}>
                  <View style={Screenstyles.horseCardContent}>
                    <View style={Screenstyles.horseCardLeft}>
                      {horseColor.map((colorName, index) => {
                        if (colorName[item.color]) {
                          return (
                            <Image
                              key={`${item.id}${index}`}
                              style={Screenstyles.HCImage}
                              source={colorName[item.color]}
                            />
                          );
                        } else {
                          return null;
                        }
                      })}
                    </View>
                    <View style={Screenstyles.horseCardRight}>
                      <BloodlineNameTable
                        father_sys={item.f_sys}
                        father_f_sys={item.f_f_sys}
                        father_m_sys={item.f_m_sys}
                        mother_sys={item.m_sys}
                        mother_f_sys={item.m_f_sys}
                        mother_m_sys={item.m_m_sys}
                      />
                    </View>
                  </View>

                  <View style={Screenstyles.TName}>
                    <Text style={Screenstyles.Title}>・馬名</Text>
                    <View style={Screenstyles.TNameInput}>
                      <HorseNameInput
                        id={item.id}
                        onChangeText={handleInputChange}
                        onBlurText={handleOnBlur}
                      />
                    </View>
                    {/* <Text style={Screenstyles.caution}>
                      ※すでにその名前は<Text style={Screenstyles.NRSpanT}>使用されています</Text>。
                    </Text> */}
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View style={Screenstyles.registerButton}>
            <PNameRegister label={'購入する'} onPress={handleSubmit} />
          </View>
        </View>
        
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    horseCheckData: state.horseData.CheckData,
    user_id: state.user.userData.id,
    pasture_id: state.pasture.pastureData.id,
    saveData: state.horseData.saveData

  };
};

export default connect(mapStateToProps)(HorseNameScreen);