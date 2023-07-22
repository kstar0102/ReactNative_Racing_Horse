import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Col,
  Rows,
} from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
// Redux
import { connect, useDispatch } from "react-redux";
import { ReacRegisterAction } from "../../../../../store/actions/ReacRegister/ReacRegisterAction";
// Custom
import TableStyles from "../../../RaceCourse/RacetrackTable/TableStyles";

const NextNextWeekTable = ({
  nextNextWeekTitle,
  nextNextWeekData,
  nextNextWeekName,
  nextNextId,
  jockeysData,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const elementButton = (nextNextWeekNames) =>
    nextNextWeekNames.map((name, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => handleClick(nextNextId[index])}>
          <View style={TableStyles.btn}>
            <Text style={TableStyles.btnText}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

  const handleClick = (value) => {
    navigation.navigate("RaceRegistation");
    dispatch(ReacRegisterAction(value));
  };

  return (
    <View style={TableStyles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={nextNextWeekTitle}
          flexArr={[]}
          style={TableStyles.tableHead}
          textStyle={TableStyles.textHead}
        />

        <TableWrapper style={TableStyles.wrapper}>
          <Col
            data={elementButton(nextNextWeekName)}
            style={TableStyles.title}
            heightArr={[23, 23]}
            textStyle={TableStyles.textCol}
          />
          <Rows
            data={nextNextWeekData}
            flexArr={[0.3, 0.3, 0.2, 0.4, 0.5]}
            style={TableStyles.row}
            textStyle={TableStyles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    jockeysData: state.raceData.jockeysData,
  };
};
export default connect(mapStateToProps)(NextNextWeekTable);
