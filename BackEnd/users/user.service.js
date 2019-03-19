const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const MyScheme = db.MyScheme;
const mail=require('../_helpers/verification');
const crypto=require('crypto');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    buyFund
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if(user.isVerified){
      if (user && bcrypt.compareSync(password, user.hash)) {
          const { hash, ...userWithoutHash } = user.toObject();
          const token = jwt.sign({ sub: user.id }, config.secret);
          return {
            ...userWithoutHash,
            token
          };
    }
    else {
      throw "Invalid username or password.";
    }
  }
  else{
    throw "Please verify your Email Id.";
  }
}

async function getAll() {
    return await User.find().select('-hash');
}
async function buyFund(payload) {
  console.log("Server Payment: "+ JSON.stringify(payload));
  const myscheme=new MyScheme(payload.orders[0]);
  myscheme.paymentDone=true;
  await myscheme.save();
  console.log("Scheme Added");
  let response={"message":"Payment successfully completed.Fund Details sent to Registered EMail Address."}
  return response;

}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(userParam) {
    // validate

    if (await User.findOne({ username: userParam.email })) {
        throw 'Username "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    user.username=userParam.email;

  var token = crypto.randomBytes(64).toString('hex')
  mail.sendVerificationMail(userParam.email,userParam.firstName,token);
  user.token=token;
  //console.log("token" + token +" user" + JSON.stringify(userParam));
  if (userParam.password) {
      user.hash = bcrypt.hashSync(userParam.password, 10);
  }
  await user.save();
  console.log("Registeration:Database ok");
    // hash password

}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}
