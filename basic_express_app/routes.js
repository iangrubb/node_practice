const express = require('express')

const router = express.Router()

const productController = require('./controllers/products')
const cartController = require('./controllers/cart')
const siteController = require('./controllers/site') 






router.get('/', siteController.landing)

router.get('/products', productController.index)

router.get('/products/details', productController.show)

router.get('/cart', cartController.show)

router.get('/checkout', cartController.checkout)




router.get('/admin/add-product', productController.new)

router.get('/admin/edit-product', productController.edit)

router.get('/admin/products', productController.adminIndex)

router.post('/admin/product', productController.create)




exports.detectRoutes = (app) => {

    app.use(router)
    app.use(siteController.failToFind)

}