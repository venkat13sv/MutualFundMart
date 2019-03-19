const db = require('_helpers/db');
const Scheme = db.Scheme;
const MyScheme= db.MyScheme;
module.exports = {

    getAllSchemes,
    getAllMySchemes
};
async function getAllSchemes() {
    return await Scheme.find({});
}

async function getAllMySchemes(user) {
    console.log("Email"+ JSON.stringify(user));
    return await MyScheme.find({"email":user.email});

}
