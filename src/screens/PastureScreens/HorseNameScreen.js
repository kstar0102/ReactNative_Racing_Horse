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
let inputCount;
let inputIds = [];
let displayStyls = [];

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
  const [genderColor, setGenderColor] = useState("");
  const [displayStyle, setDisplayStyle] = useState([]);
  const [valiHorseName, setValiHorseName] = useState([]);
  const [illegalHorseName, setIllegalHorseName] = useState([]);
  const [illegalStyleHorseName, setIllegalStyleHorseName] = useState([]);
  const [successHorseName, setSuccessHorseName] = useState([]);
  const pattern =
    /[\d\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[a-zA-Z]|[^\u30A0-\u30FF\uFF66-\uFF9F]+$/;

  useEffect(() => {
    if (horseCheckData) {
      inputCount = horseCheckData.length;
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
    let updatedvaliname = [];
    let valiHorseNames = [];
    // ===============HORSE NAMES VALIDATION KATAKANA
    horseNames.map((item, index) => {
      if (!pattern.test(item)) {
        valiHorseNames.push(item);
        updatedvaliname.push("none");
      } else {
        updatedvaliname.push("flex");
      }
    });
    setDisplayStyle(updatedvaliname);

    //===================SAME AS NAME -> VALIDATION 
    if (horseNames.length == valiHorseNames.length) {
      const sendName = {
        name: valiHorseNames,
      };
      dispatch(horseNameValiAction(sendName));
    }

    //==================ILLEGAHORSENAME NO -> ILLEGAL
    if (illegalHorseName.length == horseNames.length) {
      const sendillegalName = {
        name: valiHorseNames,
      };
      dispatch(horseNameIllegalAction(sendillegalName));
    }

    // ====================ALL SUCCESS -> DISPATCH
    if (successHorseName.length == horseCheckData.length) {
      const CheckData = {
        name: horseNames,
        data: horseCheckData,
        user_id: user_id,
        pasture_id: pasture_id,
      };
      dispatch(horseAction(CheckData));
    }
  };

  useEffect(() => {
    if (saveData != "") {
      navigation.navigate("PastureScreen");
    }
  }, [saveData]);

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
            {horseCheckData.map((item, index) => {
              return (
                <View key={index} style={Screenstyles.horseNameCard}>
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
                                      item.gender === "牝" ? "red" : "blue",
                                      fontSize: 15
                                  }}
                                >
                                  {item.gender}
                                </Text>
                                <Text style={{fontSize: 15}}> {item.age.split("")[1]}</Text>
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
                        { display: displayStyle[index] },
                      ]}
                    >
                      {displayStyle[index] == "flex"
                        ? `日本語のカタカナを入力する必要があります`
                        : "名前を入力してください。"}{" "}
                    </Text>

                    <Text
                      style={[
                        Screenstyles.caution,
                        { display: valiHorseName[index] },
                      ]}
                    >
                      ※すでにその名前は
                      <Text style={Screenstyles.NRSpanT}>使用されています</Text>
                      。
                    </Text>

                    <Text
                      style={[
                        Screenstyles.caution,
                        { display: illegalStyleHorseName[index] },
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
