import React, { useEffect, useState } from "react";
import { View, ImageBackground, Dimensions } from "react-native";
// Redux
import { connect, useDispatch } from "react-redux";
import { pastureAction } from "../store/actions/Pasture/pastureAction";
import { raceAction } from "../store/actions/racepaln/getApi/racePlanAction";
import { dimensionsAction } from "../store/actions/dimensions/dimensionsAction";
// Custom IMPORT
import { calculateGameDate } from "./LayoutScreen/HeaderScreen";
import { CustomButtons } from "../components/Buttons";
import HeaderScreen from "./LayoutScreen/HeaderScreen";
import Screenstyles from "../screens/ScreenStylesheet";

const TopScreen = ({
  navigation,
  pastureData,
  user_id,
  horseData,
  pasture_id,
}) => {
  const defaultWidth = Dimensions.get("window").width;
  const defaultHeight = Dimensions.get("window").height;

  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());
  // HANDLE SUBMIT PASUTE NEXT NAVIGATION
  const handlePastureSubmit = () => {
    if (pastureData == "" && horseData == "") {
      navigation.navigate("PastureNameScreen");
    } else if (horseData == "") {
      navigation.navigate("HorseChoiceScreen");
    } else {
      navigation.navigate("PastureScreen");
    }
  };

  // HORSE DATA IMPORT
  useEffect(() => {
    if (!pasture_id) {
      return;
    }
    const sandIds = {
      user_id: user_id,
      pasture_id: pasture_id,
    };
    dispatch(pastureAction(sandIds));
  }, [user_id, pasture_id]);

  const handleStalleSubmit = () => {
    navigation.navigate("StallScreen");
  };

  const handleRaceCourse = () => {
    const dimensionsData = {
      height: defaultHeight,
      width: defaultWidth,
    };
    dispatch(dimensionsAction(dimensionsData));
    dispatch(raceAction(calculateGameDate(currentTime)));
    navigation.navigate("RaceCourseScreen");
  };

  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../assets/images/1.png")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View style={Screenstyles.containers}>
          <View style={Screenstyles.content}>
            <CustomButtons
              label="牧 場"
              onPress={() => handlePastureSubmit()}
            />
            <CustomButtons label="競馬場" onPress={() => handleRaceCourse()} />
            <CustomButtons label="ランキング" />
          </View>
          <View style={Screenstyles.content}>
            <CustomButtons label="厩 舎" onPress={() => handleStalleSubmit()} />
            <CustomButtons
              label="セ リ"
              onPress={() => navigation.navigate("Bankruptcy")}
            />
            <CustomButtons label="V I P" disabled={true} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    pastureData: state.pasture.pastureData,
    user_id: state.user.userData.id,
    pasture_id: state.pasture.pastureData.id,
    horseData: state.horseData.saveData,
  };
};

export default connect(mapStateToProps)(TopScreen);
