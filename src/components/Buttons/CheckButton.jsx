import * as React from 'react';
import { StyleSheet,  SafeAreaView } from 'react-native';
import { Checkbox } from 'react-native-paper';
const CheckButton = () => {
   const [checked, setChecked] = React.useState(false);
   return (
      <SafeAreaView style={styles.container}>
         <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={'#000'}
            uncheckColor={'red'}
         />
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
   container: {
    position: 'absolute',
    left: 0,
    zIndex: 1000
   },
});
export default CheckButton;