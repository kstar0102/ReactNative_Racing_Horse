
import React from 'react';
import {View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

const ReservationDropDown = ({name, data, onSelect, setId}) => {
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
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown4BtnStyle}
            buttonTextStyle={styles.dropdown4BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome data={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={16} />;
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
export default ReservationDropDown;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  viewContainer: { backgroundColor: '#FFF', },
  dropdown4BtnStyle: {
    width: 45,
    height: 30,
    backgroundColor: '#FFF',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left', fontSize: 12},
  dropdown4DropdownStyle: {backgroundColor: '#EFEFEF',marginTop: -20},
  dropdown4RowStyle: {backgroundColor: '#EFEFEF', height: 30, borderBottomColor: '#C5C5C5'},
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left', fontSize: 12},
});