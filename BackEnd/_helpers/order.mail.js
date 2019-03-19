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

function sendVerificationMail(mailId,firstName,message){

  var mailOptions;
    //rand=Math.floor((Math.random() * 100) + 54);

    const orderDetails=message[0].sname;
    const fundSIP="₹ "+message[0].iamount;

    mailOptions={
        to : mailId,
        subject : "Funding!! Order Confirmation",
        html : "Hi "+ firstName +",<h5>Thank you for choosing Funding online Mutual Fund</h5><br /> <h3>Your Order Details:<h3><p>"+orderDetails+"</p><br/><h4>Amount:<b>"+fundSIP+"</b></h4><br /><h6><b>Thanks and Regards</b></h6><br /><i>Funding!</i><h2>Funding Pvt Ltd</h2"
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
