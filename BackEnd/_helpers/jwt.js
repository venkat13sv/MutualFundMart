const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');
const adminService = require('../admin/admin.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    console.log("JWT MAIN");
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            '/admin/authenticate',
            '/api/schemes'



        ]
    });
}

async function isRevoked(req, payload, done) {
    //const user = await userService.getById(payload.sub);
    const admin= await adminService.getById(payload.sub);
    let user=await userService.getById(payload.sub);
    console.log("JWT "+admin);
    // revoke token if user no longer exists

    if ((!admin) && (!user)) {

      console.log("JWT "+admin);

      return done(null, true);
    }

    done();
};
