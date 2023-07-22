import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckButton = ({ checkState, id, checkingstate, price, age }) => {

  const [checked, setChecked] = React.useState(checkingstate);

  React.useEffect(() => {
    setChecked(checkingstate);
  },[checkingstate]);
  
  const handleCheckChange = (value) => {
    setChecked(value);
    checkState(value, id, price, age);
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
        key={id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    zIndex: 1000,
  },
});

export default CheckButton;
