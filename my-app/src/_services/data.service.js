export const dataService = {

    getAllSchemes
};
function getAllSchemes() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`http://localhost:4000/api/schemes`, requestOptions).then(handleResponse).then(
      data=> {
        //console.log("Schemes " + JSON.stringify(data ));
        return data;
      },
      error=>{
        console.log("Err "+ error);
      }
    );
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
      //  console.log("Schemes " + JSON.stringify(data ));
        console.log(response.status);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
            //    logout();
              //  location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            console.log("Server Error details: " + error );
            return Promise.reject(error);
        }

        return data;
    });
}
