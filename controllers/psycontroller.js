const psymodel=require("../models/psymodels");

const multer=require('multer');//package pour l apload de l image 
var fs=require("fs");//permet de lire et ecrire un fichier 
const upload=multer({dest:__dirname+'/uploads/'}); // dirname: donne la posistion 

module.exports={
    create:function(req,res){
             var file=__dirname+"/uploads/"+req.file.originalname
              fs.readFile(req.file.path,function(err,data){ 
              fs.writeFile(file,data,function(err){
                if(err){

                    console.log(err)
                    var response={
                
                        msg:"sorry file could not be uploaded",
                        filename: req.file.originalname
                    }
                }
                else {
                const newpsy= new psymodel({
                patente:req.body.patente,
                image: req.file.originalname,
                name: req.body.name,
                lname: req.body.lname,
                email: req.body.email,
                password: req.body.password,
                phone:req.body.phone
                            })
                newpsy.save(function(err,data){
                
                if(err){
                
                res.json({state:"500",message:"err"+err})
                }
                else{
                res.json({state:"201",message:"psy added",data:data})
                }
                })
                }
            });
        });




    },

   
      getlist: function (req, res) {
        psymodel.find({}).exec((err, listpsy) => {
          if (err)
            res.status(500).json({
              message: err,
              status: 500,
            });
          else
            res.status(200).json({
              message: "psy find",
              status: 200,
              data: listpsy,
            });
        });
      },
    

      update: function (req, res) {
        psymodel.updateOne({ _id: req.params.id }, {
          
          name: req.body.name,
          lname: req.body.lname,
          email: req.body.email,
          password: req.body.password,
          image: req.file.originalname,
          patente:req.body.patente,
         
        
        })



          .exec((err, psyapudated) => {
            //params parametre fl get fl postman
            if (err)
              res.status(500).json({
                message: err,
                status: 500,
              });
            else
              res.status(200).json({
                message: "psy update",
                status: 200,
                data: psyapudated,
              });
          });
      },
    
      delete: function (req, res) {
        psymodel.deleteOne({ _id: req.params.id }).exec((err) => {
          if (err) res.status(500).json({ message: "err", status: "500" });
          else res.status(200).json({ message: "psy deleted", status: "200" });
        });
      }











}









