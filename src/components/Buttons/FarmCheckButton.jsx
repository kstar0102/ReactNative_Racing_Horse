import * as React from 'react';
import { StyleSheet,  SafeAreaView } from 'react-native';
import { Checkbox } from 'react-native-paper';

const FarmCheckButton = () => {
   const [checked, setChecked] = React.useState(false);
   return (
      <SafeAreaView style={styles.container}>
         <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={'#000'}
            tyle={styles.Check}
            uncheckColor={'red'}
         />
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
   container: {

    zIndex: 1000
   },
   Check:{
   }
});
export default FarmCheckButton;