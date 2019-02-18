
import { adminConstants } from './admin.constants.js';

export function adminReducers(state={},action)
{
  switch (action.type) {
    case adminConstants.ADMIN_LOGIN_REQUEST:
    {
      console.log("Reducer 1");
      return {
        loggingIn: true,
        admin:action.admin
      };
    }
    case adminConstants.ADMIN_LOGIN_SUCCESS:
    {
      console.log("Reducer 2");
        return {
          loggedIn: true,
          admin:action.admin
      };
    }
    case adminConstants.ADMIN_LOGIN_FAILURE:
      return {};
    case adminConstants.ADMIN_LOGOUT:
      return {};

    default:
    return state;

  }
}
//const adminReducers=combineReducers(
//  {
//    admin
//  }
//);
//export default adminReducers;
