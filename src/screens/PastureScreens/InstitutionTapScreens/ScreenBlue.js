import React from 'react';
import { View, Image, Text, ScrollView} from 'react-native';
// Redux
import { connect, useDispatch } from 'react-redux';
import { poolBuyAction } from '../../../store/actions/institution/apiAction/poolBuyAction';
// CUSTOM IMPORT
import { BuyButton } from '../../../components/Buttons';
import ITapScreenStyles from './ITapScreenStyles';

const ScreenBlue = ({pasture_name, user_id, user_level, pool}) => {
  const dispatch = useDispatch();
  const handleSubmit = (level) => {
      const poolData = {
        "pool_id": 0,
        "price": 1000,
        "user_id": user_id,
        "level": level,
        "pasture_name": pasture_name,
        "user_level": user_level
      };
      dispatch(poolBuyAction(poolData))
  }

    return (
      <ScrollView style={ITapScreenStyles.LongiContainer}>
          <View style={ITapScreenStyles.Longicontent}>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.1</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../../assets/images/facility/pull1.png')}
              />
              {/* <Text style={ITapScreenStyles.LongiPay}>済</Text> */}
              {/* <BuyButton /> */}
              <BuyButton label={'購入する'} onPress={() => handleSubmit(1)}/>
            </View>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.2</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../../assets/images/facility/pull2.png')}
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
                    source={require('../../../assets/images/facility/pull3.png')}
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
    pool: state.pool.poolBuyData
  };
}
export default connect(mapStateToProps)(ScreenBlue);
  