import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { connect } from "react-redux";
// Custom IMPORT
import HeaderScreen from "../LayoutScreen/HeaderScreen";
import FooterScreen from "../LayoutScreen/FooterScreen";
import { ReturnButton, RegisterButton } from "../../components/Buttons";
import WorkingButton from "../../components/Buttons/WorkingButtons";
import Screenstyles from "../ScreenStylesheet";
const Bankruptcy = ({ navigation }) => {
    // onPress={() => navigation.goBack()}

    const handleYes = () =>{
        console.log("Yes")
    }
    const handleNo = () =>{
        console.log("No")
    }
  return (
    <View style={Screenstyles.container}>
      <ImageBackground
        source={require("../../assets/images/1.png")}
        resizeMode="cover"
        style={Screenstyles.img}
      >
        <HeaderScreen />
        <View>
          <View>
            <View>
              <ReturnButton label="牧場" />
            </View>
          </View>
          <View style={Screenstyles.UPCourse}>
            <Image
              style={Screenstyles.bankruptcy}
              source={require("../../assets/images/failed/5.png")}
            />
          </View>
          <View style={Screenstyles.Bankloan}>
            <RegisterButton label={"銀行融資"} color={3} />
          </View>

          <View style={Screenstyles.bank}>
            <Image
              style={Screenstyles.bankPeople}
              source={require("../../assets/images/failed/30.png")}
            />
            <View style={Screenstyles.bankTxt}>
              <Text>「BOC銀行です。 」</Text>
              <Text>「牧場が無くなるとお聞きしまして・・・。」</Text>
              <Text>「50000ptほど融資いたしますが、</Text>
              <Text>  利子が5%で毎月1500ptずつ、</Text>
              <Text>  ご返済となりますがよろしいですか?」</Text>
            </View>
          </View>
          <View style={Screenstyles.bankBtnGroup}>
            <WorkingButton label={"はい"} colorNumber={6} onPress={() => handleYes()}/>
            <WorkingButton label={"いいえ"} colorNumber={6} onPress={() => handleNo()}/>
          </View>
        </View>
        <FooterScreen/>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(Bankruptcy);
