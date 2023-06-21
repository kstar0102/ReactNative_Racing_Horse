import { combineReducers } from 'redux';
import auth from './authReducer';
import pastureData from './pastureReducer'
import horseData from './horseReducer';

export default combineReducers({
    auth: auth,
    pastureData: pastureData,
    horseData: horseData
});