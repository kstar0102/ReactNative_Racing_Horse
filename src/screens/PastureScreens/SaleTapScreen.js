import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { vh } from "react-native-expo-viewport-units";

// REDUX
import { connect, useDispatch } from "react-redux";
import { signAction } from "../../store/actions/horse/signAction";
// CUSTOM BUTTON
import { RTapButton } from "../../components/Buttons";
import Screen from "./SaleTapScreens/Screen";
import NoData from "./SaleTapScreens/NoData";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SaleTapScreen = ({ saveData }) => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonPress = (id) => {
    setActiveButton(id);
    dispatch(signAction());
  };
  const renderScreenBelowButtons = () => {
    const filteredOneData = saveData.filter(
      (data) => data.age === "・0歳馬" && data.sale_state == 0
    );
    const filteredTwoData = saveData.filter(
      (data) => data.age === "・1歳馬" && data.sale_state == 0
    );
    const filteredThreeData = saveData.filter(
      (data) => data.age === '・2歳馬' && data.sale_state == 0
    );
    const filtereFourData = saveData.filter(
      (data) => data.type === "繁殖馬" && data.sale_state == 0
    );
    switch (activeButton) {
      case 1:
        if (filteredOneData.length) {
          return <Screen horseData={filteredOneData} />;
        }else{
          return <NoData />;
        }
      case 2:
        if (filteredTwoData.length) {
          return <Screen horseData={filteredTwoData} />;
        }else{
          return <NoData />;
        }
      case 3:
        if (filteredThreeData.length) {
          return <Screen horseData={filteredThreeData} />;
        }else{
          return <NoData />;
        }
      default:
        if (filtereFourData.length) {
          return <Screen horseData={filtereFourData} />;
        }else{
          return <NoData />;
        }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Buttons}>
        <RTapButton
          id={1}
          isActive={activeButton === 1}
          label={"0歲馬"}
          onPress={handleButtonPress}
        />
        <RTapButton
          id={2}
          isActive={activeButton === 2}
          label={"1歲馬"}
          onPress={handleButtonPress}
        />
        <RTapButton
          id={3}
          isActive={activeButton === 3}
          label={"2歲馬"}
          onPress={handleButtonPress}
        />
        <RTapButton
          id={4}
          isActive={activeButton === 4}
          label={"繁殖馬"}
          onPress={handleButtonPress}
        />
      </View>
      {renderScreenBelowButtons()}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    saveData: state.horseData.saveData,
  };
};
export default connect(mapStateToProps)(SaleTapScreen);

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_WIDTH > 400 || SCREEN_HEIGHT > 738 ? vh(30) : vh(28),
    flexDirection: "column",
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    width: "100%",
    height: vh(5),
    paddingBottom: vh(1),
  },
});
