
const Product = require('../models/products')



module.exports.index = (req, res, next) => {
    Product.all(products => {
        res.render('shop/products', {
            products,
            pageTitle: 'Shop',
            path: '/products'
        })
    })
}

module.exports.show = (req, res, next) => {
    res.render('shop/product-details', {
        path: false,
        pageTitle: "Product Details",
    })
}



module.exports.new = (req, res, next) => {
    res.render('admin/add-product', {
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

module.exports.edit = (req, res, next) => {
    res.render('admin/edit-product', {
        path: false,
        pageTitle: "Edit Product",
    })
}

module.exports.adminIndex = (req, res, next) => {
    res.render('admin/products', {
        path: "/admin/products",
        pageTitle: "Products"
    })
}