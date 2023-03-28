const mongoose = require('mongoose');
 
const url="mongodb+srv://javed09523:javed09523@cluster0.iuhblmv.mongodb.net/?retryWrites=true&w=majority"
const connection=async()=>{
    mongoose.set('strictQuery', false);

   try {
     await mongoose.connect(url)
     console.log("mongodb is connected successfully ");

   } catch (e) {
    console.log(e);

   }
}

 module.exports = connection ;