import { combineReducers } from 'redux';
import settings from './settings.reducer';
import leads from './leads.reducer';
import contacts from './contacts.reducer';

const fuseReducers = combineReducers({
  settings,
  leads,
  contacts,
});

export default fuseReducers;