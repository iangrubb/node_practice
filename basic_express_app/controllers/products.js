
const products = []

module.exports.index = (req, res, next) => {
    res.render('shop', {
        products,
        pageTitle: 'Shop',
        path: '/'
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
    products.push({ title })
    res.redirect('/')
}

module.exports.products = products