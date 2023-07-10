import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Col, Rows } from 'react-native-table-component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../containers/colors';

const ThreeWeekTable = ({ threeWeekTitle, threeWeekData, threeWeekName }) => {
  const navigation = useNavigation();
  const elementButton = (threeWeekNames) => (
    threeWeekNames.map((name, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => handleClick()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ))
  );

  const handleClick = () => {
    navigation.navigate('RaceCourseScreen');
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={threeWeekTitle}
          flexArr={[]}
          style={styles.tableHead}
          textStyle={styles.textHead}
        />

        <TableWrapper style={styles.wrapper}>
          <Col
            data={elementButton(threeWeekName)}
            style={styles.title}
            heightArr={[23, 23]}
            textStyle={styles.textCol}
          />
          <Rows
            data={threeWeekData}
            flexArr={[0.3, 0.3, 0.2, 0.4, 0.5]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default ThreeWeekTable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  tableHead: {
    backgroundColor: '#aae0bc'
  },
  row: {
    height: 23,
  },
  text: {
    textAlign: 'center'
  },
  textCol: {
    color: colors.blue,
    fontWeight: '600',
    marginLeft: wp('1%')
  },
  textHead: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  wrapper: {
    flexDirection: 'row'
  },
  btn: {
    width: 58,
    height: 18,
    borderRadius: 2
  },
  btnText: {
    color: colors.blue,
    fontWeight: '600',
    marginLeft: wp('1%')
  }
});