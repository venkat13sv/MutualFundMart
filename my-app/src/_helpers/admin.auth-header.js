export function adminAuthHeader() {
    // return authorization header with jwt token
    let admin = JSON.parse(localStorage.getItem('admin'));

    if (admin && admin.token) {
        return { 'Authorization': 'Bearer ' + admin.token };
    } else {
        return {};
    }
}
