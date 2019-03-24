//const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://siva95:GmR3QhnlnocfxUZW@funding-ac3ti.mongodb.net/test?retryWrites=true",
function(error){
    if(error) console.log(error);

        console.log("connection successful");
}
);

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Admin: require('../admin/admin.model'),
    Scheme: require('../_model/scheme.model'),
    MyScheme: require('../_model/myschemes.model'),
    FeedBack: require('../_model/feedback.model')
};
