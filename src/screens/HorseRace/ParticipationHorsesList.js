import React, { useEffect, useState, useFocusEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Alert,
  Image,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import colors from "../../containers/colors";
import { RegisterButton, CustomButtons } from "../../components/Buttons";
import ButtonStyle from "../../components/Buttons/ButtonStyle";
import SaleInputButton from "../../components/Buttons/SaleInputButton";
import DropdownR from "../../components/Buttons/DropDwonR";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import { RaceRegisterSaveAction } from "../../store/actions/ReacRegister/RaceRegisterSaveAction";
import { RaceRegisterBackSaveAction } from "../../store/actions/ReacRegister/RaceRegisterBackSaveAction";

const ParticipationHorsesList = ({
  raceFieldData,
  prizeData,
  jockeysData,
  userData,
  horseData,
  reaceReigsterData,
}) => {
  if (raceFieldData == "" || prizeData == "" || jockeysData == "") {
    // NOT FOUND JOCKEYSDATA
    return false;
  }
  
  // horseData
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeBtn, setActiveBin] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [threeModalVisible, setThreeModalVisible] = useState(false);
  const [ptValue, setPtvalue] = useState();
  const [banner, setBanner] = useState();
  const [quality, setQuality] = useState();
  const [selected, setSelected] = useState(undefined);
  const [massValue, setMassValue] = useState("");
  const [msgValue, setMsgValue] = useState("逃げ");
  
  // Quality State
  const [escape, setEscape] = useState([]);
  const [destination, setDestination] = useState([]);
  const [difference, setDifference] = useState([]);
  const [additional, setAdditional] = useState([]);

  const [freeButton, setFreeButton] = useState(0);

  useEffect(()=>{
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
  },[])


  useEffect(() => {
    if (raceFieldData.type == "新馬") {
      setPtvalue(80);
    } else if (raceFieldData.type == "未勝利") {
      setPtvalue(20);
    } else if (raceFieldData.type == "1勝クラス") {
      setPtvalue(80);
    } else if (raceFieldData.type == "2勝クラス") {
      setPtvalue(150);
    } else if (raceFieldData.type == "3勝クラス") {
      setPtvalue(200);
    } else if (raceFieldData.type == "OP") {
      setPtvalue(250);
    } else if (raceFieldData.type == "GIII") {
      setPtvalue(300);
    } else if (raceFieldData.type == "GⅡ") {
      setPtvalue(500);
    } else if (raceFieldData.type == "GI") {
      setPtvalue(1000);
    } else if (raceFieldData.type == "海外GI") {
      setPtvalue(3000);
    } else if (raceFieldData.type == "隠しレース") {
      setPtvalue(5000);
    }
  }, [raceFieldData]);

  useEffect(() => {
    if (horseData.age == "・2歳馬" && horseData.gender == "牡") {
      setMassValue(55);
    } else if (horseData.age == "・2歳馬" && horseData.gender == "牝") {
      setMassValue(54);
    } else if (horseData.age == "・3歳馬" && horseData.gender == "牡") {
      setMassValue(56);
    } else if (horseData.age == "・3歳馬" && horseData.gender == "牝") {
      setMassValue(54);
    } else if (horseData.age == "・4歳馬" && horseData.gender == "牡") {
      setMassValue(58);
    } else if (horseData.age == "・4歳馬" && horseData.gender == "牝") {
      setMassValue(56);
    }
  }, [horseData]);
  useEffect(() => {
    if (reaceReigsterData !== "") {
      setEscape([]);
      setDifference([]);
      setDestination([]);
      setAdditional([]);

      let updatedEscape = [];
      let updatedDifference = [];
      let updatedDestination = [];
      let updatedAdditional = [];
      let checkButton = 0;

      reaceReigsterData.forEach((item, index) => {
        if (item.quality_leg === "逃") {
          updatedEscape.push("flex");
          updatedDestination.push("none");
          updatedDifference.push("none");
          updatedAdditional.push("none");
        } else if (item.quality_leg === "先") {
          updatedDestination.push("flex");
          updatedEscape.push("none");
          updatedDifference.push("none");
          updatedAdditional.push("none");
        } else if (item.quality_leg === "差") {
          updatedDifference.push("flex");
          updatedEscape.push("none");
          updatedDestination.push("none");
          updatedAdditional.push("none");
        } else if (item.quality_leg === "追") {
          updatedAdditional.push("flex");
          updatedEscape.push("none");
          updatedDestination.push("none");
          updatedDifference.push("none");
        }
        if (horseData.id == item.horse_id) {
          checkButton = 1;
        } else {
          checkButton = 0;
        }
      });

      setFreeButton(checkButton);
      setEscape(updatedEscape);
      setDifference(updatedDifference);
      setDestination(updatedDestination);
      setAdditional(updatedAdditional);
    } else {
      setEscape(["none"]);
      setDestination(["none"]);
      setDifference(["none"]);
      setAdditional(["none"]);
    }
  }, [reaceReigsterData, horseData]);

  const qualityData = [
    { name: "逃" },
    { name: "先" },
    { name: "差" },
    { name: "追" },
    // { name: "自在" },
  ];

  const handleSettingId = (value) => {
    setBanner(value);
  };
  const handleQualityId = (value) => {
    setQuality(value);
    if (value.name == "逃") {
      setMsgValue("逃げ");
    } else if (value.name == "先") {
      setMsgValue("先行");
    } else if (value.name == "差") {
      setMsgValue("差し");
    } else if (value.name == "追") {
      setMsgValue("追い");
    }
  };
  const jockey_id = banner == undefined ? jockeysData[0].id : banner.id;
  const jockey_name = banner == undefined ? jockeysData[0].name : banner.name;
  const quality_name =
    quality == undefined ? qualityData[0].name : quality.name;

  // if(horseData.age
  // }

  const age = horseData.age.split("")[1];
  const horseGender = horseData.gender;
  const raceFieldAge = raceFieldData.age_limit.split("")[0];
  const raceFieldGender = raceFieldData.age_limit.split("・")[1];

  let gender;
  if (raceFieldGender === undefined) {
    gender = "";
  } else {
    gender = raceFieldGender.split("")[0];
  }

  let convertedToFullWidth = "";
  for (let i = 0; i < age.length; i++) {
    let charCode = age.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      convertedToFullWidth += String.fromCharCode(charCode + 65248);
    } else {
      convertedToFullWidth += age.charAt(i);
    }
  }

  const handleSendData = () => {
    const sendAllData = {
      race_id: raceFieldData.id,
      race_type: raceFieldData.type,
      user_id: userData.id,
      user_name: userData.name,
      horse_id: horseData.id,
      horse_name: horseData.name,
      mass: massValue,
      price: ptValue,
      horse_gender: horseData.gender,
      horse_age: age,
      jockey_id: jockey_id,
      jockey_name: jockey_name,
      quality_leg: quality_name,
      last_play: "",
    };
    dispatch(RaceRegisterSaveAction(sendAllData));
    setQuality(undefined);
  };

  const handleClick = () => {
    navigation.navigate('HorseRace');
  };
  // const handleBackClick = () => {
  //   const sendBackData = {
  //     race_id: raceFieldData.id,
  //     user_id: userData.id,
  //   };
  //   dispatch(RaceRegisterBackSaveAction(sendBackData));
  // };

  const handleCencal = () => {
    setQuality(undefined);
    setBanner(undefined);
  };

  const handleAlert = () => {
    Alert.alert(
      " ",
      `${
        banner == undefined ? jockeysData[0].name : banner.name
      } でよろしいですか?`,
      [
        {
          text: "いいえ",
          onPress: () => handleCencal(),
        },
        {
          text: "はい",

          onPress: () => setThreeModalVisible(true),
        },
      ],
      { cancelable: false }
    );
  };

  const handleQualityAlert = () => {
    Alert.alert(
      " ",
      `${quality == undefined ? "逃げ" : msgValue} でよろしいですか?`,
      [
        {
          text: "いいえ",
          onPress: () => handleCencal(),
        },
        {
          text: "はい",

          onPress: () => handleSendData(),
        },
      ],
      { cancelable: false }
    );
  };

  const handleYesPress = () => {
    setModalVisible(false);
    setSecondModalVisible(true);
  };

  const handleNoPress = () => {
    setModalVisible(false);
    setQuality(undefined);
    setBanner(undefined);
  };

  const handleSecondModalSubmit = () => {
    handleAlert();
    setSecondModalVisible(false);
  };
  const handleSecondNoModalSubmit = () => {
    setSecondModalVisible(false);
    setQuality(undefined);
    setBanner(undefined);
  };

  const handleThreeModalSubmit = () => {
    handleQualityAlert();
    setThreeModalVisible(false);
  };
  const handleThreeNoModalSubmit = () => {
    setThreeModalVisible(false);
    setQuality(undefined);
    setBanner(undefined);
  };

  let prices = [];

  {
    prizeData.map((data, index) => {
      prices.push(data.money);
    });
  }
  let slicePrices = prices.slice(0, 5);

  let jockeyNames = [];
  jockeysData.map((item, index) => {
    jockeyNames.push({ name: item.name, id: item.id });
  });

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.TableHeader}>
          <Text style={styles.white}>
            {raceFieldData.name} ({raceFieldData.type} ・{" "}
            {raceFieldData.age_limit}・定量)
          </Text>
          <Text style={styles.white}>
            {raceFieldData.place} ・ {raceFieldData.ground}
            {raceFieldData.distance} ・天気予報 ({raceFieldData.weather})
          </Text>
          <Text style={styles.white}>賞金(pt):{slicePrices.join("・")}</Text>
        </View>
        <View style={styles.TableBody}>
          {/* ! */}
          <View style={styles.TableTitleNumber}>
            <View style={styles.titleBorder}>
              <Text style={styles.white}>枠</Text>
            </View>
            <View>
              {/* {reaceReigsterData ? (
                reaceReigsterData.map((item, index) => {
                  return (
                    <View key={index} style={styles.txtBorder}>
                      <Text style={styles.white}>
                        {item.horse_name} ({item.horse_gender}
                        {item.horse_age})
                      </Text>
                    </View>
                  );
                })
              ) : ( */}
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "white", color: "black"}]}>1</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "black"}]}>2</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "#fc001b"}]}>3</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "#4d00f7"}]}>4</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "#f7ff44", color: "black"}]}>5</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "#1ea95c"}]}>6</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "#f5c734"}]}>7</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "#e7c14e"}]}>8</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "#ff94fb"}]}>9</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={[styles.whiteNumber, {backgroundColor: "#ff94fb"}]}>10</Text>
                </View>
              {/* )} */}
            </View>
          </View>
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white}>登録馬</Text>
            </View>
            <View>
              {/* {reaceReigsterData ? ( */}
                {/* // reaceReigsterData.map((item, index) => { */}
                {/* //   return (
                //     <View key={index} style={styles.txtBorder}>
                //       <Text style={styles.white}>
                //         {item.horse_name} ({item.horse_gender}
                //         {item.horse_age})
                //       </Text>
                //       <Text style={styles.white}>馬主:{item.user_name}</Text>
                //     </View>
                //   );
                // }) */}
              {/* // ) : ( */}
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>カキクケコ(牡4)</Text>
                  <Text style={styles.white}>馬主:ジョーダン</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>タチツテト(牡5)</Text>
                  <Text style={styles.white}>馬主:ロナウド</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>ハヒフヘホ(牡4)</Text>
                  <Text style={styles.white}>馬主:ジョーダン</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>ヤユヨ(牡5)</Text>
                  <Text style={styles.white}>馬主:ロナウド</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>アイウエオ(牡3)</Text>
                  <Text style={styles.white}>馬主:マイケル</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>サシスセソ(牡8)</Text>
                  <Text style={styles.white}>馬主:ジェームズ</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>ナニヌネノ(牡3)</Text>
                  <Text style={styles.white}>馬主:マイケル</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>マミムメモ(牡8)</Text>
                  <Text style={styles.white}>馬主: ジェームズ</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>アイウエオ(牡3)</Text>
                  <Text style={styles.white}>馬主:マイケル</Text>
                </View>
                <View style={styles.txtBorder}>
                  <Text style={styles.white}>タチツテト(牡5)</Text>
                  <Text style={styles.white}>馬主: ロナウド</Text>
                </View>
              {/* )} */}
            </View>
          </View>
          {/* ! */}
          {/* ! */}
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white}>斤量/騎手/脚質</Text>
            </View>
            {/* {reaceReigsterData ? (
              reaceReigsterData.map((item, i) => {
                return (
                  <View key={i} style={styles.txtBorderM}>
                    <Text style={styles.white}>
                      {item.mass}kg/ {item.jockey_name}
                    </Text>
                    <Image
                      style={[styles.states, { display: escape[i] }]}
                      source={require("../../assets/images/qIcons/8.png")}
                    />
                    <Image
                      style={[styles.states, { display: destination[i] }]}
                      source={require("../../assets/images/qIcons/6.png")}
                    />
                    <Image
                      style={[styles.states, { display: difference[i] }]}
                      source={require("../../assets/images/qIcons/7.png")}
                    />
                    <Image
                      style={[styles.states, { display: additional[i] }]}
                      source={require("../../assets/images/qIcons/1.png")}
                    />
                  </View>
                );
              })
            ) : ( */}
              <View style={styles.txtBorderM}>
                <Text style={styles.white}>斤量 / Jockey 名</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/8.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>58kg/タイガー</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/7.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>53kg/ウッズ</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/6.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>55kg/ガガ</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/5.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>50kg/リンカーン</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/4.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>54kg/ キャリー</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/3.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>59kg/チャイルド</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/2.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>60kg/ボブ</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/8.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>54kg/ キャリー</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/3.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>

              <View style={styles.txtBorderM}>
                <Text style={styles.white}>53kg/ウッズ</Text>
                {/* <View style={styles.stateBar}> */}
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  {/* <View style={styles.statesBorder}> */}
                    <Image
                      style={[styles.states, { display: "flex" }]}
                      source={require("../../assets/images/qIcons/1.png")}
                    />
                  {/* </View> */}
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../assets/images/qIcon.png")}
                    />
                  </View>
                {/* </View> */}
                
              </View>
              
            {/* )} */}
          </View>
          {/* ! */}
          {/* ! */}
          <View style={styles.TablePorintTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white}>オッズ</Text>
            </View>
            {/* {reaceReigsterData ? (
              reaceReigsterData.map((item, index) => {
                return (
                  <View key={index} style={styles.txtBorder}>
                    <Text style={styles.white}>日付 レース名</Text>
                    <Text style={styles.white}>距離/ 着順</Text>
                  </View>
                );
              })
            ) : ( */}
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>41.5</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>29.4</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>62.2</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>39.4</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>21.1</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>9.3</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>1.1</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>8.2</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>104.7</Text>
              </View>
              <View style={styles.txtBorder}>
                <Text style={styles.whitePoint}>46.3</Text>
              </View>
            {/* )} */}
          </View>
          {/* ! */}
        </View>
      </ScrollView>
      <View style={styles.buttonLayout}>
        <RegisterButton
          label={"レース"}
          color={1}
          onPress={() => handleClick()}
        />
        <RegisterButton
          label={"結果"}
          color={3}
          onPress={() => navigation.navigate('RaceResultScreen')}
        />
      </View>

      {/* MOdal */}
      <View style={ButtonStyle.container}>
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <View style={ButtonStyle.ModalCenter}>
            <Text style={ButtonStyle.saleTxtTitle}>出走登録</Text>
            <Text style={ButtonStyle.saleTxt}>
              登録料 {ptValue} ptかかりますが登録しますか?
            </Text>
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
            <Text> 騎手を選んでください。</Text>
            <View style={ButtonStyle.Dropdown}>
              <DropdownR
                name={jockeyNames[0].name}
                data={jockeyNames}
                onSelect={setSelected}
                setId={handleSettingId}
              />
            </View>
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

        {/* Three */}
        <Modal
          visible={threeModalVisible}
          animationType="fade"
          transparent={true}
        >
          <View style={ButtonStyle.ModalCenter}>
            <Text> 脚質を指示してください。</Text>
            <View style={ButtonStyle.Dropdown}>
              <DropdownR
                name={qualityData[0].name}
                data={qualityData}
                onSelect={setSelected}
                setId={handleQualityId}
              />
            </View>
            <View style={ButtonStyle.buttonContainer}>
              <View style={{ margin: 10 }}>
                <SaleInputButton
                  label="いいえ"
                  onPress={handleThreeNoModalSubmit}
                />
              </View>
              <View style={{ margin: 10 }}>
                <SaleInputButton
                  label="はい"
                  onPress={handleThreeModalSubmit}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    prizeData: state.raceData.prizeData,
    raceFieldData: state.raceData.raceFieldData,
    jockeysData: state.raceData.jockeysData,
    reaceReigsterData: state.raceData.raceRegisterData,
    userData: state.user.userData,
  };
};

