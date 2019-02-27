
import { adminConstants } from '../Admin/admin.constants.js';

let admin = JSON.parse(localStorage.getItem('admin'));
const initialState = admin ? { loggedIn: true, admin } : {};

export function adminReducers(state=initialState,action)
{
  switch (action.type) {
    case adminConstants.ADMIN_LOGIN_REQUEST:
    {
      console.log("case 1");
      return {
      ...state,
      loggingIn: true
        };
    }
    case adminConstants.ADMIN_LOGIN_SUCCESS:
    { console.log("case 2");
      return {
          ...state,
          loggedIn: true,
          admin:action.admin
      };
    }
    case adminConstants.ADMIN_LOGIN_FAILURE:
    {
      console.log("case 3");
      return {};
    }
    case adminConstants.ADMIN_LOGOUT:
    {
     console.log("case 4");
     return {};
    }
    default:
    {
        console.log("case t");
        return state;
    }
    }
}
