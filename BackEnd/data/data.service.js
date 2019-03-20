const db = require('_helpers/db');
const Scheme = db.Scheme;
const MyScheme= db.MyScheme;
const FeedBack=db.FeedBack;
const User=db.User;
module.exports = {

    getAllSchemes,
    getAllMySchemes,
    getAllUsers,
    saveFeedback
};
async function getAllSchemes() {
    return await Scheme.find({});
}
async function getAllUsers() {
    return await User.find({});
}

async function getAllMySchemes(user) {
    //console.log("Email"+ JSON.stringify(user));
    return await MyScheme.find({"email":user.email});
}

async function saveFeedback(feedback) {
    console.log("Feedback"+ JSON.stringify(feedback));
    const FB=new FeedBack(feedback);
    await FB.save();
    let response={"message":"Thank you! Your FeedBack submitted."}
    return response;


}
