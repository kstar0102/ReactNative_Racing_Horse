import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
import { ReacRegisterAction } from "../../../../store/actions/ReacRegister/ReacRegisterAction";

import TableStyles from "./TableStyles";

const LastLastWeekTable = ({
  threeWeekTitle,
  threeWeekData,
  threeWeekName,
  raceId
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const elementButton = (threeWeekNames) =>
    threeWeekNames.map((name, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => handleClick(raceId(index))}>
          <View style={TableStyles.btn}>
            <Text style={TableStyles.btnText}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

  const handleClick = (value) => {
    dispatch(ReacRegisterAction(value));
    navigation.navigate("StableRaceCourse");
  };

  return (
    <View style={TableStyles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={threeWeekTitle}
          flexArr={[]}
          style={TableStyles.tableHead}
          textStyle={TableStyles.textHead}
        />

        <TableWrapper style={TableStyles.wrapper}>
          <Col
            data={elementButton(threeWeekName)}
            style={TableStyles.title}
            heightArr={[23, 23]}
            textStyle={TableStyles.textCol}
          />
          <Rows
            data={threeWeekData}
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
export default connect(mapStateToProps)(LastLastWeekTable);
