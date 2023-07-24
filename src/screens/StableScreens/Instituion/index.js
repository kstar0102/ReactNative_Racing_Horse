import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, Image } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
// Redux
import { connect, useDispatch } from "react-redux";
import { InstitutionMenuAction } from "../../../store/actions/truck/TrainInstitution/InstitutionMenuAction";
// Custom IMPORT
import HeaderScreen from "../../LayoutScreen/HeaderScreen";
import StableFooterScreen from "../../LayoutScreen/StableFooterScreen";
import ReturnButtonScreen from "../../../components/someScreen/ReturnButtonScreen";
import Screenstyles from "../../ScreenStylesheet";
import TapScreen from "./TapScreen";
import DropDwonI from "../../../components/Buttons/DropDwonI";
import StableStyles from "../StableStyles";

const Institution = ({
  level,
  institutionData,
  user_id,
  stallPool,
  stallRanch,
  stallSlope,
  stallTruck,
}) => {
  if (
    institutionData == ""
  ) {
    return <Spinner visible={true} />;
  } else {
    const disabled = useDispatch();
    const [selected, setSelected] = useState(undefined);
    const [banner, setBanner] = useState(0);

    

    const data = institutionData;

    useEffect(()=>{
      const sendStallId = {
        user_id: user_id,
        stall_id: data[0].sid,
      };
      disabled(InstitutionMenuAction(sendStallId));
    }, [user_id]);


    const handleSettingId = (value) => {
      setBanner(value);


      const sendStallId = {
        user_id: user_id,
        stall_id: value.sid,
      };
      disabled(InstitutionMenuAction(sendStallId));
    };


    return (
      <View style={Screenstyles.container}>
        <ImageBackground
          source={require("../../../assets/images/horse_track/stall.jpg")}
          resizeMode="cover"
          style={Screenstyles.img}
        >
          <HeaderScreen />
          <View style={Screenstyles.footerTap}>
            <ReturnButtonScreen BigPlace={"厩 舎"} screenName={"施 設"} nviUrl={"StallScreen"} colorNumber={1}/>
            {/* SCREEN SHOW */}
            <View style={StableStyles.institutionContainer}>
              <View style={StableStyles.upperContent}>
                <View style={StableStyles.upperLeft}>
                  <Text style={StableStyles.upperLeftTxt}>厩舎 一覧</Text>
                  <DropDwonI
                    name={data[0].name}
                    data={data}
                    onSelect={setSelected}
                    setId={handleSettingId}
                  />
                </View>
                <View style={StableStyles.upperRight}>
                  <View style={StableStyles.cardHeader}>
                    <Text style={StableStyles.cardHeaderTxt}>
                      {(!!selected && banner.name) || data[0].name}
                    </Text>
                    <Text style={StableStyles.cardHeaderTxtLv}>
                      厩舎Lv.{level}
                    </Text>
                  </View>
                  <View style={StableStyles.cardBody}>
                    <View style={StableStyles.cardRow}>
                      <Text style={StableStyles.cardBodyTxt}>
                        厩舎Lv.{banner ? banner.slevel : institutionData[0].slevel}
                      </Text>
                      <Text style={StableStyles.cardBodyTxt}>
                        ロンギ場 Lv.{stallRanch == undefined ? "0" : stallRanch.level}
                      </Text>
                      <Text style={StableStyles.cardBodyTxt}>
                        トラック Lv.{stallTruck == undefined ? "0" : stallTruck.level }
                      </Text>
                    </View>
                    <View style={StableStyles.cardRow}>
                      <Text style={StableStyles.cardBodyTxt}>
                        坂路 Lv.{stallSlope  == undefined ? "0" : stallSlope.level}
                      </Text>
                      <Text style={StableStyles.cardBodyTxt}>
                        プール Lv.{stallPool == undefined ? "0" : stallPool.level}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* SCREEN SHOW END */}
            <TapScreen banner={banner} />
          </View>
          <StableFooterScreen />
        </ImageBackground>
      </View>
    );
  }
};

const mapStateToProps = (state) => {

  return {
    level: state.user.userData.level,
    institutionData: state.institutionStable.institutionMenuData,
    user_id: state.user.userData.id,
    stallPool: state.stallPool.poolLevelUpData[0],
    stallRanch: state.stallRanch.ranchLevelUpData[0],
    stallSlope: state.stallRoad.roadLevelUpData[0],
    stallTruck: state.stallTruck.truckLevelUpData[0]
  };
};

export default connect(mapStateToProps)(Institution);
