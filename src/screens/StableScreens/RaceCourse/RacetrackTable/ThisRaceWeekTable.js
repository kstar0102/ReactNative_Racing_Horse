import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Col, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';
import TableStyles from './TableStyles';

const ThisRaceWeekTable = ({ raceWeekTitle, raceWeekData, raceWeekName }) => {
  const navigation = useNavigation();
  const elementButton = (raceWeekNames) => (
    raceWeekNames.map((name, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => handleClick()}>
          <View style={TableStyles.btn}>
            <Text style={TableStyles.btnText}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ))
  );

  const handleClick = () => {
    navigation.navigate('StableRaceCourse');
  };

  return (
    <View style={TableStyles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={raceWeekTitle}
          flexArr={[]}
          style={TableStyles.tableHead}
          textStyle={TableStyles.textHead}
        />

        <TableWrapper style={TableStyles.wrapper}>
          <Col
            data={elementButton(raceWeekName)}
            style={TableStyles.title}
            heightArr={[23, 23]}
            textStyle={TableStyles.textCol}
          />
          <Rows
            data={raceWeekData}
            flexArr={[0.3, 0.3, 0.2, 0.4, 0.5]}
            style={TableStyles.row}
            textStyle={TableStyles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default ThisRaceWeekTable;
