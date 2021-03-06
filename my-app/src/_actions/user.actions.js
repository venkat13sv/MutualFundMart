import { userConstants } from '../_constants/user.constant.js';
import { userService } from '../_services/user.service.js';
import { alertActions } from './alert.actions.js';
import { history } from '../_helpers/history.js';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    addItem,
    deleteItem,
    deleteAll,
    makePayment,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    window.location='/home';
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    console.log("Registration successful");
                    history.push('/');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function makePayment(paymentData){
    return dispatch =>{
           dispatch(alertActions.request("Processing your Payment"));
           userService.pay(paymentData).then(
             msg=> {
               dispatch(alertActions.success(msg.message));
               dispatch(deleteAll());
             },
             error=> dispatch(alertActions.error(error))
           );
    };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function addItem(item){

  //localStorage.setItem('cart',item);
  console.log("User action");
  return dispatch =>
  {
    console.log("Inside Dispatch 0");
    dispatch({type:userConstants.ADD_CART, item});
    history.push('/confirm');
  };



}
function deleteItem(id){

  return dispatch=>dispatch({type:userConstants.DELETE_CART,id});
}
function deleteAll(){
      return dispatch=>dispatch({type:userConstants.DELETE_ALL});
}
// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
  }
