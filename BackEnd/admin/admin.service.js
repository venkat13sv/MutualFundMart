const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Admin=db.Admin;

module.exports = {
    authenticate
};

async function authenticate({ aname, password }) {

  console.log("Aname" + aname);
    const admin = await Admin.findOne({ aname });

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
