import React, { useState, useEffect } from "react";
import { View, ImageBackground } from "react-native";
// Redux
import { connect, useDispatch } from "react-redux";
import { institutionAction } from "../store/actions/institution/institutionAction";
import { raceAction } from "../store/actions/racepaln/getApi/racePlanAction";
import { signAction } from "../store/actions/horse/signAction";
import { pastureAction } from "../store/actions/Pasture/pastureAction";
// Custom Import
import HeaderScreen, { calculateGameDate } from "./LayoutScreen/HeaderScreen";
import FooterScreen from "./LayoutScreen/FooterScreen";
import { CustomButtons, ReturnButton } from "../components/Buttons";
import Screenstyles from "../screens/ScreenStylesheet";

const PastureScreen = ({ navigation, user_id, pasture_id }) => {

  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = calculateGameDate(currentTime);
    const month = date.getMonth() + 1;
    setCurrentDate(`${month}`);
  }, []);
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

  // POST USER ID
  const handleSubmit = () => {
    const sandUserId = {
      user_id: user_id,
    };
    dispatch(institutionAction(sandUserId));
    navigation.navigate("InstitutionScreen");
  };
  // GET RACE DATA
  const handleGetSubmit = () => {
    dispatch(raceAction(calculateGameDate(currentTime)));
    navigation.navigate("RacetrackScreen");
  };

  const gotoUpBringScreen = () => {
    const sandUserId = {
      user_id: user_id,
    };
    dispatch(institutionAction(sandUserId));
    dispatch(signAction());
    navigation.navigate("UpbringingScreen");
  };

  const handleAuctionSumbit = () => {
    navigation.navigate('AuctionScreen');
  }

  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../assets/images/1.png")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <ReturnButton label="牧　場" onPress={() => navigation.navigate("TopScreen")} />
        <View style={Screenstyles.containers}>
          <View style={Screenstyles.content}>
            <CustomButtons label="育　成" onPress={() => gotoUpBringScreen()} />
            <CustomButtons
              label="繁用馬"
              onPress={() => navigation.navigate("WorkingHorseScreen")}
            />
            <CustomButtons
              label="事務所"
              onPress={() => navigation.navigate("OfficeScreen")}
            />
            <CustomButtons
              label="セ　リ"
              onPress={handleAuctionSumbit}
            />
          </View>
          <View style={Screenstyles.content}>
            <CustomButtons label="施　設" onPress={handleSubmit} />
            <CustomButtons label="競馬場" onPress={handleGetSubmit} />
            <CustomButtons
              label="種　付"
              // disabled={currentDate == 4 || currentDate == 5 ? false : true}
              onPress={() => navigation.navigate("MarryScreen")}
            />
            <CustomButtons
              label="売　却"
              onPress={() => navigation.navigate("SaleScreen")}
            />
          </View>
        </View>
        <FooterScreen />
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.user.userData.id,
    pasture_id: state.pasture.pastureData.id,
  };
};

export default connect(mapStateToProps)(PastureScreen);
