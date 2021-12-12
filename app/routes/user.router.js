const {Router} = require('express');
const {getAllUser, postUser} = require('../controllers');



const userRouter = Router();
module.exports = userRouter;

userRouter.get('/users',  getAllUser);
userRouter.post('/users', postUser);