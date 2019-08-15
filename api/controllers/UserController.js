var pool = require("../../db/db");
const QUERY_GET_ALL_USERS = 'SELECT * FROM usuario';
const QUERY_GET_USER_BY_ID = 'SELECT * FROM usuario where ID_USUARIO = ?';

class UsersController{
    async getAllUsers(req, res) {
        const user =  await pool.query(QUERY_GET_ALL_USERS);
        return res.status(200).send({
          success: 'true',
          message: 'User retrieved successfully',
          user,
        });
      }
      //cuando cambie el idioma de la base de datos 
      //todo: Refactorizar metodo. 
      async getUser(req, res) {
        console.log(req.params.id);
        const {id } = req.params;
        try {
            const user = await pool.query(QUERY_GET_USER_BY_ID, [id]);
            console.log(user[0].ID_USUARIO);
          if (user[0].ID_USUARIO == id) {
            return res.status(200).send({
              success: 'true',
              message: 'User retrieved successfully',
              user,
            });
          }   
        } catch (error) {
            return res.status(404).send({
                success: 'false',
                message: 'User does not exist',
              });
            
        }
        
        
       
      }
      //NOMBRE, NOMBRE_USUARIO, CLAVE, ID_ROL)
      addUser(req, res) {
        if (!req.body.name) {
          return res.status(400).send({
            success: 'false',
            message: 'name is required',
          });
        } else if (!req.body.username) {
          return res.status(400).send({
            success: 'false',
            message: 'username is required',
          });
        }else if(!req.body.password){
            return res.status(400).send({
                success: 'false',
                message: 'password is requered',
            });
        }else if (!req.body.rol){
            return res.status(400).send({
                success: 'false',
                message: 'rol is requered',
            });
        }
        const user = {
          name: req.body.name,
          username: req.body.username,
          password: req.body.password,
          rol: req.body.rol,
        };
        db.push(user);
        return res.status(201).send({
          success: 'true',
          message: 'user added successfully',
          todo,
        });
      }
}
const userController = new UsersController();
module.exports = userController;
