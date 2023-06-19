import { combineReducers } from 'redux';
import data from './githubReducer';

export default combineReducers({
    data: data
});