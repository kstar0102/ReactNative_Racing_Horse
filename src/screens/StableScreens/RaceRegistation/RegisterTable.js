import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Alert,
  Image,
} from "react-native";
import colors from "../../../containers/colors";
import { RegisterButton, CustomButtons } from "../../../components/Buttons";
import ButtonStyle from "../../../components/Buttons/ButtonStyle";
import SaleInputButton from "../../../components/Buttons/SaleInputButton";
import DropdownR from "../../../components/Buttons/DropDwonR";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import { RaceRegisterSaveAction } from "../../../store/actions/ReacRegister/RaceRegisterSaveAction";
import { RaceRegisterBackSaveAction } from "../../../store/actions/ReacRegister/RaceRegisterBackSaveAction";
import { StableGetAtion } from "../../../store/actions/truck/getApi/stableGetAtion";
import { HorseRegisteringAction } from "../../../store/actions/truck/TrainInstitution/HorseRegisteringAction";
import { calculateGameDate } from "../../LayoutScreen/HeaderScreen";
const RegisterTable = ({
  raceFieldData,
  prizeData,
  jockeysData,
  userData,
  horseData,
  reaceReigsterData,
  stableMenu,
  raceWeekData
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
  const [currentTime, setCurrentTime] = useState(new Date());

  // Quality State
  const [escape, setEscape] = useState([]);
  const [destination, setDestination] = useState([]);
  const [difference, setDifference] = useState([]);
  const [additional, setAdditional] = useState([]);

  const [freeButton, setFreeButton] = useState(0);

  useEffect(() => {
    dispatch(StableGetAtion());
  }, []);



  const gameTime = calculateGameDate(currentTime);

  const next_date = new Date(gameTime.getTime() + (7 * 24 * 60 * 60 * 1000));
  let next_date_month = next_date.getMonth() + 1;
  let nextWeekNumber = Math.ceil(next_date.getDate() / 7);
  if (nextWeekNumber == 5) {
    next_date_month = next_date.getMonth() + 2;
    nextWeekNumber = 1;
  }
  const before_before_date = new Date(gameTime.getTime() - (14 * 24 * 60 * 60 * 1000));

  const next_next_date = new Date(gameTime.getTime() + (14 * 24 * 60 * 60 * 1000));
  const next_next_date_month = next_next_date.getMonth() + 1;
  const next_next_week_number = Math.ceil(before_before_date.getDate() / 7);

  const next_next_next_date = new Date(gameTime.getTime() + (21 * 24 * 60 * 60 * 1000));
  const next_next_next_date_month = next_next_next_date.getMonth() + 1;
  const next_next_next_week_number = Math.ceil(before_before_date.getDate() / 7);

  const  next_week = next_date_month + "-" + nextWeekNumber;
  const  next_next_week = next_next_date_month + "-" + next_next_week_number;
  const  next_next_next_week = next_next_next_date_month + "-" + next_next_next_week_number;

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
  let stall_type;
  for (let i = 0; i < stableMenu.length; i++) {
    const stableMenu_id = stableMenu[i].id;
    if (horseData.stall_id == stableMenu_id) {
      stall_type = stableMenu[i].name;
    }
  }
  const age = horseData.age.split("")[1];
  const horseGender = horseData.gender;
  const raceFieldAge = raceFieldData.age_limit.split("")[0];
  const raceFieldAgeLimit = raceFieldData.age_limit.split("")[3];
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
      stall_type: stall_type,
      week: raceWeekData
    };
    const sendDate = {
      user_id:  userData.id,
      next_week: next_week,
      next_next_week: next_next_week,
      next_next_next_week: next_next_next_week
    }
    dispatch(HorseRegisteringAction(sendDate));
    dispatch(RaceRegisterSaveAction(sendAllData));
    setQuality(undefined);
  };

  const handleClick = (value) => {
    if (raceFieldAgeLimit === "上") {
      if (raceFieldAge <= convertedToFullWidth) {
        setModalVisible(true);
        setActiveBin(value);
        if (gender != "") {
          if (horseGender === gender) {
            setModalVisible(true);
            setActiveBin(value);
          } else {
            setModalVisible(false);
            Alert.alert(
              " ",
              "性別は同じではありません。",
              [
                {
                  text: "いいえ",
                  style: "cancel",
                },
                {
                  text: "はい",
                  onPress: () => console.log("Yes"),
                },
              ],
              { cancelable: false }
            );
          }
        }
      } else {
        Alert.alert(
          " ",
          "馬の年齢は同じではありません。",
          [
            {
              text: "いいえ",
              style: "cancel",
            },
            {
              text: "はい",
              onPress: () => console.log("Yes"),
            },
          ],
          { cancelable: false }
        );
      }
    } else if (raceFieldAgeLimit === "定") {
      if (raceFieldAge >= convertedToFullWidth) {
        setModalVisible(true);
        setActiveBin(value);
        if (gender != "") {
          if (horseGender === gender) {
            setModalVisible(true);
            setActiveBin(value);
          } else {
            setModalVisible(false);
            Alert.alert(
              " ",
              "性別は同じではありません。",
              [
                {
                  text: "いいえ",
                  style: "cancel",
                },
                {
                  text: "はい",
                  onPress: () => console.log("Yes"),
                },
              ],
              { cancelable: false }
            );
          }
        }
      } else {
        Alert.alert(
          " ",
          "馬の年齢は同じではありません。",
          [
            {
              text: "いいえ",
              style: "cancel",
            },
            {
              text: "はい",
              onPress: () => console.log("Yes"),
            },
          ],
          { cancelable: false }
        );
      }
    }
  };
  const handleBackClick = () => {
    const sendBackData = {
      race_id: raceFieldData.id,
      user_id: userData.id,
    };
    const sendDate = {
      user_id:  userData.id,
      next_week: next_week,
      next_next_week: next_next_week,
      next_next_next_week: next_next_next_week
    }
    dispatch(HorseRegisteringAction(sendDate));
    dispatch(RaceRegisterBackSaveAction(sendBackData));
  };

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
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white}>登録馬</Text>
            </View>
            <View>
              {reaceReigsterData ? (
                reaceReigsterData.map((item, index) => {
                  return (
                    <View key={index} style={styles.txtBorder}>
                      <Text style={styles.white}>
                        {item.horse_name} ({item.horse_gender}
                        {item.horse_age})
                      </Text>
                      <Text style={styles.white}>馬主:{item.user_name}</Text>
                    </View>
                  );
                })
              ) : (
                <View style={styles.txtBorder}>
                  <Text style={styles.white}> (牡3)</Text>
                  <Text style={styles.white}>馬主:</Text>
                </View>
              )}
            </View>
          </View>
          {/* ! */}
          {/* ! */}
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white}>斤量/騎手/脚質</Text>
            </View>
            {reaceReigsterData ? (
              reaceReigsterData.map((item, i) => {
                return (
                  <View key={i} style={styles.txtBorderM}>
                    <Text style={styles.white}>
                      {item.mass}kg/ {item.jockey_name}
                    </Text>
                    <Image
                      style={[styles.states, { display: escape[i] }]}
                      source={require("../../../assets/images/qIcons/8.png")}
                    />
                    <Image
                      style={[styles.states, { display: destination[i] }]}
                      source={require("../../../assets/images/qIcons/6.png")}
                    />
                    <Image
                      style={[styles.states, { display: difference[i] }]}
                      source={require("../../../assets/images/qIcons/7.png")}
                    />
                    <Image
                      style={[styles.states, { display: additional[i] }]}
                      source={require("../../../assets/images/qIcons/1.png")}
                    />
                  </View>
                );
              })
            ) : (
              <View style={styles.txtBorderM}>
                <Text style={styles.white}>kg/ {"Konya"}</Text>
                <View style={styles.stateBar}>
                  <View style={styles.statesBorder}>
                    {/* <Text style={[styles.states, { display: "flex" }]}> */}
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../../assets/images/qIcon.png")}
                    />
                    {/* </Text> */}
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../../assets/images/qIcon.png")}
                    />
                  </View>
                  <View style={styles.statesBorder}>
                    <Image
                      style={[styles.states, { display: "none" }]}
                      source={require("../../../assets/images/qIcon.png")}
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
          {/* ! */}
          {/* ! */}
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white}>前走</Text>
            </View>
            {reaceReigsterData ? (
              reaceReigsterData.map((item, index) => {
                return (
                  <View key={index} style={styles.txtBorder}>
                    <Text style={styles.white}>日付 レース名</Text>
                    <Text style={styles.white}>距離/ 着順</Text>
                  </View>
                );
              })
            ) : (
              <View style={styles.txtBorder}>
                <Text style={styles.white}></Text>
                <Text style={styles.white}></Text>
              </View>
            )}
          </View>
          {/* ! */}
        </View>
      </ScrollView>
      <View style={styles.buttonLayout}>
        {freeButton == 0 ? (
          <RegisterButton
            label={"出走登録"}
            color={2}
            onPress={() => handleClick(0)}
          />
        ) : (
          <RegisterButton
            label={"登録取消"}
            color={3}
            onPress={() => handleBackClick()}
          />
        )}
        <CustomButtons
          label={"戻る"}
          color={2}
          onPress={() => navigation.goBack()}
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
    stableMenu: state.stableMenu.StableMenuData,
    raceWeekData:state.raceData.raceWeekData
  };
};

export default connect(mapStateToProps)(RegisterTable);

const styles = StyleSheet.create({
  white: {
    color: colors.black,
    textAlign: "center",
    width: "97%",
  },
  container: {
    // borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 250,
    // height: 50,
    // alignItems: 'center',
  },
  TableTitle: {
    backgroundColor: colors.cardBody,
    width: "34%",
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
    color: colors.white,
    width: 80,
    height: 20,
  },

  buttonLayout: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
