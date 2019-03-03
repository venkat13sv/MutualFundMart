import { adminAuthHeader } from '../_helpers/admin.auth-header.js';

export const adminService = {
    login,
    logout,
    addNewScheme
  };
  function login(aname, password) {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ aname, password })
      };

      return fetch(`http://localhost:4000/admin/authenticate`, requestOptions)
          .then(handleResponse)
          .then(admin => {
              // store admin details and jwt token in local storage to keep admin logged in between page refreshes
              localStorage.setItem('admin', JSON.stringify(admin));

              return admin;
          });
  }

  function logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('admin');
  }


  function addNewScheme(scheme) {
    const requestOptions = {
        method: 'POST',

        headers: {...adminAuthHeader(),'Content-Type': 'application/json' },
        body: JSON.stringify(scheme)
    };
    console.log("Request Option" + JSON.stringify(requestOptions));

    return fetch(`http://localhost:4000/admin/schemes/add`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // store admin details and jwt token in local storage to keep admin logged in between page refreshes
            //localStorage.setItem('admin', JSON.stringify(admin));

            return data;
        },
        error =>{
          return error;
        });

  }

  function handleResponse(response) {
      return response.text().then(text => {
          const data = text && JSON.parse(text);
          console.log(response.status);
          if (!response.ok) {
              if (response.status === 401) {
                  // auto logout if 401 response returned from api
                  //  logout();
                 //  location.reload(true);
              }

              const error = (data && data.message) || response.statusText;
              console.log("Server Error details: " + error );
              return Promise.reject(error);
          }

          return data;
      });
  }
