import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
// Redux
import { connect } from "react-redux";
// IMPORT CUSTOM
import NextWeekTable from "./NextWeekTable";
import LastLastWeekTable from "./LastLastWeekTable";
import LastWeekTable from "./LastWeekTable";
import ThisRaceWeekTable from "./ThisRaceWeekTable";
import NextNextWeekTable from "./NextNextWeekTable";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const RaceCourses = ({
  thisWeekData,
  beforeRacePlan,
  lastRacePlan,
  nextNextRacePlan,
  nextRacePlan,
}) => {
  if (
    !thisWeekData ||
    !beforeRacePlan ||
    !lastRacePlan ||
    !nextNextRacePlan ||
    !nextRacePlan
  ) {
    return <Spinner visible={true} />;
  }

  let thisRaceWD = [];
  let thisRaceWN = [];
  let thisRaceId = [];

  thisWeekData.map((data, index) => {
    thisRaceWD[index] = [
      data.type,
      data.place,
      data.ground,
      data.distance,
      data.age_limit,
    ];
    thisRaceWN.push(data.name);
    thisRaceId.push({race_id: data.id});
  });

  let beforeRaceWN = [];
  let beforeRaceWD = [];
  let beforeRaceId = [];
  beforeRacePlan.map((data, index) => {
    beforeRaceWD[index] = [
      data.type,
      data.place,
      data.ground,
      data.distance,
      data.age_limit,
    ];
    beforeRaceWN.push(data.name);
    beforeRaceId.push({race_id: data.id});
  });

  let lastRaceWN = [];
  let lastRaceWD = [];
  let lastRaceId = [];
  lastRacePlan.map((data, index) => {
    lastRaceWD[index] = [
      data.type,
      data.place,
      data.ground,
      data.distance,
      data.age_limit,
    ];
    lastRaceWN.push(data.name);
    lastRaceId.push({race_id: data.id});
  });

  let nextRaceWN = [];
  let nextRaceWD = [];
  let nextRaceId = [];
  nextRacePlan.map((data, index) => {
    nextRaceWD[index] = [
      data.type,
      data.place,
      data.ground,
      data.distance,
      data.age_limit,
    ];
    nextRaceWN.push(data.name);
    nextRaceId.push({race_id: data.id});
  });

  let nextNextRaceWN = [];
  let nextNextRaceWD = [];
  let nextNextRaceId = [];
  nextNextRacePlan.map((data, index) => {
    nextNextRaceWD[index] = [
      data.type,
      data.place,
      data.ground,
      data.distance,
      data.age_limit,
    ];
    nextNextRaceWN.push(data.name);
    nextNextRaceId.push({race_id: data.id});
  });

  const CONTENT = {
    raceWeekTitle: ["[今週のレース]"],
    nextWeekTitle: ["[来週のレース]"],
    nextNextWeekTitle: ["[再来週のレース]"],
    threeWeekTitle: ["[先々週のレース]"],
    fourWeekTitle: ["[先週のレース]"],
  };

  return (
    <ScrollView style={styles.container}>
      <LastLastWeekTable
        threeWeekTitle={CONTENT.threeWeekTitle}
        threeWeekData={beforeRaceWD}
        threeWeekName={beforeRaceWN}
        raceId={beforeRaceId}
      />
      <LastWeekTable
        fourWeekTitle={CONTENT.fourWeekTitle}
        fourWeekData={lastRaceWD}
        fourWeekName={lastRaceWN}
        raceId={lastRaceId}
      />
      <ThisRaceWeekTable
        raceWeekTitle={CONTENT.raceWeekTitle}
        raceWeekData={thisRaceWD}
        raceWeekName={thisRaceWN}
        raceId={thisRaceId}
      />
      <NextWeekTable
        nextWeekTitle={CONTENT.nextWeekTitle}
        nextWeekData={nextRaceWD}
        nextWeekName={nextRaceWN}
        raceId={nextRaceId}
      />
      <NextNextWeekTable
        nextNextWeekTitle={CONTENT.nextNextWeekTitle}
        nextNextWeekData={nextNextRaceWD}
        nextNextWeekName={nextNextRaceWN}
        raceId={nextNextRaceId}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    thisWeekData: state.thisRacePlan.thisRacePlanData,
    beforeRacePlan: state.beforRacePlan.beforRacePlanData,
    lastRacePlan: state.lastRacePlan.lastRacePlanData,
    nextNextRacePlan: state.nextNextRacePlan.nextNextRacePlanData,
    nextRacePlan: state.nextRacePlan.nextRacePlanData,
  };
};

export default connect(mapStateToProps)(RaceCourses);

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight:  30,
    height: SCREEN_HEIGHT < 600 ? 350 : 465,
  },
});
