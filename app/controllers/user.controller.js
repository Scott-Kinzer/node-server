const userService = require('../services/user.service');

module.exports = {
    getAllUser: (req, res) => {
        console.log("User get");   
        
        res.end(JSON.stringify(userService.findUsersAll()));
    },

    postUser: (req, res) => {
        userService.putUser(req.body);
        res.end("Add user");
    }
}