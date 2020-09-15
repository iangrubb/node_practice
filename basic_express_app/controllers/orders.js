


module.exports.index = (req, res, next) => {
    
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: "Orders"
    })
}