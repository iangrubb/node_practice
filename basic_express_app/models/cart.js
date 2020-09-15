const fs = require('fs')
const { makeAbsolutePath } = require('../utils/path')

const filePath = makeAbsolutePath('data','cart.json')


module.exports = class Cart {

    static all(callback) {
        fs.readFile(filePath, (error, content) => {
            if (error) {
                callback(null)
            } else {
                callback(JSON.parse(content))
            }
        })
    }

    static addProduct(id) {

        fs.readFile(filePath, (error, content) => {
            let cart = {products: []}
            if (!error) {
                cart = JSON.parse(content)
            }

            const existingProduct = cart.products.find(product => product.id === id)
            
            if (existingProduct) {
                const updatedProduct = {...existingProduct, quantity: existingProduct.quantity + 1}
                cart.products = cart.products.map(product => {
                    return product.id === id ? updatedProduct : product
                })
            } else {
                cart.products = [...cart.products, {id: id, quantity: 1}]
            }

            fs.writeFile(filePath, JSON.stringify(cart), console.log)

        })

    }

    static removeProduct(id, callback) {

        fs.readFile(filePath, (error, content) => {
            let cart = {products: []}
            if (!error) {
                cart = JSON.parse(content)
            }
            
            cart.products = cart.products.filter(product => product.id !== id)

            fs.writeFile(filePath, JSON.stringify(cart), console.log)


            callback(id)
        })

    }

    


}