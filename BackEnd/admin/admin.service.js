const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Admin=db.Admin;
const Scheme=db.Scheme;
module.exports = {
    authenticate,
    addNewScheme,
    getById
};

async function authenticate({ aname, password }) {

    //console.log("Aname" + aname);
    const admin = await Admin.findOne({ aname });
    //console.log("bcrypt "+bcrypt.compareSync(password, admin.hash));
    //&& bcrypt.compareSync(password, admin.hash)


    if (admin) {
      console.log("Admin DB ok "+ admin.aname  );
        const { pasword, ...adminWithoutHash } = admin.toObject();
        const token = jwt.sign({ sub: admin.id }, config.secret);
        return {
            ...adminWithoutHash,
            token
        };
    }
}
async function getById(id) {
    return await Admin.findById(id).select('-hash');
}
async function addNewScheme(schemeParam) {
    // validate
    //console.log("Scheme: "+JSON.stringify(schemeParam));
    if (await Scheme.findOne({ sname: schemeParam.sname })) {
        throw 'Scheme Name "' + schemeParam.sname + '" is already Used';
    }
    const scheme = new Scheme(schemeParam);
    // save user
    await scheme.save();

    console.log("Scheme:Database ok");
  }
