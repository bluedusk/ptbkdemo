import { combineReducers } from 'redux';
import OpenCardReducer from './openCardReducer';
import IdCardCheckReducer from './idCardCheckReducer';
import SignEBankReducer from './signEBankReducer';
export default combineReducers({
  openCard: OpenCardReducer,
  idCardCheck: IdCardCheckReducer ,
  signEBank: SignEBankReducer
});
