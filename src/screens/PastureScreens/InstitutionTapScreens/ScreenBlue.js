import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
// Redux
import { connect, useDispatch } from 'react-redux';
import { poolBuyAction } from '../../../store/actions/institution/apiAction/poolBuyAction';
// CUSTOM IMPORT
import { BuyButton } from '../../../components/Buttons';
import ITapScreenStyles from './ITapScreenStyles';

const ScreenBlue = ({ pasture_name, user_id, user_level, pool }) => {
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
    if (pool != '') {
      if (pool[0].level == 1) {
        setTwoBtnStyle('flex');
        setOneBtnStyle('none');
        setOneTxtStyle('flex');
        setOneBorderStyle(8);
        setTwoBlueStyle(1);
      }
      else if (pool[0].level == 2) {
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
      }else if(pool[0].level == 3){
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

  }, [pool]);

  const handleSubmit = (level, price) => {
    let poolData = {};
    if (pool != '') {
      if (pool[0].id) {
        poolData = {
          "pool_id": pool[0].id,
          "price": price,
          "user_id": user_id,
          "level": level,
          "pasture_name": pasture_name,
          "user_level": user_level
        };
      }
    } else {
      poolData = {
        "pool_id": 0,
        "price": 1000,
        "user_id": user_id,
        "level": level,
        "pasture_name": pasture_name,
        "user_level": user_level
      };
    }
    dispatch(poolBuyAction(poolData))
  }
  return (
    <ScrollView style={ITapScreenStyles.LongiContainer}>
      <View style={ITapScreenStyles.Longicontent}>
        <View style={ITapScreenStyles.Bundle}>
          <Text style={ITapScreenStyles.Lavel}>Lv.1</Text>
          <Image
            style={ITapScreenStyles.LongiImage}
            source={require('../../../assets/images/facility/pool1.png')}
          />
          <Text style={[ITapScreenStyles.LongiPay, { display: oneTxtStyle, borderWidth: oneborderStyle }]}>済</Text>
          {/* <BuyButton /> */}
          <BuyButton label={'購入する'} onPress={() => handleSubmit(1)} display={oneBtnStyle} />
        </View>
        <View style={ITapScreenStyles.Bundle}>
          <Text style={ITapScreenStyles.Lavel}>Lv.2</Text>
          <Image
            style={[ITapScreenStyles.LongiImage]}
            source={require('../../../assets/images/facility/pool2.png')}
            blurRadius={twoblueStyle ? Platform.OS === 'ios' ? 0 : 0 : Platform.OS === 'ios' ? 8 : 3}
          />
          <Text style={[ITapScreenStyles.LongiPay, { display: twoTxtStyle, borderWidth: twoborderStyle }]}>済</Text>
          <BuyButton label={'購入する'} onPress={() => handleSubmit(2, 3000)} display={twoBtnStyle} />
          <Image
            style={[ITapScreenStyles.LongiIcon, { display: oneBtnStyle }]}
            source={require('../../../assets/images/Lock.png')}
          />
        </View>
        <View style={ITapScreenStyles.Bundle}>

          <Text style={ITapScreenStyles.Lavel}>Lv.3</Text>
          <Image
            style={[ITapScreenStyles.LongiImage]}
            source={require('../../../assets/images/facility/pool3.png')}
            blurRadius={threeblueStyle ? Platform.OS === 'ios' ? 0 : 0 : Platform.OS === 'ios' ? 8 : 3}
          />
          <Text style={[ITapScreenStyles.LongiPay, { display: threeTxtStyle, borderWidth: threeborderStyle }]}>済</Text>
          <BuyButton label={'購入する'} onPress={() => handleSubmit(3, 6000)} display={threeBtnStyle} />
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
    pasture_name: state.pastureData.pastureData.name,
    user_id: state.user.userData.id,
    user_level: state.user.userData.level,
    pool: state.pool.poolBuyData,
  };
}
export default connect(mapStateToProps)(ScreenBlue);