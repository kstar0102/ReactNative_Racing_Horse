import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
import colors from '../../containers/colors';

 const RaceWeekTable = ({ nextWeekTitle, nextWeekData, nextWeekName}) => {
  const CONTENT = {
    nextWeekTitle: nextWeekTitle,
    nextWeekData: nextWeekData,
    nextWeekName: nextWeekName,
    
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.nextWeekTitle}
          flexArr={[]}
          style={styles.tableHead}
          textStyle={styles.textHead}
        />
        <TableWrapper style={styles.wrapper}>
        <Col
            data={CONTENT.nextWeekName}
            style={styles.title}
            heightArr={[23, 23]}
            textStyle={styles.textCol}
          />
          <Rows
            data={CONTENT.nextWeekData}
            flexArr={[.3, .3, .2, .4, .5]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default RaceWeekTable;

const styles = StyleSheet.create({
  container: {
    // marginTop: 200,
    margin: 30,
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
    fontWeight: 600,
    marginLeft: wp(1)
},
textHead:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600
},
wrapper: { 
    flexDirection: 'row'
},
});