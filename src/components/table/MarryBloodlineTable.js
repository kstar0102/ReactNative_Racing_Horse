import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import colors from "../../containers/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MarryBloodlineTable = ({
  father_sys,
  father_f_sys,
  father_m_sys,
  mother_sys,
  mother_f_sys,
  mother_m_sys,
  horseName,
  gender
}) => {
  return (
    <>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[ gender == "girl" ?  styles.horseNameG : gender == "man" ? styles.horseName : styles.horseName ,  ]}>
          <Text style={styles.txtFont}>{horseName}</Text>
        </View>
        <View style={styles.horseParental}>
          <View style={styles.horseFather}>
            <Text>{father_sys}</Text>
          </View>
          <View style={styles.horseMother}>
            <Text>{mother_sys}</Text>
          </View>
        </View>
        <View style={styles.horseGrand}>
          <View style={styles.horseGrand1}>
            <View style={styles.horseGrandpa}>
              <Text>{father_f_sys}</Text>
            </View>
            <View style={styles.horseGrandma}>
              <Text>{father_m_sys}</Text>
            </View>
          </View>
          <View style={styles.horseGrand2}>
            <View style={styles.horseGrandpa}>
              <Text>{mother_f_sys}</Text>
            </View>
            <View style={styles.horseGrandma}>
              <Text>{mother_m_sys}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MarryBloodlineTable;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: 200,
    flexDirection: "row",
  },
  txtFont: {
    fontSize: 18,
  },
  horseName: {
    backgroundColor: "#4ca3f5",
    width: 160,
    paddingTop: 80,
    padding: 10,
  },
  horseNameG:{
    backgroundColor: "#e094f7",
    width: 160,
    paddingTop: 80,
    padding: 10,
  },
  horseParental: {
    flexDirection: "column",
  },
  horseFather: {
    backgroundColor: "#4ca3f5",
    height: 100,
    width: 150,
    paddingTop: 43,
  },
  horseMother: {
    backgroundColor: "#e094f7",
    height: 100,
    width: 150,
    paddingTop: 43,
  },
  horseGrand: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  horseGrandpa: {
    height: 50,
    width: 150,
    paddingTop: 15,
    backgroundColor: "#4ca3f5",
  },
  horseGrandma: {
    height: 50,
    width: 150,
    paddingTop: 15,
    backgroundColor: "#e094f7",
  },
  greatGrand: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  horsegreatGrandpa: {
    backgroundColor: "#4ca3f5",
    height: 25,
    width: 150,
  },
  horsegreatGrandma: {
    backgroundColor: "#e094f7",
    height: 25,
    width: 150,
  },
});
