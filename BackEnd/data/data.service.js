const db = require('_helpers/db');
const Scheme = db.Scheme;
module.exports = {

    getAllSchemes
};
async function getAllSchemes() {
    return await Scheme.find({});
}
