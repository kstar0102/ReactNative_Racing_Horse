import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, Alert } from 'react-native';
// Redux
import { connect, useDispatch } from 'react-redux';
import { roadBuyAction } from '../../../store/actions/institution/apiAction/roadBuyAction';
// CUSTOM IMPORT
import { BuyButton } from '../../../components/Buttons';
import ITapScreenStyles from './ITapScreenStyles';

const ScreenRoad = ({ pasture_name, user_id, user_level, road }) => {
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
  // LV.2
  const [threeborderStyle, setThreeBorderStyle] = useState(0);
  const [threeLockStyle, setThreeLockStyle] = useState('flex');
  const [threeTxtStyle, setThreeTxtStyle] = useState('none');
  const [threeblueStyle, setThreeBlueStyle] = useState(0);
  const [threeBtnStyle, setThreeBtnStyle] = useState('none');

  useEffect(() => {
    if (road != '') {
      if (road[0].level == 1) {
        setTwoBtnStyle('flex');
        setOneBtnStyle('none');
        setOneTxtStyle('flex');
        setOneBorderStyle(8);
        setTwoBlueStyle(1);
      }
      else if (road[0].level == 2) {
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
      }else if(road[0].level == 3){
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

  }, [road]);

  const handleSubmit = (level, price, effect) => {
    let roadData = {};
    if (road != '') {
      if (road[0].id) {
        roadData = {
          "slope_id": road[0].id,
          "price": price,
          "user_id": user_id,
          "level": level,
          "pasture_name": pasture_name,
          "user_level": user_level
        };
        Alert.alert(
          `坂路 (Lv.${level})は、${price}ptですが購入しますか?`,
          `[効果] 馬誕生時に「瞬発+${effect}」`,
          [
            {
              text: "いいえ",
              style: "cancel"
            },
            { 
              text: "はい",
              onPress:() => dispatch(roadBuyAction(roadData))
            }
          ],
          { cancelable: false,
            style: {fontSize: 5}
          
          },
        );
      }
    } else {
      roadData = {
        "slope_id": 0,
        "price": 1000,
        "user_id": user_id,
        "level": level,
        "pasture_name": pasture_name,
        "user_level": user_level
      };
      Alert.alert(
        `坂路 (Lv.1)は、1000ptですが購入しますか?`,
        "[効果] 馬誕生時に「瞬発+10」",
        [
          {
            text: "いいえ",
            style: "cancel"
          },
          { 
            text: "はい",
            onPress:() => dispatch(roadBuyAction(roadData))
          }
        ],
        { cancelable: false,
          style: {fontSize: 5}
        
        },
      );
    }
   
  }
  return (
    <ScrollView style={ITapScreenStyles.LongiContainer}>
      <View style={ITapScreenStyles.Longicontent}>
        <View style={ITapScreenStyles.Bundle}>
          <Text style={ITapScreenStyles.Lavel}>Lv.1</Text>
          <Image
            style={ITapScreenStyles.LongiImage}
            source={require('../../../assets/images/facility/sacaro1.png')}
          />
          <Text style={[ITapScreenStyles.LongiPay, { display: oneTxtStyle, borderWidth: oneborderStyle }]}>済</Text>
          {/* <BuyButton /> */}
          <BuyButton label={'購入する'} onPress={() => handleSubmit(1)} display={oneBtnStyle} />
        </View>
        <View style={ITapScreenStyles.Bundle}>
          <Text style={ITapScreenStyles.Lavel}>Lv.2</Text>
          <Image
            style={[ITapScreenStyles.LongiImage]}
            source={require('../../../assets/images/facility/sacaro2.png')}
            blurRadius={twoblueStyle ? Platform.OS === 'ios' ? 0 : 0 : Platform.OS === 'ios' ? 8 : 3}
          />
          <Text style={[ITapScreenStyles.LongiPay, { display: twoTxtStyle, borderWidth: twoborderStyle }]}>済</Text>
          <BuyButton label={'購入する'} onPress={() => handleSubmit(2, 3000, 20)} display={twoBtnStyle} />
          <Image
            style={[ITapScreenStyles.LongiIcon, { display: oneBtnStyle }]}
            source={require('../../../assets/images/Lock.png')}
          />
        </View>
        <View style={ITapScreenStyles.Bundle}>

          <Text style={ITapScreenStyles.Lavel}>Lv.3</Text>
          <Image
            style={[ITapScreenStyles.LongiImage]}
            source={require('../../../assets/images/facility/sacaro3.png')}
            blurRadius={threeblueStyle ? Platform.OS === 'ios' ? 0 : 0 : Platform.OS === 'ios' ? 8 : 3}
          />
          <Text style={[ITapScreenStyles.LongiPay, { display: threeTxtStyle, borderWidth: threeborderStyle }]}>済</Text>
          <BuyButton label={'購入する'} onPress={() => handleSubmit(3, 6000, 30)} display={threeBtnStyle} />
          <Image
            style={[ITapScreenStyles.LongiIcon,  { display: threeLockStyle }]}
            source={require('../../../assets/images/Lock.png')}
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
    road: state.road.roadBuyData,
  };
}
export default connect(mapStateToProps)(ScreenRoad);