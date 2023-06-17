import React, { useState } from 'react';
import {TouchableOpacity, View, Button, Modal, Center, TextInput, Alert, Text, StyleSheet } from 'react-native';
import colors from '../../containers/colors';
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
        style={styles.button}
      >
        <Text style={styles.label}>{label ? label : "Button"}</Text>
      </TouchableOpacity>
      
      <View style={styles.container}>
        <Modal 
            visible={modalVisible} 
            animationType="fade"
            transparent={true}
          >
            <View style={styles.ModalCenter}>
              <Text style={styles.saleTxtTitle}>売却</Text>
              <Text style={styles.saleTxt}>セリに登録して売却しますか?</Text>
              <View style={styles.buttonContainer}>
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
            <View style={styles.ModalCenter}>
            <Text> ・提示価格</Text>
              <View style={styles.inputText}>
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
                <Text style={styles.Itxt}>pt</Text>
              </View>
              <Text>   この価格でセリに登録しますか?</Text>
              <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white,
  },
  ModalCenter:{
    backgroundColor: colors.white,
    marginTop: vh(38),
    margin: vw(.1) + vh(4),
    width: vw(85),
    height: vh(23),
    padding: 20,
    paddingLeft: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputText:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  Itxt:{
    fontSize: 20
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  saleTxtTitle:{
    fontSize: 20,
  },
  saleTxt:{
    paddingTop: 10,
    paddingBottom: 30,
    fontSize: 15,
    
  },
  button:{
    backgroundColor: colors.tabButtonMiddle,
    borderRadius: 6,
    height: 30,
    width: 80,
    paddingVertical: 2,
    marginTop: 5
  },

  label: {
    color: colors.light.white,
		fontSize: 18,
		fontWeight: 700,
		textAlign: 'center'
  },

})


// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default App;