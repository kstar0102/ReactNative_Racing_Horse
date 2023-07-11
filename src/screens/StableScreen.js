import React, { useState, useEffect } from "react";
import { View, ImageBackground, Alert } from "react-native";
// Redux
import { connect, useDispatch } from "react-redux";
import { raceAction } from "../store/actions/racepaln/getApi/racePlanAction";
import { stableAllGetAction } from "../store/actions/truck/getApi/stableAllGetAction";
import { GetShowJockeyAction } from "../store/actions/jockey/GetShowJockeyAction";
import { signAction } from "../store/actions/horse/signAction";
// Custom Import
import HeaderScreen, { calculateGameDate } from "./LayoutScreen/HeaderScreen";
import StableFooterScreen from "./LayoutScreen/StableFooterScreen";
import { CustomButtons, ReturnButton } from "../components/Buttons";
import Screenstyles from "../screens/ScreenStylesheet";

const StableScreen = ({ navigation, user_id, isjockey }) => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    dispatch(stableAllGetAction(user_id));
    dispatch(GetShowJockeyAction(user_id));
  }, []);

  // GET RACE DATA
  const handleGetSubmit = () => {
    dispatch(raceAction(calculateGameDate(currentTime)));
    navigation.navigate("RaceCourse");
  };

  const handleJockey = () => {
    if (isjockey == undefined) {
      Alert.alert(
        " ",
        "専属騎手がいません。 雇用契約費用 5000pt が 毎年かかりますが契約しますか?",
        [
          {
            text: "いいえ",
            style: "cancel",
          },
          {
            text: "はい",
            onPress: () => navigation.navigate("JockeyTraingin"),
          },
        ],
        { cancelable: false }
      );
    } else if (isjockey != undefined) {
      navigation.navigate("JockeyTraingin");
      dispatch(signAction());
    }
  };

  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../assets/images/horse_track/stall.jpg")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <ReturnButton
          label="厩 舎"
          color={1}
          onPress={() => navigation.navigate("TopScreen")}
        />
        <View style={Screenstyles.containers}>
          <View style={Screenstyles.content}>
            <CustomButtons
              label="調 教"
              color={1}
              onPress={() => navigation.navigate("Training")}
            />
            <CustomButtons
              label="騎手育成"
              color={1}
              onPress={() => handleJockey()}
            />
            <CustomButtons label="競馬場" color={1} onPress={handleGetSubmit} />
          </View>
          <View style={Screenstyles.content}>
            <CustomButtons
              label="出走登錄"
              color={1}
              onPress={() => navigation.navigate("RaceRegistation")}
            />
            <CustomButtons
              label="施 設"
              color={1}
              onPress={() => navigation.navigate("Institution")}
            />
            <CustomButtons
              label="競走成績"
              color={1}
              onPress={() => navigation.navigate("RaceResults")}
            />
          </View>
        </View>
        <StableFooterScreen />
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.user.userData.id,
    isjockey: state.jockeyData.getAllData,
  };
};
export default connect(mapStateToProps)(StableScreen);
