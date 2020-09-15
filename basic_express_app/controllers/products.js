
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
    const id = req.params.id
    Product.find(id, product => {
        res.render('shop/product-details', {
            product: product,
            path: false,
            pageTitle: "Product Details",
        })
    })
}



module.exports.new = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: "Add Product",
        path: '/admin/add-product'
    })
}

module.exports.create = (req, res, next) => {
    const product = new Product(req.body)
    product.save()
    res.redirect('/')
}

module.exports.edit = (req, res, next) => {
    const id = req.params.id
    Product.find(id, product => {
        res.render('admin/edit-product', {
            product: product,
            path: false,
            pageTitle: "Edit Product",
        })
    })
}

module.exports.update = (req, res, next) => {
    const id = req.params.id

    const product = new Product({ ...req.body, id})
    product.save()

    res.redirect('/admin/products')
}

module.exports.delete = (req, res, next) => {

    Product.delete(req.params.id)
    res.redirect('/admin/products')
}

module.exports.adminIndex = (req, res, next) => {
    Product.all(products => {
        res.render('admin/products', {
            products,
            path: "/admin/products",
            pageTitle: "Products"
        })
    })
}