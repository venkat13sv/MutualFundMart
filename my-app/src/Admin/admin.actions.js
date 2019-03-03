import { adminConstants } from './admin.constants.js';
import { adminService } from './admin.service.js';
import { alertActions } from '../_actions/alert.actions.js';
import { store } from '../_helpers/store.js';

export const adminActions = {
    login,
    logout,
    addNewScheme
};

function login(adminname, password) {
    return dispatch => {
        dispatch(request({ adminname }));

        adminService.login(adminname, password)
            .then(
                admin => {

                    dispatch(success(admin));
                    window.location='/admin/panel';


                },
                error => {
                    console.log("error"+ error.toString());
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(admin) { return { type: adminConstants.ADMIN_LOGIN_REQUEST, admin } }
    function success(admin) { return { type: adminConstants.ADMIN_LOGIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.ADMIN_LOGIN_FAILURE, error } }
}

function logout() {
    adminService.logout();
    return { type: adminConstants.ADMIN_LOGOUT };
}

function addNewScheme(scheme){
    return dispatch =>{
      dispatch(alertActions.request("Adding new sheme"));

      adminService.addNewScheme(scheme).then(
        data=>{
          dispatch(alertActions.success("Scheme added successfully"));
          console.log("Data added");
        },
        error => {
            console.log("error"+ error.toString());

            dispatch(alertActions.error(error.toString()));
        }
      );
    }



}
