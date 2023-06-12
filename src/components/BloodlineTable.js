import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import colors from '../containers/colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
// {label ? label : "Button"}

function BloodLineTable({horseFee, SP, ST, instantaneous, guts, Temperament, health, HorseName}) {
  const CONTENT = {
    Father: ['ヴァイストチノシン'],
    Mother: ['ギミックマルシェ( ダマスカス系)'],
    GFather: ['サキソモルヴェーナ'],
    GMother: ['アロハガール(ブランドフォード系)']
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={styles.wrapper}>
                <Col
                    data={CONTENT.Father}
                    style={styles.FatherName}
                    textStyle={{fontSize: hp(1) + wp(.5),textAlign: 'center' }}
                />
                <TableWrapper style={styles.rowpaper}>
                    <Row
                        data={CONTENT.GFather}
                        flexArr={[3]}
                        style={styles.GFather}
                        textStyle={{fontSize: hp(1) + wp(.5),textAlign: 'center' }}
                    />
                    <Row
                        data={CONTENT.GMother}
                        flexArr={[3]}
                        style={styles.GMother}
                        textStyle={{fontSize: hp(1) + wp(.5),textAlign: 'center' }}
                    />
                </TableWrapper>
            </TableWrapper>
            <TableWrapper style={styles.wrapper}>
                <Col
                    data={CONTENT.Mother}
                    style={styles.MotherName}
                    textStyle={{fontSize: hp(1) + wp(.5),textAlign: 'center' }}
                />
                <TableWrapper style={styles.rowpaper}>
                    <Row
                        data={CONTENT.GFather}
                        flexArr={[3]}
                        style={styles.GFather}
                        textStyle={{fontSize: hp(1) + wp(.5),textAlign: 'center' }}
                    />
                    <Row
                        data={CONTENT.GMother}
                        flexArr={[3]}
                        style={styles.GMother}
                        textStyle={{fontSize: hp(1) + wp(.5),textAlign: 'center' }}
                    />
                </TableWrapper>
            </TableWrapper>
      </Table>
    </View>
  );
}

export default BloodLineTable;

const styles = StyleSheet.create({
  container: { 
    width: 180,
  },
  GFather: { 
    height: 30,
    width: 90,
    backgroundColor: colors.TableFathercolor, 
  },
  GMother: { 
    height: 30,
    width: 90,
    backgroundColor: colors.TableMoterColor,  
  },

  wrapper: {
    height: 60,
    flexDirection: 'row',
  },

  FatherName: { 
    backgroundColor: colors.TableFathercolor, 
  },
  MotherName: {
    backgroundColor: colors.TableMoterColor, 
  }
});