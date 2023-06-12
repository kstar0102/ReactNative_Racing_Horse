import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const CheckRadioButton = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.container}>
      <RadioButton
        value="first"
        label="dd"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={styles.title}>牧場</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={styles.title}>ファーム</Text>
      <RadioButton
        value="second"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
      <Text style={styles.title}>スタリオン</Text>
    </View>
  );
};
  
export default CheckRadioButton;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems:'center'
  },
  title:{
    fontSize: hp(1) + wp(1)
  }
})