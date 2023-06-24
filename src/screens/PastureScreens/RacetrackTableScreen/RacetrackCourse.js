import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
// Redux
import { connect, useDispatch } from 'react-redux';
// IMPORT CUSTOM
import NextWeekTable from './NextWeekTable';
import RaceWeekTable from './RaceWeekTable';
import ThreeWeekTable from './ThreeWeekTable';
import FourWeekTable from './FourWeekTable';
import NextNextWeekTable from './NextNextWeekTable';

const RacetrackCourse = ({ thisWeekData, beforRacePlan, lastRacePlan, nextNextRacePlan, nextRacePlan}) => {
  if(!thisWeekData || !beforRacePlan || !lastRacePlan || !nextNextRacePlan || !nextRacePlan){
    return false
  }

  let thisRaceWD = [];
  let thisRaceWN = [];
  
  thisWeekData.map((data, index)=>{
    thisRaceWD[index] = [data.type, data.place, data.ground, data.distance, data.age_limit]
    thisRaceWN.push(data.name);
  });

  let beforeRaceWN = [];
  let beforeRaceWD = [];
  beforRacePlan.map((data, index)=>{
    beforeRaceWD[index] = [data.type, data.place, data.ground, data.distance, data.age_limit]
    beforeRaceWN.push(data.name);
  });

  let lastRaceWN = [];
  let lastRaceWD = [];
  lastRacePlan.map((data, index)=>{
    lastRaceWD[index] = [data.type, data.place, data.ground, data.distance, data.age_limit]
    lastRaceWN.push(data.name);
  });

  let nextRaceWN = [];
  let nextRaceWD = [];
  nextRacePlan.map((data, index)=>{
    nextRaceWD[index] = [data.type, data.place, data.ground, data.distance, data.age_limit]
    nextRaceWN.push(data.name);
  });

  
  let nextNextRaceWN = [];
  let nextNextRaceWD = [];
  nextRacePlan.map((data, index)=>{
    nextNextRaceWD[index] = [data.type, data.place, data.ground, data.distance, data.age_limit]
    nextNextRaceWN.push(data.name);
  });

  const CONTENT = {
    raceWeekTitle: ['[今週のレース]'],
    nextWeekTitle: ['[来週のレース]'],
    nextNextWeekTitle: ['[再 来週のレース]'],
    threeWeekTitle: ['[先々週のレース]'],
    fourWeekTitle: ['[先週のレース]'],
  };

  return (
    <ScrollView  style={styles.container}>
      <ThreeWeekTable threeWeekTitle={CONTENT.threeWeekTitle} threeWeekData={beforeRaceWD} threeWeekName={beforeRaceWN} />
      <FourWeekTable fourWeekTitle={CONTENT.fourWeekTitle} fourWeekData={lastRaceWD} fourWeekName={lastRaceWN} />
      <RaceWeekTable raceWeekTitle={CONTENT.raceWeekTitle} raceWeekData={thisRaceWD} raceWeekName={thisRaceWN} />
      <NextWeekTable nextWeekTitle={CONTENT.nextWeekTitle} nextWeekData={nextRaceWD} nextWeekName={nextRaceWN} />
      <NextNextWeekTable nextNextWeekTitle={CONTENT.nextNextWeekTitle} nextNextWeekData={nextNextRaceWD} nextNextWeekName={nextNextRaceWN} />
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    thisWeekData: state.thisRacePlan.thisRacePlanData,
    beforRacePlan: state.beforRacePlan.beforRacePlanData,
    lastRacePlan: state.lastRacePlan.lastRacePlanData,
    nextNextRacePlan: state.nextNextRacePlan.nextNextRacePlanData,
    nextRacePlan: state.nextRacePlan.nextRacePlanData,
  };
};


export default connect(mapStateToProps)(RacetrackCourse);

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    height: 490
  }
})