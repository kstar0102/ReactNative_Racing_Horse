import React, { useState } from 'react';
import { View, Image, Text, ScrollView} from 'react-native';
// REDUX IMPORT
import { connect, useDispatch } from 'react-redux';
import { pastureBuyAction } from '../../../store/actions/institution/apiAction/pastureBuyAction';
// CUSTOM IMPORT
import { BuyButton } from '../../../components/Buttons';
import ITapScreenStyles from './ITapScreenStyles';
const ScreenPasture = ({pasture_id, user_id, user_level}) => {
  const dispatch = useDispatch();
  const handleSubmit = (level) => {
      const pastureData = {
        "price": 1000,
        "user_id": user_id,
        "level": level,
        "pasture_id": pasture_id,
        "user_level": user_level
      };
      dispatch(pastureBuyAction(pastureData))
  }

    return (
      <ScrollView style={ITapScreenStyles.LongiContainer}>
          <View style={ITapScreenStyles.Longicontent}>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.1</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../../assets/images/facility/par1.png')}
              />
              <Text style={ITapScreenStyles.LongiPay}>済</Text>
              {/* <BuyButton /> */}
            </View>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.2</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../../assets/images/facility/par2.png')}
              />
              <BuyButton label={'購入する'} onPress={() => handleSubmit(2)}/>
            </View>
            <View style={ITapScreenStyles.Bundle}>
           
              <Text style={ITapScreenStyles.Lavel}>Lv.3</Text>
                <Image 
                    style={ITapScreenStyles.LongiImage}
                    source={require('../../../assets/images/facility/par3.png')}
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
      pasture_id: state.pastureData.pastureData.id,
      user_id: state.user.userData.id,
      user_level: state.user.userData.level
    };
  }
  export default connect(mapStateToProps)(ScreenPasture);
  
  