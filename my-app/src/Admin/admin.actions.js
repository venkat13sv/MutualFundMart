import { adminConstants } from './admin.constants.js';
import { adminService } from './admin.service.js';
import { alertActions } from '../_actions/alert.actions.js';

export const adminActions = {
    login
};

function login(adminname, password) {
    return dispatch => {
        dispatch(request({ adminname }));

        adminService.login(adminname, password)
            .then(
                admin => {
                    dispatch(success(admin));
                    console.log("Admin ok");
                    window.location='/admin/panel';
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(admin) { return { type: adminConstants.ADMIN_LOGIN_REQUEST, admin } }
    function success(admin) { return { type: adminConstants.ADMIN_LOGIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.ADMIN_LOGIN_FAILURE, error } }
}
