import React,{useEffect, useState} from 'react';
import { Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

function DropdownR({name, data, onSelect, setId}) {
  let dataArr = [];
  data.map((value, index)=>{
    dataArr[index] = {label: value.name, value: value.name, key: index}
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(name);
  const [items, setItems] = useState(dataArr);

  const getOneRow = (val) => {
    data.map((value, index)=>{
      if(value.name == val){
        setId(data[index]);
        onSelect(data[index]);
      }
    });
  }
  return (
    <>
    <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={()=>getOneRow(value)}
        labelStyle={{ fontWeight: 'bold' }}
        containerStyle={{ height: 10, width: 100 , borderRadius: 0, borderWidth: 0}}
        style={{ backgroundColor: '#fff', borderRadius: 0, borderWidth: 0}}
        disableBorderRadius={true}
        autoScroll={true}
      />
    </>
  );
}
export default DropdownR;