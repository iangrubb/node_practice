
const Cart = require('../models/cart')

const Product = require('../models/products')

module.exports.show = (req, res, next) => {
    Cart.all(cart => {

        Product.all(products => {
            
            const displayProducts = 
            cart.products.map(cProduct => {
                const lookup = products.find(p => p.id === cProduct.id )
                return {...cProduct, ...lookup}
            })

            res.render('shop/cart', {
                products: displayProducts,
                path: '/cart',
                pageTitle: "Cart"
            })
        })
    })
}

module.exports.addToCart = (req, res, next) => {
    const id = req.body.id
    Cart.addProduct(id)
    res.redirect('/cart')
}

module.exports.deleteItem = (req, res, next) => {
    const id = req.params.id
    Cart.removeProduct(id, () => res.redirect('/cart'))
}



module.exports.checkout = (req, res, next) => {
    
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: "Checkout"
    })
}
