import { combineReducers } from 'redux';
import OpenCardReducer from './openCardReducer';
import IdCardCheckReducer from './idCardCheckReducer';

export default combineReducers({
  openCard: OpenCardReducer,
  idCardCheck: IdCardCheckReducer 
});
