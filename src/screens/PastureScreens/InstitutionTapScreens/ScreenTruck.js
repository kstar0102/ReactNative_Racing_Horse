import React, { useState } from 'react';
import { View, Image, Text, ScrollView} from 'react-native';
// Redux
import { connect, useDispatch } from 'react-redux';
import { truckBuyAction } from '../../../store/actions/institution/apiAction/truckBuyAction';
// Cusom
import { BuyButton } from '../../../components/Buttons';
import ITapScreenStyles from './ITapScreenStyles';
const ScreenTruck = ({pasture_name, user_id, user_level,truck}) => {
  const dispatch = useDispatch();
  const handleSubmit = (level) => {
      const truckData = {
        "truck_id": 0,
        "price": 1000,
        "user_id": user_id,
        "level": level,
        "pasture_name": pasture_name,
        "user_level": user_level
      };
      dispatch(truckBuyAction(truckData))
  }
    return (
      <ScrollView style={ITapScreenStyles.LongiContainer}>
          <View style={ITapScreenStyles.Longicontent}>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.1</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../../assets/images/facility/truck1.png')}
              />
              <BuyButton label={'購入する'} onPress={() => handleSubmit(1)}/>
              {/* <Text style={ITapScreenStyles.LongiPay}>済</Text> */}
              {/* <BuyButton /> */}
            </View>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.2</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../../assets/images/facility/truck2.png')}
                  blurRadius={Platform.OS === 'ios' ? 8 : 3}
              />
               <Image 
                  style={ITapScreenStyles.LongiIcon}
                  source={require('../../../assets/images/Lock.png')}
              />
              {/* <BuyButton label={'購入する'} /> */}
            </View>
            <View style={ITapScreenStyles.Bundle}>
           
              <Text style={ITapScreenStyles.Lavel}>Lv.3</Text>
                <Image 
                    style={ITapScreenStyles.LongiImage}
                    source={require('../../../assets/images/facility/truck3.png')}
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
      truck: state.truck.truckBuyData,
    };
  }

  export default connect(mapStateToProps)(ScreenTruck);
  