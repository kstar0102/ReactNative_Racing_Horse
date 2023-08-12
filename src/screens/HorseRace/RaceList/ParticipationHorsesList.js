import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import colors from "../../../containers/colors";
import { RegisterButton, CustomButtons } from "../../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import { RaceStartAction } from "../../../store/actions/race/RaceStartAction";
import * as ScreenOrientation from "expo-screen-orientation";

const ParticipationHorsesList = ({
  raceFieldData,
  prizeData,
  jockeysData,
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
  // Quality State
  const [escape, setEscape] = useState([]);
  const [destination, setDestination] = useState([]);
  const [difference, setDifference] = useState([]);
  const [additional, setAdditional] = useState([]);
  const [freeButton, setFreeButton] = useState(0);
  const [btnDisplay, setBtnDisplay] = useState(true);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

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

      reaceReigsterData.forEach((item) => {
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

  useEffect(() => {
    if (reaceReigsterData != "" && reaceReigsterData.length > 1) {
      setBtnDisplay(false);
    } else {
      setBtnDisplay(true);
    }
  }, [reaceReigsterData]);


  // const age = horseData.age.split("")[1];
  const raceFieldGender = raceFieldData.age_limit.split("・")[1];

  let gender;
  if (raceFieldGender === undefined) {
    gender = "";
  } else {
    gender = raceFieldGender.split("")[0];
  }
  let raceId = [];
  let jockeyId = [];
  if (reaceReigsterData != "") {
    reaceReigsterData.map((item) => {
      raceId.push(item.horse_id);
      jockeyId.push(item.jockey_id);
    });
  }

  const handleClick = () => {
    const sendIds = {
      horse_id: raceId,
      jockey_id: jockeyId,
    };
    dispatch(RaceStartAction(sendIds));
    navigation.navigate('HorseRace');
  };

  let prices = [];

  {
    prizeData.map((data) => {
      prices.push(data.money);
    });
  }
  let slicePrices = prices.slice(0, 5);

  let jockeyNames = [];
  jockeysData.map((item) => {
    jockeyNames.push({ name: item.name, id: item.id });
  });

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.TableHeader}>
          <Text style={styles.whites}>
            {raceFieldData.name} ({raceFieldData.type} ・{" "}
            {raceFieldData.age_limit}・定量)
          </Text>
          <Text style={styles.whites}>
            {raceFieldData.place} ・ {raceFieldData.ground}
            {raceFieldData.distance} ・天気予報 ({raceFieldData.weather})
          </Text>
          <Text style={styles.whites}>賞金(pt):{slicePrices.join("・")}</Text>
        </View>
        <View style={styles.TableBody}>
          <View style={[styles.TableNumberTitle]}>
            <View style={styles.titleBorder}>
              <Text style={styles.whites}>枠</Text>
            </View>
            <View>
              {reaceReigsterData ? (
                reaceReigsterData.map((item, j) => {
                  return (
                    <View key={j} style={styles.txtBorder}>
                      <Text
                        style={[
                          j + 1 == 1
                            ? styles.whiteWhite
                            : styles.whiteNumber,
                          j + 1 == 2
                            ? styles.whiteBlack
                            : styles.whiteNumber,
                          j + 1 == 3 ? styles.whiteRed : styles.whiteNumber,
                          j + 1 == 4
                            ? styles.whiteblue
                            : styles.whiteNumber,
                          j + 1 == 5
                            ? styles.whiteYellow
                            : styles.whiteNumber,
                          j + 1 == 6
                            ? styles.whiteGreen
                            : styles.whiteNumber,
                          j + 1 == 7
                            ? styles.whiteOrange
                            : styles.whiteNumber,
                          j + 1 == 8
                            ? styles.whiteOrange
                            : styles.whiteNumber,
                          j + 1 == 9
                            ? styles.whitePink
                            : styles.whiteNumber,
                          j + 1 == 10
                            ? styles.whitePink
                            : styles.whiteNumber,
                        ]}
                      >
                        {j + 1}
                      </Text>
                    </View>
                  );
                })
              ) : (
                <View style={styles.txtBorder}>
                  <Text style={styles.whites}> (牡3)</Text>
                  <Text style={styles.whites}>馬主:</Text>
                </View>
              )}
            </View>
          </View>
          {/* ! */}
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.whites}>登録馬</Text>
            </View>
            <View>
              {reaceReigsterData ? (
                reaceReigsterData.map((item, i) => {
                  return (
                    <View key={i} style={styles.txtBorder}>
                      <Text style={styles.whites}>
                        {item.horse_name} ({item.horse_gender}
                        {item.horse_age})
                      </Text>
                      <Text style={styles.whites}>馬主:{item.user_name}</Text>
                    </View>
                  );
                })
              ) : (
                <View style={styles.txtBorder}>
                  <Text style={styles.whites}> (牡3)</Text>
                  <Text style={styles.whites}>馬主:</Text>
                </View>
              )}
            </View>
          </View>
          {/* ! */}
          {/* ! */}
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.whites}>斤量/騎手/脚質</Text>
            </View>
            {reaceReigsterData ? (
              reaceReigsterData.map((item, k) => {
                return (
                  <View key={k} style={styles.txtBorderM}>
                    <Text style={styles.whites}>
                      {item.mass}kg/ {item.jockey_name}
                    </Text>
                    <Image
                      style={[styles.states, { display: escape[k] }]}
                      source={require("../../../assets/images/qIcons/8.png")}
                    />
                    <Image
                      style={[styles.states, { display: destination[k] }]}
                      source={require("../../../assets/images/qIcons/6.png")}
                    />
                    <Image
                      style={[styles.states, { display: difference[k] }]}
                      source={require("../../../assets/images/qIcons/7.png")}
                    />
                    <Image
                      style={[styles.states, { display: additional[k] }]}
                      source={require("../../../assets/images/qIcons/1.png")}
                    />
                  </View>
                );
              })
            ) : (
              <View style={styles.txtBorderM}>
              </View>
            )}
          </View>
          {/* ! */}
          {/* ! */}
          <View style={styles.TableTitlePoint}>
            <View style={styles.titleBorder}>
              <Text style={styles.whites}>オッズ</Text>
            </View>
            {reaceReigsterData ? (
              reaceReigsterData.map((item, l) => {
                return (
                  <View key={l} style={styles.txtBorder}>
                    <Text style={styles.whitePoint}>
                      {l + 1 + "" + 2 + "" + "." + l}
                    </Text>
                  </View>
                );
              })
            ) : (
              <View style={styles.txtBorder}>
                <Text style={styles.whites}></Text>
                <Text style={styles.whites}></Text>
              </View>
            )}
          </View>
          {/* ! */}
        </View>
      </ScrollView>
      <View style={styles.buttonLayout}>
        <RegisterButton
          label={"レース"}
          color={1}
          onPress={() => handleClick()}
          disabled={btnDisplay}
        />
        <CustomButtons
          label={"結果"}
          color={3}
          onPress={() => navigation.navigate("RaceResult")}
          disabled={btnDisplay}
        />
      </View>
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
  whites: {
    color: colors.black,
    textAlign: "center",
    width: "97%",
  },
  whitePoint: {
    color: colors.black,
    textAlign: "center",
    width: "90%",
    fontSize: 16,
    paddingVertical: 9,
  },
  container: {
    // borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 450,
    // height: 50,
    // alignItems: 'center',
  },
  TableTitle: {
    backgroundColor: colors.cardBody,
    width: "40%",
    borderWidth: 1,
  },
  TableNumberTitle: {
    // backgroundColor: colors.cardBody,
    width: "15%",
    borderWidth: 1,
  },
  TableTitlePoint: {
    backgroundColor: colors.white,
    width: "14%",
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
  },
  states: {
    width: 80,
    height: 20,
  },

  buttonLayout: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  whiteNumber: {
    height: 42,
    textAlign: "center",
    width: "90%",
    fontSize: 20,
    paddingVertical: 6,
  },
  whiteWhite: {
    backgroundColor: "white",
    color: "black",
  },
  whiteBlack: {
    backgroundColor: "black",
    color: "white",
  },
  whiteRed: {
    color: colors.white,
    backgroundColor: "#fc001b",
  },
  whiteblue: {
    color: colors.white,
    backgroundColor: "#4d00f7",
  },
  whiteYellow: {
    color: colors.black,
    backgroundColor: "#f7ff44",
  },
  whiteGreen: {
    color: colors.white,
    backgroundColor: "#1ea95c",
  },
  whiteOrange: {
    color: colors.white,
    backgroundColor: "#f5c734",
  },
  whiteOrange: {
    color: colors.white,
    backgroundColor: "#e7c14e",
  },
  whitePink: {
    color: colors.white,
    backgroundColor: "#ff94fb",
  },
  whitePink: {
    color: colors.white,
    backgroundColor: "#ff94fb",
  },
});
