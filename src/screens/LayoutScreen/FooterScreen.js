import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FooterButton } from '../../components/Buttons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const FooterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containers}>
      <FooterButton
        label="厩 舎"
        onPress={() => navigation.navigate('StallScreen')}
      />
      <FooterButton
        label="競馬場"
      />
      <FooterButton
        label="セ リ"
      />
      <FooterButton
        label="ランキング"
      />
      <FooterButton
        label="V I P"
      />
    </View>
  )
}


const styles = StyleSheet.create({
  containers: {
    position: 'absolute',
    bottom: hp(5),
    left: 1,
    right: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

export default FooterScreen;