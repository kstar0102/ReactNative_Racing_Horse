import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import { abilityFactor } from "../../utils/globals";

const MarryBloodlineSysTable = ({
  father_sys,
  father_f_sys,
  father_m_sys,
  mother_sys,
  mother_f_sys,
  mother_m_sys,
  horseName,
  gender,
  father_f_f_sys,
  father_f_m_sys,
  father_m_f_sys,
  father_m_m_sys,
  mother_f_f_sys,
  mother_f_m_sys,
  mother_m_f_sys,
  mother_m_m_sys,
  father_factor,
  father_f_factor,
  father_f_f_factor,
  father_m_f_factor,
  mother_f_factor,
  mother_f_f_factor,
  mother_m_f_factor,
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
          <Text style={[styles.txtFont, {widh:1}]}>
            {
              gender == "girl"
              ? '母'
              : gender == "man"
              && '父'
            }
          </Text>
        </View>

        <View style={styles.horseParental}>

          <View style={styles.horseFather}>
            
            <Text style={styles.txtFont}>
              {father_sys}系
              
            </Text>
            
            <View style={styles.iconAbilityFactor}>
              {father_factor && <Image source={abilityFactor[father_factor]} />}
            </View>
            
          </View>
          <View style={styles.horseMother}>
            
            <Text style={styles.txtFont}>{mother_sys}系</Text>
            
          </View>

        </View>

        <View style={styles.horseGrand}>

          <View style={styles.horseGrandpa}>

            <Text style={styles.txtFont}>{father_f_sys}系</Text>

            <View style={styles.iconAbilityFactor}>
              {father_f_factor && <Image source={abilityFactor[father_f_factor]} />}
            </View>

          </View>
          <View style={styles.horseGrandma}>

            <Text style={styles.txtFont}>{father_m_sys}系</Text>

          </View>

          <View style={styles.horseGrandpa}>

            <Text style={styles.txtFont}>{mother_f_sys}系</Text>

            <View style={styles.iconAbilityFactor}>
              {mother_f_factor && <Image source={abilityFactor[mother_f_factor]} />}
            </View>

          </View>
          <View style={styles.horseGrandma}>

            <Text style={styles.txtFont}>{mother_m_sys}系</Text>

          </View>

        </View>

        <View style={styles.horseGreatGrand}>

          <View style={styles.horseGreatGrandpa}>

            <Text style={styles.txtFont}>{father_f_f_sys}系</Text>

            <View style={styles.iconAbilityFactor}>
              {father_f_f_factor && <Image source={abilityFactor[father_f_f_factor]} />}
            </View>

          </View>
          <View style={styles.horseGreatGrandma}>

            <Text style={styles.txtFont}>{father_f_m_sys}系</Text>
            
          </View>


          <View style={styles.horseGreatGrandpa}>

            <Text style={styles.txtFont}>{father_m_f_sys}系</Text>

            <View style={styles.iconAbilityFactor}>
              {father_m_f_factor && <Image source={abilityFactor[father_m_f_factor]} />}
            </View>

          </View>
          <View style={styles.horseGreatGrandma}>

            <Text style={styles.txtFont}>{father_m_m_sys}系</Text>

          </View>
          
          <View style={styles.horseGreatGrandpa}>

            <Text style={styles.txtFont}>{mother_f_f_sys}系</Text>

            <View style={styles.iconAbilityFactor}>
              {mother_f_f_factor && <Image source={abilityFactor[mother_f_f_factor]} />}
            </View>

          </View>
          <View style={styles.horseGreatGrandma}>

            <Text style={styles.txtFont}>{mother_f_m_sys}系</Text>

          </View>


          <View style={styles.horseGreatGrandpa}>

            <Text style={styles.txtFont}>{mother_m_f_sys}系</Text>

            <View style={styles.iconAbilityFactor}>
              {mother_m_f_factor && <Image source={abilityFactor[mother_m_f_factor]} />}
            </View>

          </View>
          <View style={styles.horseGreatGrandma}>

            <Text style={styles.txtFont}>{mother_m_m_sys}系</Text>

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
    width: vw(8),
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: .4,
    borderBottomWidth: 1
  },
  horseNameG: {
    backgroundColor: "#e094f7",
    width: vw(8),
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: .4,
    borderBottomWidth: 1
  },

  horseParental: {
    flexDirection: "column",
  },
  horseFather: {
    backgroundColor: "#4ca3f5",
    height: 100,
    width: vw(31),
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: .4,
    position: 'relative'
  },
  horseMother: {
    backgroundColor: "#e094f7",
    height: 100,
    width: vw(31),
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: .4,
    borderBottomWidth: .6,
  },

  horseGrand: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  horseGrandpa: {
    height: 50,
    width: vw(31),
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: "#4ca3f5",
    borderWidth: .4
  },
  horseGrandma: {
    height: 50,
    width: vw(31),
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: "#e094f7",
    borderWidth: .4,
    borderBottomWidth: .6,
  },

  horseGreatGrand: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: .4
  },
  horseGreatGrandpa: {
    height: 25,
    width: vw(30),
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: "#4ca3f5",
    borderWidth: .4
  },
  horseGreatGrandma: {
    height: 25,
    width: vw(30),
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: "#e094f7",
    borderWidth: .4,
    borderBottomWidth: 1,
  },
  iconAbilityFactor: {
    position: 'absolute', 
    bottom: 0, 
    right: 0
  }
});
