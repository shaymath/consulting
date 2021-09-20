const express = require('express') // appel l express 
const app = express() // //app midellware contient toutes les fonctionalité  et les méthodes qui offre express
const bodyParser = require('body-parser')
const db = require('./config/DB') //appel votre base de donée
//verifier path 
const swaggerJsDoc= require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');

const adminRouter=require('./router/adminrouter')
const userRouter=require('./router/userrouter')
const psyRouter=require('./router/psyrouter')

app.set('secretkey','test');//clé privé de chiffrement

//const Userrouter= require("./routes/userroutes")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.use('/psy',psyRouter);

var swaggerOptions = {
    swaggerDefinition: {
        info: {
            servers: ['http://localhost:3200']
        },
        // tags sont les collection
        tags: [{
                name: 'user',
                description: 'this tag is for the user services '

            },
            {
                name: 'psy',
                description: 'this tag is for the psy services '
                
            },
        ]
    },
    apis: ['server.js',"./router/*.js"]
};
var swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3200,function()
{console.log("welcome to app node js at port 3200")})