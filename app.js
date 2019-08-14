// Cargar modulos y crear nueva aplicacion
var express = require("express"); 
var cors = require('cors');
var db = require('../happy/db/db');
var app = express();
app.use(cors());
 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
 
//GetAll
//Ejemplo: GET http://localhost:5000/user
app.get('/user', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: db
    })
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});