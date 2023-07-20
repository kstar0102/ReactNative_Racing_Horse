import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';
import colors from '../../containers/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { convertToHalf } from '../../utils/validationText';

const BloodLineTable = ({ father_sys, father_f_sys, father_m_sys, mother_sys, mother_f_sys, mohter_m_sys }) => {
  const CONTENT = {
    father_sys: [convertToHalf(father_sys)],
    father_f_sys: [convertToHalf(father_f_sys)],
    father_m_sys: [convertToHalf(father_m_sys)],

    mother_sys: [convertToHalf(mother_sys)],
    mother_f_sys: [convertToHalf(mother_f_sys)],
    mohter_m_sys: [convertToHalf(mohter_m_sys)]
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.father_sys}
            style={styles.FatherName}
            textStyle={styles.colTextSize}
          />
          <TableWrapper style={styles.rowpaper}>
            <Row
              data={CONTENT.father_f_sys}
              flexArr={[3]}
              style={styles.GFather}
              textStyle={styles.colTextSize}
            />
            <Row
              data={CONTENT.father_m_sys}
              flexArr={[3]}
              style={styles.GMother}
              textStyle={styles.colTextSize}
            />
          </TableWrapper>
        </TableWrapper>
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.mother_sys}
            style={styles.MotherName}
            textStyle={styles.colTextSize}
          />
          <TableWrapper style={styles.rowpaper}>
            <Row
              data={CONTENT.mother_f_sys}
              flexArr={[3]}
              style={styles.GFather}
              textStyle={styles.colTextSize}
            />
            <Row
              data={CONTENT.mohter_m_sys}
              flexArr={[3]}
              style={styles.GMother}
              textStyle={styles.colTextSize}
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
  },
  colTextSize: {
    fontSize: hp(1.5) + wp(.8), textAlign: 'center'
  }

});