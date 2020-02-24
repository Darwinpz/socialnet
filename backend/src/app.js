const express = require("express");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

const cors = require("cors");
const morgan = require("morgan");

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

app.use(cors({origin:['http://localhost:4000','http://localhost:3000'],methods:['GET','POST','PUT','DELETE'],credentials:true}))

app.use(express.json());
app.use(morgan('dev'));


//rutas
require('./routes/rutas')(app);




module.exports = app;