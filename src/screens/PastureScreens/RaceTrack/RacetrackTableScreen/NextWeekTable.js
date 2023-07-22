import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Col, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';
import TableStyles from '../../../StableScreens/RaceCourse/RacetrackTable/TableStyles';

const RaceWeekTable = ({ nextWeekTitle, nextWeekData, nextWeekName }) => {
  const navigation = useNavigation();
  const elementButton = (nextWeekNames) => (
    nextWeekNames.map((name, index) => (
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
    navigation.navigate('PastureRaceCourseScreen');
  };

  return (
    <View style={TableStyles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={nextWeekTitle}
          flexArr={[]}
          style={TableStyles.tableHead}
          textStyle={TableStyles.textHead}
        />

        <TableWrapper style={TableStyles.wrapper}>
          <Col
            data={elementButton(nextWeekName)}
            style={TableStyles.title}
            heightArr={[23, 23]}
            textStyle={TableStyles.textCol}
          />
          <Rows
            data={nextWeekData}
            flexArr={[0.3, 0.3, 0.2, 0.4, 0.5]}
            style={TableStyles.row}
            textStyle={TableStyles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default RaceWeekTable;