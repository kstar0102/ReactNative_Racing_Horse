import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  Image,
  Text,
} from "react-native";

import WorkingButton from "../../../components/Buttons/WorkingButtons";
import ButtonStyle from "../../../components/Buttons/ButtonStyle";
import Screenstyles from "../../ScreenStylesheet";

const FaceModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageSource, setImageSource] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("種付けしますか？");


  console.log(props.imageSource);

  const handleYes = () => {
    console.log("Yes");
  };

  const handleNo = () => {
    props.updateModalState(false);
  };

  useEffect(() => {
    setModalVisible(props.modalVisible);
  }, [props.modalVisible]);

  useEffect(() => {
    switch (props.imageSource) {
      case "inbreeding":
        setImageSource(require("../../../assets/images/marry/10.png"));
        setMessage1("これは・・・危険な配合です・・・");
        break;
  
      case "miracle":
        setImageSource(require("../../../assets/images/marry/8.png"));
        setMessage1("すばらしい！最強配合ですよ！");
        break;
  
      case "Know":
        setImageSource(require("../../../assets/images/marry/3.png"));
        setMessage1("おっ！これは知り合い配合ですね！");
        break;
  
      case "match":
        setImageSource(require("../../../assets/images/marry/7.png"));
        setMessage1("いよいよお見合い配合ですね！");
        break;
  
      case "good friend":
        setImageSource(require("../../../assets/images/marry/2.png"));
        setMessage1("仲良しそうな配合を考えましたね！");
        break;
  
      case "final":
        setImageSource(require("../../../assets/images/marry/6.png"));
        setMessage1("残り数少ない、最後の配合じゃな！");
        break;
  
      case "triple crown":
        setImageSource(require("../../../assets/images/marry/5.png"));
        setMessage1("偉大な父と母の夢の三冠配合です！");
        break;
        
      case "shot reversal":
          setImageSource(require("../../../assets/images/marry/9.png"));
          setMessage1("一か八かの一発配合じゃな！");
          break;
          
      case "cross":
          setImageSource(require("../../../assets/images/marry/4.png"));
          setMessage1(props.crossName+"のクロスが成立していますね！");
          break;
          
      case "outblid":
          setImageSource(require("../../../assets/images/marry/1.png"));
          setMessage1("文句のない配合です！");
          break;
  
      default:
        break;
    }
  }, [props.imageSource]);

  

  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={ButtonStyle.marryModal}>
        <View style={Screenstyles.marryAlam}>
          <Image
            style={Screenstyles.bankPeople}
            source={imageSource}
          />
          <View style={Screenstyles.marryTxt}>
            <Text>{message1}</Text>
            <Text>{message2}</Text>
          </View>
        </View>

        <View style={Screenstyles.marryBtnGroup}>
          <WorkingButton
            label={"はい"}
            colorNumber={6}
            onPress={() => handleYes()}
          />
          <WorkingButton
            label={"いいえ"}
            colorNumber={6}
            onPress={() => handleNo()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FaceModal;
