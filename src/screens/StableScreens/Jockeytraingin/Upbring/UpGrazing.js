import React, { useState, useEffect } from "react";
import { View, Image, Text, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Redux
import { connect, useDispatch } from "react-redux";
import { reservationValiAction } from "../../../../store/actions/Pasture/reservationValiAction";
import { preePastureShowAction } from "../../../../store/actions/Pasture/preePastureShowAction";
// Custom Import
import { calculateGameDate } from "../../../LayoutScreen/HeaderScreen";
import { ImageButton } from "../../../../components/Buttons";
import DetailButton from "../../../../components/Buttons/DetailButton";
import RTapScreensStyle from "../../../PastureScreens/RanchTapScreens/RTapScreensStyle";

const UpGrazing = ({
  poolLevel,
  truckLevel,
  roadLevel,
  jockeyId,
  pasture_id,
  user_id,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // POOL STATE
  const [poolDisplay, setPoolDisplay] = useState("flex");
  const [poolDisabled, setPoolDisabled] = useState(true);
  // TRUCK STATE
  const [truckDisplay, setTruckDisplay] = useState("flex");
  const [truckDisabled, setTruckDisabled] = useState(true);
  // ROAD STATE
  const [roadDisplay, setRoadDisplay] = useState("flex");
  const [roadDisabled, setRoadDisabled] = useState(true);
  // SPACEIAL
  const [spaceialDisplay, setSpaceialDisplay] = useState("flex");
  const [spaceialDisabled, setSpaceialDisabled] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  const gameAllDate = calculateGameDate(currentTime);
  const gameData = gameAllDate.toISOString().split("T")[0];

  const goToOtherScreen = () => {
    navigation.replace("JockeyReservationScreen");
    const sandReservationData = {
      game_date: gameData,
      pasture_id: pasture_id,
    };
    const sendUserId = {
      user_id: user_id,
      place: "jockey",
    };
    dispatch(reservationValiAction(sandReservationData));
    dispatch(preePastureShowAction(sendUserId));
  };
  useEffect(() => {
    if (poolLevel != "") {
      if (poolLevel.level != 0) {
        setPoolDisplay("none");
        setPoolDisabled(false);
      } else {
        setPoolDisplay("flex");
        setPoolDisabled(true);
      }
    }
    if (truckLevel != "") {
      if (truckLevel.level != 0) {
        setTruckDisplay("none");
        setTruckDisabled(false);
      } else {
        setTruckDisplay("flex");
        setTruckDisabled(true);
      }
    }
    if (roadLevel != "") {
      if (truckLevel.level != 0) {
        setRoadDisplay("none");
        setRoadDisabled(false);
      } else {
        setRoadDisplay("flex");
        setRoadDisabled(true);
      }
    }
  }, [poolLevel, truckLevel, roadLevel]);

  return (
    <ScrollView style={RTapScreensStyle.fodderContainer}>
      <View style={RTapScreensStyle.oneBottomContent}>
        <ImageBackground
          style={RTapScreensStyle.BottomBackground}
          resizeMode="cover"
          source={require("../../../../assets/images/Pasture/background.jpg")}
        >
          <Image
            style={RTapScreensStyle.TitleImage}
            source={require("../../../../assets/images/Fodder/1.png")}
          />
          <View style={RTapScreensStyle.ImageButtonTop}>
            <View>
              <View style={[RTapScreensStyle.absoluteViewB]}>
                <Text style={RTapScreensStyle.label}>メニュー予約</Text>
              </View>
              <ImageButton
                label={"メニュー予約"}
                source={require("../../../../assets/images/Pasture/icon1.png")}
                id={1}
              />
              <Image
                style={[RTapScreensStyle.LongiIcon, { display: "flex" }]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                onPress={goToOtherScreen}
                disabled={true}
              />
            </View>
            <View>
              <View style={[RTapScreensStyle.absoluteViewF]}>
                <Text style={RTapScreensStyle.label}>スぺシャル</Text>
              </View>
              <ImageButton
                label={"スベシャル"}
                source={require("../../../../assets/images/Pasture/icon2.png")}
                id={2}
                disabled={true}
              />
              <Image
                style={[RTapScreensStyle.LongiIcon, { display: "flex" }]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                jockeyId={jockeyId}
                name={"スベシャル"}
                disabled={true}
                id={11}
              />
            </View>
            <View>
              <View style={[RTapScreensStyle.absoluteViewT]}>
                <Text style={RTapScreensStyle.label}>逃げ</Text>
              </View>
              <ImageButton
                label={"逃げ"}
                source={require("../../../../assets/images/Pasture/icon3.png")}
                id={3}
              />
              <DetailButton
                label={"育成する"}
                jockeyId={jockeyId}
                flag={"jockey"}
                name={"逃げ"}
                id={12}
              />
            </View>
          </View>
          <View style={RTapScreensStyle.ImageButtonMiddle}>
            <View>
              <View style={[RTapScreensStyle.absoluteViewT]}>
                <Text style={RTapScreensStyle.label}>先行</Text>
              </View>
              <ImageButton
                label={"先行"}
                source={require("../../../../assets/images/Pasture/icon4.png")}
                id={4}
              />
              <DetailButton
                label={"育成する"}
                jockeyId={jockeyId}
                flag={"jockey"}
                name={"先行"}
                id={12}
              />
            </View>
            <View>
              <View style={RTapScreensStyle.absoluteViewT}>
                <Text style={RTapScreensStyle.label}>差し</Text>
              </View>
              <ImageButton
                label={"差し"}
                source={require("../../../../assets/images/Pasture/icon5.png")}
                id={5}
              />
              <DetailButton
                label={"育成する"}
                jockeyId={jockeyId}
                flag={"jockey"}
                name={"差し"}
                id={12}
              />
            </View>
            <View>
              <View style={[RTapScreensStyle.absoluteViewT]}>
                <Text style={RTapScreensStyle.label}>追い</Text>
              </View>
              <ImageButton
                label={"追い"}
                source={require("../../../../assets/images/Pasture/icon6.png")}
                id={6}
              />
              <DetailButton
                label={"育成する"}
                jockeyId={jockeyId}
                flag={"jockey"}
                name={"追い"}
                id={12}
              />
            </View>
          </View>
          <View style={RTapScreensStyle.ImageButtonBottom}>
            <View>
              <View style={RTapScreensStyle.absoluteView}>
                <Text style={RTapScreensStyle.label}>? ? ?</Text>
              </View>
              <ImageButton
                label={"プール"}
                source={require("../../../../assets/images/Pasture/icon7.png")}
                id={7}
              />
              <Image
                style={[RTapScreensStyle.LongiIcon, { display: "flex" }]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                disabled={true}
                jockeyId={jockeyId}
                flag={"jockey"}
                name={"プール"}
                id={12}
              />
            </View>
            <View>
              <View style={RTapScreensStyle.absoluteViewT}>
                <Text style={RTapScreensStyle.label}>? ? ?</Text>
              </View>
              <ImageButton
                label={"併走"}
                source={require("../../../../assets/images/Pasture/icon5.png")}
                id={8}
                disabled={true}
              />
              <Image
                style={[RTapScreensStyle.LongiIcon, { display: "flex" }]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                disabled={true}
                jockeyId={jockeyId}
                flag={"jockey"}
                name={"併走"}
                id={12}
              />
            </View>
            <View>
              <View style={RTapScreensStyle.absoluteViewT}>
                <Text style={RTapScreensStyle.label}>? ? ?</Text>
              </View>
              <ImageButton
                label={"坂路"}
                source={require("../../../../assets/images/Pasture/icon6.png")}
                id={9}
                disabled={true}
              />
              <Image
                style={[RTapScreensStyle.LongiIcon, { display: "flex" }]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                disabled={true}
                jockeyId={jockeyId}
                flag={"jockey"}
                name={"坂路"}
                id={12}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    pasture_id: state.pasture.pastureData.id,
    poolLevel: state.pool.poolBuyData,
    user_id: state.user.userData.id,
    truckLevel: state.truck.truckBuyData,
    roadLevel: state.road.roadBuyData,
    jockeyId: state.jockeyData.getAllData.id,
  };
};
export default connect(mapStateToProps)(UpGrazing);
