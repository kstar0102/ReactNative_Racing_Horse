import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import colors from '../../containers/colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

const BloodlineNameTable = ({father_sys, father_f_sys, father_m_sys, mother_sys, mother_f_sys, mother_m_sys}) => {
  const CONTENT = {
    father_sys: ['ミスタープロスペクター'],
    father_f_sys: [father_f_sys],
    father_m_sys: [father_m_sys],

    mother_sys: [mother_sys],
    mother_f_sys: [mother_f_sys],
    mohter_m_sys: [mother_m_sys]
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={styles.wrapper}>
                <Col
                    data={CONTENT.father_sys}
                    style={styles.FatherName}
                    textStyle={{fontSize: hp(1) + wp(.5), textAlign: 'center' }}
                />
                <TableWrapper style={styles.rowpaper}>
                    <Row
                        data={CONTENT.father_f_sys}
                        flexArr={[3]}
                        style={styles.GFather}
                        textStyle={{fontSize: hp(1) + wp(.5), textAlign: 'center' }}
                    />
                    <Row
                        data={CONTENT.father_m_sys}
                        flexArr={[3]}
                        style={styles.GMother}
                        textStyle={{fontSize: hp(1) + wp(.5), textAlign: 'center' }}
                    />
                </TableWrapper>
            </TableWrapper>
            <TableWrapper style={styles.wrapper}>
                <Col
                    data={CONTENT.mother_sys}
                    style={styles.MotherName}
                    textStyle={{fontSize: hp(1) + wp(.5), textAlign: 'center' }}
                />
                <TableWrapper style={styles.rowpaper}>
                    <Row
                        data={CONTENT.mother_f_sys}
                        flexArr={[3]}
                        style={styles.GFather}
                        textStyle={{fontSize: hp(1) + wp(.5), textAlign: 'center' }}
                    />
                    <Row
                        data={CONTENT.mohter_m_sys}
                        flexArr={[3]}
                        style={styles.GMother}
                        textStyle={{fontSize: hp(1) + wp(.5), textAlign: 'center' }}
                    />
                </TableWrapper>
            </TableWrapper>
      </Table>
    </View>
  );
}

export default BloodlineNameTable;

const styles = StyleSheet.create({
  container: { 
    width: 220,
  },
  GFather: { 
    height: 35,
    width: 110,
    backgroundColor: colors.TableFathercolor, 
  },
  GMother: { 
    height: 35,
    width: 110,
    backgroundColor: colors.TableMoterColor,  
  },

  wrapper: {
    height: 70,
    flexDirection: 'row',
  },

  FatherName: { 
    backgroundColor: colors.TableFathercolor, 
  },
  MotherName: {
    backgroundColor: colors.TableMoterColor, 
  }
});