import React from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
// Redux
import { connect, useDispatch } from "react-redux";
import { pastureAction } from "../../store/actions/Pasture/pastureAction";
// Custom
import { FooterButton } from "../../components/Buttons";

const StableFooterScreen = ({user_id, pasture_id}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePasture = () => {
    navigation.navigate("PastureScreen");
    if(!pasture_id){
      return;
    }
      const sandIds =  {
        "user_id": user_id,
        "pasture_id": pasture_id
      } 
      dispatch(pastureAction(sandIds))
  };

  return (
    <View style={styles.containers}>
      <FooterButton label="牧 場" color={1} onPress={() => handlePasture()} />
      <FooterButton label="競馬場" color={1} />
      <FooterButton label="セ リ" color={1} />
      <FooterButton label="ランキング" color={1} />
      <FooterButton label="V I P" color={1} />
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

const mapStateToProps = state => {  
  return{
    user_id: state.user.userData.id,
    pasture_id: state.pasture.pastureData.id,
  }
}

export default  connect(mapStateToProps)(StableFooterScreen);
