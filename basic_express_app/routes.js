const express = require('express')

const router = express.Router()

const productController = require('./controllers/products')
const cartController = require('./controllers/cart')
const siteController = require('./controllers/site') 
const orderController = require('./controllers/orders')
const { render } = require('ejs')






router.get('/', siteController.landing)

router.get('/products', productController.index)

router.get('/products/:id', productController.show)

router.get('/cart', cartController.show)

router.post('/add-to-cart', cartController.addToCart)

router.post('/cart-item-delete/:id', cartController.deleteItem)

router.get('/checkout', cartController.checkout)

router.get('/orders', orderController.index)


router.get('/admin/add-product', productController.new)

router.get('/admin/products/edit/:id', productController.edit)

router.get('/admin/products', productController.adminIndex)

router.post('/admin/product', productController.create)

router.post('/admin/products/delete/:id', productController.delete)

router.post('/admin/product/:id', productController.update)




exports.detectRoutes = (app) => {

    app.use(router)
    app.use(siteController.failToFind)

}