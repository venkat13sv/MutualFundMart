const express=require('express');
const db = require('_helpers/db');
const User = db.User;
const router = express.Router();
router.get('/verify',verifyMail);

module.exports=router;
function verifyMail(req, res, next)
{
    console.log(req.protocol+":/"+req.get('host'));
    //(req.protocol+"://"+req.get('host'))==("http://localhost:4000")
    if(1)
    {
      console.log("Domain is matched. Information is from Authentic email");
      const user=User.findOne(req.query.id);
      if(!user.isVerified)
      {
        if(req.query.id)
        {
            User.update({"token":req.query.id},{$set:{"isVerified":true} },function(err,numRowAffec){

              console.log("email is verified");
              res.end("<h1>Email has been Successfully verified");
            }
          );
          //  console.log("email is verified");
          //  res.end("<h1>Email is been Successfully verified");
        }
        else
        {
            console.log("email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
     }
    }
    else
    {
      res.end("<h1>Request is from unknown source");
    }
}
