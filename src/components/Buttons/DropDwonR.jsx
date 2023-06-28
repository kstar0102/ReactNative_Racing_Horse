
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

const DropdownR = ({ name, data, onSelect, setId }) => {
  const countriesWithFlags = data;
  return (
    <>
      <View style={styles.viewContainer}>
        <SelectDropdown
          data={countriesWithFlags}
          onSelect={(selectedItem, index) => {
            onSelect(selectedItem);
            setId(selectedItem);
          }}
          defaultButtonText={name}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown4BtnStyle}
          buttonTextStyle={styles.dropdown4BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown4DropdownStyle}
          rowStyle={styles.dropdown4RowStyle}
          rowTextStyle={styles.dropdown4RowTxtStyle}
        />
      </View>
    </>
  );
};
export default DropdownR;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  viewContainer: { backgroundColor: '#FFF' },
  dropdown4BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
  },
  dropdown4BtnTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown4DropdownStyle: { backgroundColor: '#EFEFEF'},
  dropdown4RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdown4RowTxtStyle: { color: '#444', textAlign: 'left' },
});