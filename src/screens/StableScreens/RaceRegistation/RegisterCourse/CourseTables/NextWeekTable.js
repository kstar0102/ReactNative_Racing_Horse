import React,{useState} from "react";
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
import { calculateGameDate } from "../../../../LayoutScreen/HeaderScreen";
// Custom
import TableStyles from "../../../RaceCourse/RacetrackTable/TableStyles";

const NextWeekTable = ({
  nextWeekTitle,
  nextWeekData,
  nextWeekName,
  nextId,
  jockeysData,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const gameTime = calculateGameDate(currentTime);

  const next_date = new Date(gameTime.getTime() + (7 * 24 * 60 * 60 * 1000));
  let next_date_month = next_date.getMonth() + 1;
  let nextWeekNumber = Math.ceil(next_date.getDate() / 7);
  if (nextWeekNumber == 5) {
    next_date_month = next_date.getMonth() + 2;
    nextWeekNumber = 1;
  }
  const next_week = next_date_month + "-" + nextWeekNumber;

  const elementButton = (nextWeekNames) =>
    nextWeekNames.map((name, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => handleClick(nextId[index], next_week)}>
          <View style={TableStyles.btn}>
            <Text style={TableStyles.btnText}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));
  const handleClick = (value, week) => {
    navigation.navigate("RaceRegistation");
    dispatch(ReacRegisterAction(value, week));
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

const mapStateToProps = (state) => {
  return {
    jockeysData: state.raceData.jockeysData,
  };
};

export default connect(mapStateToProps)(NextWeekTable);
