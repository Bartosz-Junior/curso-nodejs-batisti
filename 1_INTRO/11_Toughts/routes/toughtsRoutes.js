const express = require('express')
const Tought = require('../models/Tought')
const router = express.Router()
const ToughtController = require('../controllers/ToughtsController')
//Controller

router.get('/', ToughtController.showToughts)

module.exports = router
