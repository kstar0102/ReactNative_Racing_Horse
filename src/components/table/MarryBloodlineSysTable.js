import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
const MarryBloodlineSysTable = ({
  father_sys,
  father_f_sys,
  father_m_sys,
  mother_sys,
  mother_f_sys,
  mother_m_sys,
  horseName,
  gender,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={[
            gender == "girl"
              ? styles.horseNameG
              : gender == "man"
              ? styles.horseName
              : styles.horseName,
          ]}
        >
          <Text style={styles.txtFont}>{horseName}</Text>
        </View>
        <View style={styles.horseParental}>
          <View style={styles.horseFather}>
            <Text style={styles.txtFont}>{father_sys}系</Text>
          </View>
          <View style={styles.horseMother}>
            <Text style={styles.txtFont}>{mother_sys}系</Text>
          </View>
        </View>
        <View style={styles.horseGrand}>
          <View style={styles.horseGrand1}>
            <View style={styles.horseGrandpa}>
              <Text style={styles.txtFont}>{father_f_sys}系</Text>
            </View>
            <View style={styles.horseGrandma}>
              <Text style={styles.txtFont}>{father_m_sys}系</Text>
            </View>
          </View>
          <View style={styles.horseGrand2}>
            <View style={styles.horseGrandpa}>
              <Text style={styles.txtFont}>{mother_f_sys}系</Text>
            </View>
            <View style={styles.horseGrandma}>
              <Text style={styles.txtFont}>{mother_m_sys}系</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MarryBloodlineSysTable;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: 200,
    flexDirection: "row",
  },
  txtFont: {
    fontSize: 10,
  },
  horseName: {
    backgroundColor: "#4ca3f5",
    width: vw(35),
    paddingTop: 80,
    padding: 10,
  },
  horseNameG: {
    backgroundColor: "#e094f7",
    width: vw(35),
    paddingTop: 80,
    padding: 10,
  },
  horseParental: {
    flexDirection: "column",
  },
  horseFather: {
    backgroundColor: "#4ca3f5",
    height: 100,
    width: vw(30),
    paddingTop: 43,
  },
  horseMother: {
    backgroundColor: "#e094f7",
    height: 100,
    width: vw(30),
    paddingTop: 43,
  },
  horseGrand: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  horseGrandpa: {
    height: 50,
    width: vw(36),
    paddingTop: 15,
    backgroundColor: "#4ca3f5",
  },
  horseGrandma: {
    height: 50,
    width: vw(36),
    paddingTop: 15,
    backgroundColor: "#e094f7",
  },
});
