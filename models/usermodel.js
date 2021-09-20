var mongoose=require("mongoose")
const bcrypt=require('bcrypt')
const schemauser=new mongoose.Schema({

name:{type:String,required:true},
lname:{type:String,required:true},
email:{type:String,required:true,

 validate: {
        validator : function validateEmail(v){
           if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
            return true
      } else {
           return false
           }
           }
        }


},
password:{type:String,required:true,

    validate : {
            validator : function validatePassword(v) {
            if (/^[A-Za-z]\w{7,14}$/.test(v)) {
                 return true
           } else {
                  return false
           }
            }
 }



},
phone: {type:Number, required:true,
 validate : {
        validator : function validatephone (v){
           if (/^\d{8}$/.test(v)) {
                return true
           } else {
                  console.log("you are enterred invalid phone");
                    return false
               }
         }
         }
}

}
)
schemauser.pre("save",function(next){
    this.password=bcrypt.hashSync(this.password,10);
    next()
  
  })
module.exports=mongoose.model("user",schemauser)