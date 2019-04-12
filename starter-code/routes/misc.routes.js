const express = require('express')
const router = express.Router()
const miscController = require('../controllers/misc.controller')

router.get('/',miscController.main)

module.exports = router;