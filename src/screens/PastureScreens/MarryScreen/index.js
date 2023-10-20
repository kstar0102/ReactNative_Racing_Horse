import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  Modal,
  Image,
  Text,
} from "react-native";
import { connect, useDispatch } from "react-redux";
// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import FooterScreen from "../../LayoutScreen/FooterScreen";
import ReturnButtonScreen from "../../../components/someScreen/ReturnButtonScreen";
import Screenstyles from "../../ScreenStylesheet";
import MarryStyle from "./MarryStyle";
import ScreenMarryG from "./ScreenMarryG";
import ScreenMarryM from "./ScreenMarryM";
import { MarryButton } from "../../../components/Buttons";
import WorkingButton from "../../../components/Buttons/WorkingButtons";
import ButtonStyle from "../../../components/Buttons/ButtonStyle";
import { closeRelatives, checkKnicks } from "./marryGlobalFuntion";
import FaceModal from "./FaceModal";
import { knicksAction } from "../../../store/actions/Pasture/marryKnicksAction";

const MarryScreen = ({ saveData, funAction, knickData }) => {

  const dispatch = useDispatch();

  const [closeRelative, setCloseRelative] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const fillterMan = saveData.filter(
    (data) => data.gender === "牡" && data.type === ""
  );
  const fillterGirl = saveData.filter((data) => data.type === "繁殖馬");

  const [filteredMan, setFilteredMan] = useState();
  const [filteredGirl, setFilteredGirl] = useState();
  const [imageSource, setImageSource] = useState("");
  const [crossName, setCrossName] = useState('');
  const [knicksState, setKnicksState] = useState(false);

  useEffect(() =>{
    dispatch(knicksAction());
  },[]);

  const updateValueMan = (value) => {
    setFilteredMan(value);
  };

  const updateValueGirl = (value) => {
    setFilteredGirl(value);
  };

  const handleModal = () => {

    let result = closeRelatives(filteredMan, filteredGirl);
    let knicks = checkKnicks(filteredMan, filteredGirl, knickData);
    console.log("result---------------");
    console.log("111",result);
    console.log("222",knicks);
    console.log("result----------------");
    setKnicksState(knicks);
    
    if(result.isClose == true){
      setImageSource("inbreeding");
    }
    else if(result.isMiracle == true){
      setImageSource("miracle");
    }
    else if(result.isKnow == true){
      setImageSource("Know");
    }
    else if(result.isMatch == true){
      setImageSource("match");
    }
    else if(result.isGoodFriend == true){
      setImageSource("good friend");
    }
    else if(result.isFinal == true){
      setImageSource("final");
    }
    else if(result.isTripCrown == true){
      setImageSource("triple crown");
    }
    else if(result.isShotReversal == true){
      setImageSource("shot reversal");
    }
    else if(result.isCross == true){
      setImageSource("cross");
      setCrossName(result.crossName);
    }
    else if(result.isOutBlid == true){
      setImageSource("outblid");
    }
    
    setModalVisible(true);
  };

  const handleModalNo = () => {
    setModalVisible(false);
  }

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
          <ScreenMarryM horseDatas={fillterMan} onDataUpdate={updateValueMan} />
          <ScreenMarryG
            horseDatas={fillterGirl}
            onDataUpdate={updateValueGirl}
          />
        </ScrollView>
        <View style={Screenstyles.marryButton}>
          <MarryButton label={"種    付"} color={1} onPress={handleModal} />
          <MarryButton label={"戻    る"} />
        </View>
        <FooterScreen />
      </ImageBackground>
      <FaceModal imageSource={imageSource} modalVisible={modalVisible} updateModalState={handleModalNo} crossName = {crossName} filteredMan = {filteredMan} filteredGirl = {filteredGirl} knicks={knicksState}/>
    </View>
  );
};

const mapStateToProps = (state) => {

  return {
    saveData: state.horseData.saveData,
    funAction: state.buttonAction.funAction,
    knickData: state.knickData.knickData
  };
};

export default connect(mapStateToProps)(MarryScreen);
