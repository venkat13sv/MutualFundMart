import { dataService } from '../_services/data.service.js';

export const userActions = {

    getAll

};
function getAll() {
    return dispatch => {
        dispatch(request());

        dataService.getAll()
            .then(
                schemes => {
                  //dispatch(success(schemes));
                  return schemes;
                },
                error => {
                //  dispatch(failure(error.toString()))
                console.log(error);
                }
            );
    };


}
