const psyController=require("../controllers/psycontroller");
const multer=require('multer');//package pour l apload de l image 
const psycontroller = require("../controllers/psycontroller");
const { route } = require("./userrouter");
const upload=multer({dest:__dirname+'/uploads/'});

const router=require('express').Router();


/** 
 * @swagger
 * post:
 * /psy/add:
 *  post:
 *    description: add a new  psy
 *    tags:
 *    - psy
 *    consumes:
 *    - multipart/form-data
 *    produces:
 *    - multipart/form-data
 *    parameters:
 *       - name: name
 *         in: formData
 *         description:  name of new  psy
 *         required: true
 *         type: string
 *       - name: patente
 *         in: formData
 *         description: patente of new psy
 *         required: true
 *         type: string
 *       - name: lname
 *         in: formData
 *         description:  lnameof new  psy
 *         required: true
 *         type: string
 *       - name: email
 *         in: formData
 *         description:  email of new  psy
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         description:  password of new  psy
 *         required: true
 *         type: string
 *       - name: image
 *         in: formData
 *         description:  image of new  product
 *         required: true
 *         type: file
 *    responses:
 *      '201':
 *        description: new  psycreated
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *             data:
 *                type: object
 *                properties:
 *                         _name:
 *                           type: string
 *                         lname:
 *                           type: string
 *                         email:
 *                           type: number
 *                         password:
 *                           type: string
 *                         image:
 *                           type: string
 *                         patente:
 *                           type: string
 *                       
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */
router.post('/add',upload.single('image'),psycontroller.create)

/**
 * @swagger
 * get:
 * /psy/list:
 *  get:
 *    description: list psy
 *    tags:
 *    - psy
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json         
 *    responses:
 *      '200':
 *        description: list psy
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *             data:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  patente:
 *                    type: string
 *                    required: true
 *                  name:
 *                    type: string
 *                  lname:
 *                    type: string
 *                  password:
 *                    type: string
 *                  email:
 *                    type: string
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */

router.get("/list",psyController.getlist)

/**
 * @swagger
 * put:
 * /psy/update/{id}:
 *  put:
 *    description: update psy
 *    tags:
 *    - psy
 *    consumes:
 *      - multipart/form-data
 *    produces:
 *      - multipart/form-data
 *    parameters:
 *       - name: id
 *         in : path
 *       - name: name
 *         in: formData
 *         description:  name of new  psy
 *         required: true
 *         type: string
 *       - name: patente
 *         in: formData
 *         description: patente of new psy
 *         required: true
 *         type: string
 *       - name: lname
 *         in: formData
 *         description:  lnameof new  psy
 *         required: true
 *         type: string
 *       - name: email
 *         in: formData
 *         description:  email of new  psy
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         description:  password of new  psy
 *         required: true
 *         type: string
 *       - name: image
 *         in: formData
 *         description:  image of new  product
 *         required: true
 *         type: file
 *    responses:
 *      '201':
 *        description: psy updated
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *             data:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  lname:
 *                    type: string
 *                  password:
 *                    type: string
 *                  email:
 *                    type: string
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */
router.put('/update/:id',upload.single('image'),psycontroller.update)
/**
 * @swagger
 * delete:
 * /psy/delete/{id}:
 *  delete:
 *    description: delete psy
 *    tags:
 *    - psy
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: id
 *         in : path
 *         required: false       
 *    responses:
 *      '201':
 *        description: psy deleted
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *             data:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  lname:
 *                    type: string
 *                  password:
 *                    type: string
 *                  email:
 *                    type: string
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */
router.delete("/delete/:id",psyController.delete)



module.exports=router




