import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Col,
  Rows,
} from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
import { calculateGameDate } from "../../LayoutScreen/HeaderScreen";
// Redux
import { connect, useDispatch } from "react-redux";
import { ReacRegisterAction } from "../../../store/actions/ReacRegister/ReacRegisterAction";
import { RaceWeekAction } from "../../../store/actions/race/RaceWeekAction";
import TableStyles from "../../StableScreens/RaceCourse/RacetrackTable/TableStyles";

const ThisRaceWeekTable = ({
  raceWeekTitle,
  raceWeekData,
  raceWeekName,
  raceId,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const gameTime = calculateGameDate(currentTime);
  const elementButton = (raceWeekNames) =>
    raceWeekNames.map((name, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => handleClick(raceId[index], name)}>
          <View style={TableStyles.btn}>
            <Text style={TableStyles.btnText}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

  const current_date = new Date(gameTime.getTime());
  const current_date_month = current_date.getMonth() + 1;
  const week_number = Math.ceil(current_date.getDate() / 7);
  const timeData = current_date_month + "-" + week_number;

  const handleClick = (value, name) => {
    const sendWeek = {
      week: timeData,
      type: name,
    };
    dispatch(ReacRegisterAction(value));
    dispatch(RaceWeekAction(sendWeek));
    navigation.navigate("RaceList");
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

const mapStateToProps = (state) => {
  return {
    jockeysData: state.raceData.jockeysData,
  };
};
export default connect(mapStateToProps)(ThisRaceWeekTable);
