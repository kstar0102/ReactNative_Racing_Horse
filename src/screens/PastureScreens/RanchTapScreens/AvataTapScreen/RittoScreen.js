import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
// Redux
import { connect } from "react-redux";
// Custom Import
import AvatarButton from "../../../../components/Buttons/AvatarButton";
import RTapScreensStyle from "../RTapScreensStyle";
const Ritto = ({ stableMenu, horseId }) => {
  if (stableMenu == "") {
    return false;
  } else {
    return (
      <ScrollView style={RTapScreensStyle.avatarContainer}>
        <View style={RTapScreensStyle.ranchContent}>
          <View style={RTapScreensStyle.avatarGroup}>
            <View style={RTapScreensStyle.avatar}>
              <AvatarButton
                id={5}
                stableId={stableMenu[3].id}
                horseId={horseId}
                name="矢道厩舎"
              />
            </View>
            <View style={RTapScreensStyle.avatarTxt}>
              <Text> {stableMenu[3].name}</Text>
              <Text>{stableMenu[3].moto}</Text>
              <Text>{stableMenu[3].etc}が得意!</Text>
              <Text>{stableMenu[3].possable}が使用可能!</Text>
              <Text> 預託料: {stableMenu[3].price}/1頭</Text>
            </View>
          </View>

          <View style={RTapScreensStyle.avatarGroup}>
            <View style={RTapScreensStyle.avatar}>
              <AvatarButton
                id={6}
                stableId={stableMenu[4].id}
                horseId={horseId}
                name="池貝廳舍"
              />
            </View>
            <View style={RTapScreensStyle.avatarTxt}>
              <Text> {stableMenu[4].name}</Text>
              <Text>{stableMenu[4].moto}</Text>
              <Text>{stableMenu[4].etc}が得意!</Text>
              <Text>{stableMenu[4].possable}が使用可能!</Text>
              <Text> 預託料: {stableMenu[4].price}/1頭</Text>
            </View>
          </View>

          <View style={RTapScreensStyle.avatarGroup}>
            <View style={RTapScreensStyle.avatar}>
              <AvatarButton
                id={7}
                stableId={stableMenu[5].id}
                horseId={horseId}
                name="中外田厩舎"
              />
            </View>
            <View style={RTapScreensStyle.avatarTxt}>
              <Text> {stableMenu[5].name}</Text>
              <Text>{stableMenu[5].moto}</Text>
              <Text>{stableMenu[5].etc}が得意!</Text>
              <Text>{stableMenu[5].possable}が使用可能!</Text>
              <Text> 預託料: {stableMenu[5].price}/1頭</Text>
            </View>
          </View>

          <View style={RTapScreensStyle.avatarGroup}>
            <View style={RTapScreensStyle.avatar}>
              <AvatarButton id={8} disabled={true} />
            </View>
            <View>
              <Text style={RTapScreensStyle.lockTitle}>? ? ?厩舎</Text>
              <View style={RTapScreensStyle.avatarTxtLock}>
                <Image
                  style={RTapScreensStyle.avatarTxtLock}
                  source={require("../../../../assets/images/avatars/icon8.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    stableMenu: state.stableMenu.StableMenuData,
  };
};
export default connect(mapStateToProps)(Ritto);
