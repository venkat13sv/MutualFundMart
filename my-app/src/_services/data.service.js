export const dataService = {

    getAll
};
function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`http://localhost:4000/schemes`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(response.status);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
              //  location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            console.log("Server Error details: " + error );
            return Promise.reject(error);
        }

        return data;
    });
}
