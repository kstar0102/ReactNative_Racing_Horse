import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { stableAllGetAction } from "../../store/actions/truck/getApi/stableAllGetAction";
// Redux
import { connect, useDispatch } from "react-redux";
// Custom
import { FooterButton } from "../../components/Buttons";

const FooterScreen = ({ user_id }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleStall = () => {
    dispatch(stableAllGetAction(user_id));
    navigation.navigate("StallScreen");
  };

  const handleRaceCourse = () => {
    // navigation.navigate("RaceCourseScreen");
  }

  const handleAuctionSumbit = () => {
    navigation.navigate('AuctionScreen');
  }

  return (
    <View style={styles.containers}>
      <FooterButton label="厩 舎" onPress={() => handleStall()} />
      <FooterButton label="競馬場" onPress={() => handleRaceCourse()} />
      <FooterButton label="セ リ" onPress={() => handleAuctionSumbit()}  />
      <FooterButton label="ランキング" />
      <FooterButton label="V I P" />
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    position: "absolute",
    bottom: hp(3),
    left: 1,
    right: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => {
  return {
    user_id: state.user.userData.id,
  };
};

export default connect(mapStateToProps)(FooterScreen);
