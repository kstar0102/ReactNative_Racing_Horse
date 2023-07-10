import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Alert, Modal } from "react-native";
// Customer
import DropdownR from './DropDwonR';
import colors from '../../containers/colors';
import SaleInputButton from './SaleInputButton';
import ButtonStyle from './ButtonStyle';


const PresetRegistrationButton = ({ colorNumber, label, disabled, allData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [thredModalVisible, setThredModalVisible] = useState(false);

  const handlePress = () => {
    if (allData != '') {
      Alert.alert(
        " ",
        "「予約一覧」 の予約を登録しますか?",
        [
          {
            text: "いいえ",
            style: "cancel"
          },
          {
            text: "はい",
            onPress: () => setModalVisible(true)
          }
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        " ",
        "「予約一覧」に予約がありません。",
        [
          {
            text: "いいえ",
            style: "cancel"
          },
          {
            text: "はい",
            onPress: () => console.log("Yes pressed")
          }
        ],
        { cancelable: false }
      );
    }
  };

  const handleEndPress = () => {
    Alert.alert(
      " ",
      "プリセット1に上書きしてよろしいですか?",
      [
        {
          text: "いいえ",
          style: "cancel"
        },
        {
          text: "はい",
          onPress: () => console.log("Yes pressed")
        }
      ],
      { cancelable: false }
    );
  }
  // setModalVisible(true)
  const handleYesPress = () => {
    setSecondModalVisible(true);
    setModalVisible(false);
  };

  const handleNoPress = () => {
    setModalVisible(false);
  };

  const handleSecondModalSubmit = () => {
    setThredModalVisible(true);
    setSecondModalVisible(false);
  }
  const handleSecondNoModalSubmit = () => {
    setModalVisible(false);

  };

  const handleThredModalSubmit = () => {
    setThredModalVisible(false)
    handleEndPress();

  };
  const handleThredNoModalSubmit = () => {
    setThredModalVisible(false);
  }



  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          colorNumber == 1 ? styles.buttonOne : 'styles.button',
          colorNumber == 2 ? styles.buttonTwo : 'styles.button',
          disabled && styles.disabled]}

        onPress={() => handlePress()}
        disabled={disabled ? disabled : false}
      >
        <Text style={styles.label}>{label ? label : "Button"}</Text>
      </TouchableOpacity>

      <View style={ButtonStyle.container}>

        {/* One */}
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
        >
          <View style={ButtonStyle.ModalCenter}>
            <Text> プリセットに名前をつけてください。</Text>
            <View style={ButtonStyle.Dropdown}>
              <DropdownR name={"Name"} />
            </View>
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
        {/* Two */}
        <Modal
          visible={secondModalVisible}
          animationType="fade"
          transparent={true}
        >
          <View style={ButtonStyle.ModalCenter}>
            <Text style={ButtonStyle.saleTxtTitle}></Text>
            <Text style={ButtonStyle.saleTxt}>○○でよろしいですか?</Text>
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
        {/* Three*/}
        <Modal
          visible={thredModalVisible}
          animationType="fade"
          transparent={true}
        >
          {/* ONE */}
          <View style={ButtonStyle.ModalCenter}>
            <Text> どのプリセットに上書きしますか?</Text>
            <View style={ButtonStyle.Dropdown}>
              <DropdownR name={"プリセット1"} />
            </View>
            <View style={ButtonStyle.buttonContainer}>
              <View style={{ margin: 10 }}>
                <SaleInputButton label="いいえ" onPress={handleThredNoModalSubmit} />
              </View>
              <View style={{ margin: 10 }}>
                <SaleInputButton label="はい" onPress={handleThredModalSubmit} />
              </View>
            </View>
          </View>
        </Modal>
        {/* Three End */}
      </View>
    </View>
  );
};

export default PresetRegistrationButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.tabButtonMiddle,
    borderRadius: 6,
    height: 30,
    width: '80%',
    paddingVertical: 2,
    marginTop: 5,
  },
  buttonOne: {
    backgroundColor: colors.tabButtonEnd
  },
  buttonTwo: {
    backgroundColor: colors.tabButtonMiddle
  },
  label: {
    color: colors.light.white,
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center'
  },
  disabled: {
    opacity: 0.5,
  }
});