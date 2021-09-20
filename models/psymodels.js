var mongoose=require("mongoose");
const user=require("./usermodel")
const schemapsy= new mongoose.Schema({
patente: {type:String,required:true},
image: {type:String,required:true},


})
module.exports=user.discriminator("psych",schemapsy);