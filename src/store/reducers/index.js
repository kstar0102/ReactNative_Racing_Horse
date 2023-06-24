import { combineReducers } from 'redux';
import user from './userReducer';
import validationData from './validationReducer';
import horseData from './horseReducer';
import pastureData from './pastureReducer';
import tokenData from './tokenReducer';
// INstitution Reducers
import longiFieldReducer from './institution/longiFieldReducer';
import pastureBuyReducer from './institution/pastureBuyReducer';
import poolReducer from './institution/poolReducer';
import roadReducer from './institution/roadReducer';
import truckReducer from './institution/truckReducer';

export default combineReducers({
    user: user,
    validationData: validationData,
    horseData: horseData,
    pastureData: pastureData,
    tokenData: tokenData,

    ranch: longiFieldReducer,
    pasture: pastureBuyReducer,
    pool: poolReducer,
    road: roadReducer,
    truck: truckReducer
});