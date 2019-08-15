var db = require("../../db/db");

class UsersController{
    getAllUsers(req, res) {
        return res.status(200).send({
          success: 'true',
          message: 'User retrieved successfully',
          user: db,
        });
      }
      getUser(req, res) {
        const id = parseInt(req.params.id, 10);
        db.map((user) => {
          if (user.id === id) {
            return res.status(200).send({
              success: 'true',
              message: 'User retrieved successfully',
              user,
            });
          }
        });
        return res.status(404).send({
          success: 'false',
          message: 'User does not exist',
        });
      }
}
const userController = new UsersController();
module.exports = userController;
