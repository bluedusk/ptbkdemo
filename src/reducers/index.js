import { combineReducers } from 'redux';
import OpenCardReducer from './openCardReducer';

export default combineReducers({
  openCard: OpenCardReducer
});
