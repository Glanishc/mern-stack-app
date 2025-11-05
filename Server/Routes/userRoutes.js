const express = require('express');

app.use(express.json());
const { Register, Login, updateAttendance } = require('../Controllers/userCtrl');

const userRouter = express.Router();

userRouter.post('/', Register);
userRouter.post('/login', Login);
userRouter.post('/update-attending', updateAttendance); 

module.exports = userRouter;
