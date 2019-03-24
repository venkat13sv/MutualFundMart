const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://siva95:GmR3QhnlnocfxUZW@funding-ac3ti.mongodb.net/test?retryWrites=true",
function(error){
    if(error) console.log(error);

        console.log("connection successful");
}
);
