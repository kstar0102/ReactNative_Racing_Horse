import React, { useState, useEffect } from "react";
import { View, ImageBackground, Alert } from "react-native";
// Redux
import { connect, useDispatch } from "react-redux";
import { raceAction } from "../store/actions/racepaln/getApi/racePlanAction";
import { stableAllGetAction } from "../store/actions/truck/getApi/stableAllGetAction";
import { GetShowJockeyAction } from "../store/actions/jockey/GetShowJockeyAction";
import { signAction } from "../store/actions/horse/signAction";
import { getInstitutionAction } from "../store/actions/truck/getApi/getInstitutionAction";
import { InstitutionMenuAction } from "../store/actions/truck/TrainInstitution/InstitutionMenuAction";
// Custom Import
import HeaderScreen, { calculateGameDate } from "./LayoutScreen/HeaderScreen";
import StableFooterScreen from "./LayoutScreen/StableFooterScreen";
import { CustomButtons, ReturnButton } from "../components/Buttons";
import Screenstyles from "../screens/ScreenStylesheet";

const StableScreen = ({ navigation, user_id, isjockey, institutionData }) => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const sendUesrId = {
      user_id: user_id,
    };
    dispatch(stableAllGetAction(user_id));
    dispatch(GetShowJockeyAction(user_id));
    dispatch(getInstitutionAction(sendUesrId));
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

  const handleInstitution = () => {
    const sendInstitutionBasicId = {
      user_id: user_id,
      stall_id: institutionData[0].sid
    };
    dispatch(InstitutionMenuAction(sendInstitutionBasicId));
    navigation.navigate("Institution");
  };

  const handleCourseSubmit = () => {
    dispatch(raceAction(calculateGameDate(currentTime)));
    navigation.navigate("CourseTables")
  }
  const handleTrain = () => {
    dispatch(signAction());
    navigation.navigate("Training")
  }
 
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
              onPress={() => handleTrain()}
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
              onPress={handleCourseSubmit}
            />
            <CustomButtons
              label="施 設"
              color={1}
              onPress={() => handleInstitution()}
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
    institutionData: state.institutionStable.institutionMenuData,
  };
};
export default connect(mapStateToProps)(StableScreen);
