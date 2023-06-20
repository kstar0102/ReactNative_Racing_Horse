import { combineReducers } from 'redux';
import auth from './authReducer';
import pastureData from './pastureReducer'

export default combineReducers({
    auth: auth,
    pastureData: pastureData,
    
});