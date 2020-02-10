const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const routes = require("./routes/rutas");

const app = express();

//configuracion
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//rutas
app.use('/api',routes);

module.exports = app;