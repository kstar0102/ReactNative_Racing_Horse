import * as React from 'react';
import { StyleSheet,  SafeAreaView } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckButton = ({checkState, id, check, price}) => {
   const [checked, setChecked] = React.useState(check);
   const [isvalids, setisvalids] = React.useState(false);
   
   const handleCheckChange = (value) => {
      setChecked(value);
      setisvalids(value);
      checkState(value, id, price);
     };

   return (
      <SafeAreaView style={styles.container}>
         <Checkbox
            value={checkState}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               handleCheckChange(!checked);
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