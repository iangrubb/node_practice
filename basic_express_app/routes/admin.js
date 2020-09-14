const express = require('express')

const router = express.Router()

const productController = require('../controllers/products')



router.get('/add-product', productController.new)

router.post('/product', productController.create)

module.exports.adminRoutes = router
