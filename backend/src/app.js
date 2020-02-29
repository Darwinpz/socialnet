const express = require("express");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');
const path = require('path');
const cors = require("cors");
const morgan = require("morgan");


//const multer = require("multer");


let redisClient = redis.createClient({
    retry_strategy: (options) => {

        if (options.error && options.error.code === "ECONNREFUSED") {
            console.log('Redis: RECONECTANDO - '+options.error.code); 
        }

        return Math.min(options.attempt * 100, 3000);
    },
});

redisClient.on('connect', ()=>{
    console.log("Redis: CONECTADO");
});

const app = express();

app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: 'class',
      resave: false,
      saveUninitialized: false
    })
);

//configuracion
app.set('port',process.env.PORT || 4000);

//middlewares

app.use(cors({origin:['http://172.30.184.204:4000','http://172.30.184.204:3000'],methods:['GET','POST','PUT','DELETE'],credentials:true}))


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));




app.use('/public',express.static(path.resolve(__dirname,"public")));


//rutas

//app.use(multer({dest: './src/public/'}).single('image'));  

//require("./libs/multer")(app);
require('./routes/rutas')(app);


module.exports = app;