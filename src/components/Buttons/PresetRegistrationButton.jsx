import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  View,
  Alert,
  Modal,
} from "react-native";
import { vw } from "react-native-expo-viewport-units";
// Redux
import { connect, useDispatch } from "react-redux";
import { preePastureSetAction } from "../../store/actions/Pasture/preePastureSetAction";
import { preeStallSetAction } from "../../store/actions/Pasture/preeStallSetAction";
// Customer
import DropdownR from "./DropDwonR";
import colors from "../../containers/colors";
import SaleInputButton from "./SaleInputButton";
import ButtonStyle from "./ButtonStyle";

const PresetRegistrationButton = ({
  colorNumber,
  label,
  disabled,
  allData,
  preeAllData,
  preNameGroup,
  user_id,
  pasture_id,
  place
}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [thredModalVisible, setThredModalVisible] = useState(false);
  const [preeSet, setPreeSet] = useState("");
  const [selectedPreeSet, setSelectedPreeSet] = useState(" ");
  const [inputText, setInputText] = useState("");

  const preeSetData = [
    { name: "プリセット1" },
    { name: "プリセット2" },
    { name: "プリセット3" },
    { name: "プリセット4" },
    { name: "プリセット5" },
  ];

  let food_name = [];
  let food_price = [];
  let food_order = [];
  let food_type = [];
  // All data Value
  allData.forEach((element, index) => {
    food_name.push(element.name);
    food_price.push(element.price);
    food_type.push(element.type);
    food_order.push(index + 1);
  });

  const preset_num = preeSet == "" ? preeSetData[0].name : preeSet;
  const handlePreeSetRegister = () => {
    let input_pre = "";
    if(preeSetData.some((element) => element.name === preset_num)){
      input_pre = preset_num;
    }
    else{
      let targetIndex = preNameGroup.findIndex((element) => element.name === preset_num);
      input_pre = preeSetData[targetIndex].name;
    }
    if(place == "pasture"){
      const sendPreePastureData = {
        food_name: food_name,
        food_type: food_type,
        price: food_price,
        order: food_order,
        place: place,
        preset_name: inputText,
        preset_num: input_pre,
        user_id: user_id,
        pasture_id: pasture_id,
      };
      dispatch(preePastureSetAction(sendPreePastureData));
    }else if(place == "stall"){
      const sendPreeStallData = {
        food_name: food_name,
        food_type: food_type,
        price: food_price,
        order: food_order,
        place: place,
        preset_name: inputText,
        preset_num: input_pre,
        user_id: user_id,
        stall_id: "stall",
      };
      dispatch(preeStallSetAction(sendPreeStallData));
    }
    
    setInputText('');
    setPreeSet('');
  };

  const handlePress = () => {
    if (allData != "") {
      Alert.alert(
        " ",
        "「予約一覧」 の予約を登録しますか?",
        [
          {
            text: "いいえ",
            style: "cancel",
          },
          {
            text: "はい",
            onPress: () => setModalVisible(true),
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        " ",
        "予約が１つもありません。",
        [
          {
            text: "いいえ",
            style: "cancel",
          },
          {
            text: "はい",
            onPress: () => console.log("Yes pressed"),
          },
        ],
        { cancelable: false }
      );
    }
  };

  const handleEndPress = () => {
    Alert.alert(
      " ",
      `${preeSet ? preeSet : preeSetData[0].name} に上書きしてよろしいですか?`,
      [
        {
          text: "いいえ",
          style: "cancel",
        },
        {
          text: "はい",
          onPress: () => handlePreeSetRegister(),
        },
      ],
      { cancelable: false }
    );
  };
  // setModalVisible(true)
  const handleYesPress = (txt) => {
    if (txt == "") {
      return false;
    } else {
      setSecondModalVisible(true);
      setModalVisible(false);
    }
  };

  const handleNoPress = () => {
    setInputText('');
    setPreeSet('');
    setModalVisible(false);
  };

  const handleSecondModalSubmit = () => {
    setThredModalVisible(true);
    setSecondModalVisible(false);
  };
  const handleSecondNoModalSubmit = () => {
    setInputText('');
    setPreeSet('');
    setModalVisible(false);
    setSecondModalVisible(false);
  };

  const handleThredModalSubmit = () => {
    setThredModalVisible(false);
    handleEndPress();
  };
  const handleThredNoModalSubmit = () => {
    setPreeSet('');
    setInputText('');
    setThredModalVisible(false);
  };

  const handlePreeSetData = (value) => {
    setPreeSet(value.name);
  };
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          colorNumber == 1 ? styles.buttonOne : "styles.button",
          colorNumber == 2 ? styles.buttonTwo : "styles.button",
          disabled && styles.disabled,
        ]}
        onPress={() => handlePress()}
        disabled={disabled ? disabled : false}
      >
        <Text style={styles.label}>{label ? label : "Button"}</Text>
      </TouchableOpacity>

      <View style={ButtonStyle.container}>
        {/* One */}
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <View style={ButtonStyle.ModalCenter}>
            <Text> プリセットに名前をつけてください。</Text>
            <View style={ButtonStyle.inputText}>
              <TextInput
                style={{
                  width: vw(60),
                  height: 38,
                  borderColor: "gray",
                  borderWidth: 1,
                  margin: 10,
                  // padding: 10,
                  borderRadius: 5,
                }}
                onChangeText={(text) => setInputText(text)}
                value={inputText}
              />
            </View>
            <View style={ButtonStyle.buttonContainer}>
              <View style={{ margin: 10 }}>
                <SaleInputButton label="いいえ" onPress={handleNoPress} />
              </View>
              <View style={{ margin: 10 }}>
                <SaleInputButton
                  label="はい"
                  onPress={() => handleYesPress(inputText)}
                />
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
            <Text style={ButtonStyle.saleTxt}>
              {inputText}でよろしいですか?
            </Text>
            <View style={ButtonStyle.buttonContainer}>
              <View style={{ margin: 10 }}>
                <SaleInputButton
                  label="いいえ"
                  onPress={handleSecondNoModalSubmit}
                />
              </View>
              <View style={{ margin: 10 }}>
                <SaleInputButton
                  label="はい"
                  onPress={handleSecondModalSubmit}
                />
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
              <DropdownR
                name={"選択してください。"}
                data={preNameGroup}
                onSelect={setSelectedPreeSet}
                setId={handlePreeSetData}
              />
            </View>
            <View style={ButtonStyle.buttonContainer}>
              <View style={{ margin: 10 }}>
                <SaleInputButton
                  label="いいえ"
                  onPress={handleThredNoModalSubmit}
                />
              </View>
              <View style={{ margin: 10 }}>
                <SaleInputButton
                  label="はい"
                  onPress={handleThredModalSubmit}
                />
              </View>
            </View>
          </View>
        </Modal>
        {/* Three End */}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.user.userData.id,
    pasture_id: state.pasture.pastureData.id,
  };
};

export default connect(mapStateToProps)(PresetRegistrationButton);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.tabButtonMiddle,
    borderRadius: 6,
    height: 30,
    width: "80%",
    paddingVertical: 2,
    marginTop: 5,
  },
  buttonOne: {
    backgroundColor: colors.tabButtonEnd,
  },
  buttonTwo: {
    backgroundColor: colors.tabButtonMiddle,
  },
  label: {
    color: colors.light.white,
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
  disabled: {
    opacity: 0.5,
  },
});
