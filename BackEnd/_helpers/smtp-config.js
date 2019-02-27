var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {

        user: "mail.getemailaddress@gmail.com",
        pass: "Pabasap#95"

  }
});
module.exports=smtpTransport;
