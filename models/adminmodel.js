var mongoose = require("mongoose");
const schemaadmin = new mongoose.Schema({
  name: { type: String, required: true },
  lname: { type: String, required: true },
  email: {type: String, required:true},
  password:{type:String, required: true},
  role: {type: String, requited: true},

});

module.exports = mongoose.model("admin", schemaadmin);
