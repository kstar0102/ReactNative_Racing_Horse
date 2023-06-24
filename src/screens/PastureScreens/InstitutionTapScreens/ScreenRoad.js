import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { roadBuyAction } from '../../../store/actions/institution/apiAction/roadBuyAction';
// CUSTOM IMPORT
import { BuyButton } from '../../../components/Buttons';
import ITapScreenStyles from './ITapScreenStyles';

const ScreenRoad = ({pasture_name, user_id, user_level, road}) => {
  const dispatch = useDispatch();
  const handleSubmit = (level) => {
      const roadData = {
        "slope_id": 0,
        "price": 1000,
        "user_id": user_id,
        "level": level,
        "pasture_name": pasture_name,
        "user_level": user_level
      };
      dispatch(roadBuyAction(roadData))
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
              {/* <Text style={ITapScreenStyles.LongiPay}>済</Text> */}
              {/* <BuyButton /> */}
              <BuyButton label={'購入する'} onPress={() => handleSubmit(1)}/>
            </View>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.2</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../../assets/images/facility/sacaro2.png')}
                  blurRadius={Platform.OS === 'ios' ? 8 : 3}
              />
              {/* <BuyButton label={'購入する'} /> */}
              <Image 
                  style={ITapScreenStyles.LongiIcon}
                  source={require('../../../assets/images/Lock.png')}
              />
            </View>
            <View style={ITapScreenStyles.Bundle}>
           
              <Text style={ITapScreenStyles.Lavel}>Lv.3</Text>
                <Image 
                    style={ITapScreenStyles.LongiImage}
                    source={require('../../../assets/images/facility/sacaro3.png')}
                    blurRadius={Platform.OS === 'ios' ? 8 : 3}
                />
               <Image 
                  style={ITapScreenStyles.LongiIcon}
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
      road: state.road.roadBuyData,
    };
  }

  export default connect(mapStateToProps)(ScreenRoad);