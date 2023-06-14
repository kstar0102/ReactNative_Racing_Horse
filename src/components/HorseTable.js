import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Table, TableWrapper, Col, Row, Rows } from 'react-native-table-component';
import colors from '../containers/colors';
// {label ? label : "Button"}

function HorseTable({horseFee, SP, ST, instantaneous, guts, Temperament, health, HorseName}) {
  const CONTENT = {
    initialState: ['成長', '馬場', '距離'],
    initialValue: ['?', '?', '?'],
    name: ['ギミックマルシェの仔'],
    price:['金      額'],
    ability: [
      ['SP', 'ST', '瞬発', '根性', '気性', '健康'],
    ],
    abilityValue: [
      ['?', '?', '?', '?', '?', '?'],
    ],
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.name}
            style={styles.name}
            textStyle={{textAlign: 'center' }}

          />
           <Row
            data={CONTENT.initialState}
            flexArr={[1, 1, 1]}
            style={styles.initialState}
            textStyle={{textAlign: 'center' }}

          />
        </TableWrapper>
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.price}
            style={styles.price}
            textStyle={{textAlign: 'center' }}

          />
           <Row
            data={CONTENT.initialValue}
            flexArr={[1, 1, 1]}
            style={styles.initialValue}
            textStyle={{textAlign: 'center' }}

          />
        </TableWrapper>
        <Rows
            data={CONTENT.ability}
            flexArr={[1, 1, 1,1, 1, 1 ]}
            style={styles.ability}
            textStyle={{textAlign: 'center' }}

        />
        <Rows
            data={CONTENT.abilityValue}
            flexArr={[1, 1, 1,1, 1, 1]}
            style={styles.abilityValue}
            textStyle={{textAlign: 'center' }}
        />
      </Table>
    </View>
  );
}
export default HorseTable;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingLeft: 16,
    paddingRight: 16,
    padding: 5
  },
  wrapper: { 
    flexDirection: 'row',
    height: 30
  },
  initialState: { 
    height: 30, 
    width: 170,
    backgroundColor: colors.stateColor
  },
  initialValue: { 
    height: 30, 
    width: 170,
    backgroundColor: colors.valueColor 
  },
  name: {
    flex: 1, 
    backgroundColor: colors.horsTableNameColor 
  },
  price: {
    flex: 1, 
    backgroundColor: colors.horsTablePriceColor 
  },
  ability: { 
    height: 28,
    backgroundColor: colors.stateColor
  },
  abilityValue:{
    height: 28,
    backgroundColor: colors.valueColor,
    textAlign: 'center',
    fontSize: 20
  },
  // text: { 
  //   textAlign: 'center' 
  // },
});