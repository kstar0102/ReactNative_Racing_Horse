import { combineReducers } from 'redux';
import user from './userReducer';
import validationData from './validationReducer';
import horseData from './horseReducer';
import pastureReducer from './pastureReducer';
import tokenData from './tokenReducer';
// INstitution Reducers
import longiFieldReducer from './institution/longiFieldReducer';
import poolReducer from './institution/poolReducer';
import roadReducer from './institution/roadReducer';
import truckReducer from './institution/truckReducer';
// GetAPI Race Reducer
import thisRacePlanReducer from './getApi/thisRacePlanReducer';
import lastRacePlanReducer from './getApi/lastRacePlanReducer';
import beforRacePlanReducer from './getApi/beforRacePlanReducer';
import nextNextRacePlanReducer from './getApi/nextNextRacePlanReducer';
import nextRacePlanReducer from './getApi/nextRacePlanReducer';
import nextNextNextRacePlanReducer from './getApi/nextNextNextRacePlanReducer';
// Upbringing Reducer
import arrowReducer from './Upbring/arrowReducer';
// Game Time
import gameTimeRuducer from './gameTime/gameTimeRuducer';
import countDownReducer from './gameTime/countDownReducer';
// Stable DATA
import stableMenuReducer from './stable/stableMenuReducer';
import jockeyRegisterReducer from './stable/jockey/jockeyRegisterReducer';
import institutionReducer from './stable/Institution/institutionReducer';
// Stall Institution
import stallPoolReducer from './stable/Institution/stallInstitution/stallPoolReducer';
import stallUpReducer from './stable/Institution/stallInstitution/stallUpReducer';
import stallLongiFieldReducer from './stable/Institution/stallInstitution/stallLongiFieldReducer';
import stallRoadReducer from './stable/Institution/stallInstitution/stallroadReducer';
import stallTruckReduce from './stable/Institution/stallInstitution/stalltruckReducer';

import preeSetReducer from './preeSet/preeSetReducer';
import RaceRegisterRuducer from './ReacRegister/RaceRegisterRuducer';

// HORSE NAME VALIDATION
import horseNameValidationReducer from './horseNameValidationReducer';
import showHorseGrowReducer from './horse/showHorseGrowReducer';

//RACEREUDCER
import RaceReducer from './race/RaceReducer';
import RaceStartReducer from './race/RaceStartReducer';

// DIMENSIONS
import dimensionsReducer from './dimension/dimensionsReducer';

// REGISTERING REDUCER
import RaceHorseRegisterReducer from './ReacRegister/RaceHorseRegisterReducer';

export default combineReducers({
    user: user,
    validationData: validationData,
    horseData: horseData,
    pasture: pastureReducer,
    tokenData: tokenData,
    // INSTITUTION
    ranch: longiFieldReducer,
    pool: poolReducer,
    road: roadReducer,
    truck: truckReducer,
    // RACE
    thisRacePlan: thisRacePlanReducer,
    lastRacePlan: lastRacePlanReducer,
    beforRacePlan: beforRacePlanReducer,
    nextNextRacePlan: nextNextRacePlanReducer,
    nextRacePlan: nextRacePlanReducer,
    nextNextNextRacePlan: nextNextNextRacePlanReducer,
    // UPBRINGING
    arrow: arrowReducer,
    // GAME TIME
    currentGameTime: gameTimeRuducer,
    countDownTime: countDownReducer,
    // STABLE DATA
    stableMenu: stableMenuReducer,
    jockeyData: jockeyRegisterReducer,
    institutionStable: institutionReducer,
    // Stall Institution
    stallPool: stallPoolReducer,
    stallRoad: stallRoadReducer,
    stallTruck: stallTruckReduce,
    stallRanch: stallLongiFieldReducer,
    stallUp: stallUpReducer,
    preeSetData: preeSetReducer,

    raceData: RaceRegisterRuducer,
    horseNameValid: horseNameValidationReducer,
    showGrowData: showHorseGrowReducer,
    racingData: RaceReducer,
    racingHJData: RaceStartReducer,
    dimensions:  dimensionsReducer,

    // REGISTERING VALI
    registerData: RaceHorseRegisterReducer
});