const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//definn data type
const userSchema = new Schema({
    firstname: String,
    lastname: String,
    idesprim: String,
    email: String,
    club:String
});

//create module
const User = mongoose.model('Userr', userSchema);

//export the module
module.exports = User;