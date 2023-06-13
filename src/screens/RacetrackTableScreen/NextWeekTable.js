import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

 const NextWeekTable = ({tableHeadTitle, tableHeadValue1, tableHeadValue2, tableHeadValue3, tableData}) => {
  const CONTENT = {
    tableHeadTitle: tableHeadTitle,
    tableHeadValue1: tableHeadValue1,
    tableHeadValue2: tableHeadValue2,
    tableHeadValue3: tableHeadValue3,
    // tableNumber: ['4位', '5位', '6位', '7位', '8位','9位','10位'],
    tableData: tableData
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHeadTitle}
          flexArr={[.7, 1.3, .6, 2.3, 1.8]}
          style={styles.tableHeadTitle}
          textStyle={styles.text}
        />
        <Row
          data={CONTENT.tableHeadValue1}
          flexArr={[.7, 1.3, .6,2.3,1.8]}
          style={styles.tableHeadValue1}
          textStyle={styles.text}
        />
        <Row
          data={CONTENT.tableHeadValue2}
          flexArr={[.7, 1.3, .6,2.3,1.8]}
          style={styles.tableHeadValue2}
          textStyle={styles.text}
        />
        <Row
          data={CONTENT.tableHeadValue3}
          flexArr={[.7, 1.3, .6,2.3,1.8]}
          style={styles.tableHeadValue3}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Rows
            data={CONTENT.tableData}
            flexArr={[.7, 1.3, .6,2.3,1.8]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default NextWeekTable;

const styles = StyleSheet.create({
  container: {

    marginTop: 200,
    margin: 30,
    backgroundColor: '#fff' 
},
tableHeadTitle: { 
    height: 23,
    backgroundColor: '#fff' 
},
tableHeadValue1:{
  height: 23,
  backgroundColor: '#fce49c'
},
tableHeadValue2:{
  height: 23,
  backgroundColor: '#d8dad9'
},
tableHeadValue3:{
  height: 23,
  backgroundColor: '#fcc699'
},
wrapper: { 
    flexDirection: 'row' 
},
row: { 
    height: 23,
},
text: { 
    textAlign: 'center' 
},
});