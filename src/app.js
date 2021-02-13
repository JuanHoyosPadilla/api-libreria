require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//conexion a base de dato
require('./database');

//configuracion del puerto
app.set('port', process.env.PORT || 4000);

//otras confiuraciones
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//Configuracion de las rutas

//ruta libros
app.use('/libros', require('./routes/Libros.routes'));
app.use('/usuario', require('./routes/Usuario.routes'));

module.exports = app;