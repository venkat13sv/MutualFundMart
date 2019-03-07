/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var nodemailer = require("nodemailer");
module.exports={
  sendVerificationMail
};
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
const smtpTransport=require('./smtp-config.js');

function sendVerificationMail(mailId,firstName,rand){

  var mailOptions,host,link;
    //rand=Math.floor((Math.random() * 100) + 54);
    host="localhost:4000";
    link="http://"+host+"/verify?id="+rand;

    mailOptions={
        to : mailId,
        subject : "Funding!! Account Verification",
        html : "Hi "+ firstName +",<h5>Thank you for choosing Funding online Mutual Fund</h5><br /> Please Click on the link to verify your email.<br/><a href="+link+">Click here to verify</a><br /><h6><b>Thanks and Regards</b></h6><br /><i>Funding!</i>"
    }
    console.log("Mail option "+ JSON.stringify(mailOptions));
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        //res.end("error");
     }else{
            console.log("Message sent: " + response.message);
      //  res.end("sent");
         }
});
}
