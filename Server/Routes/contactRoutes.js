const express = require('express')

app.use(express.json());
const { submitMessage } = require('../Controllers/contactCtrl')

const contactRouter = express.Router()

contactRouter.post('/',submitMessage)

module.exports = contactRouter;
