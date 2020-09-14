
const Product = require('../models/products')

module.exports.index = (req, res, next) => {
    Product.all(products => {
        res.render('shop', {
            products,
            pageTitle: 'Shop',
            path: '/'
        })
    })
}

module.exports.new = (req, res, next) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: '/admin/add-product'
    })
}

module.exports.create = (req, res, next) => {
    const { title } = req.body
    const product = new Product(title)
    product.save()
    res.redirect('/')
}