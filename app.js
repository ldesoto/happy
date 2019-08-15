var express = require("express"); 
var cors = require('cors');
var app = express();
const user = require('./api/controllers/UserController');


//Settins
var port = process.env.PORT || 5000;


//Middlewares
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//routes


//GetAll
//Ejemplo: GET http://localhost:5000/user
app.get('/user', user.getAllUsers);
app.get('/user/:id', user.getUser);
app.post('/user/add', user.addUser);


app.listen(port, () => {
  console.log('server running on port', port);
});