export default connect(mapStateToProps)(ParticipationHorsesList);

const styles = StyleSheet.create({
  white: {
    color: colors.black,
    textAlign: "center",
    width: "100%",
  },

  whiteNumber: {
    color: colors.white,
    textAlign: "center",
    paddingVertical: 6,
    fontSize: 20
  },
  whitePoint:{
    color: colors.black,
    textAlign: "center",
    paddingVertical: 13,
    fontSize: 13,
    backgroundColor: 'white'
  },
  container: {
    marginLeft: 10,
    marginRight: 10,
    height: 400,
  },
  TableTitle: {
    backgroundColor: colors.cardBody,
    width: "40%",
    borderWidth: 1,
  },
  TablePorintTitle:{
    backgroundColor: colors.cardBody,
    width: "12%",
    borderWidth: 1,
  },
  TableTitleNumber:{
    backgroundColor: colors.cardBody,
    width: "10%",
    borderWidth: 1,
  },
  txtBorder: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 43,
  },
  txtBorderM: {
    alignItems: "center",
    borderBottomWidth: 1,
    height: 43,
  },
  TableHeader: {
    backgroundColor: colors.butonBackgroud,
    alignItems: "center",
  },
  TableBody: {
    flexDirection: "row",
    justifyContent: "space-around",
    // width: 300
  },
  titleBorder: {
    backgroundColor: colors.cardHeader,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  stateBar: {
    flexDirection: "row",
    backgroundColor: colors.blue,
    borderWidth: 1,
    width: 82,
    height: 20,
  },
  statesBorder: {
    borderRightWidth: 1,
    width: 20,
    // backgroundColor: 'yellow'
  },
  states: {
    color:  "white",
    width: 80,
    height: 20,
  },

  buttonLayout: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
