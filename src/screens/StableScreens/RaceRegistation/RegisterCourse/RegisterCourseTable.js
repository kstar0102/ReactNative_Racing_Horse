import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
// Redux
import { connect } from "react-redux";
// IMPORT CUSTOM
import NextWeekTable from "./CourseTables/NextWeekTable";
import NextNextNextWeekTable from "./CourseTables/NextNextNextWeekTable";
import NextNextWeekTable from "./CourseTables/NextNextWeekTable";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const RacetrackCourse = ({ nextNextNextRacePlan, nextNextRacePlan, nextRacePlan }) => {
  if (!nextNextNextRacePlan || !nextNextRacePlan || !nextRacePlan) {
    return <Spinner visible={true} />;
  }

  let nextNextNextRaceWD = [];
  let nextNextNextRaceWN = [];
  let nextNextNextRaceId = [];

  nextNextNextRacePlan.map((data, index) => {
    nextNextNextRaceWD[index] = [
      data.type,
      data.place,
      data.ground,
      data.distance,
      data.age_limit,
    ];
    nextNextNextRaceWN.push(data.name);
    nextNextNextRaceId.push({race_id: data.id});
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
    nextNextNextWeekTitle: ["[3週先のレース]"],
    nextWeekTitle: ["[来週のレース]"],
    nextNextWeekTitle: ["[再来週のレース]"],
  };

  return (
    <ScrollView style={styles.container}>
      <NextWeekTable
        nextWeekTitle={CONTENT.nextWeekTitle}
        nextWeekData={nextRaceWD}
        nextWeekName={nextRaceWN}
        nextId = {nextRaceId}
      />
      <NextNextWeekTable
        nextNextWeekTitle={CONTENT.nextNextWeekTitle}
        nextNextWeekData={nextNextRaceWD}
        nextNextWeekName={nextNextRaceWN}
        nextNextId = {nextNextRaceId}

      />
      <NextNextNextWeekTable
        raceWeekTitle={CONTENT.nextNextNextWeekTitle}
        raceWeekData={nextNextNextRaceWD}
        raceWeekName={nextNextNextRaceWN}
        raceId = {nextNextNextRaceId}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    nextNextRacePlan: state.nextNextRacePlan.nextNextRacePlanData,
    nextRacePlan: state.nextRacePlan.nextRacePlanData,
    nextNextNextRacePlan: state.nextNextNextRacePlan.nextNextNextRacePlanData
  };
};

export default connect(mapStateToProps)(RacetrackCourse);

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    height: SCREEN_WIDTH > 400 || SCREEN_HEIGHT > 738 ? 500 : 465,
  },
});
