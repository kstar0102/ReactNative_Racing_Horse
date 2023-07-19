import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, Image, ScrollView } from "react-native";

// Redux
import { connect, useDispatch } from "react-redux";
import { horseAction } from "../../store/actions/horse/horseAction";
import { horseNameValiAction } from "../../store/actions/horse/horseNameValiAction";
import { horseNameIllegalAction } from "../../store/actions/horse/horseNameIllegalAction";
// Custom Import
import NRHeaderScreen from "../LayoutScreen/NRHeaderScreen";
import Screenstyles from "../ScreenStylesheet";
import BloodlineNameTable from "../../components/table/BloodlineNameTable";
import { PNameRegister } from "../../components/Buttons";
import HorseNameInput from "../../components/input/HorseNameInput";
import { horseColor } from "../../utils/globals";

let horseNames = [];
let inputIds = [];

const HorseNameScreen = ({
  navigation,
  horseCheckData,
  user_id,
  pasture_id,
  saveData,
  horseValidationName,
  horseIllegalName,
}) => {
  const dispatch = useDispatch();
  const [horseName, setHorseName] = useState("");
  const [inputId, setInputId] = useState("");
  const [displayStyle, setDisplayStyle] = useState([]);
  const [valiHorseName, setValiHorseName] = useState([]);
  const [illegalHorseName, setIllegalHorseName] = useState([]);
  const [illegalStyleHorseName, setIllegalStyleHorseName] = useState([]);
  const [successHorseName, setSuccessHorseName] = useState([]);
  const [breedingGender, setBreedingGender] = useState([]);
  const [breedingAge, setBreedingAge] = useState([]);
  const [breedingColor, setBreedingColor] = useState([]);
  const [breedData, setBreedData] = useState("");
  const pattern =
    /[\d\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[a-zA-Z]|[^\u30A0-\u30FF\uFF66-\uFF9F]+$/;

  useEffect(() => {
    const minAge = 5;
    const maxAge = 10;

    if (horseCheckData) {
      // Generate the random array of horse ages
      const horseAges = Array.from({ length: horseCheckData.length }, () => {
        return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
      });

      const breedingHorses = [];
      let breedGender;
      const breedAge = [];
      let breedColor;

      horseCheckData.forEach((data, index) => {
        if (data.age === "・繁殖馬") {
          breedingHorses[index] = data;
          breedGender = "牝";
          breedAge[index] = horseAges[index];
          breedColor = "red";
        }
      });

      setBreedingGender(breedGender);
      setBreedingColor(breedColor);
      setBreedingAge(breedAge);
      setBreedData(breedingHorses);
    }
  }, [horseCheckData]);

  // HORSE VALIDATION USE EFFECT
  useEffect(() => {
    setValiHorseName([]);
    let horseValiStyle = [];
    let illegalHorseNames = [];
    // START VALUE
    for (let index = 0; index < horseCheckData.length; index++) {
      const element = horseCheckData[index];
      if (element !== undefined && element !== "") {
        horseValiStyle[index] = "none";
      }
    }
    //==========yyy
    for (let index = 0; index < horseValidationName.length; index++) {
      const item = horseValidationName[index];
      if (item === "success") {
        illegalHorseNames.push(item);
        horseValiStyle[index] = "none";
      } else {
        horseValiStyle[index] = "flex";
      }
    }

    setValiHorseName(horseValiStyle);
    setIllegalHorseName(illegalHorseNames);
  }, [horseValidationName, horseCheckData]);

  // ILLEGAL STYLE USEEFFECT
  useEffect(() => {
    setIllegalStyleHorseName([]);
    let horseIllegalStyle = [];
    let successDispacharray = [];
    for (let index = 0; index < horseCheckData.length; index++) {
      const element = horseCheckData[index];
      if (element !== undefined && element !== "") {
        horseIllegalStyle[index] = "none";
      }
    }

    //==========xxx
    for (let index = 0; index < horseIllegalName.length; index++) {
      const item = horseIllegalName[index];
      if (item === "success") {
        horseIllegalStyle[index] = "none";
        successDispacharray.push(item);
      } else {
        horseIllegalStyle[index] = "flex";
      }
    }
    setIllegalStyleHorseName(horseIllegalStyle);
    setSuccessHorseName(successDispacharray);
  }, [horseIllegalName, horseCheckData]);

  const handleInputChange = (value, id) => {
    setHorseName(value);
    setInputId(id);
  };

  const handleOnBlur = () => {
    for (let index = 0; index < horseNames.length; index++) {
      if (horseNames[index] === horseName) {
        return false;
      }
      if (inputIds[index] === inputId) {
        horseNames[index] = horseName;
        return false;
      }
    }
    horseNames.push(horseName);
    inputIds.push(inputId);
  };

  const handleSubmit = () => {
    setDisplayStyle([]);

    const updatedHorseNames = [];
    const valiHorseNames = [];

    // ===============HORSE NAMES VALIDATION KATAKANA
    horseNames.forEach((item, index) => {
      if (!pattern.test(item)) {
        valiHorseNames.push(item);
        updatedHorseNames.push("none");
      } else {
        updatedHorseNames.push("flex");
      }
    });

    setDisplayStyle(updatedHorseNames);

    if (
      !updatedHorseNames.includes("flex") &&
      horseNames.length === valiHorseNames.length &&
      illegalHorseName.length === horseNames.length &&
      successHorseName.length === horseCheckData.length
    ) {
      const CheckData = {
        name: horseNames,
        data: horseCheckData,
        user_id: user_id,
        pasture_id: pasture_id,
      };
      dispatch(horseAction(CheckData));

      navigation.navigate("PastureScreen");
    } else {
      //===================SAME AS NAME -> VALIDATION
      if (horseNames.length === valiHorseNames.length) {
        const sendName = {
          name: valiHorseNames,
        };
        dispatch(horseNameValiAction(sendName));
        console.log("one");
      }

      //==================ILLEGAL HORSENAME NO -> ILLEGAL
      if (illegalHorseName.length === horseNames.length) {
        const sendillegalName = {
          name: valiHorseNames,
        };
        dispatch(horseNameIllegalAction(sendillegalName));
        console.log("two");
      }
    }
  };

  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../assets/images/1.png")}
        resizeMode="contain"
        style={Screenstyles.img}
      >
        <NRHeaderScreen />
        <View style={Screenstyles.HCcontainer}>
          <View style={Screenstyles.NRtitle}>
            <Text style={Screenstyles.NRtitleA}>馬名を決める</Text>
            <Text style={Screenstyles.NRtitleB}>
              [注意1] <Text style={Screenstyles.NRSpanT}>卑猥</Text>な名前や
              <Text style={Screenstyles.NRSpanT}>コンプラ違反</Text>のワードは
              <Text style={Screenstyles.NRSpanT}>禁止</Text>します。
            </Text>
            <Text style={Screenstyles.NRtitleB}>
              [注意2] 一度決めた<Text style={Screenstyles.NRSpanT}>名前</Text>は
              <Text style={Screenstyles.NRSpanT}>変更できません。</Text> 慎重に!
            </Text>
          </View>
          <ScrollView style={Screenstyles.ScrollView}>
            {horseCheckData.map((item, i) => {
              return (
                <View key={i} style={Screenstyles.horseNameCard}>
                  <View style={Screenstyles.horseCardContent}>
                    <View style={Screenstyles.horseCardLeft}>
                      {horseColor.map((colorName, index) => {
                        if (colorName[item.color]) {
                          return (
                            <View key={`${item.id}${index}`}>
                              <View style={Screenstyles.titleFlex}>
                                <Text
                                  style={{
                                    color:
                                      item.age == "・繁殖馬"
                                        ? breedingColor
                                        : item.gender === "牝"
                                        ? "red"
                                        : "blue",
                                    fontSize: 15,
                                  }}
                                >
                                  {item.age == "・繁殖馬"
                                    ? breedingGender
                                    : item.gender}
                                </Text>
                                <Text style={{ fontSize: 15 }}>
                                  {" "}
                                  {item.age == "・繁殖馬"
                                    ? breedingAge[i]
                                    : item.age.split("")[1]}
                                </Text>
                              </View>
                              <Image
                                style={Screenstyles.HCImage}
                                source={colorName[item.color]}
                              />
                            </View>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </View>
                    <View style={Screenstyles.horseCardRight}>
                      <BloodlineNameTable
                        father_sys={item.f_sys}
                        father_f_sys={item.f_f_sys}
                        father_m_sys={item.f_m_sys}
                        mother_sys={item.m_sys}
                        mother_f_sys={item.m_f_sys}
                        mother_m_sys={item.m_m_sys}
                      />
                    </View>
                  </View>

                  <View style={Screenstyles.TName}>
                    <Text style={Screenstyles.Title}>・馬名</Text>
                    <View style={Screenstyles.TNameInput}>
                      <HorseNameInput
                        id={item.id}
                        onChangeText={handleInputChange}
                        onBlurText={handleOnBlur}
                      />
                    </View>
                    <Text
                      style={[
                        Screenstyles.caution,
                        { display: displayStyle[i] },
                      ]}
                    >
                      {displayStyle[i] == "flex"
                        ? `日本語のカタカナを入力する必要があります`
                        : "名前を入力してください。"}{" "}
                    </Text>

                    <Text
                      style={[
                        Screenstyles.caution,
                        { display: valiHorseName[i] },
                      ]}
                    >
                      ※すでにその名前は
                      <Text style={Screenstyles.NRSpanT}>使用されています</Text>
                      。
                    </Text>

                    <Text
                      style={[
                        Screenstyles.caution,
                        { display: illegalStyleHorseName[i] },
                      ]}
                    >
                      <Text style={Screenstyles.NRSpanT}>
                        違法な単語は入力できません。
                      </Text>
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View style={Screenstyles.registerButton}>
            <PNameRegister label={"購入する"} onPress={handleSubmit} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    horseCheckData: state.horseData.CheckData,
    user_id: state.user.userData.id,
    pasture_id: state.pasture.pastureData.id,
    saveData: state.horseData.saveData,
    horseValidationName: state.horseNameValid.horseNameValid,
    horseIllegalName: state.horseNameValid.horseNameIllegal,
  };
};

export default connect(mapStateToProps)(HorseNameScreen);
