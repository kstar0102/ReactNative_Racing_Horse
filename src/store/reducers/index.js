import { combineReducers } from 'redux';
import user from './userReducer';
import validationData from './validationReducer';
import horseData from './horseReducer';
import pastureData from './pastureReducer';
import tokenData from './tokenReducer';

export default combineReducers({
    user: user,
    validationData: validationData,
    horseData: horseData,
    pastureData: pastureData,
    tokenData: tokenData
});