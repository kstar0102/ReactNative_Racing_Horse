
import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

const ReservationDropDown = ({ name, default_order, food_order, onSelect, setId, order }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  let countriesWithFlags = order;

  useEffect(() => {
    // Update the selected index when countriesWithFlags changes
    setSelectedIndex(0);
  }, [countriesWithFlags]);

  return (
    <>
      <View style={styles.viewContainer}>
      <SelectDropdown
            data={countriesWithFlags}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
            onSelect(selectedItem);
            setId(selectedItem);
            }}
            defaultButtonText={'Select country'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            search
            searchInputStyle={styles.dropdown1searchInputStyleStyle}
            searchPlaceHolderColor={'darkgrey'}
            renderSearchInputLeftIcon={() => {
              return <FontAwesome name={'search'} color={'#444'} size={18} />;
            }}
          />
      </View>
    </>
  );
};
export default ReservationDropDown;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
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
  dropdown4BtnTxtStyle: { color: '#444', textAlign: 'left', fontSize: 12 },
  dropdown4DropdownStyle: { backgroundColor: '#EFEFEF', marginTop: -20 },
  dropdown4RowStyle: { backgroundColor: '#EFEFEF', height: 30, borderBottomColor: '#C5C5C5' },
  dropdown4RowTxtStyle: { color: '#444', textAlign: 'left', fontSize: 12 },


  dropdown1BtnStyle: {
    width: 66,
    height: 30,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize: 12},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', marginTop: -20},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', height: 30},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
  dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
});