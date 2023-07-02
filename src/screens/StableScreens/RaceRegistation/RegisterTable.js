import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal } from 'react-native';
import colors from '../../../containers/colors';
import { RegisterButton, CustomButtons } from '../../../components/Buttons';
import ButtonStyle from '../../../components/Buttons/ButtonStyle';
import SaleInputButton from '../../../components/Buttons/SaleInputButton';
import DropdownR from '../../../components/Buttons/DropDwonR';
import { useNavigation } from '@react-navigation/native';

const RegisterTable = () => {
  const data = [
    {name: '川谷'},
    {name: '信士'},
    {name: '川崎'},
  ]
  const navigation = useNavigation();
  const [activeBtn, setActiveBin] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
 
  const handleClick = (value) => {
    setModalVisible(true);
    setActiveBin(value);
  }
  const handleYesPress = () => {
    setModalVisible(false);
    setSecondModalVisible(true);
  };

  const handleNoPress = () => {
    setModalVisible(false);
  };

  const handleSecondModalSubmit = () => {
    setSecondModalVisible(false);
  }
  const handleSecondNoModalSubmit = () => {
    setSecondModalVisible(false);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.TableHeader}>
          <Text style={styles.white} >ジャパンカップ (GI ・ 3歳以上・定量)</Text>
          <Text style={styles.white} >中山芝2000m 天気予報 (晴)</Text>
          <Text style={styles.white} >賞金 (pt): 15000 ・ 8000 ・ 6000 ・ 4000・ 1500</Text>
        </View>
        <View style={styles.TableBody}>
          {/* ! */}
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white} >登録馬</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >アイウエオ (牡3)</Text>
              <Text style={styles.white} >馬主:マイケル</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >カキクケコ (牡4)</Text>
              <Text style={styles.white} >馬主: ジョーダン</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >サシスセソ (牡8)</Text>
              <Text style={styles.white} >馬主:ジェームズ</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >タチツテト (牡5)</Text>
              <Text style={styles.white} >馬主: ロナウド</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >アイウエオ (牡3)</Text>
              <Text style={styles.white} >馬主:マイケル</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >カキクケコ (牡4)</Text>
              <Text style={styles.white} >馬主:ジョーダン</Text>
            </View>
          </View>
          {/* ! */}
          {/* ! */}
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white} >斤量/騎手/脚質</Text>
            </View>
            <View style={styles.txtBorderM}>
              <Text style={styles.white} >斤量/ Jockey名</Text>
              <View style={styles.stateBar}>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'flex' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
              </View>
            </View>
            <View style={styles.txtBorderM}>
              <Text style={styles.white} >58kg/タイガー</Text>
              <View style={styles.stateBar}>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'flex' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
              </View>
            </View>
            <View style={styles.txtBorderM}>
              <Text style={styles.white} >53kg/ウッズ</Text>
              <View style={styles.stateBar}>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'flex' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
              </View>
            </View>
            <View style={styles.txtBorderM}>
              <Text style={styles.white} >55kg/ガガ</Text>
              <View style={styles.stateBar}>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'flex' }]} >▲</Text>
                </View>
              </View>
            </View>
            <View style={styles.txtBorderM}>
              <Text style={styles.white} >50kg/ジャック</Text>
              <View style={styles.stateBar}>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'flex' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
              </View>
            </View>
            <View style={styles.txtBorderM}>
              <Text style={styles.white} >54kg/ キャリー</Text>
              <View style={styles.stateBar}>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'flex' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
                <View style={styles.statesBorder}>
                  <Text style={[styles.states, { display: 'none' }]} >▲</Text>
                </View>
              </View>
            </View>
          </View>
          {/* ! */}
          {/* ! */}
          <View style={styles.TableTitle}>
            <View style={styles.titleBorder}>
              <Text style={styles.white} >前走</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >日付 レース名</Text>
              <Text style={styles.white} >距離/ 着順</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >7/1 日本ダービー</Text>
              <Text style={styles.white} >2000m/10着</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >7/1 日本ダービー</Text>
              <Text style={styles.white} >2000m/10着</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >7/1 日本ダービー</Text>
              <Text style={styles.white} >2000m/10着</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >7/1 日本ダービー</Text>
              <Text style={styles.white} >2000m/10着</Text>
            </View>
            <View style={styles.txtBorder}>
              <Text style={styles.white} >7/1 日本ダービー</Text>
              <Text style={styles.white} >2000m/10着</Text>
            </View>
          </View>
          {/* ! */}

        </View>

      </ScrollView>
      <View style={styles.buttonLayout}>
        <RegisterButton label={'出走登録'} color={2} onPress={() => handleClick(0)} />
        <CustomButtons label={'戻る'} color={2} onPress={() => navigation.goBack()} />
      </View>

      {/* MOdal */}
      <View style={ButtonStyle.container}>
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
        >
          <View style={ButtonStyle.ModalCenter}>
            <Text style={ButtonStyle.saleTxtTitle}>出走登録</Text>
            <Text style={ButtonStyle.saleTxt}>登録料 Optかかりますが登録しますか?</Text>
            <View style={ButtonStyle.buttonContainer}>
              <View style={{ margin: 10 }}>
                <SaleInputButton label="いいえ" onPress={handleNoPress} />
              </View>
              <View style={{ margin: 10 }}>
                <SaleInputButton label="はい" onPress={handleYesPress} />
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          visible={secondModalVisible}
          animationType="fade"
          transparent={true}
        >
          <View style={ButtonStyle.ModalCenter}>
            <Text> 騎手を選んでください。</Text>
            <View style={ButtonStyle.Dropdown}>
              <DropdownR name={"騎手を選ぶ"} data={data} />
            </View>
            <View style={ButtonStyle.buttonContainer}>
              <View style={{ margin: 10 }}>
                <SaleInputButton label="いいえ" onPress={handleSecondNoModalSubmit} />
              </View>
              <View style={{ margin: 10 }}>
                <SaleInputButton label="はい" onPress={handleSecondModalSubmit} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal */}
    </>
  );
}
export default RegisterTable;

const styles = StyleSheet.create({

  white: {
    color: colors.black,

  },
  container: {
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 250
    // height: 50,
    // alignItems: 'center',
  },
  TableTitle: {
    backgroundColor: colors.cardBody,
    width: '34%',
    borderWidth: 1
  },
  txtBorder: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 43
  },
  txtBorderM: {
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 43
  },
  TableHeader: {
    backgroundColor: colors.butonBackgroud,
    alignItems: 'center'
  },
  TableBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: 300
  },
  titleBorder: {
    backgroundColor: colors.cardHeader,
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  stateBar: {
    flexDirection: 'row',
    backgroundColor: colors.blue,
    borderWidth: 1,
    width: 82,
    height: 20

  },
  statesBorder: {
    borderRightWidth: 1,
    width: 20
  },
  states: {
    color: colors.white,
    paddingHorizontal: 3,
    transform: [{ rotateZ: '-90deg' }]
  },
  buttonLayout: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
