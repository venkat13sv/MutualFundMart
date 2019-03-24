var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {

        user: "mail.getemailaddress@gmail.com",
        pass: ""

  }
});
module.exports=smtpTransport;
