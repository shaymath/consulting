const adminModel = require("../models/adminmodel");
module.exports = {
  create: function (req, res) {
    const admin = new adminModel(req.body);
    admin.save(function (err, admin) {
      if (err)
        res.status(500).json({
          message: err,
          status: 500,
        });
      else
        res.status(201).json({
          message: "admin addes",
          status: 201,
          data: admin,
        });
    });
  },
  Getlist: function (req, res) {
    adminModel.find({}).exec((err, listadmin) => {
      //exec execution de fonction
      // ,function(err,user)
      if (err)
        res.status(500).json({
          message: err,
          status: 500,
        });
      else
        res.status(200).json({
          message: "admin find",
          status: 200,
          data: listadmin,
        });
    });
  },

  GetById: function (req, res) {
    adminModel.findById({ _id: req.params.id }).exec((err, admin) => {
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
          data: admin,
        });
    });
  },

  update: function (req, res) {
    adminModel
      .findByIdAndUpdate({ _id: req.params.id }, req.body,{new:true})
      .exec((err, admin) => {
        //params parametre fl get fl postman
        if (err)
          res.status(500).json({
            message: err,
            status: 500,
          });
        else
          res.status(200).json({
            message: "admin update",
            status: 200,
            data: admin,
          });
      });
  },

  delete: function (req, res) {
    adminModel.deleteOne({ _id: req.params.id }).exec((err) => {
      if (err) res.status(500).json({ message: "err", status: "500" });
      else res.status(200).json({ message: "admin deleted", status: "200" });
    });
  },
};
