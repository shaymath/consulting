const adminController=require("../controllers/admincontroller");
const router=require('express').Router();

router.post("/add",adminController.create)
router.get("/list",adminController.Getlist)
router.get("/getone/:id",adminController.GetById)
router.put("/updateone/:id",adminController.update)
router.delete("/delete/:id",adminController.delete)

module.exports=router