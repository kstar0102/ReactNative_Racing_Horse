import React, { useState } from 'react';
import {TouchableOpacity, View, Modal, TextInput, Alert, Text } from 'react-native';
import ButtonStyle from './ButtonStyle';
import { vh, vw } from 'react-native-expo-viewport-units';
import SaleInputButton from './SaleInputButton';

const SaleButton = ({label ,onPress, disabled}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleYesPress = () => {
    setModalVisible(false);
    setSecondModalVisible(true);
  };

  const handleNoPress = () => {
    setModalVisible(false);
  };

  const handleSecondModalSubmit = () => {
    if (inputText !== '') {
      setSecondModalVisible(false);
      Alert.alert(`You entered: ${inputText}`);
    }
  }
  const handleSecondNoModalSubmit = () => {
    setSecondModalVisible(false);
  };
  return (
    <View>
      <TouchableOpacity 
        onPress={onPress ? onPress : () => setModalVisible(true)}
        disabled={disabled ? disabled : false}
        style={ButtonStyle.button}
      >
        <Text style={ButtonStyle.label}>{label ? label : "Button"}</Text>
      </TouchableOpacity>
      
      <View style={ButtonStyle.container}>
        <Modal 
            visible={modalVisible} 
            animationType="fade"
            transparent={true}
          >
            <View style={ButtonStyle.ModalCenter}>
              <Text style={ButtonStyle.saleTxtTitle}>売却</Text>
              <Text style={ButtonStyle.saleTxt}>セリに登録して売却しますか?</Text>
              <View style={ButtonStyle.buttonContainer}>
                <View style={{ margin: 10 }}>
                  <SaleInputButton label="いいえ" onPress={handleNoPress} />
                </View>
                <View style={{ margin: 10 }}>
                  <SaleInputButton label="はい" onPress={handleYesPress} />
                </View>
              </View>
            </View>
          </Modal>

          <Modal 
            visible={secondModalVisible} 
            animationType="fade"
            transparent={true}
          >
            <View style={ButtonStyle.ModalCenter}>
            <Text> ・提示価格</Text>
              <View style={ButtonStyle.inputText}>
                <TextInput
                  style={{
                    width: vw(60),
                    height: 38,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 10,
                    // padding: 10,
                    borderRadius: 5
                  }}
                  onChangeText={(text) => setInputText(text)}
                  value={inputText}
                />
                <Text style={ButtonStyle.Itxt}>pt</Text>
              </View>
              <Text>   この価格でセリに登録しますか?</Text>
              <View style={ButtonStyle.buttonContainer}>
                <View style={{ margin: 10 }}>
                  <SaleInputButton label="いいえ" onPress={handleSecondNoModalSubmit} />
                </View>
                <View style={{ margin: 10 }}>
                  <SaleInputButton label="はい" onPress={handleSecondModalSubmit} />
                </View>
              </View>
            </View>
          </Modal>
      </View>
        
    </View>
  );
};

export default SaleButton;