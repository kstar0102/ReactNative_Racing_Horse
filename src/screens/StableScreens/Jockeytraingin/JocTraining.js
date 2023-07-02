import React, { useState } from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
// Custom IMPORT
import HeaderScreen from '../../LayoutScreen/HeaderScreen';
import StableFooterScreen from '../../LayoutScreen/StableFooterScreen';
import { ReturnButton, SaleButton } from '../../../components/Buttons';
import Screenstyles from '../../ScreenStylesheet';
import StableStyles from '../StableStyles';
import RTapScreensStyle from '../../PastureScreens/RanchTapScreens/RTapScreensStyle';
import WorkingButton from '../../../components/Buttons/WorkingButtons';
import UpGrazing from './Upbring/UpGrazing';
import UpFodder from './Upbring/UpFodder';

const JocTraining = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState(0);
  const handleButtonPress = (id) => {
    setActiveButton(id);
  };

  const renderScreenBelowButtons = () => {
    switch (activeButton) {
      case 1:
        return <UpFodder />;
      default:
        return <UpGrazing />;
    }
  }
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require('../../../assets/images/horse_track/stall.jpg')}
        resizeMode="cover"
        style={Screenstyles.img}>
        <HeaderScreen />
        <View style={Screenstyles.UPContainer}>
          <View style={Screenstyles.UPcontent}>
            <View>
              <ReturnButton label="厩 舎" color={1} onPress={() => navigation.navigate('StallScreen')} />
            </View>
            <View style={Screenstyles.UPRButton} >
              <ReturnButton label="騎手育成" color={1} />
            </View>
          </View>
          {/* SCREEN SHOW */}
          <View style={StableStyles.institutionContainer}>
            <View style={StableStyles.upperContent}>
              <View style={StableStyles.upperLeftImg}>
                <Image style={StableStyles.upperLeftImg} source={require('../../../assets/images/People/1.png')} />
              </View>
              <View style={StableStyles.upperRight}>
                <View style={StableStyles.cardJokeyHeader}>
                  <Text style={StableStyles.cardHeaderTxt}>騎手A</Text>
                  <Text style={StableStyles.cardHeaderTxt}>男20歳</Text>
                  <Text style={StableStyles.cardHeaderTxt}>賞金 123,456,789</Text>
                </View>

                <View style={StableStyles.cardBody}>
                  <View style={StableStyles.cardBodyRow}>
                    <View style={StableStyles.cardBodyRow}>
                      <Text style={StableStyles.cardBodyTxt}>調子</Text>
                      <Image style={RTapScreensStyle.conditions} source={require('../../../assets/images/condition/happy.png')} />
                    </View>

                    <Text style={StableStyles.cardBodyTxt}>疲労 <Text style={StableStyles.cardBodyTxt}>O</Text></Text>
                    <View style={StableStyles.cardBodyAngle}>
                      <Text style={StableStyles.cardBodyTxtAngle}>△</Text>
                      <Text style={StableStyles.cardBodyTxtAngle}>△</Text>
                      <Text style={StableStyles.cardBodyTxtAngle}>△</Text>
                      <Text style={StableStyles.cardBodyTxtAngle}>▲</Text>
                    </View>
                  </View>
                  <View style={StableStyles.cardBodyRow}>
                    <Text style={StableStyles.cardBodyTxt}>逃 <Text style={StableStyles.cardTxtRed}> S+</Text></Text>
                    <Text style={StableStyles.cardBodyTxt}>先 <Text style={StableStyles.cardTxtRed}> A+</Text></Text>
                    <Text style={StableStyles.cardBodyTxt}>差 <Text style={StableStyles.cardTxtRed}> B</Text></Text>
                    <Text style={StableStyles.cardBodyTxt}>追 <Text style={StableStyles.cardTxtRed}> D1</Text></Text>
                  </View>
                  <View style={StableStyles.cardAlilityRow}>
                    <Image style={StableStyles.upperAlilityImg} source={require('../../../assets/images/ablility/1.gif')} />
                    <Image style={StableStyles.upperAlilityImg} source={require('../../../assets/images/ablility/2.gif')} />
                    <Image style={StableStyles.upperAlilityImg} source={require('../../../assets/images/ablility/3.gif')} />
                    <Image style={StableStyles.upperAlilityImg} source={require('../../../assets/images/ablility/4.gif')} />
                    <Image style={StableStyles.upperAlilityImg} source={require('../../../assets/images/ablility/5.gif')} />
                    <Image style={StableStyles.upperAlilityImg} source={require('../../../assets/images/ablility/6.gif')} />
                    <Image style={StableStyles.upperAlilityImg} source={require('../../../assets/images/ablility/7.gif')} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={RTapScreensStyle.ButtonJokeyGroup}>
            {activeButton ?
              <WorkingButton label={'育成'} colorNumber={2} styleId={2} onPress={(() => handleButtonPress(0))} />
              :
              <WorkingButton label={'休憩'} colorNumber={5} styleId={2} onPress={(() => handleButtonPress(1))} />

            }
            <SaleButton label={'引退'} />
          </View>
          {renderScreenBelowButtons()}
          {/* SCREEN SHOW END */}
        </View>
        <StableFooterScreen />
      </ImageBackground>
    </View>
  );
};

export default JocTraining;