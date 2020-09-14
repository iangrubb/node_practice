const express = require('express')

const router = express.Router()

const { index } = require('../controllers/products')

router.get('/', index)

module.exports = router