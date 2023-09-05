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
  horseCheckAge,
  user_id,
  pasture_id,
  horseValidationName,
  horseIllegalName,
}) => {
  const dispatch = useDispatch();
  const [horseName, setHorseName] = useState("");
  const [inputId, setInputId] = useState("");
  const [displayStyle, setDisplayStyle] = useState([]);
  const [valiHorseName, setValiHorseName] = useState([]);
  const [sameHorseName, setSameHorseName] = useState([]);
  const [illegalStyleHorseName, setIllegalStyleHorseName] = useState([]);
  const [successHorseName, setSuccessHorseName] = useState([]);
  const [breedingGender, setBreedingGender] = useState([]);
  const [breedingAge, setBreedingAge] = useState([]);
  const [breedingColor, setBreedingColor] = useState([]);
  const [breedData, setBreedData] = useState("");

  let illegalCheck = [];

  const pattern =
    /^([^0-9a-zA-Z\s!@#$%^&*¿~±×÷•°`´₹£€¥©®¡()_+\-=\[\]{};':"\\|,.<>\/?`~｀＠＃＄％＾＆＊（）ー＋＝￥「｛」｝；：’＼｜、＜＞／？｀～]|[^\u30A0-\u30FF\uFF66-\uFF9F]*)$/;

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

  const modifiedArray = horseCheckAge.map((value) => {
    return `・${value}歳馬`;
  });

  // Horse Validation Same Useffect
  useEffect(() => {
    setValiHorseName([]);
    let horseValiStyle = [];
    let sameHorseNames = [];
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
        sameHorseNames.push(item);
        horseValiStyle[index] = "none";
      } else {
        horseValiStyle[index] = "flex";
      }
    }

    setValiHorseName(horseValiStyle);
    setSameHorseName(sameHorseNames);
  }, [horseValidationName, horseCheckData]);

  // Illegal style UseEffect
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
    let icheck = [];
    for (let index = 0; index < horseIllegalName.length; index++) {
      const item = horseIllegalName[index];
      if (item === "success") {
        successDispacharray.push(item);
        horseIllegalStyle[index] = "none";
      } else {
        icheck.push("no");
        horseIllegalStyle[index] = "flex";
      }
    }

    illegalCheck = icheck;
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
        //  return false;
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

    const hasDuplicates = horseNames.length !== new Set(horseNames).size;
    if (hasDuplicates) {
      alert("重複する名前を入力しました。");
      return false;
    }
    // ===============Horse Correct Name
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
      successHorseName != "" &&
      successHorseName.length === horseNames.length &&
      horseNames != "" &&
      sameHorseName.length === horseNames.length &&
      sameHorseName != "" &&
      valiHorseNames.length === horseNames.length &&
      valiHorseNames != ""
    ) {
      const CheckData = {
        name: horseNames,
        data: horseCheckData,
        user_id: user_id,
        pasture_id: pasture_id,
        age: modifiedArray,
      };
      dispatch(horseAction(CheckData));

      navigation.navigate("PastureScreen");
    } else {
      if (valiHorseNames) {
        const sendName = {
          name: horseNames,
        };
        dispatch(horseNameValiAction(sendName));
      }
      if (!sameHorseName.includes("failed")) {
        const sendillegalName = {
          name: horseNames,
        };
        dispatch(horseNameIllegalAction(sendillegalName));
      }
    }

    // ==============PASS
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
                        ? `馬名は「１文字」、「空欄」、「同じ馬名」禁止！`
                        : " "}{" "}
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
                                  {horseCheckAge[i]}
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
                </View>
              );
            })}
          </ScrollView>
          <View style={Screenstyles.registerButton}>
            <PNameRegister label={"決        定"} onPress={handleSubmit} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    horseCheckData: state.horseData.CheckData,
    horseCheckAge: state.horseData.checkAge,
    user_id: state.user.userData.id,
    pasture_id: state.pasture.pastureData.id,
    horseValidationName: state.horseNameValid.horseNameValid,
    horseIllegalName: state.horseNameValid.horseNameIllegal,
  };
};

export default connect(mapStateToProps)(HorseNameScreen);
