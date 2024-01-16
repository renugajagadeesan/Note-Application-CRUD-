const mongoose = require ('mongoose')

const UserSchema = new mongoose . Schema({
       note:String,
       content:String,
       
})

const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel