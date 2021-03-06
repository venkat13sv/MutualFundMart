import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { adminReducers } from './admin.reducer';
import { cart } from './cart.reducer';

const rootReducer = combineReducers({
  adminReducers,
  authentication,
  registration,
  users,
  alert,
  cart

});

export default rootReducer;
