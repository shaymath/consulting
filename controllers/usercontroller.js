const usermodel = require("../models/usermodel");

const jwt= require("jsonwebtoken")
const bcrypt= require("bcrypt")
module.exports = {
  create: function (req, res) {
    const user = new usermodel({
      name: req.body.name,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });

    user.save(function (err, user) {
      if (err)
        res.status(500).json({
          message: err,
          status: 500,
        });
      else
        res.status(201).json({
          message: "user addes",
          status: 201,
          data: user,
        });
    });
  },





  

  Getlist: function (req, res) {
    usermodel.find({}).exec((err, listuser) => {
      //exec execution de fonction
      // ,function(err,user)
      if (err)
        res.status(500).json({
          message: err,
          status: 500,
        });
      else
        res.status(200).json({
          message: "user find",
          status: 200,
          data: listuser,
        });
    });
  },

  GetById: function (req, res) {
    usermodel.findById({ _id: req.params.id }).exec((err, user) => {
      //params parametre fl get fl postman
      if (err)
        res.status(500).json({
          message: err,
          status: 500,
        });
      else
        res.status(200).json({
          message: "Id find",
          status: 200,
          data: user,
        });
    });
  },

  update: function (req, res) {
    usermodel.updateOne({ _id: req.params.id }, req.body).exec((err, user) => {
      //params parametre fl get fl postman
      if (err)
        res.status(500).json({
          message: err,
          status: 500,
        });
      else
        res.status(200).json({
          message: "user update",
          status: 200,
          data: user,
        });
    });
  },

  delete: function (req, res) {
    usermodel.deleteOne({ _id: req.params.id }).exec((err) => {
      if (err) res.status(500).json({ message: "err", status: "500" });
      else res.status(200).json({ message: "user deleted", status: "200" });
    });
  },
  

  authenticate:function(req,res){
    usermodel.findOne({email:req.body.email},
       function(err,userInfo){
       if(err){
                   console.log(err)
               }
       else{
        if(bcrypt.compare(req.body.password,userInfo.password)){
           const token= jwt.sign({id:userInfo._id},
                                  req.app.get("secretkey"),
                                  {expiresIn:"1h"}
                                            )
           res.json({status:"succes",message:"userfound",
           data:{user:userInfo,token:token}})
           }
       else{
        res.json({status:"error",message:"invalid email or password",
        data:null})
                   }
               }
           })
   }







};
