const userController=require("../controllers/usercontroller")
const { route } = require("./adminrouter")
const router=require("express").Router()







/**
 * @swagger
 * post:
 * /user/add:
 *  post:
 *    description: add user
 *    tags:
 *    - user
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: body
 *         in : body
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               required: true
 *             lname:
 *               type: string
 *               required: true
 *             email:
 *               type: string
 *               required: true
 *             password:
 *               type: string
 *               required: true
 *             phone:
 *               type: number
 *               required: true
 *            
 *    responses:
 *      '201':
 *        description: user added
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
router.post("/add",userController.create)

/**
 * @swagger
 * get:
 * /user/list:
 *  get:
 *    description: list user
 *    tags:
 *    - user
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json         
 *    responses:
 *      '200':
 *        description: list user 
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
router.get("/list",userController.Getlist)


/**
 * @swagger
 * get:
 * /user/getone/{id}:
 *  get:
 *    description: get user by id
 *    tags:
 *    - user
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: id
 *         in : path
 *         required: false          
 *    responses:
 *      '200':
 *        description: getone user 
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
router.get("/getone/:id",userController.GetById)
/**
 * @swagger
 * put:
 * /user/updateone/{id}:
 *  put:
 *    description: update user
 *    tags:
 *    - user
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: id
 *         in : path
 *         required: false
 *       - name: body
 *         in : body
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             lname:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *            
 *    responses:
 *      '201':
 *        description: user updated
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

router.put("/updateone/:id",userController.update)

/**
 * @swagger
 * delete:
 * /user/delet/{id}:
 *  delete:
 *    description: delete user
 *    tags:
 *    - user
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
 *        description: user deleted
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
router.delete("/delete/:id",userController.delete)






/**
 * @swagger
 * post:
 * /user/authentificate:
 *  post:
 *    description: add user
 *    tags:
 *    - user
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: body
 *         in : body
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               required: true
 *             password:
 *               type: string
 *               required: true
 *            
 *    responses:
 *      '201':
 *        description: user  addes
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
 *                  user:
 *                    type: object
 *                    properties:
 *                       name:
 *                        type: string
 *                       password:
 *                        type: string
 *                       email:
 *                        type: string
 *                  token:
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
 router.post('/authentificate',userController.authenticate)
 module.exports=router