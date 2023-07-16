
import React from 'react';
import {View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import colors from '../../containers/colors';

const DropdownB = ({label, data, onSelect}) => {
  const countriesWithFlags = data;
  return (
    <>
      <View style={styles.viewContainer}>
          <SelectDropdown
            data={countriesWithFlags}
            onSelect={(selectedItem, index) => {
              onSelect(selectedItem);
            }}
            defaultButtonText={label}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.label;
            }}
            rowTextForSelection={(item, index) => {
              return item.label;
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
export default DropdownB;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  viewContainer: { width: '170%', marginLeft: -60},
  dropdown4BtnStyle: {
    width: '100%',
    backgroundColor: '#86d0eb',
  },
  dropdown4BtnTxtStyle: {color: '#000', textAlign: 'left'},
  dropdown4DropdownStyle: {backgroundColor: '#EFEFEF', marginTop: -25},
  dropdown4RowStyle: {  backgroundColor: colors.horsTablePriceColor, borderBottomColor: '#000'},
  dropdown4RowTxtStyle: {color: '#000', textAlign: 'left'},
});