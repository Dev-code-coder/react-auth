const express = require('express');
const router = express.Router()

const setTestController = require('../modules/controllers/userController/route')

setTestController(router)

module.exports = router