import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { adminReducers } from '../Admin/admin.reducer.js';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  adminReducers
});

export default rootReducer;
