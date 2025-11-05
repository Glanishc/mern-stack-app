const express = require('express');
app.use(cors({
    origin: [
        'https://mern-frontend-app.azurewebsites.net',
        'http://localhost:3000',
        'http://localhost:5173'
    ],
    credentials: true
}));

app.use(express.json());
const { Register, Login, updateAttendance } = require('../Controllers/userCtrl');

const userRouter = express.Router();

userRouter.post('/', Register);
userRouter.post('/login', Login);
userRouter.post('/update-attending', updateAttendance); 

module.exports = userRouter;
