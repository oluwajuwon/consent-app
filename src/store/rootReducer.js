import { combineReducers } from 'redux';

import consentReducer from '../store/modules/consent';

export default combineReducers({
  consent: consentReducer,
});