import React, { useState } from 'react';
import { View, Image, Text, ScrollView} from 'react-native';
import { BuyButton } from '../../components/Buttons';
import ITapScreenStyles from './ITapScreenStyles';

const ScreenBlue = () => {

    return (
      <ScrollView style={ITapScreenStyles.LongiContainer}>
          <View style={ITapScreenStyles.Longicontent}>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.1</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../assets/images/facility/pull1.png')}
              />
              <Text style={ITapScreenStyles.LongiPay}>済</Text>
              {/* <BuyButton /> */}
            </View>
            <View style={ITapScreenStyles.Bundle}>
              <Text style={ITapScreenStyles.Lavel}>Lv.2</Text>
              <Image 
                  style={ITapScreenStyles.LongiImage}
                  source={require('../../assets/images/facility/pull2.png')}
              />
              <BuyButton label={'購入する'} />
            </View>
            <View style={ITapScreenStyles.Bundle}>
           
              <Text style={ITapScreenStyles.Lavel}>Lv.3</Text>
                <Image 
                    style={ITapScreenStyles.LongiImage}
                    source={require('../../assets/images/facility/pull3.png')}
                    blurRadius={Platform.OS === 'ios' ? 8 : 3}
                />
               <Image 
                  style={ITapScreenStyles.LongiIcon}
                  source={require('../../assets/images/Lock.png')}
              />
            </View>
          </View>
      </ScrollView>
    )
  }
  

  export default ScreenBlue;
  