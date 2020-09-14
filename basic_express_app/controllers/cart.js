


module.exports.show = (req, res, next) => {
    
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: "Cart"
    })
}

module.exports.checkout = (req, res, next) => {
    
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: "Checkout"
    })
}
