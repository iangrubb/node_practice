const express = require('express')

const router = express.Router()

const productController = require('./controllers/products')

const siteController = require('./controllers/site') 




router.get('/admin/add-product', productController.new)

router.post('/admin/product', productController.create)

router.get('/', productController.index)


exports.detectRoutes = (app) => {

    app.use(router)
    app.use(siteController.failToFind)

}