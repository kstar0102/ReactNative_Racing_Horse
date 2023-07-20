import React, { useState, useEffect } from "react";
import { View, Image, Text, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Redux
import { connect, useDispatch } from "react-redux";
import { reservationStallValiAction } from "../../../../store/actions/Pasture/reservationStallValiAction";
import { preeStallShowAction } from "../../../../store/actions/Pasture/preeStallShowAction";
// Custom Import
import { calculateGameDate } from "../../../LayoutScreen/HeaderScreen";
import { ImageButton } from "../../../../components/Buttons";
import DetailButton from "../../../../components/Buttons/DetailButton";
import RTapScreensStyle from "../../../PastureScreens/RanchTapScreens/RTapScreensStyle";

const GGroup = ({
  horseId,
  poolLevel,
  truckLevel,
  roadLevel,
  pasture_id,
  user_id,
  horseAge,
  horseGrow,
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
    navigation.replace("TrainingReservationScreen");
    const sandReservationData = {
      game_date: gameData,
      user_id: user_id,
    };
    const sendUserId = {
      user_id: user_id,
      place: "stall",
    };
    dispatch(reservationStallValiAction(sandReservationData));
    dispatch(preeStallShowAction(sendUserId));
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
    <ScrollView style={RTapScreensStyle.grazingContainer}>
      <View style={RTapScreensStyle.oneBottomContent}>
        <ImageBackground
          style={RTapScreensStyle.BottomBackground}
          resizeMode="cover"
          source={require("../../../../assets/images/Pasture/background.jpg")}
        >
          <Image
            style={RTapScreensStyle.TitleImage}
            source={require("../../../../assets/images/Pasture/background_text2.png")}
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
              <DetailButton label={"育成する"} onPress={goToOtherScreen} />
            </View>
            <View>
              <View style={[RTapScreensStyle.absoluteViewF]}>
                <Text style={RTapScreensStyle.label}>スぺシャル</Text>
              </View>
              <ImageButton
                label={"スベシャル"}
                source={require("../../../../assets/images/Pasture/icon9.png")}
                id={2}
                disabled={false}
              />
              <Image
                style={[
                  RTapScreensStyle.LongiIcon,
                  { display: spaceialDisplay },
                ]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                horseId={horseId}
                horseAge={horseAge}
                horseGrow={horseGrow}
                name={"スベシャル"}
                disabled={spaceialDisabled}
                id={11}
              />
            </View>
            <View>
              <View style={[RTapScreensStyle.absoluteViewT]}>
                <Text style={RTapScreensStyle.label}>放牧</Text>
              </View>
              <ImageButton
                label={"放牧"}
                source={require("../../../../assets/images/Pasture/icon2.png")}
                id={3}
              />
              <DetailButton
                label={"育成する"}
                horseId={horseId}
                horseAge={horseAge}
                horseGrow={horseGrow}
                name={"放牧"}
              />
            </View>
          </View>
          <View style={RTapScreensStyle.ImageButtonMiddle}>
            <View>
              <View style={[RTapScreensStyle.absoluteViewO]}>
                <Text style={RTapScreensStyle.label}>芝</Text>
              </View>
              <ImageButton
                label={"芝"}
                source={require("../../../../assets/images/Pasture/icon3.png")}
                id={4}
              />
              <DetailButton
                label={"育成する"}
                horseId={horseId}
                horseAge={horseAge}
                horseGrow={horseGrow}
                name={"芝"}
              />
            </View>
            <View>
              <View style={RTapScreensStyle.absoluteView}>
                <Text style={RTapScreensStyle.label}>ダート</Text>
              </View>
              <ImageButton
                label={"ダート"}
                source={require("../../../../assets/images/Pasture/icon4.png")}
                id={5}
              />
              <DetailButton
                label={"育成する"}
                horseId={horseId}
                horseAge={horseAge}
                horseGrow={horseGrow}
                name={"ダート"}
              />
            </View>
            <View>
              <View style={[RTapScreensStyle.absoluteViewB]}>
                <Text style={RTapScreensStyle.label}>ウッドチップ</Text>
              </View>
              <ImageButton
                label={"ウッドチップ"}
                source={require("../../../../assets/images/Pasture/icon10.png")}
                id={6}
              />
              <DetailButton
                label={"育成する"}
                horseId={horseId}
                horseAge={horseAge}
                horseGrow={horseGrow}
                name={"ウッドチップ"}
              />
            </View>
          </View>
          <View style={RTapScreensStyle.ImageButtonBottom}>
            <View>
              <View style={RTapScreensStyle.absoluteView}>
                <Text style={RTapScreensStyle.label}>プール</Text>
              </View>
              <ImageButton
                label={"プール"}
                source={require("../../../../assets/images/Pasture/icon7.png")}
                id={7}
              />
              <Image
                style={[RTapScreensStyle.LongiIcon, { display: poolDisplay }]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                disabled={poolDisabled}
                horseId={horseId}
                horseAge={horseAge}
                horseGrow={horseGrow}
                name={"プール"}
              />
            </View>
            <View>
              <View style={RTapScreensStyle.absoluteViewT}>
                <Text style={RTapScreensStyle.label}>併走</Text>
              </View>
              <ImageButton
                label={"併走"}
                source={require("../../../../assets/images/Pasture/icon5.png")}
                id={8}
                disabled={true}
              />
              <Image
                style={[RTapScreensStyle.LongiIcon, { display: truckDisplay }]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                disabled={truckDisabled}
                horseId={horseId}
                horseAge={horseAge}
                horseGrow={horseGrow}
                name={"併走"}
              />
            </View>
            <View>
              <View style={RTapScreensStyle.absoluteViewT}>
                <Text style={RTapScreensStyle.label}>坂路</Text>
              </View>
              <ImageButton
                label={"坂路"}
                source={require("../../../../assets/images/Pasture/icon6.png")}
                id={9}
                disabled={true}
              />
              <Image
                style={[RTapScreensStyle.LongiIcon, { display: roadDisplay }]}
                source={require("../../../../assets/images/Pasture/icon8.png")}
              />
              <DetailButton
                label={"育成する"}
                disabled={roadDisabled}
                horseId={horseId}
                horseAge={horseAge}
                horseGrow={horseGrow}
                name={"坂路"}
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
    user_id: state.user.userData.id,
    poolLevel: state.pool.poolBuyData,
    truckLevel: state.truck.truckBuyData,
    roadLevel: state.road.roadBuyData,
  };
};
export default connect(mapStateToProps)(GGroup);
