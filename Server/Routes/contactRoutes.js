const express = require('express')
const { submitMessage } = require('../Controllers/contactCtrl')

const contactRouter = express.Router()

contactRouter.post('/',submitMessage)

module.exports = contactRouter;