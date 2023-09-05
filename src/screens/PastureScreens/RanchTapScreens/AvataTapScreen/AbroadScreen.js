import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
// Redux
import { connect } from "react-redux";
// Custom Import
import AvatarButton from "../../../../components/Buttons/AvatarButton";
import RTapScreensStyle from "../RTapScreensStyle";

const AbroadScreen = ({ stableMenu, horseId }) => {
  if (stableMenu == "") {
    return false;
  } else {
    return (
      <ScrollView style={RTapScreensStyle.avatarContainer}>
        <View style={RTapScreensStyle.ranchContent}>
          <View style={RTapScreensStyle.avatarGroup}>
            <View style={RTapScreensStyle.avatar}>
              <AvatarButton
                id="1"
                stableId={stableMenu[0].id}
                horseId={horseId}
                name="国沢厩舎"
              />
            </View>
            <View style={RTapScreensStyle.avatarTxt}>
              <Text> {stableMenu[0].name}</Text>
              <Text>{stableMenu[0].moto}</Text>
              <Text>{stableMenu[0].etc}が得意!</Text>
              <Text>{stableMenu[0].possable}が使用可能!</Text>
              <Text> 預託料: {stableMenu[0].price}/1頭</Text>
            </View>
          </View>

          <View style={RTapScreensStyle.avatarGroup}>
            <View style={RTapScreensStyle.avatar}>
              <AvatarButton
                id="2"
                stableId={stableMenu[1].id}
                horseId={horseId}
                name="堀塚厩舎"
              />
            </View>
            <View style={RTapScreensStyle.avatarTxt}>
              <Text> {stableMenu[2].name}</Text>
              <Text>{stableMenu[2].moto}</Text>
              <Text>{stableMenu[2].etc}が得意!</Text>
              <Text>{stableMenu[2].possable}が使用可能!</Text>
              <Text> 預託料: {stableMenu[2].price}/1頭</Text>
            </View>
          </View>

          <View style={RTapScreensStyle.avatarGroup}>
            <View style={RTapScreensStyle.avatar}>
              <AvatarButton
                id="3"
                stableId={stableMenu[2].id}
                horseId={horseId}
                name="木藤厩舎"
              />
            </View>
            <View style={RTapScreensStyle.avatarTxt}>
              <Text> {stableMenu[1].name}</Text>
              <Text>{stableMenu[1].moto}</Text>
              <Text>{stableMenu[1].etc}が得意!</Text>
              <Text>{stableMenu[1].possable}が使用可能!</Text>
              <Text> 預託料: {stableMenu[1].price}/1頭</Text>
            </View>
          </View>

          <View style={RTapScreensStyle.avatarGroup}>
            <View style={RTapScreensStyle.avatar}>
              <AvatarButton id="4" disabled={true} />
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

export default connect(mapStateToProps)(AbroadScreen);
