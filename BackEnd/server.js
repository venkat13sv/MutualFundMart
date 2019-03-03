require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const db = require('_helpers/db');
const bcrypt = require('bcryptjs');
var morgan = require('morgan');

app.use(morgan('dev'));
//const mail=require('_helpers/verification');
const errorHandler = require('_helpers/error-handler');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// use JWT auth to secure the api
app.use(jwt());


//console.log(bcrypt.compareSync("admin", admin.hash));
// api routes
app.use('/users', require('./users/users.controller'));
app.use('/admin',require('./admin/admin.controller'));
app.use('/api',require('./data/data.api'));

// global error handler
app.use(errorHandler);

//mail.sendVerificationMail("95sivamani@gmail.com","sivamani");

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
