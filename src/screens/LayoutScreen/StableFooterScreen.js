import React from 'react';
import { StyleSheet, View} from 'react-native';
import { FooterButton } from '../../components/Buttons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const StableFooterScreen = () => (
    <View style={styles.containers}>
          <FooterButton 
            label="厩 舎"
            color={1}
          />
          <FooterButton 
            label="競馬場"
            color={1}  
          />
          <FooterButton 
            label="セ リ"
            color={1} 
          />
          <FooterButton 
            label="ランキング"
            color={1}  
          />
          <FooterButton 
            label="V I P"
            color={1}  
          />
    </View>
);

const styles = StyleSheet.create({
  containers:{
    position: 'absolute',
    bottom: hp(5),
    left: 1,
    right: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

export default StableFooterScreen;