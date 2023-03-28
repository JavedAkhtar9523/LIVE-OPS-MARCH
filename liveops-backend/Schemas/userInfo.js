const mongoose = require('mongoose')

const Schema = mongoose.Schema ;

const userSchema = new Schema({
    name: String,
    email : {type : String , required : true} ,
    password : {type : String , required : true}
})

const userInfo = mongoose.model('opsuserdata',userSchema) ;
module.exports = userInfo ;