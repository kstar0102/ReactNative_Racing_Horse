import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, Alert } from 'react-native';
// Redux
import { connect, useDispatch } from 'react-redux';
import { longiFieldBuyAction } from '../../../../store/actions/institution/apiAction/longiFieldBuyAction';
// CUSTOM IMPORT
import { BuyTapButton } from '../../../../components/Buttons';
import StableStyles from '../../StableStyles';
import colors from '../../../../containers/colors';

const RanchTap = ({ pasture_name, user_id, user_level, ranch }) => {
  const dispatch = useDispatch();
  
  // LV.0
  const [oneborderStyle, setOneBorderStyle] = useState(0);
  const [oneBtnStyle, setOneBtnStyle] = useState('none');
  const [oneTxtStyle, setOneTxtStyle] = useState('none');
  // LV.1
  const [twoborderStyle, setTwoBorderStyle] = useState(0);
  const [twoBtnStyle, setTwoBtnStyle] = useState('none');
  const [twoblueStyle, setTwoBlueStyle] = useState(0);
  const [twoTxtStyle, setTwoTxtStyle] = useState('none');
  // lV.2
  const [threeborderStyle, setThreeBorderStyle] = useState(0);
  const [threeLockStyle, setThreeLockStyle] = useState('flex');
  const [threeTxtStyle, setThreeTxtStyle] = useState('none');
  const [threeblueStyle, setThreeBlueStyle] = useState(0);
  const [threeBtnStyle, setThreeBtnStyle] = useState('none');

  useEffect(() => {
    if (ranch != '') {
      if (ranch[0].level == 1) {
        setTwoBtnStyle('flex');
        setOneBtnStyle('none');
        setOneTxtStyle('flex');
        setOneBorderStyle(8);
        setTwoBlueStyle(1);
      }
      else if (ranch[0].level == 2) {
        setThreeBtnStyle('flex');
        setTwoBtnStyle('none');
        setTwoTxtStyle('flex');
        setOneTxtStyle('flex');
        setOneBorderStyle(8);
        setTwoBorderStyle(8);
        setTwoBlueStyle(1);
        setThreeBorderStyle(0);
        setThreeBlueStyle(1);
        setThreeLockStyle('none');
      }else if(ranch[0].level == 3){
        setThreeBtnStyle('none');
        setTwoBtnStyle('none');
        setTwoTxtStyle('flex');
        setOneTxtStyle('flex');
        setOneBorderStyle(8);
        setTwoBorderStyle(8);
        setTwoBlueStyle(1);
        setThreeBorderStyle(8);
        setThreeBlueStyle(1);
        setThreeLockStyle('none');
        setThreeTxtStyle('flex');
      }
    } else {
      setTwoBtnStyle('none');
      setOneBtnStyle('flex');
      setOneBorderStyle(0);
    }

  }, [ranch]);

  const handleSubmit = (level, price, effect) => {
    let longiFieldData = {};
    if (ranch != '') {
      if (ranch[0].id) {
        longiFieldData = {
          "ranch_id": ranch[0].id,
          "price": price,
          "user_id": user_id,
          "level": level,
          "pasture_name": pasture_name,
          "user_level": user_level
        };
        Alert.alert(
          `ロンギ場 (Lv.${level})は、${price}ptですが購入しますか`,
          `[効果] 馬誕生時に「気性+${effect}」`,
          [
            {
              text: "いいえ",
              style: "cancel"
            },
            { 
              text: "はい",
              onPress:() => dispatch(longiFieldBuyAction(longiFieldData))
            }
          ],
          { cancelable: false,
            style: {fontSize: 5}
          
          },
        );
      }
    } else {
      longiFieldData = {
        "ranch_id": 0,
        "price": 1000,
        "user_id": user_id,
        "level": level,
        "pasture_name": pasture_name,
        "user_level": user_level
      };
      Alert.alert(
        `ロンギ場 (Lv.1)は、1000ptですが購入しますか`,
        "[効果] 馬誕生時に「気性+10」",
        [
          {
            text: "いいえ",
            style: "cancel"
          },
          { 
            text: "はい",
            onPress:() => dispatch(longiFieldBuyAction(longiFieldData))
          }
        ],
        { cancelable: false,
          style: {fontSize: 5}
        
        },
      );
    }
    
  }
  return (
    <ScrollView style={[StableStyles.tapContainer, {backgroundColor: colors.IButtonFive}]}>
      <View style={StableStyles.tapContent}>
        <View style={StableStyles.Bundle}>
          <Image
            style={StableStyles.tapImage}
            source={require('../../../../assets/images/facility/longijang1.png')}
          />
          <Text style={[StableStyles.tapPay, { display: oneTxtStyle, borderWidth: oneborderStyle }]}>済</Text>
          {/* <BuyTapButton /> */}
          <BuyTapButton label={'購入する'} onPress={() => handleSubmit(1)} display={oneBtnStyle} />
        </View>
        <View style={StableStyles.Bundle}>
          <Image
            style={[StableStyles.tapImage]}
            source={require('../../../../assets/images/facility/longijang2.png')}
            blurRadius={twoblueStyle ? Platform.OS === 'ios' ? 0 : 0 : Platform.OS === 'ios' ? 8 : 3}
          />
          <Text style={[StableStyles.tapPay, { display: twoTxtStyle, borderWidth: twoborderStyle }]}>済</Text>
          <BuyTapButton label={'購入する'} onPress={() => handleSubmit(2, 3000, 20)} display={twoBtnStyle} />
          <Image
            style={[StableStyles.tapIcon, { display: oneBtnStyle }]}
            source={require('../../../../assets/images/Lock.png')}
          />
        </View>
        <View style={StableStyles.Bundle}>
          <Image
            style={[StableStyles.tapImage]}
            source={require('../../../../assets/images/facility/longijang3.png')}
            blurRadius={threeblueStyle ? Platform.OS === 'ios' ? 0 : 0 : Platform.OS === 'ios' ? 8 : 3}
          />
          <Text style={[StableStyles.tapPay, { display: threeTxtStyle, borderWidth: threeborderStyle }]}>済</Text>
          <BuyTapButton label={'購入する'} onPress={() => handleSubmit(3, 6000, 30)} display={threeBtnStyle} />
          <Image
            style={[StableStyles.tapIcon,  { display: threeLockStyle }]}
            source={require('../../../../assets/images/Lock.png')}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    pasture_name: state.pasture.pastureData.name,
    user_id: state.user.userData.id,
    user_level: state.user.userData.level,
    ranch: state.ranch.ranchBuyData,
  };
}
export default connect(mapStateToProps)(RanchTap);