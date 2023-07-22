import React, { useState, useEffect, useCallback } from "react";
import { View, ImageBackground, Image, Text, ScrollView } from "react-native";
// REDUX
import { connect, useDispatch } from "react-redux";
import { reservationAction } from "../../../store/actions/Pasture/reservationAction";
import { reservationValiAction } from "../../../store/actions/Pasture/reservationValiAction";
// Custom IMPORT
import HeaderScreen, {
  calculateGameDate,
} from "../../LayoutScreen/HeaderScreen";
import FooterScreen from "../../LayoutScreen/FooterScreen";
import { ReturnButton } from "../../../components/Buttons";
import Screenstyles from "../../ScreenStylesheet";
import DropDownR from "../../../components/Buttons/DropDwonR";
import RTapScreensStyle from "../RanchTapScreens/RTapScreensStyle";

import MenuDropDown from "../../../components/Buttons/MenuDropDown";
import ReserveButton from "../../../components/Buttons/ReserveButton";
import ReservationDropDown from "../../../components/Buttons/ReservationDropDown";
import PresetRegistrationButton from "../../../components/Buttons/PresetRegistrationButton";
import { horseColor } from "../../../utils/globals";

// define part start

const ReservationScreen = ({
  navigation,
  saveData,
  pasture_id,
  user_id,
  reservationData,
  poolLevel,
  truckLevel,
  roadLevel,
  preeSetData,
  preeSetName,
}) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(undefined);

  // for dorpdown start
  const [selectedDelete, setSelectedDelete] = useState(undefined);
  const [selectedFodder, setSelectedFodder] = useState(undefined);
  const [seletedGrazing, setSeletedGrazing] = useState(" ");
  const [selectedWorking, setSelectedWorking] = useState(undefined);
  // for dropdown end

  const [banner, setBanner] = useState(saveData[0]);
  const [grazing, setGrazing] = useState("");
  const [fodder, setFodder] = useState("");

  const [working, setWorking] = useState("");

  const [allData, setAllData] = useState([]);
  const [preeAllData, setPreeAllData] = useState([]);

  const [preeSetAllData, setPreeSetAllData] = useState([]);
  //define display and order data start
  const [displayData, setDisplayData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  //define display and order data end
  const [deletes, setDeletes] = useState("");
  const [groundColor, setGroundColor] = useState("#000");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentComplate, setCurrentComplate] = useState("none");
  const [currentIncomplete, setCurrentIncomplete] = useState("none");
  const [nameValue, setNameValue] = useState(" ");
  const [grazingData, setGrazingData] = useState("");
  const data = saveData;
  const gameAllDate = calculateGameDate(currentTime);
  const gameData = gameAllDate.toISOString().split("T")[0];

  // define end



  //==================Do not touch this part start=====================================
  const skillRange = (skill) => {
    if (typeof skill !== "number") {
      return;
    }
    let result = "";
    switch (true) {
      case skill >= 451:
        result = "S+";
        break;
      case skill >= 401 && skill <= 450:
        result = "S";
        break;
      case skill >= 351 && skill <= 400:
        result = "A+";
        break;
      case skill >= 301 && skill <= 350:
        result = "A";
        break;
      case skill >= 251 && skill <= 300:
        result = "B+";
        break;
      case skill >= 201 && skill <= 250:
        result = "B";
        break;
      case skill >= 151 && skill <= 200:
        result = "C+";
        break;
      case skill >= 101 && skill <= 150:
        result = "C";
        break;
      case skill >= 51 && skill <= 100:
        result = "D+";
        break;
      case skill >= 1 && skill <= 50:
        result = "D";
        break;
      default:
        return;
    }
    return result;
  };

  const distanceRange = (distance) => {
    if (typeof distance !== "number") {
      return;
    }
    let result = "";
    switch (true) {
      case distance >= 1000 && distance <= 1600:
        result = "短";
        break;
      case distance >= 1400 && distance <= 2000:
        result = "短中";
        break;
      case distance >= 1800 && distance <= 2400:
        result = "中";
        break;
      case distance >= 2200 && distance <= 2800:
        result = "中長";
        break;
      case distance >= 3000 && distance <= 3600:
        result = "長";
        break;
      default:
        return;
    }
    return result;
  };

  const conditionFaceRange = (conditionFace) => {
    if (typeof conditionFace !== "number") {
      return;
    }
    let result = "";
    switch (true) {
      case conditionFace >= 7 && conditionFace <= 500:
        result = require("../../../assets/images/condition/happy.png");
        break;
      case conditionFace >= 3 && conditionFace <= 6:
        result = require("../../../assets/images/condition/middlehappy.png");
        break;
      case conditionFace >= -2 && conditionFace <= 2:
        result = require("../../../assets/images/condition/normel.png");
        break;
      case conditionFace >= -6 && conditionFace <= 6:
        result = require("../../../assets/images/condition/sad.png");
        break;
      case conditionFace >= -10 && conditionFace <= 7:
        result = require("../../../assets/images/condition/bad.png");
        break;
      default:
        return;
    }
    return result;
  };

  const tiredRange = (tired) => {
    if (typeof tired !== "number") {
      return;
    }
    let result = "";
    switch (true) {
      case tired <= 7:
        result = " ◎";
        break;
      case tired >= 8 && tired <= 12:
        result = " o";
        break;
      case tired >= 13 && tired <= 14:
        result = " ▲";
        break;
      case tired >= 15 && tired <= 17:
        result = " △";
        break;
      case tired >= 18:
        result = " ×";
        break;
      default:
        return;
    }
    return result;
  };

  const speed = skillRange(banner.speed_b - -banner.speed_w);
  const health = skillRange(banner.health_b - -banner.health_w);
  const moment = skillRange(banner.moment_b - -banner.moment_w);
  const stamina = skillRange(banner.stamina_b - -banner.stamina_w);
  const strength = skillRange(banner.strength_b - -banner.strength_w);
  const condition = skillRange(banner.condition_b - -banner.condition_w);
  const distanceValue = distanceRange(
    (banner.distance_max - -banner.distance_min) / 2
  );
  const conditionFace = conditionFaceRange(parseInt(banner.happy));
  const tired = tiredRange(parseInt(banner.tired));

  useEffect(() => {
    if (saveData != "") {
      if (saveData[0].ground === "ダ") {
        setGroundColor("#707172");
      } else if (saveData[0].ground === "芝") {
        setGroundColor("#1BFF00");
      } else if (saveData[0].ground === "万") {
        setGroundColor("red");
      }
    }
  }, [saveData]);
  //========================Do not touch this part end =================================


  let nameValues = [];

  presetCategories = ["プリセット1", "プリセット2", "プリセット3", "プリセット4", "プリセット5"
  ]


  presetCategories.map((item, index) => {
    nameValues.push({ name: item });
  });

  let preeData = [];  

  let horse_ids = [];
  let gameDate = [];
  let food_names = [];
  if (reservationData != "") {
    reservationData.forEach((element, index) => {
      horse_ids.push(element.horse_id);
      gameDate.push(element.game_date);
      food_names.push(element.food_name);
    });
  }

  const isValue =
    horse_ids.includes(banner.id.toString());

  useEffect(() => {
    let useName = [];
    if (isValue) {
      reservationData.forEach((item, index) => {
        if (horse_ids[index] == banner.id.toString()) {
          useName.push({
            name: item.food_name,
            price: item.price,
            type: item.food_type,
          });
        }
      });
    }
    setDisplayData(useName);
  }, [reservationData, banner]);

  useEffect(() => {
    if (reservationData != "") {
      if (
        horse_ids.includes(banner.id.toString()) && displayData != []
      ) {
        setCurrentIncomplete("flex");
        setCurrentComplate("none");
      } else {
        setCurrentIncomplete("none");
        setCurrentComplate("flex");
      }
    } else {
      setCurrentIncomplete("none");
      setCurrentComplate("flex");
    }
  }, [horse_ids, displayData]);

  const handleSettingId = (value) => {
    setBanner(value);
    setAllData([]);
    setPreeSetAllData([]);
    if (reservationData != "") {
      if (horse_ids == banner.id && gameDate == gameData) {
        setCurrentIncomplete("flex");
        setCurrentComplate("none");
      } else {
        setCurrentIncomplete("none");
        setCurrentComplate("flex");
      }
    }

    if (value.ground == "ダ") {
      setGroundColor("#707172");
    } else if (value.ground == "芝") {
      setGroundColor("#1BFF00");
    } else if (value.ground == "万") {
      setGroundColor("red");
    }
  };

  const handleGrazingId = (value) => {
    setGrazing(value);
  };

  const handleFodderId = (value) => {
    setFodder(value);
  };

  const handleWorkingId = (value) => {
    setWorking(value);
  };

  const handleDeleteId = (value) => {
    setDeletes(value);
  };



  let grazingDatas = [
    { name: "放牧", price: "1", type: "grazing" },
    { name: "芝(馬なり)", price: "1", type: "grazing" },
    { name: "芝(強め)", price: "3", type: "grazing" },
    { name: "芝(一杯)", price: "5", type: "grazing" },
    { name: "ダート(馬なり)", price: "1", type: "grazing" },
    { name: "ダート(強め)", price: "3", type: "grazing" },
    { name: "ダート(一杯)", price: "5", type: "grazing" },
    { name: "ウッドチップ(馬なり)", price: "1", type: "grazing" },
    { name: "ウッドチップ(強め)", price: "3", type: "grazing" },
    { name: "ウッドチップ(一杯)", price: "5", type: "grazing" },
  ];

  const fodderData = [
    { name: "にんじん", price: "1", type: "fodder" },
    { name: "Sドリンク", price: "3", type: "fodder" },
    { name: "プロテイン", price: "5", type: "fodder" },
    { name: "角砂糖", price: "1", type: "fodder" },
    { name: "チョコ", price: "3", type: "fodder" },
    { name: "ケーキ", price: "5", type: "fodder" },
  ];

  //judge dropdown statement
  //effect check start !!! 
  useEffect(() => {
    setGrazingData(grazingDatas);

    if (poolLevel != "") {
      if (poolLevel.level != 0) {
        grazingDatas.push(
          // poolLevel
          { name: "プール(馬なり)", price: "1", type: "grazing" },
          { name: "プール(強め)", price: "3", type: "grazing" },
          { name: "プール(一杯)", price: "5", type: "grazing" }
        );
      }
    }
    if (truckLevel != "") {
      if (truckLevel.level != 0) {
        grazingDatas.push(
          // truckLevel
          { name: "併走(馬なり)", price: "1", type: "grazing" },
          { name: "併走(強め)", price: "3", type: "grazing" },
          { name: "併走(一杯)", price: "5", type: "grazing" }
        );
      }
    }
    if (roadLevel != "") {
      if (truckLevel.level != 0) {
        grazingDatas.push(
          // roadLevel
          { name: "坂路(馬なり)", price: "1", type: "grazing" },
          { name: "坂路(強め)", price: "3", type: "grazing" },
          { name: "坂路(一杯)", price: "5", type: "grazing" }
        );
      }
    }
  }, [poolLevel, truckLevel, roadLevel]);
  //effect check end

  const handleGrazing = (grazing) => {
    if (!grazing || displayData.length >= 50) {
      return false;
    }
    let tmpData = [...displayData];
    let num = deletes;
    if(deletes == ""){
      num = displayData.length + 1;
    }
    tmpData.splice(num - 1, 0, grazing);
    setDisplayData(tmpData);
  };

  useEffect(() => {
    const orderedArray = displayData.map((element, index) => index + 1);
    orderedArray.push(orderedArray.length + 1);
    setOrderData(orderedArray);
    // here
  }, [displayData]);

  const handleFodder = (fodder) => {
    if (!fodder || displayData.length >= 50) {
      return false;
    }
    let tmpData = [...displayData];
    let num = deletes;
    if(deletes == ""){
      num = displayData.length+1;
    }
    tmpData.splice(num - 1, 0, fodder);
    setDisplayData(tmpData);
  };

  const handleWorking = (preeData) => {
    if (!preeData) {
      return false;
    }
    let newArray = [];
      preeSetData.map((item, index) => {
        if (item.preset_num == preeData) {
          newArray.push({
            name: item.food_name,
            price: item.price,
            type: item.food_type,
          });
        }
      });
    setDisplayData(newArray);
  };
