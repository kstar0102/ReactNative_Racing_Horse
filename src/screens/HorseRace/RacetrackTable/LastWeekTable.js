import React, {useState} from "react";
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

const LastWeekTable = ({
  fourWeekTitle,
  fourWeekData,
  fourWeekName,
  raceId,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const gameTime = calculateGameDate(currentTime);
  const elementButton = (fourWeekNames) =>
    fourWeekNames.map((name, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => handleClick(raceId[index], name)}>
          <View style={TableStyles.btn}>
            <Text style={TableStyles.btnText}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

  const before_date = new Date(gameTime.getTime() - 7 * 24 * 60 * 60 * 1000);
  const before_date_month = before_date.getMonth() + 1;
  const lastWeekNumber = Math.ceil(before_date.getDate() / 7);
  const timeData = before_date_month + "-" + lastWeekNumber;

  const handleClick = (value, name) => {
    const sendWeek = {
      week: timeData,
      type: name
    };
    dispatch(ReacRegisterAction(value));
    dispatch(RaceWeekAction(sendWeek));
    navigation.navigate("RaceList");
  };

  return (
    <View style={TableStyles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={fourWeekTitle}
          flexArr={[]}
          style={TableStyles.tableHead}
          textStyle={TableStyles.textHead}
        />

        <TableWrapper style={TableStyles.wrapper}>
          <Col
            data={elementButton(fourWeekName)}
            style={TableStyles.title}
            heightArr={[23, 23]}
            textStyle={TableStyles.textCol}
          />
          <Rows
            data={fourWeekData}
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
export default connect(mapStateToProps)(LastWeekTable);
