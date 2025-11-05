const express = require('express')
app.use(cors({
    origin: [
        'https://mern-frontend-app.azurewebsites.net',
        'http://localhost:3000',
        'http://localhost:5173'
    ],
    credentials: true
}));

app.use(express.json());
const { submitMessage } = require('../Controllers/contactCtrl')

const contactRouter = express.Router()

contactRouter.post('/',submitMessage)

module.exports = contactRouter;