/// I don't know what is this
  let food_name = [];
  let food_price = [];
  let food_order = [];
  let food_type = [];

  let food_pree_name = [];
  let food_pree_price = [];
  let food_pree_order = [];
  let food_pree_type = [];

  let food_set_name = [];
  let food_set_price = [];
  let food_set_order = [];
  let food_set_type = [];

  preeSetAllData.forEach((element, index) => {
    food_set_name.push(element.food_name);
    food_set_price.push(element.price);
    food_set_type.push(element.food_type);
    food_set_order.push(element.order);
  });
  // All data Value
  allData.forEach((element, index) => {
    food_name.push(element.name);
    food_price.push(element.price);
    food_type.push(element.type);
    food_order.push(index + 1);
  });

  let default_order = [];

  preeAllData.forEach((element, index) => {
    food_pree_name.push(element.name);
    food_pree_price.push(element.price);
    food_pree_type.push(element.type);
    food_pree_order.push(index + 1);
    default_order.push(index + 1);
  });

  const handleArraySubmit = () => {
    let food_names = [];
    let prices = [];
    let types = [];
    let orders = [];
    displayData.forEach((element, index) => {
      food_names.push(element.name);
      prices.push(element.price);
      types.push(element.type);
      orders.push(index + 1);
    });
    const sandReserve = {
      horse_id: banner.id,
      pasture_id: pasture_id,
      food_name: food_names,
      user_id: user_id,
      price: prices,
      order: orders,
      food_type: types,
      place: "pasture",
      stall_id: "stall",
      game_date: gameData,
    };
    dispatch(reservationAction(sandReserve));
    dispatch(reservationValiAction(sandReserve));
    return;
  };

  const handleDelete = (deletes) => {
    setDisplayData(displayData.filter((item, index) => index + 1 !== deletes));
  };

  const order = isValue
    ? default_order
    : food_order == ""
      ? food_set_order
      : food_order;
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../../assets/images/1.png")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View>
          <View>
            <View>
              <ReturnButton
                label="牧 場"
                onPress={() => navigation.navigate("PastureScreen")}
              />
            </View>
            <View style={Screenstyles.UPRButton}>
              <ReturnButton
                label="育 成"
                onPress={() => navigation.navigate("UpbringingScreen")}
              />
            </View>
          </View>

          <ScrollView style={RTapScreensStyle.reservationContainer}>
            <View style={RTapScreensStyle.oneTopContent}>
              <View style={RTapScreensStyle.oneTopContentLeft}>
                <Text style={RTapScreensStyle.oneRightContentTxt}>
                  管理馬一覧
                </Text>
                <DropDownR
                  name={data[0].name}
                  data={data}
                  onSelect={setSelected}
                  setId={handleSettingId}
                />
              </View>
              <View style={RTapScreensStyle.oneTopContentRight}>
                <View style={RTapScreensStyle.oneRioghtHeader}>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxtA}>
                    {(!!selected && selected.name) || data[0].name}
                  </Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                    <Text style={RTapScreensStyle.oneRioghtHeaderTxtPink}>
                      {(!!selected && selected.gender) || data[0].gender}
                    </Text>
                    2
                  </Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                    {(!!selected && selected.growth) || data[0].growth}
                  </Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxt}>
                    {(!!selected && selected.color) || data[0].color}
                  </Text>
                  <Text style={RTapScreensStyle.oneRioghtHeaderTxtLetter}>
                    {(!!selected && selected.class) || "GIクラス"}
                  </Text>
                </View>
                <View style={RTapScreensStyle.oneRioghtBody}>
                  <View>
                    <View style={RTapScreensStyle.conditionsGroup}>
                      <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                        調子
                      </Text>
                      <Image
                        style={RTapScreensStyle.conditions}
                        source={conditionFace}
                      />
                    </View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                      SP{" "}
                      <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                        {(!!selected && speed) || speed}
                      </Text>
                    </Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                      ST{" "}
                      <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                        {(!!selected && strength) || strength}
                      </Text>
                    </Text>
                  </View>
                  <View>
                    <View style={RTapScreensStyle.oneRightTxt}>
                      <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                        {" "}
                        疲労
                        <Text style={RTapScreensStyle.oneRioghtBodyTxtTired}>
                          {(!!selected && tired) || tired}
                        </Text>
                      </Text>
                      <Text
                        style={[
                          RTapScreensStyle.oneRioghtHeaderTxtGreen,
                          { color: groundColor, paddingLeft: 20 },
                        ]}
                      >
                        {(!!selected && selected.ground) || data[0].ground}
                      </Text>
                    </View>

                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                      {" "}
                      瞬発{" "}
                      <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                        {(!!selected && moment) || moment}
                      </Text>
                    </Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                      {" "}
                      根性{" "}
                      <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                        {(!!selected && stamina) || stamina}
                      </Text>
                    </Text>
                  </View>
                  <View style={RTapScreensStyle.oneRioghtBodyTxtGroup}>
                    <View style={RTapScreensStyle.txtGroup}>
                      <Text style={RTapScreensStyle.oneRioghtBodyTxtA}>
                        {(!!selected && distanceValue) || distanceValue}距離
                      </Text>
                      <Text style={RTapScreensStyle.oneRioghtBodyTxtValueA}>
                        {" "}
                        {(!!selected && selected.quality_leg) ||
                          data[0].quality_leg}
                      </Text>
                    </View>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                      気性{" "}
                      <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                        {(!!selected && condition) || condition}{" "}
                      </Text>
                    </Text>
                    <Text style={RTapScreensStyle.oneRioghtBodyTxt}>
                      健康{" "}
                      <Text style={RTapScreensStyle.oneRioghtBodyTxtValue}>
                        {(!!selected && health) || health}{" "}
                      </Text>
                    </Text>
                  </View>
                  {(!!selected && (
                    <>
                      {horseColor.map((colorName, index) => {
                        if (colorName[selected.color]) {
                          return (
                            <Image
                              key={`${index}`}
                              style={RTapScreensStyle.HorseAvatar}
                              source={colorName[selected.color]}
                            />
                          );
                        } else {
                          return null;
                        }
                      })}
                    </>
                  )) || (
                      <>
                        {horseColor.map((colorName, index) => {
                          if (colorName[data[0].color]) {
                            return (
                              <Image
                                key={`${index}`}
                                style={RTapScreensStyle.HorseAvatar}
                                source={colorName[data[0].color]}
                              />
                            );
                          } else {
                            return null;
                          }
                        })}
                      </>
                    )}
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={Screenstyles.reserveContent}>
            <View style={Screenstyles.reserveMenuLeft}>
              <Text style={Screenstyles.reserveMenuTitle}>育成メニュー</Text>
              <View style={Screenstyles.reserveMenuGroup}>
                <MenuDropDown
                  name={nameValue}
                  data={grazingData}
                  onSelect={setSeletedGrazing}
                  setId={handleGrazingId}
                />
                <ReserveButton
                  label={"予約"}
                  colorNumber={3}
                  onPress={() => handleGrazing(grazing)}
                />
              </View>
              <Text style={Screenstyles.reserveMenuTitle}>飼葉メニュー</Text>
              <View style={Screenstyles.reserveMenuGroup}>
                <MenuDropDown
                  name={nameValue}
                  data={fodderData}
                  onSelect={setSelectedFodder}
                  setId={handleFodderId}
                />
                <ReserveButton
                  label={"予約"}
                  colorNumber={3}
                  onPress={() => handleFodder(fodder)}
                />
              </View>
              <Text style={Screenstyles.reserveMenuTitle}>プリセット</Text>
              <View style={Screenstyles.reserveMenuGroup}>
                <MenuDropDown
                  name={nameValue}
                  data={nameValues}
                  onSelect={setSelectedWorking}
                  setId={handleWorkingId}
                />
                <ReserveButton
                  label={"予約"}
                  colorNumber={3}
                  onPress={() => handleWorking(working.name)}
                />
              </View>
              <PresetRegistrationButton
                place={"pasture"}
                allData={displayData}
                preeAllData={preeAllData}
                label={"プリセット登録"}
                onPress={() => handlePreset()}
              />
            </View>
            <View style={Screenstyles.reserveRight}>
              <View style={Screenstyles.reserveTxtGroup}>
                <Text style={Screenstyles.reserveListTitle}>予約一覧</Text>
                <View style={Screenstyles.reserveListConfim}>
                  <Text
                    style={[
                      Screenstyles.reserveListRed,
                      { display: currentComplate },
                    ]}
                  >
                    未完了
                  </Text>
                  <Text
                    style={[
                      Screenstyles.reserveListBlue,
                      { display: currentIncomplete },
                    ]}
                  >
                    完了
                  </Text>
                </View>
              </View>
              <View style={Screenstyles.reserveRightList}>
                <ScrollView style={Screenstyles.reserveList}>
                  {
                    displayData.map((item, index) => (
                      <Text key={index} style={Screenstyles.reserveListtxt}>
                        {index + 1}. {item.name}
                      </Text>
                    ))
                  }
                </ScrollView>
                <View style={Screenstyles.reserveButtonGroup}>
                  <ReservationDropDown
                    name={
                      isValue
                        ? default_order[0]
                        : food_order[0]
                          ? food_order[0]
                          : food_set_order[0]
                    }
                    order={orderData}
                    onSelect={setSelectedDelete}
                    setId={handleDeleteId}
                  />
                  <ReserveButton
                    label={"確定"}
                    colorNumber={5}
                    onPress={() => handleArraySubmit()}
                  />
                  <ReserveButton
                    label={"削除"}
                    colorNumber={4}
                    onPress={() => handleDelete(deletes)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <FooterScreen />
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    saveData: state.horseData.saveData,
    pasture_id: state.pasture.pastureData.id,
    user_id: state.user.userData.id,
    poolLevel: state.pool.poolBuyData,
    truckLevel: state.truck.truckBuyData,
    roadLevel: state.road.roadBuyData,
    reservationData: state.validationData.reservationData,
    preeSetData: state.preeSetData.pasturePreeSetData,
    preeSetName: state.preeSetData.pastureNamePreeSetData,
  };
};
export default connect(mapStateToProps)(ReservationScreen);
