import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  Modal,
  Image,
  Text,
} from "react-native";
// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import FooterScreen from "../../LayoutScreen/FooterScreen";
import ReturnButtonScreen from "../../../components/someScreen/ReturnButtonScreen";
import Screenstyles from "../../ScreenStylesheet";
import MarryStyle from "./MarryStyle";
import ScreenMarryG from "./ScreenMarryG";
import ScreenMarryM from "./ScreenMarryM";
import { MarryButton } from "../../../components/Buttons";
import { connect } from "react-redux";
import WorkingButton from "../../../components/Buttons/WorkingButtons";
import ButtonStyle from "../../../components/Buttons/ButtonStyle";
import { closeRelatives } from "./marryGlobalFuntion";

const MarryScreen = ({ saveData, funAction }) => {
  const [closeRelative, setCloseRelative] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  // console.log("-------------",funAction);
  const fillterMan = saveData.filter(
    (data) => data.gender === "牡" && data.type === ""
  );
  const fillterGirl = saveData.filter((data) => data.type === "繁殖馬");

  useEffect(() => {
    setCloseRelative(closeRelatives());
  }, [funAction]);

  const handleYes = () => {
    console.log("Yes");
  };

  const handleNo = () => {
    setModalVisible(false);
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../../assets/images/1.png")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View>
          <ReturnButtonScreen
            BigPlace={"牧  場"}
            screenName={"種  付"}
            nviUrl={"PastureScreen"}
          />
        </View>
        <ScrollView style={[MarryStyle.container, { maxHeight: 450 }]}>
          <ScreenMarryM horseDatas={fillterMan} />
          <ScreenMarryG horseDatas={fillterGirl} />
        </ScrollView>
        <View style={Screenstyles.marryButton}>
          <MarryButton label={"種    付"} color={1} onPress={handleModal} />
          <MarryButton label={"戻    る"} />
        </View>
        <FooterScreen />
      </ImageBackground>
      {/* Modal */}
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={ButtonStyle.marryModal}>
          <View style={Screenstyles.marryAlam}>
            <Image
              style={Screenstyles.bankPeople}
              source={require("../../../assets/images/marry/2.png")}
            />
            <View style={Screenstyles.marryTxt}>
              <Text>仲良しそうな配合を考えましたね!</Text>
              <Text>種付けしますか?</Text>
            </View>
          </View>
          <View style={Screenstyles.marryBtnGroup}>
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
  );
};

const mapStateToProps = (state) => {
  return {
    saveData: state.horseData.saveData,
    funAction: state.buttonAction.funAction,
  };
};

export default connect(mapStateToProps)(MarryScreen);
