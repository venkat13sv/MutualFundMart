
import { adminConstants } from '../Admin/admin.constants.js';

let admin = JSON.parse(localStorage.getItem('admin'));
const initialState = admin ? { loggedIn: true, admin } : {};

export function adminReducers(state=initialState,action)
{
  switch (action.type) {
    case adminConstants.ADMIN_LOGIN_REQUEST:
    {
      
      return {
      ...state,
      loggingIn: true
        };
    }
    case adminConstants.ADMIN_LOGIN_SUCCESS:
    {
      return {
          ...state,
          loggedIn: true,
          admin:action.admin
      };
    }
    case adminConstants.ADMIN_LOGIN_FAILURE:
    {

      return {};
    }
    case adminConstants.ADMIN_LOGOUT:
    {

     return {};
    }
    default:
    {

        return state;
    }
    }
}
