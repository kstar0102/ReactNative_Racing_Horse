import { combineReducers } from 'redux';
import user from './userReducer';
import validationData from './validationReducer';
import horseData from './horseReducer';
import pastureData from './pastureReducer';
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

export default combineReducers({
    user: user,
    validationData: validationData,
    horseData: horseData,
    pastureData: pastureData,
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

});