import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import colors from "../../../containers/colors";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";

const RaceResultScreen = ({
  raceFieldData,
  prizeData,
  jockeysData,
  raceResultData,
  lastResult,
  oddsData,
}) => {
  if (raceFieldData == "" || prizeData == "" || jockeysData == "") {
    // NOT FOUND JOCKEYSDATA
    return false;
  }

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

  // const age = horseData.age.split("")[1];
  const raceFieldGender = raceFieldData.age_limit.split("・")[1];

  let gender;
  if (raceFieldGender === undefined) {
    gender = "";
  } else {
    gender = raceFieldGender.split("")[0];
  }

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
  const resultData = lastResult == "" ? raceResultData : lastResult;

  // Step 1: Generate an array of random values
  const array = Array.from({ length: resultData.length }, () =>
    (Math.random() * (45 - 32) + 32).toFixed(1)
  );

  // Step 2: Sort the array in ascending order
  array.sort((a, b) => a - b);

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
        {raceResultData ? (
          <View style={styles.TableBody}>
            {/* ! */}
            <View style={[styles.TableNumberTitle]}>
              <View style={styles.titleBorder}>
                <Text style={styles.whites}>着</Text>
              </View>
              <View>
                {raceResultData ? (
                  raceResultData.map((item, j) => {
                    return (
                      <View key={j} style={styles.txtBorder}>
                        <Text style={styles.whites}>
                          {j + 1}
                          {"\n"}着
                        </Text>
                      </View>
                    );
                  })
                ) : (
                  <View></View>
                )}
              </View>
            </View>
            {/* ! */}
            <View style={[styles.TableNumberTitle]}>
              <View style={styles.titleBorder}>
                <Text style={styles.whites}>枠</Text>
              </View>
              <View>
                {raceResultData ? (
                  raceResultData.map((item, j) => {
                    return (
                      <View key={j} style={styles.txtBorder}>
                        <Text
                          style={[
                            item.ranking == 1
                              ? styles.whiteWhite
                              : styles.whiteNumber,
                            item.ranking == 2
                              ? styles.whiteBlack
                              : styles.whiteNumber,
                            item.ranking == 3
                              ? styles.whiteRed
                              : styles.whiteNumber,
                            item.ranking == 4
                              ? styles.whiteblue
                              : styles.whiteNumber,
                            item.ranking == 5
                              ? styles.whiteYellow
                              : styles.whiteNumber,
                            item.ranking == 6
                              ? styles.whiteGreen
                              : styles.whiteNumber,
                            item.ranking == 7
                              ? styles.whiteOrange
                              : styles.whiteNumber,
                            item.ranking == 8
                              ? styles.whiteOrange
                              : styles.whiteNumber,
                            item.ranking == 9
                              ? styles.whitePink
                              : styles.whiteNumber,
                            item.ranking == 10
                              ? styles.whitePink
                              : styles.whiteNumber,
                          ]}
                        >
                          {item.ranking}
                        </Text>
                      </View>
                    );
                  })
                ) : (
                  <View></View>
                )}
              </View>
            </View>
            {/* ! */}
            <View style={styles.TableTitle}>
              <View style={styles.titleBorder}>
                <Text style={styles.whites}>馬名</Text>
              </View>
              <View>
                {raceResultData ? (
                  raceResultData.map((item, l) => {
                    return (
                      <View key={l} style={styles.txtBorder}>
                        <Text style={styles.whitePoint}>{item.horse_name}</Text>
                      </View>
                    );
                  })
                ) : (
                  <View></View>
                )}
              </View>
            </View>
            {/* ! */}
            {/* ! */}
            <View style={styles.TableTitleTime}>
              <View style={styles.titleBorder}>
                <Text style={styles.whites}>タイム/上り3F</Text>
              </View>
              <View style={styles.txtBorderM}>
                {raceResultData ? (
                  raceResultData.map((item, l) => {
                    return (
                      <View key={l} style={styles.txtBorder}>
                        <Text style={styles.whitePoint}>
                          0{Math.floor((item.time * 3) / 60)}:
                          {Math.floor((((item.time * 3) / 60) % 1) * 60)
                            .toString()
                            .padStart(2, "0")}
                          :
                          {String(
                            (((item.time * 3) / 60) % 1) * 60 * 1000
                          ).slice(0, 2)}
                          / {array[l]}
                        </Text>
                      </View>
                    );
                  })
                ) : (
                  <View></View>
                )}
              </View>
            </View>
            {/* ! */}
            {/* ! */}
            <View style={styles.TableTitlePoint}>
              <View style={styles.titleBorder}>
                <Text style={styles.whites}>オッズ</Text>
              </View>
              {raceResultData ? (
                raceResultData.map((item, l) => {
                  return (
                    <View key={l} style={styles.txtBorder}>
                      <Text style={styles.whitePoint}>{item.odds}</Text>
                    </View>
                  );
                })
              ) : (
                <View></View>
              )}
            </View>
            {/* ! */}
          </View>
        ) : (
          <View>
            <Text>NO</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    prizeData: state.raceData.prizeData,
    raceFieldData: state.raceData.raceFieldData,
    jockeysData: state.raceData.jockeysData,
    userData: state.user.userData,
    raceResultData: state.racingData.raceResultData,
    raceLastResultData: state.lastResultData.lastResultData,
    lastResult: state.lastResultData.LastRaceResult,
    oddsData: state.raceOddsData.oddsData,
  };
};

export default connect(mapStateToProps)(RaceResultScreen);

const styles = StyleSheet.create({
  whites: {
    color: colors.black,
    textAlign: "center",
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
    width: "39%",
    borderWidth: 1,
  },
  TableTitleTime: {
    backgroundColor: colors.cardBody,
    width: "35%",
    borderWidth: 1,
  },
  TableNumberTitle: {
    backgroundColor: colors.cardBody,
    width: "10%",
    borderWidth: 1,
  },
  TableTitlePoint: {
    backgroundColor: colors.white,
    width: "14%",
    borderWidth: 1,
  },
  txtBorder: {
    width: "100%",
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
