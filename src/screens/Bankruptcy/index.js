import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  Animated,
} from "react-native";
// Custom IMPORT
import { RegisterButton } from "../../components/Buttons";
import WorkingButton from "../../components/Buttons/WorkingButtons";
import Screenstyles from "../ScreenStylesheet";
import ButtonStyle from "../../components/Buttons/ButtonStyle";
const Bankruptcy = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const opacity = new Animated.Value(0);
  const handleYes = () => {
    console.log("Yes");
  };
  const handleNo = () => {
    setModalVisible(false);
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  const onLoad = () => {
    
    Animated.timing(opacity, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    
    onLoad()
  }, [])
  return (
    <View style={Screenstyles.container}>
      <View style={[Screenstyles.img, { backgroundColor: "black" }]}>
        {/* Fald In */}
        <Animated.View
          style={[
            {
              opacity: opacity,
              transform: [
                {
                  scale: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={Screenstyles.UPCourse}>
            <Image
              style={Screenstyles.bankruptcy}
              source={require("../../assets/images/failed/5.png")}
            />
          </View>
          <View style={Screenstyles.Bankloan}>
            <RegisterButton
              label={"銀行融資"}
              color={3}
              onPress={handleModal}
            />
          </View>
        </Animated.View>

        {/* Modal */}
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <View style={ButtonStyle.bankruptcyModal}>
            <View style={Screenstyles.bank}>
              <Image
                style={Screenstyles.bankPeople}
                source={require("../../assets/images/failed/30.png")}
              />
              <View style={Screenstyles.bankTxt}>
                <Text>「BOC銀行です。 」</Text>
                <Text>「牧場が無くなるとお聞きしまして・・・。」</Text>
                <Text>「50000ptほど融資いたしますが、</Text>
                <Text> 利子が5%で毎月1500ptずつ、</Text>
                <Text> ご返済となりますがよろしいですか?」</Text>
              </View>
            </View>
            <View style={Screenstyles.bankBtnGroup}>
              <WorkingButton
                label={"はい"}
                colorNumber={6}
                onPress={() => handleYes()}
              />
              <WorkingButton
                label={"いいえ"}
                colorNumber={6}
                onPress={() => handleNo()}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Bankruptcy;
