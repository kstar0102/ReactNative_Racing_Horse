import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Col, Rows } from 'react-native-table-component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
// Redux
import { connect, useDispatch } from 'react-redux';
import { ReacRegisterAction } from '../../../../../store/actions/ReacRegister/ReacRegisterAction';
// Custom
import colors from '../../../../../containers/colors';

const NextNextNextWeekTable = ({ raceWeekTitle, raceWeekData, raceWeekName, raceId }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const elementButton = (raceWeekNames) => (
    raceWeekNames.map((name, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => handleClick(raceId[index])}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ))
  );

  const handleClick = (value) => {
    dispatch(ReacRegisterAction(value)) 
    navigation.navigate('RaceRegistation');
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={raceWeekTitle}
          flexArr={[]}
          style={styles.tableHead}
          textStyle={styles.textHead}
        />

        <TableWrapper style={styles.wrapper}>
          <Col
            data={elementButton(raceWeekName)}
            style={styles.title}
            heightArr={[23, 23]}
            textStyle={styles.textCol}
          />
          <Rows
            data={raceWeekData}
            flexArr={[0.3, 0.3, 0.2, 0.4, 0.5]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

const mapStateToProps = state =>{
  return{

  }
}
export default connect(mapStateToProps)(NextNextNextWeekTable);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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