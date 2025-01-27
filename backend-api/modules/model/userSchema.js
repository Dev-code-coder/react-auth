const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique: true},
    password:{type:String, required:true},
    quote:{type:String}
},{
    collection:'register'
});

const UserModel = mongoose.model('Register_data',UserSchema);

module.exports = UserModel